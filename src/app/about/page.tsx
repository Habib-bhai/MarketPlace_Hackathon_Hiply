import Image from 'next/image'
import React from 'react'

export default function page() {
  return (
    <div className='w-screen overflow-x-hidden'>

      {/* hero section */}
      <div className='w-full flex justify-center items-center flex-wrap relative '>

        {/*hero image  */}
        <Image src={"/images/aboutpage/filter.png"} alt='image' height={100} width={100} className='w-[40%] object-cover h-[545px] ' />

        <Image src={"/images/aboutpage/image-part.png"} alt='bg-hero' height={100} width={100} className='w-[60%] h-[545px] object-cover' />

        {/* headings and other text */}
        <div className='absolute w-[80%] flex flex-col justify-center items-start'>

          <h3 className='text-base font-montserrat text-black font-bold'>ABOUT COMPANY</h3>

          <h1 className='my-5 text-[58px] font-montserrat text-black font-bold'>ABOUT US</h1>

          <p className='mb-4 w-[376px] text-xl text-[#737373]'>We know how large objects will act,
            but things on a small scale
          </p>

          <button className='w-[195px] h-[52px] bg-[#23A6F0] rounded-sm font-montserrat font-bold text-white text-sm'>Get Quote Now</button>
        </div>

      </div>


      {/* paragraphs */}
      <div className='w-full flex justify-center ictems-center flex-wrap'>

        {/* first div */}
        <div className='flex flex-col justify-center items-start gap-5'>
          <h4 className='text-[#E74040] font-montserrat text-sm font-medium'>Problems trying</h4>

          <h1 className='w-[394px] text-2xl font-montserrat font-bold '>Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.</h1>
        </div>

        {/* paragraph */}
        <p className='font-montserrat text-[#737373] text-sm mt-10 md:w-[529px]'>
          Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
        </p>


        {/* Achievements */}
        <div className='mt-20 mb-20 w-full gap-[50px] flex flex-wrap justify-center items-center'>

          {/* first */}
          <div className='flex flex-col gap-1 justify-center items-center'>
            <h1 className='text-[58px] font-montserrat font-bold text-black'>15K</h1>
            <p className='text-[#737373] text-base font-montserrat font-bold'>Happy Customers</p>
          </div>

          {/* second */}
          <div className='flex flex-col gap-1 justify-center items-center'>
            <h1 className='text-[58px] font-montserrat font-bold text-black'>150K</h1>
            <p className='text-[#737373] text-base font-montserrat font-bold'>Monthly Visitors</p>
          </div>

          {/* third */}
          <div className='flex flex-col gap-1 justify-center items-center'>
            <h1 className='text-[58px] font-montserrat font-bold text-black'>15</h1>
            <p className='text-[#737373] text-base font-montserrat font-bold'>Countries  Worldwide</p>
          </div>

          {/* fourth */}
          <div className='flex flex-col gap-1 justify-center items-center'>
            <h1 className='text-[58px] font-montserrat font-bold text-black'>100+</h1>
            <p className='text-[#737373] text-base font-montserrat font-bold'>Top Partners</p>
          </div>


        </div>

        {/* vid */}
        <div className='w-full relative flex justify-center items-center'>

          <div className='relative w-full lg:w-[989px]   h-[540px] '>
            <Image src={"/images/aboutpage/media-bg-cover.png"} alt='scenary' height={100} width={100} className=' w-full h-full object-cover lg:rounded-2xl' />

            <div className='absolute top-1/2 left-[45%] w-[92px] h-[92px] rounded-full bg-[#23A6F0] flex justify-center items-center'>
              <Image src={"/images/aboutpage/play-icon.png"} alt='play' height={20} width={20} />
            </div>

          </div>

        </div>

        {/* Our Team */}
        <div className='mt-20 mb-20 w-full flex flex-col justify-center items-center'>


          <h1 className='font-montserrat text-[40px] font-bold text-black'>Meet Our Team</h1>
          <p className='mt-3 mb-20  md:w-[455px] font-montserrat text-sm text-center text-[#737373]'>Problems trying to resolve the conflict between
            the two major realms of Classical physics: Newtonian mechanics </p>


          {/* Team members card */}
          <div className='flex justify-center items-center gap-[30px] flex-wrap'>
            {/* first card */}
            <div className='w-[316px] h-[383px] flex flex-col justify-center items-center'>
              <Image src={"/images/aboutpage/team-1-user-1.jpg"} alt='team member' height={100} width={100} className='w-full h-[231px] object-cover' />

              <h2 className='mt-8 text-base font-montserrat font-bold text-black'>Username</h2>
              <p className='mt-2 mb-3 text-sm font-montserrat font-bold text-[#737373]'>Profession</p>
              <div className='flex justify-center gap-5 items-center'>
                <Image src={"/images/footer/facebook.svg"} alt='fb' height={30} width={30} />
                <Image src={"/images/footer/instagram.svg"} alt='insta' height={30} width={30} />
                <Image src={"/images/footer/twitter.svg"} alt='x' height={30} width={30} />
              </div>

            </div>

            {/* second card */}
            <div className='w-[316px] h-[383px] flex flex-col justify-center items-center'>
              <Image src={"/images/aboutpage/team-1-user-2.jpg"} alt='team member' height={100} width={100} className='w-full h-[231px] object-cover' />

              <h2 className='mt-8 text-base font-montserrat font-bold text-black'>Username</h2>
              <p className='mt-2 mb-3 text-sm font-montserrat font-bold text-[#737373]'>Profession</p>
              <div className='flex justify-center gap-5 items-center'>
                <Image src={"/images/footer/facebook.svg"} alt='fb' height={30} width={30} />
                <Image src={"/images/footer/instagram.svg"} alt='insta' height={30} width={30} />
                <Image src={"/images/footer/twitter.svg"} alt='x' height={30} width={30} />
              </div>

            </div>



            {/* third card */}
            <div className='w-[316px] h-[383px] flex flex-col justify-center items-center'>
              <Image src={"/images/aboutpage/team-1-user-3.jpg"} alt='team member' height={100} width={100} className='w-full h-[231px] object-cover' />

              <h2 className='mt-8 text-base font-montserrat font-bold text-black'>Username</h2>
              <p className='mt-2 mb-3 text-sm font-montserrat font-bold text-[#737373]'>Profession</p>
              <div className='flex justify-center gap-5 items-center'>
                <Image src={"/images/footer/facebook.svg"} alt='fb' height={30} width={30} />
                <Image src={"/images/footer/instagram.svg"} alt='insta' height={30} width={30} />
                <Image src={"/images/footer/twitter.svg"} alt='x' height={30} width={30} />
              </div>

            </div>


          </div>



        </div>


        {/* Big companies */}
        <div className='bg-[#fafafa] w-full flex flex-col justify-center items-center'>

          {/* heading and para */}
          <h1 className='mb-5 mt-5 font-montserrat text-4xl font-bold text-black'>Big Companies Are Here</h1>

          <p className='mt-3 mb-20  md:w-[440px] font-montserrat text-sm text-center text-[#737373]'>Problems trying to resolve the conflict between
            the two major realms of Classical physics: Newtonian mechanics </p>

          {/* brand logos */}
          <div className='w-full bg-[#fafafa] h-[175px]  flex justify-evenly items-center flex-wrap mb-5'>
            <Image src={"/images/Brands/fa-brands-1.png"} alt={"brands"} height={80} width={80} />
            <Image src={"/images/Brands/fa-brands-2.png"} alt={"brands"} height={80} width={80} />
            <Image src={"/images/Brands/fa-brands-3.png"} alt={"brands"} height={80} width={80} />
            <Image src={"/images/Brands/fa-brands-4.png"} alt={"brands"} height={80} width={80} />
            <Image src={"/images/Brands/fa-brands-5.png"} alt={"brands"} height={80} width={80} />
            <Image src={"/images/Brands/fa-brands-6.png"} alt={"brands"} height={80} width={80} />
          </div>



        </div>

        {/* work with us */}
        <div className='w-full flex justify-center flex-col lg:flex-row items-center h-[636px]'>

          <div className=' w-full lg:w-[60%] h-full flex flex-col justify-center items-start py-10 lg:py-0 pl-[10%] bg-[#2a7cc7]'>
            <h4 className='font-montserrat mb-4 text-base text-white font-bold'>WORK WITH US</h4>
            <h1 className='text-[40px] font-montserrat mb-4 font-bold text-white'>Now Let’s grow Yours</h1>
            <p className='font-montserrat text-sm  md:w-[440px] mb-3 text-white '>The gradual accumulation of information about atomic and small-scale behavior during the first quarter of the 20th </p>

            <button className='w-[132px] h-[52px] border-[1px] border-white rounded-md text-white'>Button</button>

          </div>
          <Image src={"/images/aboutpage/image-girl.png"} alt='girl' height={ 100} width={100} className='w-[50%] h-full object-cover'/>
        </div>


      </div>

    </div>
  )
}
