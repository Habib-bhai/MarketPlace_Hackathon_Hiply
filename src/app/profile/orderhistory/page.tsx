"use client"
import { useState } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const orderHistory = [
  {
    id: "#OH12345",
    date: "2024-01-20",
    items: 3,
    total: 299.99,
    status: "Delivered",
  },
  {
    id: "#OH12346",
    date: "2024-01-15",
    items: 1,
    total: 199.99,
    status: "Returned",
  },
  {
    id: "#OH12347",
    date: "2024-01-10",
    items: 2,
    total: 99.99,
    status: "Delivered",
  },
  {
    id: "#OH12348",
    date: "2024-01-05",
    items: 4,
    total: 399.99,
    status: "Delivered",
  },
]

export default function OrderHistoryPage() {
  const [filter, setFilter] = useState("all")

  const filteredOrders =
    filter === "all" ? orderHistory : orderHistory.filter((order) => order.status.toLowerCase() === filter)

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
          {filteredOrders.map((order) => (
            <TableRow key={order.id}>
              <TableCell className="font-medium">{order.id}</TableCell>
              <TableCell>{order.date}</TableCell>
              <TableCell>{order.items}</TableCell>
              <TableCell>${order.total.toFixed(2)}</TableCell>
              <TableCell>
                <Badge variant={order.status === "Delivered" ? "default" : "destructive"}>{order.status}</Badge>
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

