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
import { Button } from "@/components/ui/button"
import OrderSuccessAnimation from "@/components/OrderSuccess"

const steps = ["Billing", "Shipping", "Shipping Method", "Payment", "Confirmation"]

export default function CheckoutPage() {
  const { state } = useCart()

  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState({
    billing: {},
    shippingMethod: "",
    paymentMethod: "",
  })
  const { state: cartState } = useCart()

  //  eslint-disable-next-line
  const handleStepComplete = (stepData: any) => {
    setFormData((prev) => ({ ...prev, ...stepData }))
    setCurrentStep((prev) => prev + 1)
  }

  // const handleStepBack = () => {
  //   setCurrentStep((prev) => prev - 1)
  // }

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return <BillingForm onComplete={handleStepComplete} />
      case 1:
        return <ShippingMethod onComplete={handleStepComplete} />
      case 2:
        return <PaymentMethod onComplete={handleStepComplete} />
      case 3:
        return <OrderConfirmation onComplete={handleStepComplete} orderHandler={orderHandlerFunc} formData={formData} cartItems={cartState.items} />
      case 4:
        return <OrderSuccessAnimation />

      default:
        return null
    }
  }

  console.log("all steps done")

  const orderHandlerFunc = async () => {
    // console.log("=======>>>", state.items, state.total, formData)

    const response = await fetch("http://localhost:3000/api/processOrder", {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },

      body: JSON.stringify({
        formData,
        items: state.items,
        total: state.total
      })

    })

    console.log(response.ok, "HOGAYAAAAA")
    console.log(response)
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


const OrderComplete = () => {
  return (
    <>
      <div>

      </div>
    </>
  )
}