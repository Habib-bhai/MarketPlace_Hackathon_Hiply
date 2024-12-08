import Image from "next/image";

export default function Winter() {
    return (
        <div className="w-screen mb-20 ">
            <div className="w-full flex justify-evenly items-center flex-wrap">

                {/* hero image */}
                <Image src={"/images/winterClothesMain.png"} alt="banner" height={774} width={725} className="w-[400px] h-[400px]  lg:w-[725px] lg:h-[774px] object-cover mt-10 lg:mt-0 " />


                <div className=" font-montserrat text-white flex flex-col justify-center items-start">

                        {/* details */}
                    <p className="mt-10 md:mt-0 text-xl lg:mb-10 text-[#bdbdbd] font-bold">SUMMER 2020</p>

                    <h1 className="text-black font-bold text-3xl lg:text-[58px] md:w-[509px] leading-[80px]  lg:mb-10">Part of the Neural 
                    Universe</h1>
                    <p className=" text-sm md:text-xl w-[350px] md:w-[376px] mb-7 text-[#737373] font-medium">We know how large objects will act, 
                    but things on a small scale.</p>

                        {/* buttons */}
                    <div className="mb-10 md:mb-0 w-[339px] flex justify-between items-center">
                        
                        <button className="w-[156px] h-[62px] rounded-md bg-[#2DC071]">BUY NOW</button>
                        <button className="w-[156px] h-[62px] bg-white rounded-md border-[1px] border-[#2DC071] text-[#2DC071]">READ MORE</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
