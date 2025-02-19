import React from 'react'
import { icons } from '../../assets/icons';
import Link from 'next/link';

const AboutBanner = ({aboutBanner,imgRight=false}) => {
  return (
    <div className={`flex ${imgRight?"flex-row-reverse":null} space-x-[6.5rem] lg:flex-col-reverse lg:gap-10 lg:space-x-0 lg:space-y-0 p-[4rem]`}>
            <div className=' md:w-full'>
        <img src={aboutBanner.img} alt="" className='cover w-50%' />
      </div>
    <div className='flex flex-col space-y-6 lg:w-full'>
      {aboutBanner.span?<span className='bg-primary text-white px-4 py-2 text-[18px] !w-[max-content] !border-none !rounded-none' >{aboutBanner.subH}</span>:null}

      <div className='flex flex-col space-y-5'>
      <h3 className='text-left text-[31px]'>{aboutBanner.h_1} {aboutBanner.hspan?<span className='text-primary'>{aboutBanner.hspan}</span>:null}</h3>
      <p className='text-grey w-[50vw]'>{aboutBanner.p}</p>
      </div>
      {aboutBanner.button? <Link href={"./contact"} className='bg-primary text-white px-4 py-2 text-[18px] !w-[max-content] !border-none !rounded-none' >{aboutBanner.button}</Link>:null}
    </div>


  </div>
  )
}

export default AboutBanner