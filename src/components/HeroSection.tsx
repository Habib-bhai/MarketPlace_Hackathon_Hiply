import Image from "next/image"
import heroImg from "../../public/images/hero-sec.jpg"
import Link from "next/link"

export default function HeroSection() {
    return (
        <div className={`mb-20 w-screen relative flex flex-col justify-center items-center `}>
            <Image loading="eager" src={heroImg} alt="hero" className="w-screen h-screen  object-cover" />

            <div className="font-montserrat text-white absolute left-[20%] flex flex-col justify-center items-start">
                <p className=" font-bold text-base mb-10">SUMMER 2020</p>
                <h1 className=" font-bold text-3xl md:text-5xl mb-7 md:mb-10">NEW COLLECTION</h1>
                <p className=" text-base md:text-xl w-[350px] md:w-[376px] mb-7 text-[#fafafa]">We know how large objects will act, 
                but things on a small scale.</p>

                <Link href={"/shop"}>
                <button className="rounded-sm w-[221px] h-[62px] bg-[#2DC071]">SHOP NOW</button>
                </Link>   
            </div>
        </div>
    )
}
