'use client';

import { motion } from "framer-motion"
import { Button } from '@/components/ui/button'
import { useRouter } from "next/navigation"
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Loader from '@/components/Loader';

export default function SuccessPage() {
    const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');
     //  eslint-disable-next-line
    const [orderDetails, setOrderDetails] = useState<any>(null);
    const searchParams = useSearchParams();


    const router = useRouter()

    useEffect(() => {
        const verifyPayment = async () => {
            const sessionId = searchParams.get('session_id');
            const orderId = localStorage.getItem('pendingOrderId');

            console.log(sessionId, orderId)

            if (!sessionId || !orderId) {
                setStatus('error');
                return;
            }

            try {
                const response = await fetch('/api/verifyPayment', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        sessionId,
                        orderId,
                    }),
                });

                if (!response.ok) {
                    throw new Error('Payment verification failed');
                }

                const data = await response.json();
                setOrderDetails(data.order);
                setStatus('success');

                console.log(data.order)

                // Clear the pending order ID
                localStorage.removeItem('pendingOrderId');

            } catch (error) {
                console.error('Error verifying payment:', error);
                setStatus('error');
            }
        };

        verifyPayment();
    }, [searchParams]);

    if (status === 'loading') {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <Loader />
            </div>
        );
    }

    if (status === 'error') {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-red-600">Something went wrong</h1>
                    <p className="mt-2">We couldn&apos;t verify your payment. Please contact support.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-3xl mx-auto px-4">
                <div className="bg-white rounded-lg shadow p-6">
                    {/* <div className="text-center mb-8"> */}
                        {/* <h1 className="text-3xl font-bold text-green-600">Order Successful!</h1> */}
                        {/* <p className="mt-2 text-gray-600">Thank you for your purchase</p> */}
                    {/* </div> */}

                    {orderDetails && (
                        <div className="space-y-6">

                            <div className="flex flex-col items-center justify-center min-h-[400px] bg-gradient-to-r from-green-400 to-blue-500 rounded-lg p-8 text-white">
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{
                                        type: "spring",
                                        stiffness: 260,
                                        damping: 20,
                                    }}
                                    className="text-6xl mb-6"
                                >
                                    🎉
                                </motion.div>

                                <motion.h2
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                    className="text-3xl font-bold mb-4 text-center"
                                >
                                    Order Placed Successfully!
                                </motion.h2>

                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.4 }}
                                    className="text-xl mb-6 text-center"
                                >
                                    Thank you for your purchase 🛍️
                                </motion.p>

                                <div className="flex justify-center space-x-4">
                                    {["✨", "🌟", "💫"].map((emoji, index) => (
                                        <motion.span
                                            key={index}
                                            initial={{ opacity: 0, scale: 0 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{
                                                delay: 0.6 + index * 0.1,
                                                type: "spring",
                                                stiffness: 300,
                                                damping: 10,
                                            }}
                                            className="text-4xl"
                                        >
                                            {emoji}
                                        </motion.span>
                                    ))}
                                </div>

                                <svg width="0" height="0">
                                    <filter id="glow">
                                        <feGaussianBlur stdDeviation="3.5" result="coloredBlur" />
                                        <feMerge>
                                            <feMergeNode in="coloredBlur" />
                                            <feMergeNode in="SourceGraphic" />
                                        </feMerge>
                                    </filter>
                                </svg>

                                <motion.div
                                    initial={{ scale: 0, rotate: 180 }}
                                    animate={{ scale: 1, rotate: 0 }}
                                    transition={{
                                        delay: 0.8,
                                        type: "spring",
                                        stiffness: 260,
                                        damping: 20,
                                    }}
                                    style={{ filter: "url(#glow)" }}
                                    className="mt-8"
                                >
                                    <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="50" cy="50" r="45" stroke="white" strokeWidth="5" />
                                        <path d="M30 50L45 65L70 40" stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </motion.div>


                            </div>
                            <div>
                                <h2 className="text-xl font-semibold">Order Details</h2>
                                <p className="text-gray-600">Order ID: {orderDetails._id}</p>
                                {/* Add more order details as needed */}
                            </div>

                            {/* <div> */}
                            {/* <h2 className="text-xl font-semibold">Shipping Information</h2> */}
                            {/* Add shipping details */}
                            {/* </div> */}

                            {/* <div> */}
                            {/* <h2 className="text-xl font-semibold">Items Ordered</h2> */}
                            {/* Add order items list */}
                            {/* </div> */}

                            <div className="mt-8 flex justify-center gap-4">
                                <Button onClick={() => router.push("/profile/orders")} variant={"blueVariant"} className="w-40">View Orders</Button>
                                <Button onClick={() => router.push("/shop")} variant={"blueVariant"} className="w-40">Continue Shopping</Button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}