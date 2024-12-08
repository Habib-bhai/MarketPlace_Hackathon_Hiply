import Image from 'next/image'
import React from 'react'

export default function TeamMemberCards({image}:{image:string}) {
    return (
        <div>
            <div className='w-[316px] h-[383px] flex flex-col justify-center items-center'>
                <Image src={image} alt='team member' height={100} width={100} className='w-full h-[231px] object-cover' />

                <h2 className='mt-8 text-base font-montserrat font-bold text-black'>Username</h2>
                <p className='mt-2 mb-3 text-sm font-montserrat font-bold text-[#737373]'>Profession</p>
                <div className='flex justify-center gap-5 items-center'>
                    <Image src={"/images/footer/facebook.svg"} alt='fb' height={30} width={30} />
                    <Image src={"/images/footer/instagram.svg"} alt='insta' height={30} width={30} />
                    <Image src={"/images/footer/twitter.svg"} alt='x' height={30} width={30} />
                </div>

            </div>
        </div>
    )
}
