"use client"
import {useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { client } from "@/sanity/lib/client"
import useSWR from "swr"
import Loader from "@/components/Loader"




const Query = `
*[_type == "orders"] {
  _id,
  _createdAt,
  total,
    products[] {
    product->,
    quantity,
   
  },
  status

}

`

interface Orders {
  _id: string;
  _createdAt: Date;
  total: number;
  products: {
    product: {
      name: string;
      image: string;
      price: number;
    };
    quantity: number;
  }[];
  status: string;
}




export default function OrderHistoryPage() {

  const [filter, setFilter] = useState("all")
  const [Data, setdata] = useState<Orders[]>([])

  const fetchOrders = async (query: string) => {
    const SanityData: Orders[] = await client.fetch(query)
    const filteredData = SanityData.filter((order) => order.status === "delivered" || order.status === "returned")

    setdata(filteredData)

  }

  const {isLoading }= useSWR(Query, fetchOrders, { refreshInterval: 60000 })

  if(isLoading) return <Loader/>;

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Order History</h1>
          <p className="text-muted-foreground">View your past orders and their details.</p>
        </div>
        <Select value={filter} onValueChange={setFilter}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Orders</SelectItem>
            <SelectItem value="delivered">Delivered</SelectItem>
            <SelectItem value="returned">Returned</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Order ID</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Items</TableHead>
            <TableHead>Total</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Data.map((order) => (
            <TableRow key={order._id}>
              <TableCell className="font-medium">{order._id}</TableCell>
              <TableCell>{new Date(order._createdAt).toLocaleDateString()}</TableCell>
              <TableCell>{order?.products?.reduce((acc, product) => acc + (product.quantity || 0), 0)}</TableCell>
              <TableCell>${order.total}</TableCell>
              <TableCell>
                <Badge variant={order.status === "delivered" ? "default" : "destructive"}>{order.status}</Badge>
              </TableCell>
              <TableCell>
                <Button variant="outline" size="sm">
                  View Details
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

