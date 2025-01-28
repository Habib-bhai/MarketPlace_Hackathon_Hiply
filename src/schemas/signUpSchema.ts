import {z} from "zod"

export const signUpSchema = z.object({
    name : z.string().min(3, {message: "Minimum 3 characters are required in a name"}),
    email: z.string().email({message: "Invalid Email"}),
    address: z.string().min(3, {message: "Minimum 3 characters are required in an address"}),
    phone: z.number().min(10, {message: "Minimum 10 characters are required in a phone number"}),
    password: z.string().min(8, {message: "Password must contain 8 characters"})
}).strict()