import jwt from "jsonwebtoken"
import { createClient } from "next-sanity";
import { NextResponse, type NextRequest } from "next/server";


const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    token: process.env.SANITY_TOKEN,
    useCdn: false

})

interface Product {
    id: string; // Sanity document ID
    name: string;
    price: number;
    image: string;
    quantity: number;
}
interface OrderProduct {
    _type: "object";
    product: {
        _type: "reference";
        _ref: string; // Reference to the product document ID in Sanity
    };
    quantity: number
}

interface Order {
    customer: {
        _type: "reference";
        _ref: string; // Reference to the customer ID
    };
    products: OrderProduct[];
    status: "pending" | "shipped" | "delivered" | "returned"; // Defined statuses
}



export const POST = async (req: NextRequest) => {
    const data = await req.json()
    const token = req.cookies.get("token")?.value || ""

    const verifiedTokenData = jwt.verify(token, String(process.env.JWT_SECRET))

    const query = `
    *[_type == "user" && _id== "6Urq9lch3ZrmoyCtBzxbbb"]
    `
    const user = await client.fetch(query)


    const orderSchemaResponse = await client.create({
        _type: "orders",
        customer: {
            _type: "reference",
            _ref: user[0]?._id, // Ensure `user[0]._id` exists and is valid
        },
        products: data?.formData?.items
            ?.filter((product: Product) => product?.id && product?.quantity) // Filter out invalid products
            .map((product: Product): OrderProduct => ({
                _type: "object",
                product: {
                    _type: "reference",
                    _ref: product.id, // Ensure this is a valid Sanity product ID
                },
                quantity: product.quantity, // Ensure this is a number
            })),
        status: "pending",
    });
    


    console.log(orderSchemaResponse)


    // const updatedUser = await client.patch(user[0]._id).set({
    //     address : data.formData.billing.address,
    //     state: data.formData.billing.state,
    //     city : data.formData.billing.city,
    //     zipCode : data.formData.billing.postalCode,
    //     orders : data.formData.items.map()

    // })

    // console.log(data.formData.billing.address)

    // console.log(data, "===>>> user", user)




    return NextResponse.json({ data })
}