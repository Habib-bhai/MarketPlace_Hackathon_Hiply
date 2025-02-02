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
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Cart } from './Cart'
import { Wishlist } from './WishList'
import SearchDialog from './SearchDialogue'
import { useEffect, useState } from 'react'



export default function Navbar() {

    const [open, setOpen] = useState(false)
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

    const pathname = usePathname()
    let conditional = true
    if (pathname == "/about" || pathname == "/pricing" || pathname == "/team" || pathname == "/contact") {
        conditional = false
    }



    useEffect(() => {
        const checkAuth = async () => {
            try {
                const res = await fetch('/api/auth/authStatus', {
                    credentials: 'include' // Essential for sending cookies
                });

                const data = await res.json();
                setIsAuthenticated(data.isAuthenticated);
            }
            //  eslint-disable-next-line
            catch (error: any) {
                setIsAuthenticated(false);
                console.log(error.message)
            }
        };

        checkAuth();
    }, []);


    return (
        <div className='text-white flex justify-center items-center flex-col w-screen overflow-x-hidden z-10'>

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
                            <Link href={"/"}><h1 className='font-montserrat text-black text-2xl font-bold'>Bandage</h1></Link>

                            <div className='hidden lg:flex font-montserrat text-sm font-bold text-[#737373] justify-center items-center gap-4'>
                                <Link href={'/'} className='text-lg'> Home</Link>
                                <Link href={"/shop"}> <Accordion type="single" collapsible className='relative'>
                                    <AccordionItem value="item-1" >
                                        <AccordionTrigger className='font-montserrat font-bold text-base z-50'>shop</AccordionTrigger>

                                    </AccordionItem>
                                </Accordion>
                                </Link>
                                <Link href={"/about"} className='text-lg'> About</Link>
                                <Link href={"/about"} className='text-lg'> Blog</Link>
                                <Link href={'/contact'} className='text-lg'> Contact</Link>

                            </div>

                            <div className='relative flex justify-center items-center gap-8 '>

                                <div className='flex justify-center items-center'>


                                    <div className='hidden md:flex justify-between items-center gap-8'>

                                        {/* user profile button */}
                                        <div className='hidden font-montserrat text-sm lg:flex justify-center items-center text-black'>

                                            {
                                                isAuthenticated ?
                                                    <Link href={"/profile"}>
                                                        <div className='w-9 h-9 hover:bg-gray-100 hover:rounded-lg flex justify-center items-center'>

                                                            <Image src={"/images/navbar/user.svg"} alt='search' height={20} width={20} className='cursor-pointer ' />
                                                        </div>
                                                    </Link>

                                                    :
                                                    <Link href={"/login"}>
                                                        <p className='text-[#23A6F0] font-bold'>Login</p>
                                                    </Link>
                                            }

                                        </div>

                                        <SearchDialog />
                                        <Cart />
                                        <Wishlist />

                                    </div>

                                </div>



                                <Sheet open={open} onOpenChange={setOpen}>
                                    <SheetTrigger>
                                        <Image src={"/images/navbar/menu.svg"} alt='hamburger' height={20} width={20} className='block lg:hidden' />
                                    </SheetTrigger>
                                    <SheetContent className='absolute top-24 w-screen bg h-screen flex flex-col justify-center items-center bg-gray-300 text-[#737373] '>

                                        <div className='flex justify-center items-center w-full gap-4 mb-10'>
                                            <SearchDialog />
                                            <Cart />
                                            <Wishlist />
                                        </div>

                                        <Link onClick={() => setOpen(false)} href="/" className='font-semibold text-xl  md:text-3xl mb-8 '>Home</Link>
                                        <Link onClick={() => setOpen(false)} href="/contact" className='font-semibold text-xl md:text-3xl mb-8 '>Contact</Link>
                                        <Link onClick={() => setOpen(false)} href="/about" className='font-semibold text-xl md:text-3xl mb-8 '>About</Link>
                                        <Link onClick={() => setOpen(false)} href="/shop" className='font-semibold text-xl md:text-3xl mb-8 '>Shop</Link>
                                        <Link onClick={() => setOpen(false)} href="/login" className='font-semibold text-xl md:text-3xl mb-8 '>Login</Link>
                                        <Link onClick={() => setOpen(false)} href="/profile" className='font-semibold text-xl md:text-3xl mb-8 '>profile</Link>

                                    </SheetContent>
                                </Sheet>

                            </div>

                        </div>
                    </> :
                    <div className='flex justify-evenly items-center w-full border-b h-24 '>
                        {/* Secondary part when condition applies */}
                        <Link href={"/"}> <h1 className='font-montserrat text-black text-2xl font-bold'>Bandage</h1></Link>

                        <div className='hidden lg:flex font-montserrat text-sm font-bold text-[#737373] justify-center items-center gap-8'>
                            <Link href={'/'} className='text-lg'> Home</Link>
                            <Link href={"/shop"} className='text-lg'> Product</Link>
                            <Link href={"/pricing"} className='text-lg'> Pricing</Link>
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


                                    <Link href="/" className='font-semibold text-3xl md:text-3xl mb-8 '>Home</Link>
                                    <Link href="/contact" className='font-semibold text-3xl md:text-3xl mb-8 '>Contact</Link>
                                    <Link href="/about" className='font-semibold text-3xl md:text-3xl mb-8 '>About</Link>




                                </SheetContent>
                            </Sheet>

                        </div>

                    </div>
            }
        </div >
    )
}
