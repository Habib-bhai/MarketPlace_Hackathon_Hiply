import { CartItem } from "@/context/CartContext"
import { Button } from "./ui/button"

interface OrderConfirmationProps {
  formData: {
    // eslint-disable-next-line
    billing: any
    // eslint-disable-next-line
    shippingMethod: any
    paymentMethod: string
  }
  cartItems: CartItem[],
  orderHandler: () => void,
  //  eslint-disable-next-line
  onComplete: (stepData: any) => void
}

export default function OrderConfirmation({ formData, cartItems, orderHandler, onComplete }: OrderConfirmationProps) {
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <>
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">Order Confirmation</h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">Thank you for your purchase!</p>
        </div>
        <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
          <dl className="sm:divide-y sm:divide-gray-200">
            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Billing Address</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {formData.billing.firstName} {formData.billing.lastName}
                <br />
                {formData.billing.address}
                <br />
                {formData.billing.city}, {formData.billing.state} {formData.billing.postalCode}
                <br />
                {formData.billing.country}
              </dd>
            </div>
            {/* <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Shipping Address</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {formData.shipping.firstName} {formData.shipping.lastName}
                <br />
                {formData.shipping.address}
                <br />
                {formData.shipping.city}, {formData.shipping.state} {formData.shipping.postalCode}
                <br />
                {formData.shipping.country}
              </dd>
            </div> */}
            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Shipping Method</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                {formData.shippingMethod.title} - ${formData.shippingMethod.price.toFixed(2)}
              </dd>
            </div>
            {/* <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Payment Method</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{formData.paymentMethod}</dd>
            </div> */}
            <div className="py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">Order Total</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                ${(total + formData.shippingMethod.price).toFixed(2)}
              </dd>
            </div>
          </dl>
        </div>

      </div>

      <Button
        onClick={() => {
          onComplete({})
          orderHandler()
        }}
        variant={"blueVariant"}
        className="mt-5 w-40"
      >Place Order
      </Button>
    </>
  )
}

