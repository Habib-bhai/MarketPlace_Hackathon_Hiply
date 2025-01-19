import BestSellerProducts from "@/components/BestSellerProducts";
import EditorsPick from "@/components/EditorsPick";
import Featured from "@/components/Featured";
import HeroSection from "@/components/HeroSection";
import HeroTwo from "@/components/HeroTwo";
import Winter from "@/components/Winter";
import { getProductData } from "../../utils/sanityDataImport";
import { Data } from "../../utils/Types";

// import { useDataContext } from "@/context/DataContext";


export default async function Home() {

  // const {data} = useDataContext()
  const data: Data[] = await getProductData() 


  return (
    <div>
     <HeroSection />   
     <EditorsPick />
     <BestSellerProducts DATA={data.splice(0, 5)} />
     <HeroTwo />
     <Winter />
     <Featured />

    </div>
  );
}
