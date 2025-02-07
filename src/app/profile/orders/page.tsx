import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { client } from "@/sanity/lib/client"


const query = `
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

export const validate = 60

export default async function OrdersPage() {

const orderData = await client.fetch(query) 

  // const orders1: Orders[] = orderData.map((order: any) => (order.products.map((product: any) => product.quantity.reduce((a: number, b: number) => a + b, 0))))

// console.log(orderData, orderData[0].products)

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
          {orderData.map((order:Orders) => (
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

