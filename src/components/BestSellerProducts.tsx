import Link from "next/link";
import ProductCard from "./ProductCard";

export default function BestSellerProducts() {
    return (
        <div className="w-screen mb-20">
            <div className="w-full flex flex-col justify-center items-center">
                <p className="text-lg font-montserrat text-[#737373] font-medium mb-3" >Featured Products</p>

                <h1 className="text-2xl font-montserrat font-bold text-black mb-2">BESTSELLER PRODUCTS</h1>

                <p className="text-base text-[#737373]">Problems trying to resolve the conflict between  </p>
            </div>


            <div className="w-full flex justify-center items-center flex-wrap gap-[30px]">
               <Link href={"/shop/a"}> <ProductCard image="product-cover-5.png" /> </Link>
               <Link href={"/shop/b"}><ProductCard image="product-cover-5a.png" /> </Link>
               <Link href={"/shop/c"}><ProductCard image="product-cover-5b.png" /> </Link>
               <Link href={"/shop/d"}><ProductCard image="product-cover-5c.png" /> </Link>
               <Link href={"/shop/e"}> <ProductCard image="product-cover-5d.png" /> </Link>
               <Link href={"/shop/f"}> <ProductCard image="product-cover-5e.png" /> </Link>
               <Link href={"/shop/g"}> <ProductCard image="product-cover-5f.png" /> </Link>
               <Link href={"/shop/h"}> <ProductCard image="product-cover-5g.png" /> </Link>
            </div>


        </div>

    )
}
