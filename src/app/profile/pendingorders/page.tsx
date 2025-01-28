import { Clock } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const pendingOrders = [
  {
    id: "#PO12345",
    date: "2024-01-28",
    items: 3,
    total: 299.99,
    status: "Processing",
  },
  {
    id: "#PO12346",
    date: "2024-01-27",
    items: 1,
    total: 199.99,
    status: "Awaiting Payment",
  },
  {
    id: "#PO12347",
    date: "2024-01-26",
    items: 2,
    total: 99.99,
    status: "Processing",
  },
]

export default function PendingOrdersPage() {
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
          {pendingOrders.map((order) => (
            <TableRow key={order.id}>
              <TableCell className="font-medium">{order.id}</TableCell>
              <TableCell>{order.date}</TableCell>
              <TableCell>{order.items}</TableCell>
              <TableCell>${order.total.toFixed(2)}</TableCell>
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

