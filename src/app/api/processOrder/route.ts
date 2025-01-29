// import jwt from "jsonwebtoken"
// import { createClient } from "next-sanity";
// import { NextResponse, type NextRequest } from "next/server";


// const client = createClient({
//     projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
//     dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
//     token: process.env.SANITY_TOKEN,
//     useCdn: false

// })

// interface Product {
//     id: string; // Sanity document ID
//     name: string;
//     price: number;
//     image: string;
//     quantity: number;
// }
// interface OrderProduct {
//     _type: "object";
//     product: {
//         _type: "reference";
//         _ref: string; // Reference to the product document ID in Sanity
//     };
//     quantity: number
// }

// interface Order {
//     customer: {
//         _type: "reference";
//         _ref: string; // Reference to the customer ID
//     };
//     products: OrderProduct[];
//     status: "pending" | "shipped" | "delivered" | "returned"; // Defined statuses
// }



// export const POST = async (req: NextRequest) => {
//     const data = await req.json()
//     const token = req.cookies.get("token")?.value || ""

//     const verifiedTokenData = jwt.verify(token, String(process.env.JWT_SECRET))

//     const query = `
//     *[_type == "user" && _id== "6Urq9lch3ZrmoyCtBzxbbb"]
//     `
//     const user = await client.fetch(query)

//     // console.log(data, verifiedTokenData)
//     const orderSchemaResponse = await client.create({
//         _type: "orders",
//         customer: {
//             _type: "reference",
//             _ref: user[0]?._id, // Ensure `user[0]._id` exists and is valid
//         },
//         products: data?.items
//             ?.filter((product: Product) => product?.id && product?.quantity) // Filter out invalid products
//             .map((product: Product): OrderProduct => ({
//                 _type: "object",
//                 product: {
//                     _type: "reference",
//                     _ref: product.id, // Ensure this is a valid Sanity product ID
//                 },
//                 quantity: product.quantity, // Ensure this is a number
//             })),
//         status: "pending",
//     });



//     console.log(orderSchemaResponse)


//     // const updatedUser = await client.patch(user[0]._id).set({
//     //     address: data.formData.billing.address,
//     //     state: data.formData.billing.state,
//     //     city: data.formData.billing.city,
//     //     zipCode: data.formData.billing.postalCode,
//     //     // orders : data.formData.items.map()

//     // }).commit()

//     // console.log(updatedUser)

//     return NextResponse.json({ data })
// }








import jwt from "jsonwebtoken"
import { createClient } from "next-sanity";
import { NextResponse, type NextRequest } from "next/server";







const generateKey = () => {
    return Math.random().toString(36).substring(2, 15) + 
           Math.random().toString(36).substring(2, 15);
};



interface product {
    id: string,
    name: string,
    price: number,
    image: string,
    quantity: number
}
const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    token: process.env.SANITY_TOKEN,
    useCdn: false,
    apiVersion: '2024-01-29'
});

export const POST = async (req: NextRequest) => {
    try {
        const data = await req.json();
        console.log('Received data:', JSON.stringify(data, null, 2));

        const token = req.cookies.get("token")?.value;
        if (!token) {
            return NextResponse.json({ error: "Authentication required" }, { status: 401 });
        }

        try {
            const verifiedToken = jwt.verify(token, String(process.env.JWT_SECRET)) as jwt.JwtPayload;
            
            // First, verify that all products exist in Sanity
            const productIds = data.formData.items.map((item: product) => item.id);
            const productsQuery = `*[_type == "products" && _id in $ids]._id`;
            const existingProducts = await client.fetch(productsQuery, { ids: productIds });

            // Check if all products exist
            const missingProducts = productIds.filter((id:string) => !existingProducts.includes(id));
            if (missingProducts.length > 0) {
                return NextResponse.json({
                    error: `Products not found: ${missingProducts.join(', ')}`,
                    status: 400
                });
            }

            // Get user
            const user = await client.fetch(
                `*[_type == "user" && _id == $userId][0]`,
                { userId: verifiedToken._id }
            );

            if (!user) {
                return NextResponse.json({ error: "User not found" }, { status: 404 });
            }

            // Create the order with validated products
            const orderData = {
                _key: generateKey(),
                _type: "orders",
                customer: {
                    _type: "reference",
                    _ref: user._id,
                },
                products: data.formData.items
                    .filter((product: product) => product.id && product.quantity > 0)
                    .map((product: product) => ({
                        _key: generateKey(),
                        _type: "object",
                        product: {
                            _type: "reference",
                            _ref: product.id,
                        },
                        quantity: product.quantity,
                    })),
                status: "pending",
            };

            // Create order
            const order = await client.create(orderData);

            // Update user with billing information
            const updateUserData = {
                address: data.formData.billing.address,
                state: data.formData.billing.state,
                city: data.formData.billing.city,
                zipCode: Number(data.formData.billing.postalCode),
                orders: [{
                    _key: generateKey(),
                    _type: "reference",
                    _ref: order._id
                }]
            };

            await client.patch(user._id).set(updateUserData).commit();

            return NextResponse.json({
                success: true,
                orderId: order._id,
                message: "Order processed successfully"
            });

        } catch (jwtError) {
            console.error('JWT verification error:', jwtError);
            return NextResponse.json({ error: "Invalid token" }, { status: 401 });
        }

    } catch (error) {
        console.error('Order processing error:', error);
        return NextResponse.json(
            { error: 'Failed to process order' },
            { status: 500 }
        );
    }
};