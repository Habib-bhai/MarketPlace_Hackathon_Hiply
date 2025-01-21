"use client"

import { useState } from "react"
import { useCart } from "@/context/CartContext" 
import CheckoutSteps from "@/components/CheckoutSteps"
import BillingForm from "@/components/BillingForm"
import ShippingForm from "@/components/ShippingForm"
import ShippingMethod from "@/components/ShippingMethod"
import PaymentMethod from "@/components/PaymentMethod"
import OrderSummary from "@/components/OrderSummary"
import OrderConfirmation from "@/components/OrderConfirmation"

const steps = ["Billing", "Shipping", "Shipping Method", "Payment", "Confirmation"]

export default function CheckoutPage() {
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState({
    billing: {},
    shipping: {},
    shippingMethod: "",
    paymentMethod: "",
  })
  const { state: cartState } = useCart()

  const handleStepComplete = (stepData: any) => {
    setFormData((prev) => ({ ...prev, ...stepData }))
    setCurrentStep((prev) => prev + 1)
  }

  const handleStepBack = () => {
    setCurrentStep((prev) => prev - 1)
  }

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return <BillingForm onComplete={handleStepComplete} />
      case 1:
        return <ShippingForm onComplete={handleStepComplete} />
      case 2:
        return <ShippingMethod onComplete={handleStepComplete} />
      case 3:
        return <PaymentMethod onComplete={handleStepComplete} />
      case 4:
        return <OrderConfirmation formData={formData} cartItems={cartState.items} />
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-8">Checkout</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <CheckoutSteps steps={steps} currentStep={currentStep} />
            <div className="mt-8">{renderStep()}</div>
          </div>
          <div className="md:col-span-1">
            <OrderSummary cartItems={cartState.items} total={cartState.total} />
          </div>
        </div>
      </div>
    </div>
  )
}

