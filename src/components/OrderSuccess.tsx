"use client"

import type React from "react"



const OrderSuccessAnimation: React.FC = () => {
 
  return (
    <>

      <div className="flex items-center justify-center w-full h-full">
        <div className="relative w-12 h-12">
          <div className="absolute w-12 h-12 border-4 border-gray-200 rounded-full"></div>
          <div className="absolute w-12 h-12 border-4 border-blue-500 rounded-full border-t-transparent animate-spin"></div>
        </div>
      </div>
    </>
  )
}

export default OrderSuccessAnimation

