import BestSellerProducts from "@/components/BestSellerProducts";
import EditorsPick from "@/components/EditorsPick";
import Featured from "@/components/Featured";
import HeroSection from "@/components/HeroSection";
import HeroTwo from "@/components/HeroTwo";
import Winter from "@/components/Winter";

// import { useDataContext } from "@/context/DataContext";


export default async function Home() {

  // const {data} = useDataContext()
  


  return (
    <div>
     <HeroSection />   
     <EditorsPick />
     <BestSellerProducts />
     <HeroTwo />
     <Winter />
     <Featured />

    </div>
  );
}
