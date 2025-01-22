import { Data } from "../../../../utils/Types"
import { getProductData } from "../../../../utils/sanityDataImport"
import ProductDetailsDynamicPageStructure from "@/components/ProductDynamicDetails"
import RelatedProductsWrapper from "@/components/RelatedProductsWrapper"

export default async function Page({ params }: { params: { id: string } }) {

  const Data: Data[] = await getProductData()

  const filteredData: Data | undefined = Data.find((Item: Data) => Item._id === params.id)

  return (
    <>
      <ProductDetailsDynamicPageStructure SanityData={filteredData ? filteredData : { _id: "", name: "", price: 0, description: "", image: "", category: '', discountPercent: 0, new: false, colors: [], sizes: [], tags: [] }} />

    <RelatedProductsWrapper category={filteredData?.category? filteredData.category : "short"} currentProductId={filteredData?._id? filteredData._id : "" } data={Data} />
    
    </>
  )
}
