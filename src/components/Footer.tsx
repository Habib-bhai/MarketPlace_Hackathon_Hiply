import Image from 'next/image'
import React from 'react'

export default function Footer() {
    return (
        <div className='px-20 py-20 bg-white grid gap-10  md:gap-14 grid-cols-1 min-[580px]:grid-cols-2 grid-rows-12 text-black   md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 w-screen  overflow-x-hidden'>

            {/* first */}
            <div className='bg-[#fafafa]  col-span-1 min-[580px]:col-span-2 md:col-span-3 lg:col-span-4 xl:col-span-5 row-span-4 flex justify-between px-[10%] items-center flex-wrap'>
                <h1 className='font-montserrat text-2xl font-bold'>Bandage</h1>
                <div className='flex justify-center items-center gap-5'>
                    <Image src={"/images/footer/facebook.svg"} alt='facebook' height={30} width={30} />
                    <Image src={"/images/footer/instagram.svg"} alt='facebook' height={30} width={30} />
                    <Image src={"/images/footer/twitter.svg"} alt='facebook' height={30} width={30} />
                </div>
            </div>



            {/*Company Info  */}
            <div className='col-span-1 row-span-5 flex flex-col justify-center items-start '>
                <h2 className='mb-5 text-black text-base font-bold font-montserrat '>Company Info</h2>
                <p className='cursor-pointer mb-3 text-[#737373] w-[176px]'>About Us</p>
                <p className='cursor-pointer mb-3 text-[#737373]'>Carrier</p>
                <p className='cursor-pointer mb-3 text-[#737373] '>We are hiring</p>
                <p className='cursor-pointer mb-3 text-[#737373] '>Blog</p>

            </div>


            {/* Legal */}
            <div className='col-span-1 row-span-5 flex flex-col justify-center items-start '>
                <h2 className='mb-5 text-black text-base font-bold font-montserrat '>Legal</h2>
                <p className='cursor-pointer mb-3 text-[#737373] w-[176px]'>About Us</p>
                <p className='cursor-pointer mb-3 text-[#737373]'>Carrier</p>
                <p className='cursor-pointer mb-3 text-[#737373] '>We are hiring</p>
                <p className='cursor-pointer mb-3 text-[#737373] '>Blog</p>

            </div>

            {/* Features */}
            <div className='col-span-1 row-span-5 flex flex-col justify-center items-start '>
                <h2 className='mb-5 text-black text-base font-bold font-montserrat '>Features</h2>
                <p className='cursor-pointer mb-3 text-[#737373] w-[176px]'>Business Marketing Us</p>
                <p className='cursor-pointer mb-3 text-[#737373]'>User Analytic</p>
                <p className='cursor-pointer mb-3 text-[#737373] '>Live Chat</p>
                <p className='cursor-pointer mb-3 text-[#737373] '>Unlimited Support</p>

            </div>

            {/* Resources */}
            <div className='col-span-1 row-span-5 flex flex-col justify-center items-start '>
                <h2 className='mb-5 text-black text-base font-bold font-montserrat '>Resources</h2>
                <p className='cursor-pointer mb-3 text-[#737373] w-[176px]'>IOS & Android</p>
                <p className='cursor-pointer mb-3 text-[#737373]'>Watch a Demo</p>
                <p className='cursor-pointer mb-3 text-[#737373] '>Customers</p>
                <p className='cursor-pointer mb-3 text-[#737373] '>API</p>

            </div>

            {/* Get in touch */}
            <div className=' col-span-1 row-span-4 flex flex-col justify-center items-start  '>
                <h1 className='mb-5 font-montserrat font-bold text-base'>Get In Touch</h1>

                {/* input and subscribe button */}
                <div >
                    <div className='w-[250px] h-[58px] flex justify-center items-center  border-[1px] border-white'>
                        <input type="text" placeholder='Your Email' className='w-[70%] outline-none pl-4 bg-[#fafafa] h-full' />
                        <button className='w-[30%] h-full bg-[#23A6F0]'>Subscribe</button>
                    </div>
                    <h1 className='mt-2 font-montserrat text-xs text-[#737373]'>Lore imp sum dolor Amit</h1>
                </div>


            </div>

            {/* made by */}
            <div className='bg-[#fafafa]  col-span-1 min-[580px]:col-span-2 md:col-span-3 lg:col-span-4 xl:col-span-5 row-span-2 flex justify-start px-[10%] items-center flex-wrap'>
                <h1 className='font-montserrat text-sm text-[#737373]  font-bold'>Made With Love By Finland All Right Reserved </h1>

            </div>    
        </div>
    )
}
