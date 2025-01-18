"use client"
import React, { createContext, useContext, useState } from "react";


interface Data {
    name: string,
    price: number,
    description: string,
    image: string,
    category: string[],
    discountPercent: number,
    new: boolean,
    colors: string[],
    sizes: string[]
}


interface DataContextValue {
    data: Data[],
    setData: (data: Data[]) => void
}




const context = createContext<DataContextValue | null>(null)



export const useDataContext =() => {
    const contextValue = useContext(context)

    if(!contextValue) throw new Error("Data Fetching error!")

        return contextValue
} 



 const DataContext: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    const [data, setData] = useState<Data[] >([])

    return (<context.Provider value={{ data, setData }}>
        {children}
    </context.Provider>
    )
} 


export default DataContext