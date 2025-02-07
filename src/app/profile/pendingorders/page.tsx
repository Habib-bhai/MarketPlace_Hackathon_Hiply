"use client"
import { Clock } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { client } from "@/sanity/lib/client"
import { useState } from "react"
import useSWR from "swr"


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



export default  function PendingOrdersPage() {


const [filtered, setFiltered] = useState<Orders[]>([])

const fetchOrders = async (query: string) => {
  const SanityData: Orders[] = await client.fetch(query) 
  const filtered = SanityData.filter((order) => order.status === "pending")

  setFiltered(filtered)
  
}

useSWR(Query, fetchOrders, {refreshInterval: 60000})
  // console.log(filtered)



  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Pending Orders</h1>
        <p className="text-muted-foreground">Track your orders that are currently being processed.</p>
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

          {filtered.map((order) => (
            <TableRow key={order._id}>
              <TableCell className="font-medium">{order._id}</TableCell>
              <TableCell>{new Date(order._createdAt).toLocaleDateString()}</TableCell>
              <TableCell>{order?.products?.reduce((acc, product) => acc + (product.quantity || 0), 0)}</TableCell>
              <TableCell>${order.total}</TableCell>
              <TableCell>
                <Badge variant="secondary">
                  <Clock className="mr-1 h-4 w-4" />
                  {order.status}
                </Badge>
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

