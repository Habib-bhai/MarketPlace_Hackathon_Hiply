import TeamMemberCards from "@/components/TeamMemberCards";
import Image from "next/image";
import { Metadata } from 'next';


export const metadata: Metadata = {
  title: "Hackathon Ui - Team",
 
};


export default function page() {
    return (
        <div className="w-screen overflow-x-hidden">

            {/* Heading and route */}
            <div className="mt-10 w-full flex justify-normal items-center flex-col">
                <h5 className="mb-10 font-montserrat text-base text-[#737373] font-bold">WHAT WE DO</h5>

                <h1 className="mb-8 font-bold font-montserrat text-3xl text-center  text-black md:text-[58px]">Innovation tailored for you</h1>

                <div className="gap-1 flex justify-center items-center">
                    <p className="font-montserrat text-sm font-bold text-black">Home</p>
                    <svg xmlns="http://www.w3.org/2000/svg" height="15px" viewBox="0 -960 960 960" width="15px" fill="#737373"><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" /></svg>
                    <p className="font-montserrat text-sm font-bold text-[#737373]">Team</p>
                </div>


            </div>

            {/* related to the heading images */}
            <div className="mt-20 w-full xl:h-[530px] flex justify-center items-center">
                <div className="w-[80%] h-full grid gap-[20px]  grid-cols-2 xl:grid-cols-4 grid-rows-4">

                    <Image src={"/images/team/1.png"} alt="image" height={100} width={100} className="w-full  xl:h-full  col-span-2 row-span-4 object-cover" />

                    <Image src={"/images/team/2.png"} alt="image" height={100} width={100} className="w-full xl:h-full col-span-1 row-span-2 object-cover" />

                    <Image src={"/images/team/3.png"} alt="image" height={100} width={100} className="w-full xl:h-full col-span-1 row-span-2 object-cover" />

                    <Image src={"/images/team/4.png"} alt="image" height={100} width={100} className="w-full xl:h-full col-span-1 row-span-2 object-cover" />

                    <Image src={"/images/team/5.png"} alt="image" height={100} width={100} className=" w-full xl:h-full col-span-1 row-span-2 object-cover" />

                </div>
            </div>

            {/* MEET OUR TEAM */}

            <div className="w-full flex justify-center items-center my-20">
                <h1 className="font-montserrat text-[40px] font-bold text-[#252B42]">Meet Our Team</h1>
            </div>
            <div className="w-full flex justify-center items-center flex-wrap  gap-[112px] ">
                <TeamMemberCards image="/images/team/team-1.jpg" />
                <TeamMemberCards image="/images/team/team-2.jpg" />
                <TeamMemberCards image="/images/team/team-3.jpg" />
                <TeamMemberCards image="/images/team/team-4.jpg" />
                <TeamMemberCards image="/images/team/team-6.jpg" />
                <TeamMemberCards image="/images/team/team-7.jpg" />
                <TeamMemberCards image="/images/team/team-8.jpg" />
                <TeamMemberCards image="/images/team/team-9.jpg" />
                <TeamMemberCards image="/images/team/team-10.jpg" />

            </div>


            {/* Start your Free trial */}
            <div className="mt-20 w-full flex flex-col justify-center items-center">
                <h1 className="mb-4 font-montserrat font-bold text-2xl md:text-[40px] ">Start your 14 days free trial</h1>

                <p className="font-sm text-[#737373] w-[411px] text-center font-montserrat">Met minim Mollie non desert Alamo est sit cliquey dolor
                    do met sent. RELIT official consequent.</p>

                <button className=" mt-5 mb-10 w-[186px] h-[52px] text-sm font-bold  rounded-md bg-[#23A6F0] text-white">Try it free now</button>

                {/* socials */}
                <div className="flex justify-center items-center gap-[34px]">
                    <Image src={"/images/footer/twitter.svg"} alt="twtitter" height={30} width={30}/>
                    <Image src={"/images/team/logos_facebook.svg"} alt="twitter" height={30} width={30}/>
                    <Image src={"/images/footer/instagram.svg"} alt="twtitter" height={30} width={30}/>
                    <Image src={"/images/team/logos_linkedin-icon.png"} alt="twtitter" height={30} width={30}/>
                </div>

            </div>

        </div>
    )
}
