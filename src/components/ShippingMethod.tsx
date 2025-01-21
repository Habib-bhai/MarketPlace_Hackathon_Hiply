"use client"

import { useState } from "react"

const shippingMethods = [
  { id: "standard", title: "Standard", turnaround: "4–10 business days", price: 5 },
  { id: "express", title: "Express", turnaround: "2–5 business days", price: 16 },
  { id: "priority", title: "Priority", turnaround: "1–3 business days", price: 26 },
]

interface ShippingMethodProps {
  onComplete: (data: any) => void
}

export default function ShippingMethod({ onComplete }: ShippingMethodProps) {
  const [selectedMethod, setSelectedMethod] = useState(shippingMethods[0].id)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const selected = shippingMethods.find((method) => method.id === selectedMethod)
    onComplete({ shippingMethod: selected })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        {shippingMethods.map((method) => (
          <div key={method.id} className="flex items-center">
            <input
              id={method.id}
              name="shippingMethod"
              type="radio"
              checked={selectedMethod === method.id}
              onChange={() => setSelectedMethod(method.id)}
              className="h-4 w-4 text-[#23a6f1] focus:ring-[#23a6f1] border-gray-300"
            />
            <label htmlFor={method.id} className="ml-3 block text-sm font-medium text-gray-700">
              <span className="flex justify-between">
                {method.title}
                <span className="text-gray-500">${method.price.toFixed(2)}</span>
              </span>
              <span className="text-gray-500">{method.turnaround}</span>
            </label>
          </div>
        ))}
      </div>

      <div>
        <button
          type="submit"
          className="w-full bg-[#23a6f1] border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-[#23a6f1] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#23a6f1]"
        >
          Continue to payment
        </button>
      </div>
    </form>
  )
}

