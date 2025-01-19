
import React from 'react'
import { Metadata } from 'next';
import { getProductData } from '../../../utils/sanityDataImport';
import ShopStructure from '@/components/ShopStructure';
import { Data } from '../../../utils/Types';


export const metadata: Metadata = {
    title: "Hackathon Ui - Shop",

};


export default async function page() {

    const Data: Data[] = await getProductData()

    
 


    return (
        <>

        <ShopStructure _data={Data}/>            

        </>
    )
}
