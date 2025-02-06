import jwt from "jsonwebtoken"
import { createClient } from "next-sanity";
import { NextResponse, type NextRequest } from "next/server";

import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET!, {
    apiVersion: "2025-01-27.acacia",
});





const generateKey = () => {
    return Math.random().toString(36).substring(2, 15) +
        Math.random().toString(36).substring(2, 15);
};



interface product {
    id: string,
    name: string,
    price: number,
    image: string,
    quantity: number,
    size: string
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
      
        const { products,  formData, total } = await req.json();

      

        const token = req.cookies.get("token")?.value;
        if (!token) {
            return NextResponse.json({ error: "Authentication required" }, { status: 401 });
        }

        try {
            const verifiedToken = jwt.verify(token, String(process.env.JWT_SECRET)) as jwt.JwtPayload;

            // First, verify that all products exist in Sanity
            const productIds = formData.items.map((item: product) => item.id);
            const productsQuery = `*[_type == "products" && _id in $ids]._id`;
            const existingProducts = await client.fetch(productsQuery, { ids: productIds });

            // Check if all products exist
            const missingProducts = productIds.filter((id: string) => !existingProducts.includes(id));
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
                products: formData.items
                    .filter((product: product) => product.id && product.quantity > 0)
                    .map((product: product) => ({
                        _key: generateKey(),
                        _type: "object",
                        product: {
                            _type: "reference",
                            _ref: product.id,
                        },
                        quantity: product.quantity,
                        size: product.size
                    })),
                status: "pending",
                address: formData?.billing?.address,
                state: formData?.billing?.state,
                city: formData?.billing?.city,
                postalCode: formData?.billing?.postalCode,
                country: formData?.billing?.country,
                total: total

            };

            // Create order
            const order = await client.create(orderData);

            // Update user with billing information
            const updateUserData = {
                address: formData.billing.address,
                state: formData.billing.state,
                city: formData.billing.city,
                zipCode: Number(formData.billing.postalCode),
                orders: [{
                    _key: generateKey(),
                    _type: "reference",
                    _ref: order._id
                }]
            };

            await client.patch(user._id).set(updateUserData).commit();



            // Validate products structure
            if (!Array.isArray(products)) {
                return NextResponse.json(
                    { error: "Invalid products format" },
                    { status: 400 }
                );
            }

            // Validate individual products
            for (const product of products) {
                if (
                    !product?.name ||
                    !product?.image ||
                    typeof product?.price !== "number" ||
                    typeof product?.quantity !== "number"
                ) {
                    return NextResponse.json(
                        { error: "Invalid product structure" },
                        { status: 400 }
                    );
                }

                if (!product.image.startsWith("https://")) {
                    return NextResponse.json(
                        { error: "Image URLs must use HTTPS" },
                        { status: 400 }
                    );
                }
            }
            const session = await stripe.checkout.sessions.create({
                payment_method_types: ["card"],
                mode: "payment",
                line_items: products.map((product) => ({
                    price_data: {
                        currency: "usd",
                        product_data: {
                            name: product.name,
                            images: [product.image],
                        },
                        unit_amount: Math.round(product.price * 100),
                    },
                    quantity: product.quantity,
                })),
                success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/success`,
                cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/cancel`,
            });





            return NextResponse.json({
                success: true,
                orderId: order._id,
                message: "Order processed successfully",
                payment: session.url,
                paymentSession: session 
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