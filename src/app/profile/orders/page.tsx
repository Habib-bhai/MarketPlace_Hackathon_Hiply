"use client"
import Loader from "@/components/Loader"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
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



export default function OrdersPage() {
  const [Data, setData] = useState<Orders[]>([])
  const orderData = async (query: string) => {
    const response = await client.fetch(query)
    setData(response)
  }

  const { isLoading } = useSWR(Query, orderData, { refreshInterval: 60000 })

  if (isLoading) return <Loader />;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Orders</h1>
        <p className="text-muted-foreground">View and manage your orders.</p>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Order ID</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Items</TableHead>
            <TableHead className="text-right">Total</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Data.map((order: Orders) => (
            <TableRow key={order._id}>
              <TableCell className="font-medium">{order._id}</TableCell>
              <TableCell>{new Date(order._createdAt).toLocaleDateString()}</TableCell>
              <TableCell>{order.status}</TableCell>
              <TableCell>{order?.products?.reduce((acc, product) => acc + (product.quantity || 0), 0)}</TableCell>
              <TableCell className="text-right">${order.total}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

