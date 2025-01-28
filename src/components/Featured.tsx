import FeaturedCard from "./FeaturedCard";

export default function Featured() {
    return (
        <div className="w-screen mb-20">

            {/* Heading and other text */}
            <div className={"mb-20 w-full flex flex-col justify-center items-center"}>
                    <p className="font-bold font-montserrat text-sm text-[#23A6F0]">Practice Advice</p>
                    <h1 className="font-montserrat font-bold text-[40px] text-black">Featured Posts</h1>
                    <p className="text-sm text-[#737373] font-montserrat w-[300px] md:w-[469px] text-center">Problems trying to resolve the conflict between 
                    the two major realms of Classical physics: Newtonian mechanics </p>
            </div>

            <div className="flex justify-center items-center gap-[30px] flex-wrap">
               <FeaturedCard image="featured1.png"/> 
               <FeaturedCard image="featured2.png"/> 
               <FeaturedCard image="featured3.png"/> 
            </div>
        </div>

    )
}
