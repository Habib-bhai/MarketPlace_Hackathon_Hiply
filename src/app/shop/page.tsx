import Image from 'next/image'
import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Metadata } from 'next';


export const metadata: Metadata = {
  title: "Hackathon Ui - Shop",
 
};


export default function page() {
    return (
        <>

            <div className='w-screen flex flex-col justify-center items-center'>

                {/* page name and Route */}
                <div className='mt-10 mb-10 w-full flex justify-center items-center'>
                    <div className='w-[80%] flex justify-between  items-center'>
                        <h1 className='font-montserrat text-2xl text-black font-bold'>Shop</h1>

                        <div className='text-[#bdbdbd] font-montserrat font-bold flex justify-center items-center gap-1'>
                            <p className='text-black'>Home</p>
                            &gt;
                            <p className=''>Shop</p>
                        </div>
                    </div>

                </div>

                {/* Categories */}
                <div className='flex gap-[15px] justify-center items-center flex-wrap'>
                    {/*category container  */}
                    <div className='relative w-[205px] h-[223px] flex justify-center items-center '>
                        <Image src={"/images/shopCategories/mediabg-cover.png"} alt='image' height={100} width={100} className='w-full h-full' />

                        {/* content */}
                        <div className='absolute  flex flex-col justify-center items-center text-white font-montserrat '>
                            <h2 className='text-base font-bold'> CLOTHS</h2>
                            <p className='text-sm '>5 Items</p>
                        </div>

                    </div>

                    {/*category container  */}
                    <div className='relative w-[205px] h-[223px] flex justify-center items-center '>
                        <Image src={"/images/shopCategories/mediabg-cover1.png"} alt='image' height={100} width={100} className='w-full h-full' />

                        {/* content */}
                        <div className='absolute  flex flex-col justify-center items-center text-white font-montserrat '>
                            <h2 className='text-base font-bold'> CLOTHS</h2>
                            <p className='text-sm '>5 Items</p>
                        </div>

                    </div>

                    {/*category container  */}
                    <div className='relative w-[205px] h-[223px] flex justify-center items-center '>
                        <Image src={"/images/shopCategories/mediabg-cover2.png"} alt='image' height={100} width={100} className='w-full h-full' />

                        {/* content */}
                        <div className='absolute  flex flex-col justify-center items-center text-white font-montserrat '>
                            <h2 className='text-base font-bold'> CLOTHS</h2>
                            <p className='text-sm '>5 Items</p>
                        </div>

                    </div>


                    {/*category container  */}
                    <div className='relative w-[205px] h-[223px] flex justify-center items-center '>
                        <Image src={"/images/shopCategories/mediabg-cover3.png"} alt='image' height={100} width={100} className='w-full h-full' />

                        {/* content */}
                        <div className='absolute  flex flex-col justify-center items-center text-white font-montserrat '>
                            <h2 className='text-base font-bold'> CLOTHS</h2>
                            <p className='text-sm '>5 Items</p>
                        </div>

                    </div>

                    {/*category container  */}
                    <div className='relative w-[205px] h-[223px] flex justify-center items-center '>
                        <Image src={"/images/shopCategories/mediabg-cover4.png"} alt='image' height={100} width={100} className='w-full h-full' />

                        {/* content */}
                        <div className='absolute  flex flex-col justify-center items-center text-white font-montserrat '>
                            <h2 className='text-base font-bold'> CLOTHS</h2>
                            <p className='text-sm '>5 Items</p>
                        </div>

                    </div>

                </div>


                {/* results and filters */}
                <div className=' mt-16 w-full flex flex-wrap justify-around items-center'>

                    {/* results */}
                    <p className='mb-3'>Showing all 12 results</p>

                    {/* view */}
                    <div className='mb-3 font-montserrat w-[177px] flex justify-center items-center gap-3'>
                        <p>views:</p>
                        <div className='w-[46px] h-[46px] flex justify-center items-center border rounded-md'>
                            <Image src={"/images/grid.png"} alt='image' height={15} width={15} />
                        </div>

                        <div className='rounded-md w-[46px] h-[46px] flex justify-center items-center border'>
                            <Image src={"/images/horizontal.png"} alt='image' height={15} width={15} />
                        </div>

                    </div>


                    {/* Popularity and filter */}
                    <div className='mb-3 flex justify-center items-center w-[252px] h-[50px]'>

                        {/* popularity */}
                        <div className='rounded-sm bg-[#fafafa] w-[141px] h-full flex justify-center items-center'>
                            <Accordion type="single" collapsible className='relative'>
                                <AccordionItem value="item-1" >
                                    <AccordionTrigger className='font-montserrat text-[#737373] text-base no-underline ' >Popularity</AccordionTrigger>
                                    <AccordionContent className='absolute top-12 bottom-0'>
                                        <ul className='font-montserrat font-bold flex flex-col justify-center items-start gap-1'>
                                            <li>Old</li>
                                            <li>Latest</li>
                                            <li>Most Popular</li>

                                        </ul>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>

                        {/* Filters */}
                        <div className='w-[94px] h-full flex justify-center items-center rounded-sm font-montserrat font-bold text-white bg-[#23A6F0]'>
                            Filter
                        </div>
                    </div>
                </div>


                {/* Brands */}
                <div className='w-full bg-[#fafafa] h-[175px] mt-5 flex justify-evenly items-center flex-wrap'>
                    <Image src={"/images/Brands/fa-brands-1.png"} alt={"brands"} height={80} width={80} />
                    <Image src={"/images/Brands/fa-brands-2.png"} alt={"brands"} height={80} width={80} />
                    <Image src={"/images/Brands/fa-brands-3.png"} alt={"brands"} height={80} width={80} />
                    <Image src={"/images/Brands/fa-brands-4.png"} alt={"brands"} height={80} width={80} />
                    <Image src={"/images/Brands/fa-brands-5.png"} alt={"brands"} height={80} width={80} />
                    <Image src={"/images/Brands/fa-brands-6.png"} alt={"brands"} height={80} width={80} />
                </div>

                
                
            </div>

        </>
    )
}
