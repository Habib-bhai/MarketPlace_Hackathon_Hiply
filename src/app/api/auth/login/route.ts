import { logInSchema } from "@/schemas/loginSchema";
import { NextResponse, NextRequest } from "next/server";
import { client } from "@/sanity/lib/client";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"



const query =
    `
*[_type == "user"] {
    _id,
    email,
    password
}

`

interface queryType {
    _id: string,
    email: string,
    password: string
}

export const POST = async (request: NextRequest) => {
    const data = await request.json();

    const sanityData: queryType[] = await client.fetch(query)

    const schemaResponse = await logInSchema.safeParseAsync(data)

    if (!schemaResponse.success) return NextResponse.json(schemaResponse.error);

    const user = sanityData.find((item: queryType) => item.email == data.email)
    if(!user) return NextResponse.json({message: "Invalid Email"}, {status: 400})

    const passwordComparison = await bcrypt.compare(data.password, user?.password ? user.password : "")

    if (!passwordComparison) return NextResponse.json({ message: "Invalid password" }, {status: 400})


    const token = jwt.sign({_id: user._id}, String(process.env.JWT_SECRET), {expiresIn: "2d"})
    
    
    const response = NextResponse.json({message: "login successful"})
    response.cookies.set("token", token, {
        httpOnly: true,
        maxAge: 2 * 24 * 60 * 60 
    })

    return response
}