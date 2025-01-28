import Image from "next/image"
import heroImg from "../../public/images/hero-sec.jpg"
import Link from "next/link"

export default function HeroSection() {
    return (
        <div className={` mb-28 w-screen relative flex flex-col justify-center   md:items-start items-center bg-[#03bade] md:bg-transparent py-14 md:py-0`}>
            <Image loading="eager" src={heroImg} alt="hero" className="hidden md:block w-screen h-screen md:absolute  md:object-cover md:-z-10 top-0" />

            <div className="font-montserrat text-black md:text-white w-[300px] mt-28 md:ml-[10%] z-20 flex flex-col justify-center items-start">
                <p className=" font-bold text-base mb-10">SUMMER 2020</p>
                <h1 className=" font-bold text-3xl md:text-5xl mb-7 md:mb-10">NEW COLLECTION</h1>
                <p className=" text-base md:text-xl w-full md:w-[350px] lg:w-[376px] mb-7 text-black md:text-[#fafafa]">We know how large objects will act, 
                but things on a small scale.</p>

                <Link href={"/shop"}>
                <button className="rounded-sm w-[221px] h-[62px] bg-[#2DC071]">SHOP NOW</button>
                </Link>   
            </div>
        </div>
    )
}
