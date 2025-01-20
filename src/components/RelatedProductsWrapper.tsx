"use client"

import { Suspense } from "react"
import RelatedProducts from "./RelatedProducts"
import { Data } from "../../utils/Types";

export default function RelatedProductsWrapper({
  category,
  currentProductId,
  data
}: { category: string; currentProductId: string, data: Data[] }) {
  return (
    <Suspense fallback={<div>Loading related products...</div>}>
      <RelatedProducts products={data} category={category} currentProductId={currentProductId} />
    </Suspense>
  )
}

