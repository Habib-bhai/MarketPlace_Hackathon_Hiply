"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import {
    Select,
    SelectContent,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"

import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Data } from '../../utils/Types';
import { urlFor } from '@/sanity/lib/image';
import ProductCard from './ProductCard';
import { Search, SlidersHorizontal } from 'lucide-react'
import { Button } from './ui/button'
import { Input } from './ui/input'




function ShopStructure({ _data }: { _data: Data[] }) {

    const [showFilters, setShowFilters] = useState(false)
    const [selectedCategories, setSelectedCategories] = useState<string>('')
    const [priceRange, setPriceRange] = useState([0, 400])
    const [selectedSizes, setSelectedSizes] = useState<string[]>([])
    const [selectedTags, setSelectedTags] = useState<string[]>([])
    const [searchQuery, setSearchQuery] = useState('')
    const [data] = useState<Data[]>(_data)
    const [filteredData, setFilteredData] = useState<Data[]>(data)

    const DataPerPage = 10
    const [startIndex, setStartIndex] = useState(0)
    const [endIndex, setEndIndex] = useState(DataPerPage)


    const sizes = ["XS", "S", "M", "L", "XL", "XXL"]

    const categories = ["tshirts", "shirt", "hoodie", "jeans", "short"]

    const productTags = [
        'new arrival',
        'popular',
        'best seller',
        'men',
        'women',
        'kids',
        'trending',
        'limited edition',
        'sale',
        'seasonal',
        'eco-friendly',
        'premium',
        'casual',
        'formal',
        'sports',
        'designer',
        "old"
    ]

    const toggleCategory = (category: string) => {
        setSelectedCategories(category
            // prev.includes(category)
            //     ? prev.filter(c => c !== category)
            //     : [...prev, category]
        )
    }

    const toggleSize = (size: string) => {
        setSelectedSizes(prev =>
            prev.includes(size)
                ? prev.filter(s => s !== size)
                : [...prev, size]
        )
    }

    const toggleTag = (tag: string) => {
        setSelectedTags(prev =>
            prev.includes(tag)
                ? prev.filter(t => t !== tag)
                : [...prev, tag]
        )
    }

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        // Trigger filtering when search is submitted
        filterProducts()
    }


    // eslint-disable-next-line react-hooks/exhaustive-deps
    const filterProducts = () => {
        const filtered = data.filter(product => {
            const productCategory = product.category?.toLowerCase()
            const selectedCats = selectedCategories.toLowerCase()
            const productSizes = product.sizes?.map(s => s.toLowerCase())
            const selectedSizesLower = selectedSizes.map(s => s.toLowerCase())
            const productTags = product.tags?.map(t => t.toLowerCase())
            const selectedTagsLower = selectedTags.map(t => t.toLowerCase())
            const searchQueryLower = searchQuery.toLowerCase()

            if (selectedCategories.length && !selectedCats.includes(productCategory)) {
                return false
            }

            if (product.price < priceRange[0] || product.price > priceRange[1]) {
                return false
            }

            if (selectedSizes.length && !productSizes?.some(size =>
                selectedSizesLower.includes(size))) {
                return false
            }

            if (selectedTags.length && !selectedTagsLower.some(tag =>
                productTags?.includes(tag))) {
                return false
            }

            if (searchQuery && !productTags?.some(tag =>
                tag.toLowerCase().includes(searchQueryLower))) {
                return false
            }

            return true
        })

        setFilteredData(filtered)
    }


    useEffect(() => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        filterProducts()
    }, [data, selectedCategories, priceRange, selectedSizes, selectedTags, searchQuery])

    //   

    // console.log("----------FILTERED--------", filteredData, "----------FILTERED--------")
    return (
        <div className='w-screen flex flex-col justify-center items-center overflow-x-hidden'>

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
            <div className='hidden md:flex gap-[15px] justify-center items-center flex-wrap '>
                {/*category container  */}
                <div onClick={() => toggleCategory("tshirts")} className='relative w-[205px] h-[223px] flex justify-center items-center overflow-hidden rounded-2xl'>
                    <Image src={"/images/shopCategories/tshirt.jpg"} alt='image' height={500} width={500} className='w-full h-full object-cover rounded-2xl transition-all duration-300 hover:scale-110' />

                    {/* content */}
                    <div className='absolute  flex flex-col justify-center items-center text-white font-montserrat '>
                        <h2 className='text-base font-bold'> T-SHIRTS</h2>
                        <p className='text-sm '>5 Items</p>
                    </div>

                </div>

                {/*category container  */}
                <div onClick={() => toggleCategory("short")} className='relative w-[205px] h-[223px] flex justify-center items-center overflow-hidden rounded-2xl'>
                    <Image src={"/images/shopCategories/shorts.jpg"} alt='image' height={500} width={500} className='w-full h-full object-cover rounded-2xl transition-all duration-300 hover:scale-110' />

                    {/* content */}
                    <div className='absolute  flex flex-col justify-center items-center text-white font-montserrat '>
                        <h2 className='text-base font-bold'> SHORT</h2>
                        <p className='text-sm '>5 Items</p>
                    </div>

                </div>

                {/*category container  */}
                <div onClick={() => toggleCategory("jeans")} className='relative w-[205px] h-[223px] flex justify-center items-center overflow-hidden rounded-2xl'>
                    <Image src={"/images/shopCategories/jeans.jpg"} alt='image' height={500} width={500} className='w-full h-full object-cover rounded-2xl transition-all duration-300 hover:scale-110' />

                    {/* content */}
                    <div className='absolute  flex flex-col justify-center items-center text-white font-montserrat '>
                        <h2 className='text-base font-bold'> JEANS</h2>
                        <p className='text-sm '>5 Items</p>
                    </div>

                </div>


                {/*category container  */}
                <div onClick={() => toggleCategory("hoodie")} className='relative w-[205px] h-[223px] flex justify-center items-center overflow-hidden rounded-2xl'>
                    <Image src={"/images/shopCategories/hoodies.jpg"} alt='image' height={500} width={500} className='w-full h-full object-cover rounded-2xl transition-all duration-300 hover:scale-110' />

                    {/* content */}
                    <div className='absolute  flex flex-col justify-center items-center text-white font-montserrat '>
                        <h2 className='text-base font-bold'> HOODIE</h2>
                        <p className='text-sm '>5 Items</p>
                    </div>

                </div>

                {/*category container  */}
                <div onClick={() => toggleCategory("shirt")} className='relative w-[205px] h-[223px] flex justify-center items-center overflow-hidden rounded-2xl'>
                    <Image src={"/images/shopCategories/shirt.jpg"} alt='image' height={500} width={500} className='w-full h-full object-cover rounded-2xl transition-all duration-300 hover:scale-110' />

                    {/* content */}
                    <div className='absolute  flex flex-col justify-center items-center text-white font-montserrat '>
                        <h2 className='text-base font-bold'> SHIRTS</h2>
                        <p className='text-sm '>5 Items</p>
                    </div>

                </div>

            </div>


            {/* results and filters */}
            <div className=' mt-16 w-full hidden md:flex flex-wrap justify-around items-center'>

                {/* results */}
                <div className='flex flex-col gap-3'>
                    <Button variant={'blueVariant'} onClick={() => setFilteredData(data)}  >Show All </Button>
                    {/* <p className='mb-3'>Showing {filteredData.length} results</p> */}
                </div>

                {/* view */}
                <div className='mb-3 font-montserrat w-[177px] flex justify-center items-center gap-3'>
                    <p>views:</p>
                    <div className='w-[46px] h-[46px] flex justify-center items-center  hover:border-[2px] rounded-md'>
                        <Image src={"/images/grid.png"} alt='image' height={20} width={20} className='h-[15px] w-[15px] object-cover' />
                    </div>

                    <div className='rounded-md w-[46px] h-[46px] flex justify-center items-center hover:border-[2px] '>
                        <Image src={"/images/horizontal.png"} alt='image' height={20} width={20} className='h-[15px] w-[15px] object-cover' />
                    </div>

                </div>


                {/* Popularity and filter */}
                <div className='mb-3 flex justify-center items-center w-[252px] h-[50px] gap-3'>

                    {/* popularity */}
                    <div className='rounded-sm bg-[#fafafa] w-[141px] h-full flex justify-center items-center '>

                        <Select>
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Tags" />
                            </SelectTrigger>
                            <SelectContent>
                                {
                                    productTags.map((tag) => (
                                        <label key={tag} className="flex items-center gap-2">
                                            <Checkbox
                                                checked={selectedTags.includes(tag)}
                                                onCheckedChange={() => toggleTag(tag)}
                                            />
                                            <span className="text-sm">{tag}</span>
                                        </label>
                                    ))}

                            </SelectContent>
                        </Select>

                    </div>

                    {/* Filters */}
                    <form onSubmit={handleSearch} className="flex items-center ">
                        <Input
                            type="text"
                            placeholder="Search "
                            value={searchQuery}
                            className='bg-transparent w-40'
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
                        />
                        <Button type="submit" size="icon" >
                            <Search className="h-4 w-4 " />
                            <span className="sr-only">Search</span>
                        </Button>
                    </form>
                </div>
            </div>

            {/* prices filter and size filter */}
            <div className='w-full hidden md:flex flex-wrap justify-between px-[10%] items-center'>
                {/* size */}
                <div className='flex justify-center items-center gap-2'>
                    {sizes.map((size) => (
                        <Button
                            key={size}
                            variant={selectedSizes.includes(size) ? "default" : "outline"}
                            size="sm"
                            onClick={() => toggleSize(size)}
                        >
                            {size}
                        </Button>
                    ))
                    }
                </div>


                {/* price */}
                <div>
                    <h3 className="font-semibold mb-4">Price Filter</h3>
                    <div className="w-40">
                        <Slider
                            defaultValue={[0, 400]}
                            max={400}
                            step={1}
                            value={priceRange}
                            onValueChange={setPriceRange}
                        />
                        <div className="flex justify-between mt-2 text-sm">
                            <span>${priceRange[0]}</span>
                            <span>${priceRange[1]}</span>
                        </div>
                    </div>
                </div>
            </div>


            <div className=" md:hidden container mx-auto px-4 py-8">
                <Button
                    variant="outline"
                    className="flex items-center gap-2 mb-4 lg:hidden"
                    onClick={() => setShowFilters(!showFilters)}
                >
                    <SlidersHorizontal className="h-4 w-4" />
                    {showFilters ? "Hide Filters" : "Show Filters"}
                </Button>

                <div className="flex flex-col lg:flex-row gap-8">
                    <aside className={`lg:w-64 flex-shrink-0 ${showFilters ? 'block' : 'hidden lg:block'}`}>
                        <div className="space-y-6">
                            <form onSubmit={handleSearch} className="flex items-center space-x-2">
                                <Input
                                    type="text"
                                    placeholder="Search tags..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                                <Button type="submit" size="icon">
                                    <Search className="h-4 w-4" />
                                    <span className="sr-only">Search</span>
                                </Button>
                            </form>

                            <div>
                                <h3 className="font-semibold mb-4">Product Categories</h3>
                                <div className="space-y-2">
                                    {categories.map((category) => (
                                        <label key={category} className="flex items-center gap-2">
                                            <Checkbox
                                                checked={selectedCategories.includes(category)}
                                                onCheckedChange={() => toggleCategory(category)}
                                            />
                                            <span className="text-sm">{category}</span>

                                        </label>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h3 className="font-semibold mb-4">Price Filter</h3>
                                <div className="px-2">
                                    <Slider
                                        defaultValue={[0, 400]}
                                        max={400}
                                        step={1}
                                        value={priceRange}
                                        onValueChange={setPriceRange}
                                    />
                                    <div className="flex justify-between mt-2 text-sm">
                                        <span>${priceRange[0]}</span>
                                        <span>${priceRange[1]}</span>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h3 className="font-semibold mb-4">Size</h3>
                                <div className="flex flex-wrap gap-2">
                                    {sizes.map((size) => (
                                        <Button
                                            key={size}
                                            variant={selectedSizes.includes(size) ? "default" : "outline"}
                                            size="sm"
                                            onClick={() => toggleSize(size)}
                                        >
                                            {size}
                                        </Button>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h3 className="font-semibold mb-4">Tags</h3>
                                <div className="space-y-2">
                                    {productTags.map((tag) => (
                                        <label key={tag} className="flex items-center gap-2">
                                            <Checkbox
                                                checked={selectedTags.includes(tag)}
                                                onCheckedChange={() => toggleTag(tag)}
                                            />
                                            <span className="text-sm">{tag}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </aside>

                </div>
            </div>

            {/* Brands */}
            {/* <div className='w-full bg-[#fafafa] h-[175px] mt-5 flex justify-evenly items-center flex-wrap'>
                <Image src={"/images/Brands/fa-brands-1.png"} alt={"brands"} height={80} width={80} />
                <Image src={"/images/Brands/fa-brands-2.png"} alt={"brands"} height={80} width={80} />
                <Image src={"/images/Brands/fa-brands-3.png"} alt={"brands"} height={80} width={80} />
                <Image src={"/images/Brands/fa-brands-4.png"} alt={"brands"} height={80} width={80} />
                <Image src={"/images/Brands/fa-brands-5.png"} alt={"brands"} height={80} width={80} />
                <Image src={"/images/Brands/fa-brands-6.png"} alt={"brands"} height={80} width={80} />
            </div> */}


            <div className='flex justify-center items-center flex-wrap gap-14'>

                {
                    filteredData.slice(startIndex, endIndex).map((item: Data) => (<ProductCard key={item._id} name={item.name} category={item.category[0]} id={item._id} price={item.price} image={item?.image ? urlFor(item?.image).url() : ""} />))
                }
            </div>

            <Pagination>
                <PaginationContent className='gap-5'>
                    <PaginationItem>
                        <PaginationPrevious
                            className={`${startIndex === 0 ? `pointer-events-none` : undefined} text-black `}
                            onClick={() => {
                                setStartIndex(startIndex - DataPerPage)
                                setEndIndex(endIndex - DataPerPage)
                            }
                            } />
                    </PaginationItem>
                    <PaginationItem>
                        <PaginationNext
                            className={`text-black`}
                            onClick={() => {
                                setStartIndex(startIndex + DataPerPage)
                                setEndIndex(endIndex + DataPerPage)
                            }
                            } />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>




        </div>
    )
}

export default ShopStructure