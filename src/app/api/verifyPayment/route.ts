// app/api/verify-payment/route.ts
import { NextResponse } from "next/server";
import Stripe from "stripe";
import { createClient } from "next-sanity";

const stripe = new Stripe(process.env.STRIPE_SECRET!, {
    apiVersion: "2025-01-27.acacia"
});

const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: "production",
    token: process.env.SANITY_TOKEN,
    apiVersion: "2024-02-02",
    useCdn: false,
});


export async function POST(req: Request) {
    try {
        const { sessionId, orderId } = await req.json();

        // Verify the session with Stripe
        const session = await stripe.checkout.sessions.retrieve(sessionId);

        if (session.payment_status !== 'paid') {
            return NextResponse.json(
                { error: 'Payment not completed' },
                { status: 400 }
            );
        }

        // Get the order from Sanity
        const order = await client.fetch(`*[_type == "orders" && _id == $orderId][0]`, {
            orderId
        });

        if (!order) {
            return NextResponse.json(
                { error: 'Order not found' },
                { status: 404 }
            );
        }

        const updatedOrder = await client.patch(order._id).set({ isPaid: true }).commit();

        return NextResponse.json({ order, updatedOrder });

    } catch (error) {
        console.error('Error verifying payment:', error);
        return NextResponse.json(
            { error: 'Payment verification failed' },
            { status: 500 }
        );
    }
}