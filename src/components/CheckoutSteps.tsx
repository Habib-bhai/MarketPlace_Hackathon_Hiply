import { CheckCircleIcon } from "@heroicons/react/24/solid"

interface CheckoutStepsProps {
  steps: string[]
  currentStep: number
}

export default function CheckoutSteps({ steps, currentStep }: CheckoutStepsProps) {
  return (
    <nav aria-label="Progress">
      <ol role="list" className="flex items-center">
        {steps.map((step, index) => (
          <li key={step} className={`relative ${index !== steps.length - 1 ? "pr-8 sm:pr-20" : ""}`}>
            {index < currentStep ? (
              <>
                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                  <div className="h-0.5 w-full bg-[#23a6f1]" />
                </div>
                <a
                  href="#"
                  className="relative w-8 h-8 flex items-center justify-center bg-[#23a6f1] rounded-full hover:bg-[#23a6f1]"
                >
                  <CheckCircleIcon className="w-5 h-5 text-white" aria-hidden="true" />
                  <span className="sr-only">{step}</span>
                </a>
              </>
            ) : index === currentStep ? (
              <>
                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                  <div className="h-0.5 w-full bg-gray-200" />
                </div>
                <a
                  href="#"
                  className="relative w-8 h-8 flex items-center justify-center bg-white border-2 border-[#23a6f1] rounded-full"
                  aria-current="step"
                >
                  <span className="h-2.5 w-2.5 bg-[#23a6f1] rounded-full" aria-hidden="true" />
                  <span className="sr-only">{step}</span>
                </a>
              </>
            ) : (
              <>
                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                  <div className="h-0.5 w-full bg-gray-200" />
                </div>
                <a
                  href="#"
                  className="group relative w-8 h-8 flex items-center justify-center bg-white border-2 border-gray-300 rounded-full hover:border-gray-400"
                >
                  <span
                    className="h-2.5 w-2.5 bg-transparent rounded-full group-hover:bg-gray-300"
                    aria-hidden="true"
                  />
                  <span className="sr-only">{step}</span>
                </a>
              </>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}

