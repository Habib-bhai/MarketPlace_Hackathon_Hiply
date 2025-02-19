import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken"
import { client } from "@/sanity/lib/client";
export const POST = async (req: NextRequest) => {
    const token  = req.cookies.get("token")?.value || ""
    if(!token) {
        return {message: "Not Authenticated", status: 401}
    }
    const verifiedDetails = jwt.verify(token, String(process.env.JWT_SECRET)) as jwt.JwtPayload

    const query = `
        *[_type == "orders" && customer._ref == "ZiSN3Yx6kdpcG7J5eiJ72m"]{
            _id,
            _createdAt,
            customer,
            total,
            products[]{
        _key,
        product->{
            _id,
            name
        },
        quantity,
        size,
        _type
    },
    status
        }
    `

    const data = await client.fetch(query, {userId: verifiedDetails._id})

    console.log(data)

    return NextResponse.json(data,{status: 200})

}