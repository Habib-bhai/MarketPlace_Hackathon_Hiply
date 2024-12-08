"use client"
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"



export default function Navbar() {

    const pathname = usePathname()
    let conditional = true
    if(pathname =="/about" ||  pathname =="/pricing" || pathname =="/team" || pathname == "/contact"){
        conditional = false
        
    }

    return (
        <div className='text-white flex justify-center items-center flex-col w-screen overflow-x-hidden'>

           
            {

                conditional ?
                    <>
                        <div className=' w-full hidden lg:flex lg:px-5 justify-between  items-center relative bg-black h-12  text-center'>

                             {/* Primary part */}

                            {/* contact and mail */}
                            <div className={`text-sm flex justify-center items-center gap-8 font-montserrat`}>

                                {/* contact */}
                                <div className='flex justify-center items-center gap-1'>
                                    <Image src={"/images/navbar/telephone-small.png"} alt='telephone' height={15} width={15} />
                                    <p>(225) 555-0118</p>
                                </div>

                                {/*mail  */}
                                <div className='flex justify-center items-center gap-1'>
                                    <Image src={"/images/navbar/mail-small.png"} alt='mail' height={15} width={15} />
                                    <p>michelle.rivera@example.com</p>
                                </div>
                            </div>

                            <h1 className='font-montserrat w-[312px] font-bold text-sm'>Follow Us  and get a chance to win 80% off</h1>

                            {/* socials  */}
                            <div className='flex justify-center items-center '>

                                <p className='text-sm font-montserrat font-bold'>Follow Us :</p>

                                <div className='flex justify-center items-center gap-1 w-[120px]'>
                                    <Image src={"/images/navbar/i.png"} alt='insta' height={20} width={20} />
                                    <Image src={"/images/navbar/y.png"} alt='insta' height={20} width={20} />
                                    <Image src={"/images/navbar/f.png"} alt='insta' height={20} width={20} />
                                    <Image src={"/images/navbar/t.png"} alt='insta' height={20} width={20} />
                                </div>

                            </div>


                        </div>
                        <div className='flex justify-evenly items-center w-full border-b h-24 '>

                            {/* Secondary Part */}
                            <h1 className='font-montserrat text-black text-2xl font-bold'>Bandage</h1>

                            <div className='hidden lg:flex font-montserrat text-sm font-bold text-[#737373] justify-center items-center gap-4'>
                                <Link href={'/'} className='text-lg'> Home</Link>
                                <Accordion type="single" collapsible className='relative'>
                                    <AccordionItem value="item-1" >
                                        <AccordionTrigger className='font-montserrat font-bold text-base'>shop</AccordionTrigger>
                                        <AccordionContent className='z-50 absolute top-12 bottom-0'>
                                            <ul className='font-montserrat font-bold flex flex-col justify-center items-start gap-1'>
                                                <li>Women's</li>
                                                <li>Kids'</li>
                                                <li>Men's</li>
                                                <li>Apparel</li>
                                                <li>Shoes</li>
                                                <li>Accessories</li>
                                                <li>Bags</li>
                                            </ul>
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                                <Link href={"/about"} className='text-lg'> About</Link>
                                <Link href={"/about"} className='text-lg'> Blog</Link>
                                <Link href={'/contact'} className='text-lg'> Contact</Link>
                                <Link href={"/signup"} className='text-lg'> Pages</Link>
                            </div>

                            <div className='relative flex justify-center items-center gap-8 '>

                                <div className='flex justify-center items-center'>

                                    <div className='hidden w-[166px] font-montserrat text-sm lg:flex justify-center items-center gap-1'>
                                        <Image src={"/images/navbar/user.svg"} alt='search' height={15} width={15} />
                                        <p className='text-[#23A6F0] font-bold'>Login</p>
                                        /
                                        <p className='text-[#23A6F0] font-bold'>Register</p>
                                    </div>

                                    <div className='flex justify-between items-center gap-5'>
                                        <Image src={"/images/navbar/search.svg"} alt='search' height={20} width={20} className={"cursor-pointer"} />

                                        <Image src={"/images/navbar/cart.svg"} alt='search' height={20} width={20} className={"cursor-pointer text-black lg:text-[#23A6F0]"} />

                                        <Image src={"/images/navbar/heart.svg"} alt='search' height={20} width={20} className={"cursor-pointer hidden lg:block"} />

                                    </div>

                                </div>



                                <Sheet>
                                    <SheetTrigger>
                                        <Image src={"/images/navbar/menu.svg"} alt='hamburger' height={20} width={20} className='block lg:hidden' />
                                    </SheetTrigger>
                                    <SheetContent className='absolute top-24 w-screen bg-white h-screen flex flex-col justify-center items-center text-[#737373]'>


                                        <Link href="/" className='font-semibold text-3xl mb-8 '>Home</Link>
                                        <Link href="/contact" className='font-semibold text-3xl mb-8 '>Contact</Link>
                                        <Link href="/about" className='font-semibold text-3xl mb-8 '>About</Link>
                                        <Link href="/signup" className='font-semibold text-3xl mb-8 '>Signup</Link>
                                        <Link href="/login" className='font-semibold text-3xl mb-8 '>Login</Link>
                                        <Link href="/wishlist" className='font-semibold text-3xl mb-8 '>Wish List</Link>



                                    </SheetContent>
                                </Sheet>

                            </div>

                        </div>
                    </> :
                    <div className='flex justify-evenly items-center w-full border-b h-24 '>
                        {/* Secondary part when condition applies */}
                        <h1 className='font-montserrat text-black text-2xl font-bold'>Bandage</h1>

                        <div className='hidden lg:flex font-montserrat text-sm font-bold text-[#737373] justify-center items-center gap-8'>
                            <Link href={'/'} className='text-lg'> Home</Link>
                            <Link href={"/about"} className='text-lg'> Product</Link>
                            <Link href={"/about"} className='text-lg'> Pricing</Link>
                            <Link href={'/contact'} className='text-lg'> Contact</Link>

                        </div>

                        <div className='relative flex justify-center items-center gap-8 '>

                            <div className='hidden lg:flex justify-center items-center'>
                                {/* login and membership button */}

                                <p className='text-[#23A6F0] font-montserrat text-sm font-bold mr-8'>Login</p>
                                <button className='flex justify-center items-center gap-2 font-montserrat w-[214px] h-[52px] bg-[#23A6F0] text-white text-sm font-bold rounded-sm'>Become a memeber
                                    <svg xmlns="http://www.w3.org/2000/svg" height="15px" viewBox="0 -960 960 960" width="15px" fill="#ffffff"><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" /></svg>
                                </button>

                            </div>

                            <Image src={"/images/navbar/search.svg"} alt='search' height={20} width={20} className={"cursor-pointer lg:hidden"} />

                            <Image src={"/images/navbar/cart.svg"} alt='search' height={20} width={20} className={"cursor-pointer lg:hidden text-black lg:text-[#23A6F0]"} />

                            <Sheet>
                                <SheetTrigger>
                                    <Image src={"/images/navbar/menu.svg"} alt='hamburger' height={20} width={20} className='block lg:hidden' />
                                </SheetTrigger>
                                <SheetContent className='absolute top-24 w-screen bg-white h-screen flex flex-col justify-center items-center text-[#737373]'>


                                    <Link href="/" className='font-semibold text-3xl mb-8 '>Home</Link>
                                    <Link href="/contact" className='font-semibold text-3xl mb-8 '>Contact</Link>
                                    <Link href="/about" className='font-semibold text-3xl mb-8 '>About</Link>
                                    <Link href="/signup" className='font-semibold text-3xl mb-8 '>Signup</Link>
                                    <Link href="/login" className='font-semibold text-3xl mb-8 '>Login</Link>
                                    <Link href="/wishlist" className='font-semibold text-3xl mb-8 '>Wish List</Link>



                                </SheetContent>
                            </Sheet>

                        </div>

                    </div>
            }
        </div >
    )
}
