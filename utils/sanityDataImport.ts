
import { client } from "@/sanity/lib/client";
import { useDataContext } from "@/context/DataContext";

 async function getProductData (){
    try{

        const {setData} = useDataContext()
        
        const query = ``
        
        const response = await client.fetch(query)
        if(!response) throw new Error("Failed to fetch data")
            const data = await response.json()   
        setData(data)
    }

    catch(error: any) {
        console.log("error====>>>>", error)
    }
}

getProductData()