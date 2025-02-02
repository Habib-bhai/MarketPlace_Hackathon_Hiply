"use client"


import { useForm } from "react-hook-form"

interface BillingFormProps {
  //  eslint-disable-next-line
  onComplete: (data: any) => void
}

export default function BillingForm({ onComplete }: BillingFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  //  eslint-disable-next-line
  const onSubmit = (data: any) => {
    onComplete({ billing: data })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
            First name
          </label>
          <input
            type="text"
            id="firstName"
            {...register("firstName", { required: "First name is required" })}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#23a6f1] focus:border-[#23a6f1] sm:text-sm"
          />
          {errors.firstName && <p className="mt-2 text-sm text-red-600">{errors.firstName.message as string}</p>}
        </div>

        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
            Last name
          </label>
          <input
            type="text"
            id="lastName"
            {...register("lastName", { required: "Last name is required" })}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#23a6f1] focus:border-[#23a6f1] sm:text-sm"
          />
          {errors.lastName && <p className="mt-2 text-sm text-red-600">{errors.lastName.message as string}</p>}
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email address
          </label>
          <input
            type="email"
            id="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#23a6f1] focus:border-[#23a6f1] sm:text-sm"
          />
          {errors.email && <p className="mt-2 text-sm text-red-600">{errors.email.message as string}</p>}
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="address" className="block text-sm font-medium text-gray-700">
            Address
          </label>
          <input
            type="text"
            id="address"
            {...register("address", { required: "Address is required" })}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#23a6f1] focus:border-[#23a6f1] sm:text-sm"
          />
          {errors.address && <p className="mt-2 text-sm text-red-600">{errors.address.message as string}</p>}
        </div>

        <div>
          <label htmlFor="city" className="block text-sm font-medium text-gray-700">
            City
          </label>
          <input
            type="text"
            id="city"
            {...register("city", { required: "City is required" })}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#23a6f1] focus:border-[#23a6f1] sm:text-sm"
          />
          {errors.city && <p className="mt-2 text-sm text-red-600">{errors.city.message as string}</p>}
        </div>

        <div>
          <label htmlFor="country" className="block text-sm font-medium text-gray-700">
            Country
          </label>
          <select
            id="country"
            {...register("country", { required: "Country is required" })}
            className="mt-1 block w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#23a6f1] focus:border-[#23a6f1] sm:text-sm"
          >
            <option value="">Select a country</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="PK">Pakistan</option>
          </select>
          {errors.country && <p className="mt-2 text-sm text-red-600">{errors.country.message as string}</p>}
        </div>

        <div>
          <label htmlFor="state" className="block text-sm font-medium text-gray-700">
            State / Province
          </label>
          <input
            type="text"
            id="state"
            {...register("state", { required: "State is required" })}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#23a6f1] focus:border-[#23a6f1] sm:text-sm"
          />
          {errors.state && <p className="mt-2 text-sm text-red-600">{errors.state.message as string}</p>}
        </div>

        <div>
          <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700">
            Postal code
          </label>
          <input
            type="text"
            id="postalCode"
            {...register("postalCode", { required: "Postal code is required" })}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#23a6f1] focus:border-[#23a6f1] sm:text-sm"
          />
          {errors.postalCode && <p className="mt-2 text-sm text-red-600">{errors.postalCode.message as string}</p>}
        </div>
      </div>

      <div>
        <button
          type="submit"
          className="w-full bg-[#23a6f1] border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-[#5ab7ed] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#23a6f1]"
        >
          Continue to shipping
        </button>
      </div>
    </form>
  )
}

