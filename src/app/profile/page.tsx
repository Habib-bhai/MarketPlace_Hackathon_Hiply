import Image from "next/image"
import { Star } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { client } from "@/sanity/lib/client"
import { urlFor } from "@/sanity/lib/image"
import Link from "next/link"


const query = `
*[_type == "products" && reviews >= 100] {
_id,
name,
description,
price,
reviews,
image
}

`


interface SanityData {
  _id: string,
  name: string,
  description: string,
  price: number,
  reviews: number,
  image: string
}

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

export default async function ProfilePage() {

  const popularProducts: SanityData[] = await client.fetch(query)
  // console.log(data)

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Popular Products</h1>
        <p className="text-muted-foreground">Check out our most popular products this week.</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {popularProducts.map((product) => (
          <Link href={`/shop/${product._id}`} key={product._id}>
            <Card key={product._id} className="overflow-hidden">
              <div className="aspect-square relative">
                <Image src={urlFor(product.image).url()} alt={product.name} fill className="object-cover" />
              </div>
              <CardContent className="p-4">
                <div className="space-y-2">
                  <h3 className="font-semibold">{product.name}</h3>
                  <p className="text-sm text-muted-foreground">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-lg font-bold">${product.price}</span>
                      <span className="ml-2 text-sm line-through text-muted-foreground">${product.price * 1.5}</span>
                    </div>
                    <StarRating rating={product.reviews} />
                  </div>
                  <p className="text-sm text-primary">You save ${(product.price * 1.5) - product.price}</p>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}

