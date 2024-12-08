import Image from "next/image";

export default function FeaturedCard({image}: {image:string}) {
    return (
        <div className="w-[328px] h-[606px] flex flex-col justify-center items-center">

            {/* hero image */}
            <Image src={`/images/featuredProducts/${image}`} alt="product" height={300} width={300} className="w-full h-[348px] object-cover" />


            {/* Details */}
            <div className="pl-[20px] w-full flex flex-col justify-center items-start">

                {/* tabs */}
                <div className="mt-5 flex justify-center items-center gap-2">
                    <p className="font-montserrat text-sm text-[#8EC2F2]">Google</p>
                    <p className="font-montserrat text-sm text-[#737373]">Trending</p>
                    <p className="font-montserrat text-sm text-[#737373]">New</p>
                </div>

                <h1 className="w-[247px] text-xl font-montserrat text-[#252B42] mt-2">Loudest à la Madison #1
                    (L&apos;integral)</h1>

                <p className="w-[280px] text-sm font-montserrat text-[#737373] mt-2"> We focus on ergonomics and meeting
                    you where you work. It&apos;s only a
                    keystroke away.
                </p>


                {/* date and num of comments */}
                <div className="mt-3 w-full flex justify-between items-center">
                    <div className="flex gap-1">
                        <Image src={"/images/featuredProducts/calender.svg"} alt="author" height={20} width={20} />
                        <p className="font-montserrat text-xs text-[#737373]">22 April 2021</p>
                    </div>

                    <div className="flex gap-1">
                        <Image src={"/images/featuredProducts/chart.svg"} alt="author" height={20} width={20} />
                        <p className="font-montserrat text-xs text-[#737373]">10 comments</p>
                    </div>
                </div>

                {/* learn more */}
                <h1 className="mt-4 font-montserrat text-sm font-bold text-[#737373]">Learn More <span className="font-normal text-[#23A6F0] ">&gt;</span></h1>


            </div>
        </div>
    )
}
