"use client"

import { usePathname } from "next/navigation"
import ProductCard from '@/components/ProductCard'

import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"

export default function ProductlistingConditional() {
    const path = usePathname()

    return (
        <>
            {path === '/shop' ?
                <div>
                    {/* products listing */}
                    <div className='flex justify-center items-center flex-wrap gap-[48px]'>
                        <ProductCard image='product-cover-51.png' />
                        <ProductCard image='product-cover-52.png' />
                        <ProductCard image='product-cover-53.png' />
                        <ProductCard image='product-cover-54.png' />
                        <ProductCard image='product-cover-55.png' />
                        <ProductCard image='product-cover-56.png' />
                        <ProductCard image='product-cover-57.png' />
                        <ProductCard image='product-cover-5a.png' />
                        <ProductCard image='product-cover-5b.png' />
                        <ProductCard image='product-cover-5c.png' />
                        <ProductCard image='product-cover-5d.png' />
                        <ProductCard image='product-cover-5e.png' />
                    </div>

                    <Pagination>
                        <PaginationContent>
                            <PaginationItem>
                                <PaginationPrevious href="#" />
                            </PaginationItem>

                            <PaginationItem>
                                <PaginationLink href="#" className='h-[74px] w-[49px] flex justify-center items-center font-montserrat bg-[#fafafa]'>1</PaginationLink>
                            </PaginationItem>

                            <PaginationItem>
                                <PaginationLink href="#" className='h-[74px] w-[49px] flex justify-center items-center font-montserrat bg-[#23A6F0] '>2</PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink href="#" className='h-[74px] w-[49px] flex justify-center items-center font-montserrat bg-[#fafafa]'>3</PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationNext href="#" />
                            </PaginationItem>
                        </PaginationContent>
                    </Pagination>


                </div> :
                <>
                </>
            }
        </>
    )
}
