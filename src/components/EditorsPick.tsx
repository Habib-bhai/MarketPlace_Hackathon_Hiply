import Image from "next/image";
import Link from "next/link";

export default function EditorsPick() {
    return (
        <div className="w-screen mb-20">

            {/* headings */}
            <div className="w-full flex flex-col justify-center items-center">
                <h1 className="mb-4 font-montserrat font-bold text-2xl text-black">EDITOR&apos;S PICK</h1>
                <p className="font-montserrat font-medium text-sm text-[#737373]">Problems trying to resolve the conflict between </p>
            </div>

            {/* Images/categories */}
            <div className="w-full flex justify-center items-center">
                <div className=" w-[80%] lg:h-[500px] grid gap-5 grid-cols-1 lg:grid-cols-4 grid-rows-2 lg:grid-rows-7">

                    {/* Men's */}
                    <div className="col-span-1 lg:col-span-2 row-span-2 md:row-span-6 h-[500px] lg:h-full relative">
                        <Image src={"/images/editors-Pick/image.png"} alt="1" className="w-full h-full object-cover" width={500} height={500} />
                        <Link href={"/shop"}>
                        <button className="rounded-sm w-[170px] h-[48px] bg-white text-base font-montserrat font-bold absolute bottom-5 left-5">MEN</button>
                        </Link>
                    </div>

                    {/* Women's  */}
                    <div className="col-span-1 row-span-2 md:row-span-6 h-[500px] lg:h-full relative">
                        <Image src={"/images/editors-Pick/image1.png"} alt="1" className="w-full h-full object-cover" width={100} height={100} sizes={"100vw"} />
                        <Link href={"/shop"}>
                        <button className="rounded-sm w-[170px] h-[48px] bg-white text-base font-montserrat font-bold absolute bottom-5 left-5">WOMEN</button>
                        </Link>
                    </div>

                    {/* Accessories and Kids */}
                    <div className="h-full w-full col-span-1 row-span-2 md:row-span-7 ">

                        {/* one */}
                        <div className="mb-3 col-span-1 row-span-1 md:row-span-3 h-[41%] relative">
                            
                            <Image src={"/images/editors-Pick/image2.png"} alt="1" className="w-full h-full object-cover" width={100} height={100} sizes={"100vw"} />

                            <Link href={"/shop"}>
                            <button className="rounded-sm w-[170px] h-[48px] bg-white text-base font-montserrat font-bold absolute bottom-5 left-5">ACCESSORIES</button>
                            </Link>
                        </div>

                        {/* two */}
                        <div className="col-span-1 row-span-1 md:row-span-3 h-[41%] relative">
                            
                            <Image src={"/images/editors-Pick/image3.png"} alt="1" className="w-full h-full object-cover" width={100} height={100} sizes={"100vw"} />
                            <Link href={"/shop"}>
                            <button className="rounded-sm w-[170px] h-[48px] bg-white text-base font-montserrat font-bold absolute bottom-5 left-5">ACCESSORIES</button>
                            </Link>
                        </div>

                    </div>
                </div>
            </div>


        </div>
    )
}
