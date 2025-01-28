import Image from "next/image"
import { Star } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"

// Sample product data (you would typically fetch this from an API)
const popularProducts = [
  {
    id: 1,
    title: "Book Dairy",
    description: "Lorem ipsum dolor sit amet",
    price: 0.99,
    originalPrice: 1.99,
    savings: 1,
    rating: 4,
    image: "",
  },
  {
    id: 2,
    title: "Simple Headphone",
    description: "Lorem ipsum dolor sit amet",
    price: 1.8,
    originalPrice: 2.9,
    savings: 0.2,
    rating: 5,
    image: "",
  },
  {
    id: 3,
    title: "Company Watch",
    description: "Lorem ipsum dolor sit amet",
    price: 3.99,
    originalPrice: 5.99,
    savings: 2,
    rating: 5,
    image: "",
  },
  {
    id: 4,
    title: "Coffee Cup",
    description: "Lorem ipsum dolor sit amet",
    price: 0.7,
    originalPrice: 1.5,
    savings: 0.3,
    rating: 4,
    image: "",
  },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${i < rating ? "fill-primary text-primary" : "fill-muted stroke-muted-foreground"}`}
        />
      ))}
    </div>
  )
}

export default function ProfilePage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Popular Products</h1>
        <p className="text-muted-foreground">Check out our most popular products this week.</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {popularProducts.map((product) => (
          <Card key={product.id} className="overflow-hidden">
            <div className="aspect-square relative">
              <Image src={product.image || "/placeholder.svg"} alt={product.title} fill className="object-cover" />
            </div>
            <CardContent className="p-4">
              <div className="space-y-2">
                <h3 className="font-semibold">{product.title}</h3>
                <p className="text-sm text-muted-foreground">{product.description}</p>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-lg font-bold">${product.price}</span>
                    <span className="ml-2 text-sm line-through text-muted-foreground">${product.originalPrice}</span>
                  </div>
                  <StarRating rating={product.rating} />
                </div>
                <p className="text-sm text-primary">You save ${product.savings}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

