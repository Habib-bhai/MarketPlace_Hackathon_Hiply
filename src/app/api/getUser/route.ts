import {NextResponse, type NextRequest } from "next/server";
import jwt, { JwtPayload } from "jsonwebtoken"
import { client } from "@/sanity/lib/client";
export const POST = async (req: NextRequest)=> {

    const token  = req.cookies.get("token")?.value; 
    if(!token) {
        return NextResponse.json({message: "Not Authenticated"}, {status: 401})
    }

    const verifiedTokenData = jwt.verify(token, String(process.env.JWT_SECRET)) as JwtPayload

    const query = `
        *[_type == "user" && _id == $userId][0]{
            name,
            role,
            image
        }
    `

    const data = await client.fetch(query, {userId: verifiedTokenData._id})

    return NextResponse.json(data)

}