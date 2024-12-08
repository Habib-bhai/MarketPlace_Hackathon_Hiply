"use client"
import Products2 from "@/components/products2"
import Image from "next/image"
import { useState } from "react"

export default function page({ params }: { params: { id: string } }) {

    const [image, setImage] = useState("/images/products/nested/product1.jpg")

    return (
        <div className='w-screen overflow-x-hidden'>

            {/* route */}
            <div className="bg-[#fafafa] h-[50px] my-8 flex justify-start items-center pl-[10%]">

                <div className='w-[80%] flex justify-between  items-center'>


                    <div className='text-[#bdbdbd] font-montserrat font-bold flex justify-center items-center gap-1'>
                        <p className='text-black'>Home</p>
                        &gt;
                        <p className=''>Shop</p>
                    </div>
                </div>


            </div>


            {/* Main image, sub images and product details */}
            <div className='bg-[#fafafa] w-full lg:px-4 xl:px-12 flex flex-col lg:flex-row justify-center items-center flex-wrap overflow-x-hidden'>


                {/*main image and other images  */}
                <div className="w-[50%] flex justify-center items-center flex-col">

                    <div className="relative  w-[400px] md:w-[506px] h-[450px]">
                        <Image src={image} alt="main image" height={100} width={100} className="w-full h-full object-cover" />

                        <div className="px-5 absolute top-1/2 w-full flex justify-between items-center">
                            <Image src={"/images/arrow_back.svg"} alt="arrow" height={50} width={50} />
                            <Image src={"/images/arrow_forward.svg"} alt="arrow" height={50} width={50} />
                        </div>
                    </div>

                    <div className="mt-5 flex justify-start items-center gap-5">
                        <Image onClick={() => setImage("/images/products/nested/product1.jpg")} src={"/images/products/nested/product1.jpg"} alt="image" height={100} width={100} />
                        <Image onClick={() => setImage("/images/products/nested/product2.jpg")} src={"/images/products/nested/product2.jpg"} alt="image" height={120} width={120} />
                    </div>

                </div>

                {/*product details  */}
                <div className="mt-12 lg:mt-0 lg:mb-16 w-[50%] text-black flex flex-col justify-center items-start">

                    {/* title */}
                    <h1 className="font-montserrat text-xl font-medium text-black mb-3">Floating Phone</h1>

                    {/* reviews */}
                    <div className="mb-4 w-[221px] flex justify-start items-center gap-2">
                        <div className=" flex justify-center items-center gap-1">
                            <Image src={"/images/star.png"} alt="star" height={20} width={20} />
                            <Image src={"/images/star.png"} alt="star" height={20} width={20} />
                            <Image src={"/images/star.png"} alt="star" height={20} width={20} />
                            <Image src={"/images/star.png"} alt="star" height={20} width={20} />
                            <Image src={"/images/star.png"} alt="star" height={20} width={20} />
                        </div>
                        <p className="font-montserrat text-sm font-bold text-[#737373]">10 Reviews</p>
                    </div>

                    {/* price */}
                    <h1 className="mb-2 font-montserrat font-bold text-2xl ">$1,139.33</h1>

                    {/* availability */}
                    <div className="mb-10 w-[159px] flex justify-start gap-1 items-center">
                        <p className="font-bold font-montserrat text-sm text-[#737373]">Availability</p>
                        :
                        <p className=" font-bold font-montserrat text-sm text-[#23A6F0]">In Stock</p>
                    </div>


                    {/* short description */}
                    <p className="mb-5 font-montserrat text-sm text-[#858585]">Met minim Mollie non desert Alamo est sit cliquey dolor
                        do met sent. RELIT official consequent door ENIM RELIT Mollie.
                        Excitation venial consequent sent nostrum met.
                    </p>

                    {/* ruler line */}
                    <p className="mb-7 w-full h-[1px] bg-[#bdbdbd]"></p>


                    {/*Colors available  */}
                    <div className="mb-14 w-[150px] flex justify-center items-center gap-[10px]">
                        <div className="w-[30px] h-[30px] bg-[#23A6F0] rounded-full"></div>
                        <div className="w-[30px] h-[30px] bg-[#23856D] rounded-full"></div>
                        <div className="w-[30px] h-[30px] bg-[#E77C40] rounded-full"></div>
                        <div className="w-[30px] h-[30px] bg-[#252B42] rounded-full"></div>
                    </div>


                    {/* select options */}
                    <div className="w-[298px] h-[44px] flex justify-center items-center gap-3">

                        <div className="text-white font-montserrat text-sm rounded-md font-bold w-[148px] h-full flex justify-center items-center bg-[#23A6F0]"> Select Options</div>

                        {/* icons */}
                        <div className="w-[40px] h-[40px] rounded-full flex justify-center items-center border">
                            <Image src={"/images/heart.png"} alt="heart" height={20} width={20} />
                        </div>
                        <div className="w-[40px] h-[40px] rounded-full flex justify-center items-center border">
                            <Image src={"/images/cart.png"} alt="heart" height={20} width={20} />
                        </div>
                        <div className="w-[40px] h-[40px] rounded-full flex justify-center items-center border">
                            <Image src={"/images/eye.png"} alt="heart" height={20} width={20} />
                        </div>

                    </div>

                </div>

            </div>


            {/* tabs */}
            <div className="mt-10 w-full flex justify-center items-center gap-8">
                <p className="font-montserrat text-sm text-[#737373] font-semibold">Description</p>
                <p className="font-montserrat text-sm text-[#737373] font-bold">Additional Information</p>
                <p className="font-montserrat text-sm text-[#737373] font-bold">Reviews (0)</p>
            </div>

            {/* horizontal line */}
            <div className="mt-5 w-full flex justify-center items-center">
                <p className="w-[85%] h-[1px] bg-[#ececec]"></p>
            </div>


            {/* other content */}
            <div className="mt-10 mb-16 gap-[50px] w-full flex justify-center items-center flex-wrap">
                <Image src={"/images/bestSellingProducts/product1.png"} alt="product" height={100} width={100} className=" w-[337px] h-[392px] object-cover" />

                {/* first column */}
                <div className="flex flex-col justify-center items-center">
                    <h1 className="text-2xl mb-5 font-montserrat font-bold text-black">the quick fox jumps over </h1>

                    <p className="w-[332px] mb-3 text-[#737373] font-montserrat text-xs ">Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</p>

                    <p className="w-[332px] mb-3 text-[#737373] font-montserrat text-xs ">Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</p>

                    <p className="w-[332px] mb-3 text-[#737373] font-montserrat text-xs ">Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</p>

                    <p className="w-[332px] mb-3 text-[#737373] font-montserrat text-xs ">Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.</p>
                </div>

                {/* second column */}
                <div className="flex  flex-col justify-center items-center">
                    <h1 className="text-2xl mb-5 font-montserrat font-bold text-black">the quick fox jumps over </h1>

                    {/* text */}
                    <div>


                        <div className="mb-3 text-sm font-montserrat text-[#737373] flex justify-between items-center gap-5">
                            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#737373"><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" /></svg>
                            the quick fox jumps over the lazy dog
                        </div>

                        <div className="mb-3 text-sm font-montserrat text-[#737373] flex justify-between items-center gap-5">
                            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#737373"><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" /></svg>
                            the quick fox jumps over the lazy dog
                        </div>
                        <div className="mb-3 text-sm font-montserrat text-[#737373] flex justify-between items-center gap-5">
                            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#737373"><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" /></svg>
                            the quick fox jumps over the lazy dog
                        </div>
                        <div className="mb-3 text-sm font-montserrat text-[#737373] flex justify-between items-center gap-5">
                            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#737373"><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" /></svg>
                            the quick fox jumps over the lazy dog
                        </div>

                    </div>

                    <h1 className="text-2xl mb-5 font-montserrat font-bold text-black">the quick fox jumps over </h1>

                    {/* text */}
                    <div>


                        <div className="mb-3 text-sm font-montserrat text-[#737373] flex justify-between items-center gap-5">
                            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#737373"><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" /></svg>
                            the quick fox jumps over the lazy dog
                        </div>

                        <div className="mb-3 text-sm font-montserrat text-[#737373] flex justify-between items-center gap-5">
                            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#737373"><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" /></svg>
                            the quick fox jumps over the lazy dog
                        </div>
                        <div className="mb-3 text-sm font-montserrat text-[#737373] flex justify-between items-center gap-5">
                            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#737373"><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" /></svg>
                            the quick fox jumps over the lazy dog
                        </div>
                        <div className="mb-3 text-sm font-montserrat text-[#737373] flex justify-between items-center gap-5">
                            <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#737373"><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" /></svg>
                            the quick fox jumps over the lazy dog
                        </div>

                    </div>

                </div>

            </div>


            {/* Best Selling Products */}
            <div className="bg-[#fafafa] w-full flex flex-col justify-center items-center">


                {/* headings */}
                <div className="mt-5 w-[75%]   flex  justify-start items-center">
                    <h1 className=" text-2xl font-montserrat font-bold">BESTSELLER PRODUCTS</h1>
                </div>

                    {/* horizontal line */}
                <p className="mt-5 w-[80%] h-[1px] bg-[#ececec]"></p>

                {/* products */}
                <div className="flex justify-center items-center gap-[24px] flex-wrap">
                    <Products2 image="product-cover-54.png"/>
                    <Products2 image="product-cover-51.png"/>
                    <Products2 image="product-cover-52.png"/>
                    <Products2 image="product-cover-53.png"/>
                    <Products2 image="product-cover-54.png"/>
                    <Products2 image="product1.png"/>
                    <Products2 image="product-cover-5.png"/>
                    <Products2 image="product-cover-52.png"/>
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

        </div>
    )
}
