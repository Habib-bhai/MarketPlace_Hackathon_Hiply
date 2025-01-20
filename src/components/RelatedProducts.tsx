import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "./ui/card"
import { Data } from "../../utils/Types"
import { urlFor } from "@/sanity/lib/image"



interface RelatedProductsProps {
  category: string
  currentProductId: string,
  products: Data[]
}

export default function RelatedProducts({ category, currentProductId, products }: RelatedProductsProps) {

   function getRelatedProducts(category: string) {
    return products.filter((product) => product.category === category)
  }

  const relatedProducts = getRelatedProducts(category).filter((product) => product._id !== currentProductId)

  return (
    <section className="py-12">
      <h2 className="text-2xl font-bold ml-[5%] mb-6">Related Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-6">
        {relatedProducts.map((product: Data) => (
          <Card key={product._id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-4">
              <Link href={`/shop/${product._id}`}>
                <div className="aspect-square relative mb-4 overflow-hidden rounded-md">
                  <Image
                    src={urlFor(product.image).url() || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">${product.price.toFixed(2)}</p>
                <Button className="w-full">View Product</Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

