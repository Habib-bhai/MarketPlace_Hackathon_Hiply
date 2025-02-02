"use client"
import Image from "next/image"
import { Iceland } from "next/font/google"
import React, { useState } from "react"
import { toast } from "sonner"
import { signUpSchema } from "@/schemas/signUpSchema"
import { useRouter } from "next/navigation"
import Link from "next/link"

const iceland = Iceland({
    subsets: ["latin"],
    weight: ["400"],
})

function SignUp() {

    const [inputValues, setinputValues] = useState({
        name: "",
        email: "",
        password: "",

    })

   const router = useRouter()

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault()
        const schemaResponse = await signUpSchema.safeParseAsync(inputValues)

        if (!schemaResponse.success) {
            console.log(schemaResponse.error)
            return toast.error(`${schemaResponse.error?.issues[0]?.message}`)
        }

        const response = await fetch("http://localhost:3000/api/auth/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(schemaResponse.data)
        })
        
       const result = await response.json()
       console.log(result)
       toast(result.message)

       if(response.ok){
        router.push("/login")
       }
    }

    return (


        <div className="w-screen h-screen flex flex-col justify-center  items-end relative bg-[#1e3841] overflow-x-hidden">
            <Image src={"/images/auth_bg.png"} alt="background Image" height={1200} width={1200} className="hidden md:block w-full md:h-full md:absolute  object-cover" />

            <form
                onSubmit={handleSubmit}
                className="border-[#617277] border-[1px] rounded-3xl w-full md:w-[400px]  md:mr-[10%] bg-[#617277]/50 backdrop-blur-xl z-20 flex justify-center items-center flex-col py-5"
            >

                {/* headings */}
                <div className="w-full text-start ml-[10%] mb-10 ">
                    <h1 className={`${iceland.className} text-5xl text-white underline underline-offset-[12px]`}>SignUP</h1>
                    <p className={`text-lg tracking-widest text-[#C9C9C9] font-thin mt-5`}>Welcome On Board With Us!</p>
                </div>

                {/* inputs */}
                <div className="w-full flex flex-col justify-center items-center gap-5">
                    <input
                        placeholder="Full Name"
                        type="text"
                        className="outline-none bg-transparent border-[#C9C9C9] border-[1px] text-white text-center focus:bg-none active:bg-none autofill:bg-transparent fill-none w-[90%] md:w-[350px] h-12 rounded-2xl"
                        onChange={(e) => setinputValues({
                            ...inputValues, name: e.target.value
                        })}
                        value={inputValues.name}
                    />
                    
                    <input
                        placeholder="Email"
                        type="email"
                        className="outline-none bg-transparent border-[#C9C9C9] border-[1px] text-white text-center focus:bg-none active:bg-none autofill:bg-transparent fill-none w-[90%] md:w-[350px] h-12 rounded-2xl"
                        onChange={(e) => setinputValues({
                            ...inputValues, email: e.target.value
                        })}
                        value={inputValues.email}
                    />

                    <input placeholder="Password"
                        type="password"
                        className="outline-none bg-transparent border-[#C9C9C9] border-[1px] text-white text-center focus:bg-none active:bg-none autofill:bg-none fill-none w-[90%] md:w-[350px] h-12 rounded-2xl "
                        onChange={(e) => setinputValues({
                            ...inputValues, password: e.target.value
                        })}
                        value={inputValues.password}
                    />
                </div>
                <button type="submit" className="w-40 h-10 mt-5 rounded-2xl bg-[#2DC071]">Sign Up</button>

                <p className="text-sm text-white mt-5">Already have an account? <Link href={"/login"} className="underline underline-offset-2">Login</Link></p>
            </form>


        </div>
    )
}

export default SignUp