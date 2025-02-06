"use client"

import { useState } from "react"
import { useCart } from "@/context/CartContext"
import CheckoutSteps from "@/components/CheckoutSteps"
import BillingForm from "@/components/BillingForm"
import ShippingMethod from "@/components/ShippingMethod"

import OrderSummary from "@/components/OrderSummary"
import OrderConfirmation from "@/components/OrderConfirmation"
import OrderSuccessAnimation from "@/components/OrderSuccess"
import { useRouter } from "next/navigation"

const steps = ["Billing", "Shipping", "Shipping Method", "Payment", "Confirmation"]

export default function CheckoutPage() {

  const router = useRouter()
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



  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return <BillingForm onComplete={handleStepComplete} />
      case 1:
        return <ShippingMethod onComplete={handleStepComplete} />
      // case 2:
      //   return <PaymentMethod onComplete={handleStepComplete} />
      case 2:
        return <OrderConfirmation onComplete={handleStepComplete} orderHandler={orderHandlerFunc} formData={formData} cartItems={cartState.items} />
      case 3:
        return <OrderSuccessAnimation />

      default:
        return null
    }
  }

  console.log("all steps done")

  const orderHandlerFunc = async () => {
    // Restructure the data to match the expected format
    const orderData = {
      formData: {
        billing: formData.billing,
        items: state.items.map(item => ({
          id: item.id,
          quantity: item.quantity,
          name: item.name,
          price: item.price,
          image: item.image,
          size: item.size,
          stock: item.stock
        }))
      },
      total: state.total,
      products: state.items.map(item => ({
        id: item.id,
        quantity: item.quantity,
        name: item.name,
        price: item.price,
        image: item.image,
        size: item.size,
        stock: item.stock
      }))
      // [
      //   {
      //     "name": "Test Product",
      //     "image": "https://placehold.co/600x400.png",
      //     "price": 19.99,
      //     "quantity": 1
      //   }
      // ]
    };

    try {
      const response = await fetch("/api/processOrderAndPayment", {  // Remove hardcoded localhost
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(orderData)
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Order processing failed:', errorData);
        // Handle error appropriately
        return;
      }

      const result = await response.json();
      console.log('Order processed successfully:', result);
      router.push(result.payment)  
      // Handle success
    } catch (error) {
      console.error('Error processing order:', error);
      // Handle error appropriately
    }
  };


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

