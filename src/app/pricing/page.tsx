import { Switch } from "@/components/ui/switch"
import Image from "next/image"


export default function page() {
    return (
        <div className="w-screen overflow-x-hidden">


            {/* heading and route */}
            <div className="mt-10 w-full flex justify-center items-center flex-col">

                <h3 className="mb-4 font-montserrat text-base text-[#737373] font-bold">PRICING</h3>
                <h1 className="mb-3 font-montserrat text-4xl md:text-[58px] text-black font-bold ">Simple Pricing</h1>

                <div className="gap-1 flex justify-center items-center">
                    <p className="font-montserrat text-sm font-bold text-black">Home</p>
                    <svg xmlns="http://www.w3.org/2000/svg" height="15px" viewBox="0 -960 960 960" width="15px" fill="#737373"><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" /></svg>
                    <p className="font-montserrat text-sm font-bold text-[#737373]">Pricing</p>
                </div>

            </div>

            {/* Pricing */}
            <div className="bg-[#fafafa] mt-20 w-full flex flex-col justify-center items-center">
                <h1 className="text-[40px] font-montserrat font-bold text-black">Pricing</h1>
                <p className="font-montserrat text-sm md:w-[469px] text-center text-[#737373]">Problems trying to resolve the conflict between
                    the two major realms of Classical physics: Newtonian mechanics </p>

                {/* plannings */}
                <div className=" mt-20 flex justify-center items-center gap-3">
                    <h2 className="text-black text-sm font-montserrat font-bold">Monthly</h2>
                    <Switch />
                    <h2 className="text-black text-sm font-montserrat font-bold">Yearly</h2>
                    <div className="font-montserrat font-sm font-bold text-[#23A6F0] w-[109px] h-[44px] flex justify-center items-center rounded-3xl bg-[#B2E3FF]">
                        Save 25%
                    </div>

                </div>
            </div>

            {/*plans  */}
            <div className="mt-14 bg-[#fafafa] w-full flex justify-center items-center ">
                <div className="w-[90%] lg:h-[704px] grid gap-10 lg:gap-0 grid-cols-1 lg:grid-cols-3 grid-rows-5">
                    {/* Free */}
                    <div className="lg:mt-10 h-[704px] col-span-1 row-span-5 lg:row-span-4 bg-white flex flex-col justify-center items-center rounded-md border-[1px] border-[#23A6F0]">

                        <h1 className="font-montserrat text-2xl font-bold text-black mb-6">FREE</h1>

                        <h3 className="w-[160px] font-montserrat text-base font-bold text-[#737373] mb-8">Organize across all apps by hand</h3>

                        {/* price 0 dollars */}
                        <div className="flex justify-center gap-3 mb-9 items-center">
                            <p className="font-montserrat text-[40px] font-bold text-[#23A6F0]">0</p>

                            <div className="flex flex-col justify-center items-start gap-2 font-montserrat text-[#23A6F0] text-2xl font-bold">
                                $
                                <p className="text-sm">Per Month</p>
                            </div>

                        </div>

                        {/* Features */}
                        <div className="w-full gap-3 flex flex-col justify-center items-center">
                            {/* first feature */}
                            <div className="w-full flex justify-center items-center gap-2">
                                <Image src={"/images/circle-green.png"} alt="tick circle" height={30} width={30} />
                                <h3 className="font-bold font-montserrat text-xs w-[180px]">Unlimited product update</h3>
                            </div>
                            {/* second feature */}
                            <div className="w-full flex justify-center items-center gap-2">
                                <Image src={"/images/circle-green.png"} alt="tick circle" height={30} width={30} />
                                <h3 className="font-bold font-montserrat text-xs w-[180px]">Unlimited product update</h3>
                            </div>
                            {/* third feature */}
                            <div className="w-full flex justify-center items-center gap-2">
                                <Image src={"/images/circle-green.png"} alt="tick circle" height={30} width={30} />
                                <h3 className="font-bold font-montserrat text-xs w-[180px]">Unlimited product update</h3>
                            </div>
                            {/* fourth feature */}
                            <div className="w-full flex justify-center items-center gap-2">
                                <Image src={"/images/circle-gray.png"} alt="tick circle" height={30} width={30} />
                                <h3 className="font-bold font-montserrat text-xs w-[180px]" >1GB  Cloud storage
                                </h3>
                            </div>
                            {/* fifth feature */}
                            <div className="w-full flex justify-center items-center gap-2">
                                <Image src={"/images/circle-gray.png"} alt="tick circle" height={30} width={30} />
                                <h3 className="font-bold font-montserrat text-xs w-[180px]">Email and community
                                    support
                                </h3>
                            </div>

                        </div>

                        <button className="mt-5 font-montserrat text-sm font-bold text-white w-[246px] h-[52px] bg-[#252B42] rounded-md">
                            Try for free
                        </button>

                    </div>

                    {/* Standard */}
                    <div className="col-span-1 h-[704px]  row-span-5  bg-[#252B42] flex flex-col justify-center items-center rounded-md border-[1px] border-[#23A6F0]">

                        <h1 className="font-montserrat text-2xl font-bold text-white mb-6">STANDARD</h1>

                        <h3 className="w-[160px] font-montserrat text-base font-bold text-white mb-8">Organize across all apps by hand</h3>

                        {/* price 0 dollars */}
                        <div className="flex justify-center gap-3 mb-9 items-center">
                            <p className="font-montserrat text-[40px] font-bold text-[#23A6F0]">9.99</p>

                            <div className="flex flex-col justify-center items-start gap-2 font-montserrat text-[#23A6F0] text-2xl font-bold">
                                $
                                <p className="text-sm">Per Month</p>
                            </div>

                        </div>

                        {/* Features */}
                        <div className="w-full gap-3 flex flex-col justify-center items-center text-white">
                            {/* first feature */}
                            <div className="w-full flex justify-center items-center gap-2">
                                <Image src={"/images/circle-green.png"} alt="tick circle" height={30} width={30} />
                                <h3 className="font-bold font-montserrat text-xs w-[180px]">Unlimited product update</h3>
                            </div>
                            {/* second feature */}
                            <div className="w-full flex justify-center items-center gap-2">
                                <Image src={"/images/circle-green.png"} alt="tick circle" height={30} width={30} />
                                <h3 className="font-bold font-montserrat text-xs w-[180px]">Unlimited product update</h3>
                            </div>
                            {/* third feature */}
                            <div className="w-full flex justify-center items-center gap-2">
                                <Image src={"/images/circle-green.png"} alt="tick circle" height={30} width={30} />
                                <h3 className="font-bold font-montserrat text-xs w-[180px]">Unlimited product update</h3>
                            </div>
                            {/* fourth feature */}
                            <div className="w-full flex justify-center items-center gap-2">
                                <Image src={"/images/circle-gray.png"} alt="tick circle" height={30} width={30} />
                                <h3 className="font-bold font-montserrat text-xs w-[180px]" >1GB  Cloud storage
                                </h3>
                            </div>
                            {/* fifth feature */}
                            <div className="w-full flex justify-center items-center gap-2">
                                <Image src={"/images/circle-gray.png"} alt="tick circle" height={30} width={30} />
                                <h3 className="font-bold font-montserrat text-xs w-[180px]">Email and community
                                    support
                                </h3>
                            </div>

                        </div>

                        <button className="mt-5 font-montserrat text-sm font-bold text-white w-[246px] h-[52px] bg-[#23A6F0] rounded-md">
                            Try for free
                        </button>

                    </div>

                    {/* Premium */}
                    <div className="lg:mt-10 col-span-1 h-[704px] row-span-5 lg:row-span-4 bg-white flex flex-col justify-center items-center rounded-md border-[1px] border-[#23A6F0]">

                        <h1 className="font-montserrat text-2xl font-bold text-black mb-6">PREMIUM</h1>

                        <h3 className="w-[160px] font-montserrat text-base font-bold text-[#737373] mb-8">Organize across all apps by hand</h3>

                        {/* price 0 dollars */}
                        <div className="flex justify-center gap-3 mb-9 items-center">
                            <p className="font-montserrat text-[40px] font-bold text-[#23A6F0]">19.99</p>

                            <div className="flex flex-col justify-center items-start gap-2 font-montserrat text-[#23A6F0] text-2xl font-bold">
                                $
                                <p className="text-sm">Per Month</p>
                            </div>

                        </div>

                        {/* Features */}
                        <div className="w-full gap-3 flex flex-col justify-center items-center">
                            {/* first feature */}
                            <div className="w-full flex justify-center items-center gap-2">
                                <Image src={"/images/circle-green.png"} alt="tick circle" height={30} width={30} />
                                <h3 className="font-bold font-montserrat text-xs w-[180px]">Unlimited product update</h3>
                            </div>
                            {/* second feature */}
                            <div className="w-full flex justify-center items-center gap-2">
                                <Image src={"/images/circle-green.png"} alt="tick circle" height={30} width={30} />
                                <h3 className="font-bold font-montserrat text-xs w-[180px]">Unlimited product update</h3>
                            </div>
                            {/* third feature */}
                            <div className="w-full flex justify-center items-center gap-2">
                                <Image src={"/images/circle-green.png"} alt="tick circle" height={30} width={30} />
                                <h3 className="font-bold font-montserrat text-xs w-[180px]">Unlimited product update</h3>
                            </div>
                            {/* fourth feature */}
                            <div className="w-full flex justify-center items-center gap-2">
                                <Image src={"/images/circle-gray.png"} alt="tick circle" height={30} width={30} />
                                <h3 className="font-bold font-montserrat text-xs w-[180px]" >1GB  Cloud storage
                                </h3>
                            </div>
                            {/* fifth feature */}
                            <div className="w-full flex justify-center items-center gap-2">
                                <Image src={"/images/circle-gray.png"} alt="tick circle" height={30} width={30} />
                                <h3 className="font-bold font-montserrat text-xs w-[180px]">Email and community
                                    support
                                </h3>
                            </div>

                        </div>

                        <button className="mt-5 font-montserrat text-sm font-bold text-white w-[246px] h-[52px] bg-[#252B42] rounded-md">
                            Try for free
                        </button>

                    </div>

                </div>



            </div>

            {/* trusted by */}
            <div className="mt-24 w-full flex flex-col justify-center items-center bg-[#fafafa]"   >

                <h4 className=" mt-5 text-xl font-montserrat">Trusted By Over 4000 Big Companies</h4>

                <div className='w-full bg-[#fafafa] h-[175px] mt-5 flex justify-evenly items-center flex-wrap'>
                    <Image src={"/images/Brands/fa-brands-1.png"} alt={"brands"} height={80} width={80} />
                    <Image src={"/images/Brands/fa-brands-2.png"} alt={"brands"} height={80} width={80} />
                    <Image src={"/images/Brands/fa-brands-3.png"} alt={"brands"} height={80} width={80} />
                    <Image src={"/images/Brands/fa-brands-4.png"} alt={"brands"} height={80} width={80} />
                    <Image src={"/images/Brands/fa-brands-5.png"} alt={"brands"} height={80} width={80} />
                    <Image src={"/images/Brands/fa-brands-6.png"} alt={"brands"} height={80} width={80} />
                </div>
            </div>



            {/* Pricing FAQs */}

            <div className="mt-20 w-full flex flex-col justify-center items-center">

                <h1 className="mb-5 font-montserrat font-bold text-[40px]">Pricing FAQs</h1>

                <p className="mb-16 text-center font-montserrat text-xl text-[#737373] md:w-[552px]">Problems trying to resolve the conflict between
                    the two major realms of Classical physics</p>

                {/* faqs */}
                <div className="w-full flex  justify-evenly items-center  lg:flex-nowrap flex-wrap">

                    {/* first div */}
                    <div className="flex gap-10 flex-col justify-center items-center">

                        {/* first: first div */}
                        <div className="font-montserrat flex gap-5">
                            <svg xmlns="http://www.w3.org/2000/svg" height="25px" viewBox="0 -960 960 960" width="25px" fill="#23A6F0"><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" /></svg>

                            <div className="w-[309px] flex flex-col justify-center items-center">
                                <h5 className="text-base font-bold text-black">the quick fox jumps over the lazy dog</h5>
                                <p className="text-sm text-[#737373]">Met minim Mollie non desert Alamo est sit cliquey
                                    dolor do met sent. RELIT official consequent door ENIM
                                    RELIT Mollie. Excitation venial consequent sent
                                    nostrum met.</p>
                            </div>
                        </div>
                        {/* first: second div */}
                        <div className="font-montserrat flex gap-5">
                            <svg xmlns="http://www.w3.org/2000/svg" height="25px" viewBox="0 -960 960 960" width="25px" fill="#23A6F0"><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" /></svg>

                            <div className="w-[309px] flex flex-col justify-center items-center">
                                <h5 className="text-base font-bold text-black">the quick fox jumps over the lazy dog</h5>
                                <p className="text-sm text-[#737373]">Met minim Mollie non desert Alamo est sit cliquey
                                    dolor do met sent. RELIT official consequent door ENIM
                                    RELIT Mollie. Excitation venial consequent sent
                                    nostrum met.</p>
                            </div>
                        </div>

                        {/*first: third div */}
                        <div className="font-montserrat flex gap-5">
                            <svg xmlns="http://www.w3.org/2000/svg" height="25px" viewBox="0 -960 960 960" width="25px" fill="#23A6F0"><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" /></svg>

                            <div className="w-[309px] flex flex-col justify-center items-center">
                                <h5 className="text-base font-bold text-black">the quick fox jumps over the lazy dog</h5>
                                <p className="text-sm text-[#737373]">Met minim Mollie non desert Alamo est sit cliquey
                                    dolor do met sent. RELIT official consequent door ENIM
                                    RELIT Mollie. Excitation venial consequent sent
                                    nostrum met.</p>
                            </div>
                        </div>

                    </div>

                    {/* Second div */}
                    <div className="flex gap-10 flex-col justify-center items-center">

                        {/* second: first div */}
                        <div className="font-montserrat flex gap-5">
                            <svg xmlns="http://www.w3.org/2000/svg" height="25px" viewBox="0 -960 960 960" width="25px" fill="#23A6F0"><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" /></svg>

                            <div className="w-[309px] flex flex-col justify-center items-center">
                                <h5 className="text-base font-bold text-black">the quick fox jumps over the lazy dog</h5>
                                <p className="text-sm text-[#737373]">Met minim Mollie non desert Alamo est sit cliquey
                                    dolor do met sent. RELIT official consequent door ENIM
                                    RELIT Mollie. Excitation venial consequent sent
                                    nostrum met.</p>
                            </div>
                        </div>
                        {/* second: second div */}
                        <div className="font-montserrat flex gap-5">
                            <svg xmlns="http://www.w3.org/2000/svg" height="25px" viewBox="0 -960 960 960" width="25px" fill="#23A6F0"><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" /></svg>

                            <div className="w-[309px] flex flex-col justify-center items-center">
                                <h5 className="text-base font-bold text-black">the quick fox jumps over the lazy dog</h5>
                                <p className="text-sm text-[#737373]">Met minim Mollie non desert Alamo est sit cliquey
                                    dolor do met sent. RELIT official consequent door ENIM
                                    RELIT Mollie. Excitation venial consequent sent
                                    nostrum met.</p>
                            </div>
                        </div>

                        {/*second: third div */}
                        <div className="font-montserrat flex gap-5">
                            <svg xmlns="http://www.w3.org/2000/svg" height="25px" viewBox="0 -960 960 960" width="25px" fill="#23A6F0"><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z" /></svg>

                            <div className="w-[309px] flex flex-col justify-center items-center">
                                <h5 className="text-base font-bold text-black">the quick fox jumps over the lazy dog</h5>
                                <p className="text-sm text-[#737373]">Met minim Mollie non desert Alamo est sit cliquey
                                    dolor do met sent. RELIT official consequent door ENIM
                                    RELIT Mollie. Excitation venial consequent sent
                                    nostrum met.</p>
                            </div>
                        </div>

                    </div>

                </div>


                <h3 className="mt-10 text-xl font-montserrat text-[#737373]">Haven’t got your answer? Contact our support</h3>

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
                    <Image src={"/images/team/logos_facebook.svg"} alt="twtitter" height={30} width={30}/>
                    <Image src={"/images/footer/instagram.svg"} alt="twtitter" height={30} width={30}/>
                    <Image src={"/images/team/logos_linkedin-icon.png"} alt="twtitter" height={30} width={30}/>
                </div>

            </div>


        </div>
    )
}
