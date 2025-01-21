"use client"

import { useState } from "react"
import Image from "next/image"

const paymentMethods = [
  { id: "stripe", name: "Stripe", logo: "/images/stripe.svg" },
  { id: "jazzcash", name: "JazzCash", logo: "/images/jazzcash.png" },
  { id: "easypaisa", name: "EasyPaisa", logo: "/images/Easypaisa.png" },
  { id: "paypal", name: "PayPal", logo: "/images/paypal.svg" },
]

interface PaymentMethodProps {
  onComplete: (data: {paymentMethod: string}) => void
}

export default function PaymentMethod({ onComplete }: PaymentMethodProps) {
  const [selectedMethod, setSelectedMethod] = useState(paymentMethods[0].id)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onComplete({ paymentMethod: selectedMethod })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        {paymentMethods.map((method) => (
          <div key={method.id} className="flex items-center">
            <input
              id={method.id}
              name="paymentMethod"
              type="radio"
              checked={selectedMethod === method.id}
              onChange={() => setSelectedMethod(method.id)}
              className="h-4 w-4 text-[#23a6f1] focus:ring-[#23a6f1] border-gray-300"
            />
            <label htmlFor={method.id} className="ml-3 flex items-center">
              <span className="block text-sm font-medium text-gray-700 mr-3">{method.name}</span>
              <Image src={method.logo || "/placeholder.svg"} alt={method.name} width={60} height={30} />
            </label>
          </div>
        ))}
      </div>

      <div>
        <button
          type="submit"
          className="w-full bg-[#23a6f1] border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-[#23a6f1] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#23a6f1]"
        >
          Complete order
        </button>
      </div>
    </form>
  )
}

