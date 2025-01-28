import { CartItem } from "@/context/CartContext"
import Image from "next/image"
import { Button } from "./ui/button"

interface OrderSummaryProps {
  cartItems: CartItem[]
  total: number
}

export default function OrderSummary({ cartItems, total }: OrderSummaryProps) {
  return (
    <div className="bg-gray-50 rounded-lg px-4 py-6 sm:p-6 lg:p-8">
      <h2 className="text-lg font-medium text-gray-900">Order summary</h2>

      <div className="mt-6 space-y-4">
        {cartItems.map((item) => (
          <div key={item.id} className="flex items-center justify-between">
            <div className="flex items-center">
              <Image src={item.image || "/placeholder.svg"} alt={item.name} className="w-16 h-16 object-cover rounded" height={100} width={100} />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-900">{item.name}</p>
                <p className="text-sm text-gray-500">Qty {item.quantity}</p>
              </div>
            </div>
            <p className="text-sm font-medium text-gray-900">${item.price.toFixed(2)}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 border-t border-gray-200 pt-4">
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-600">Subtotal</p>
          <p className="text-sm font-medium text-gray-900">${total.toFixed(2)}</p>
        </div>
        <div className="flex items-center justify-between mt-2">
          <p className="text-sm text-gray-600">Shipping</p>
          <p className="text-sm font-medium text-gray-900">Calculated at next step</p>
        </div>
      </div>

      <div className="mt-6 border-t border-gray-200 pt-4">
        <div className="flex items-center justify-between">
          <p className="text-base font-medium text-gray-900">Total</p>
          <p className="text-base font-medium text-gray-900">${total.toFixed(2)}</p>
        </div>
      </div>
    </div>
  )
}

