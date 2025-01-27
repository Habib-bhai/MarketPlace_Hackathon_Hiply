import { signUpSchema } from "@/schemas/signUpSchema";
import { NextResponse, type NextRequest } from "next/server";
import bcrypt from "bcrypt"
import { createClient } from "next-sanity";


const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    token: process.env.SANITY_TOKEN,
    useCdn: false
})


export const POST = async (request: NextRequest) => {

    const data = await request.json()

    const schemaResponse = await signUpSchema.safeParseAsync(data)

    if (!schemaResponse.success) return NextResponse.json(schemaResponse.error, { status: 400 })

    // const salt = await bcrypt.genSalt(11);
    const hashedPassword = await bcrypt.hash(data.password, 11)


    const response =  await client.create({
        _type: "user",
        name: data.name,
        email: data.email,
        password: hashedPassword
    })




    return NextResponse.json({ message: "User successfully created", response: response }, { status: 200 })

}