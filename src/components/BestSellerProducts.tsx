import ProductCard from "./ProductCard";
import { Data } from "../../utils/Types";
import { urlFor } from "@/sanity/lib/image";

export default  function BestSellerProducts({DATA}: {DATA:Data[]}) {

// console.log(DATA)
    

    return (
        <div className="w-screen mb-20">
            <div className="w-full flex flex-col justify-center items-center">
                <p className="text-lg font-montserrat text-[#737373] font-medium mb-3" >Featured Products</p>

                <h1 className="text-2xl font-montserrat font-bold text-black mb-2">BESTSELLER PRODUCTS</h1>

                <p className="text-base text-[#737373]">Problems trying to resolve the conflict between  </p>
            </div>


            <div className="w-full flex justify-center items-center flex-wrap gap-[30px]">
                {
                    DATA.map((item: Data) => (<ProductCard key={item.name} name={item.name} category={item.category[0]}  id={item._id}  price={item.price} image={item?.image ? urlFor(item?.image).url() : ""} />))
                }
            </div>


        </div>

    )
}
