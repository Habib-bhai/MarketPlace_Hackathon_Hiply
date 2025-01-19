"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ProductCard({ image, price, id, name, category }: { image: string, price: number, id: string, name: string, category: string }) {

      const router =  useRouter()
    return (
        

            <div onClick={() => router.push(`/shop/${id}`)}  className="w-[238px] h-[615px] flex flex-col justify-center items-center">
                {/* image */}
                <div className="w-full h-[427px] flex justify-center items-center ">
                    <Image src={image} alt="image" height={500} width={500} className={"w-full h-full object-cover"} />
                </div>

                {/* product details */}
                <h1 className="font-montserrat font-bold text-base mt-[20px] mb-[10px]">{name}</h1>
                <p className="font-montserrat font-bold text-sm mb-[10px] text-[#737373]">{category}</p>

                <div className="flex mb-[10px] gap-2">
                    <p className="line-through text-sm font-bold font-montserrat text-[#bdbdbd]">${price * 1.7}</p>
                    <p className="text-sm font-bold font-montserrat text-[#23856D]">${price}</p>

                </div>

                <div className="flex justify-center items-center gap-1">
                    <div className="w-[16px] h-[16px] bg-[#23A6F0] rounded-full"></div>
                    <div className="w-[16px] h-[16px] bg-[#23856D] rounded-full"></div>
                    <div className="w-[16px] h-[16px] bg-[#E77C40] rounded-full"></div>
                    <div className="w-[16px] h-[16px] bg-[#252B42] rounded-full"></div>
                </div>

            </div>
        
    )
}
