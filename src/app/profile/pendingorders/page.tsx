"use client"
import { Clock } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { client } from "@/sanity/lib/client"
import { useEffect, useState } from "react"
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



export default  function PendingOrdersPage() {

 const [Data, setData] = useState<Orders[]>([])

const [Loading, setLoading] = useState(false)

  useEffect(()=> {
    const orderData = async () => {
      setLoading(true)
      const response = await fetch("/api/getOrders", {
        method: "POST",
        credentials: "include"
      })
  
      if(!response.ok) {
        throw new Error("Failed to fetch orders")
      }
  
      const data: Orders[] = await response.json()
      const filtered =  data.filter((order) => order.status === "pending")
      setData(filtered)
      setLoading(false)
    }

    orderData()
  }, [])

  if (Loading) return <Loader />;


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

          {Data.map((order) => (
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

