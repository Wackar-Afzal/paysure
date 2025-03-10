import React from 'react'
import { icons } from '../../assets/icons';
import Link from 'next/link';
import Image from 'next/image';

const AboutBanner = ({aboutBanner,imgRight=false}) => {
  return (
    <div className={`flex ${imgRight?"flex-row-reverse":null}  lg:flex-col-reverse gap-[3rem] p-[4rem] sm:p-[1rem]`}>
            <div className='md:w-full'>
        <Image
                        src={aboutBanner.img}
                        alt="Optimized Image"
                        width={0}
                        height={0}
                        sizes="100%"
                        //loading="lazy"
                        style={{ width: '100%', height: 'auto' }}
                      placeholder="blur" 
                      blurDataURL={`https://www.paysure.site${aboutBanner.img.replace("/", "lowres_")}`}
                      />
      </div>
    <div className='flex flex-col space-y-6'>
      {aboutBanner.span?<span className='bg-primary text-white py-2 text-[18px] !w-[max-content] !border-none !rounded-none' >{aboutBanner.subH}</span>:null}

      <div className='flex flex-col space-y-5 w-full'>
      <h3 className='text-left text-[31px]'>{aboutBanner.h_1} {aboutBanner.hspan?<span className='text-primary'>{aboutBanner.hspan}</span>:null}</h3>
      <p className='text-grey w-[50vw] md:w-full'>{aboutBanner.p}</p>
      </div>
      {aboutBanner.button? <Link href={"/#contact"} className='bg-primary text-white btn px-[1rem]   !w-[max-content] !border-none' >{aboutBanner.button}</Link>:null}
    </div>


  </div>
  )
}

export default AboutBanner