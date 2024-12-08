import Image from "next/image";

export default function Products2({image}:{image:string}) {
  return (
    <div className="w-[240px] h-[442px] flex flex-col justify-center items-center">
          <Image src={`/images/bestSellingProducts/${image}`} alt="product" height={100} width={100} className="w-full h-[280px] object-cover"/>  

          <h1 className="font-montserrat font-bold text-sm mt-[20px] mb-[10px]">Graphic Design</h1>
            <p className="font-montserrat font-bold text-sm mb-[10px] text-[#737373]">English Department</p>

            <div className="flex mb-[10px] gap-2">
                <p className="text-sm font-bold font-montserrat text-[#bdbdbd]">$16.48</p>
                <p className="text-sm font-bold font-montserrat text-[#23856D]">$6.48</p>

            </div>

    </div>
  )
}
