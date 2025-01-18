"use client"
import React, { createContext, useContext, useEffect, useState } from "react";
import { Data } from "../../utils/Types";
import { getProductData } from "../../utils/sanityDataImport";




interface DataContextValue {
    data: Data[],
    setData: React.Dispatch<React.SetStateAction<Data[]>>
}




const context = createContext<DataContextValue | undefined>(undefined)







 const DataContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    const [data, setData] = useState<Data[]>([])

    useEffect(() => {
        async function DATA(){
            
            await getProductData()
        }
    }, [])

    return (<context.Provider value={{ data, setData }}>
        {children}
    </context.Provider>
    )
} 


export default DataContextProvider


export const useDataContext = ():DataContextValue => {
    const contextValue = useContext(context)

    if(!contextValue) throw new Error("Data Fetching error!")

        return contextValue
} 



