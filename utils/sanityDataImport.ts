
import { client } from "@/sanity/lib/client";
import { Data } from "./Types";

export async function getProductData(): Promise<Data[]> {
    try {

        const query = `*[_type == "products"] | order(priority desc, _updatedAt desc) {
    _id,    
    name,
    price,
    description,
    image,
    category,
    discountPercent,
    new,
    colors,
    sizes,
    tags,
    stock,
    reviews
    
}`

        const response: Data[] = await client.fetch(query)
        if (!response) throw new Error("Failed to fetch data")

        return response
    }

    catch (error: any) {
       return error
    }
}
