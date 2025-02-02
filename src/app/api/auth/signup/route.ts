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


interface userEmails {
    email: string
}

export const POST = async (request: NextRequest) => {

    const query = `
    *[_type == "user"] {
    email
    }
    `

    const data = await request.json()

    const schemaResponse = await signUpSchema.safeParseAsync(data)

    if (!schemaResponse.success) return NextResponse.json(schemaResponse.error, { status: 400 })


    const hashedPassword = await bcrypt.hash(data.password, 11)

    // check if email already exists
    const emailExists = await client.fetch(query).then((data: userEmails[]) => data.find((item: userEmails) => item.email == schemaResponse.data.email))

    if (emailExists) return NextResponse.json({ message: "Email already exists" }, { status: 400 })


    // creating user and storing the user credentials
    const response = await client.create({
        _type: "user",
        name: data.name,
        phone: data.phone,
        email: data.email,
        password: hashedPassword,
        role: "user"
    })




    return NextResponse.json({ message: "User successfully created", response: response }, { status: 200 })

}