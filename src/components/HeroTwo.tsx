import Image from "next/image";

export default function HeroTwo() {
    return (
        // parent
        <div className="w-screen ">

            {/* main container  */}
            <div className="px-0 md:px-[10%] bg-[#23856d] w-full h-[709px] flex flex-col md:flex-row justify-evenly items-center">

                {/* details */}
                <div className=" font-montserrat text-white flex flex-col justify-center items-start">

                    <p className="mt-10 md:mt-0 text-xl md:mb-10">SUMMER 2020</p>

                    <h1 className=" font-bold text-3xl md:text-[58px] md:w-[509px] leading-[80px]  md:mb-10">Vita Classic Product</h1>
                    <p className=" text-sm md:text-xl w-[350px] md:w-[376px] mb-7 text-[#fafafa]">We know how large objects will act,
                        but things on a small scale.</p>

                    <div className="mb-10 md:mb-0 w-[295px] flex justify-between items-center">
                        <p className="text-xl font-bold font-montserrat text-white">$16.48</p>
                        <button className="rounded-sm w-[184px] h-[62px] bg-[#2DC071]">Add to Cart</button>
                    </div>
                </div>

                {/* image */}
                <Image src={"/images/shop-hero-2-png-picture-1.png"} alt="banner image" height={400} width={400} className="w-[400px] h-[360px] md:h-[400px] object-cover"/>

            </div>

            
        </div>
    )
}
