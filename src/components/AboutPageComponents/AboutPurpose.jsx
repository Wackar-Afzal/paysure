import Image from 'next/image'
import React from 'react'

const AboutPurpose = () => {
  return (
    <div className='w-full pt-[75px] space-y-10 md:pt-[30px]'>
        <h3 className='font-semibold text-center'>We are Creating 3D Model For</h3>
        <div className='flex space-x-8 w-full justify-center xl:flex-wrap xl:space-x-0 xl:gap-[1rem]'>
                    <div className='flex  flex-col space-y-8 items-center justify-center w-[200px] h-[200px] border border-[2px] rounded-[16px] border-lightGrey hover:cursor-pointer  hover:cursor-pointer hover:shadow-card-shadow transition-shadow duration-300'>
                        {/* <img className='w-[6rem]' src={require('../../assets/kidney.png')} alt="" /> */}
                        <Image
                            src={require('../../assets/kidney.png')}
                            alt="Optimized Image"
                            width={0}
                            height={0}
                            sizes="100%"
                            loading="lazy"
                            style={{ width: '100%', height: 'auto' }}
                            className='w-[6rem]' 
                            // placeholder="blur" 
                            // blurDataURL={`/low/aboutImg1.png`}
                            />

                        <h4 className='text-center text-black'>Kidney</h4>
                    </div>

                    <div className='flex flex-col space-y-8 items-center justify-center w-[200px] h-[200px] border-2 rounded-[16px] border-lightGrey  hover:cursor-pointer hover:shadow-card-shadow transition-shadow duration-300'>
                        <img className='w-[6.5rem]' src={require('../../assets/lungs.png')} alt="" />
                        <h4 className='text-center text-black'>Lung</h4>
                    </div>
                    <div className='flex flex-col space-y-8 items-center justify-center w-[200px] h-[200px] border-2 rounded-[16px] border-lightGrey hover:cursor-pointer  hover:cursor-pointer hover:shadow-card-shadow transition-shadow duration-300'>
                        <img className='w-[6rem]' src={require('../../assets/liver.png')} alt="" />
                        <h4 className='text-center text-black'>Liver</h4>
                    </div>
                    <div className='flex flex-col space-y-8 items-center justify-center w-[200px] h-[200px] border-2 rounded-[16px] border-lightGrey hover:cursor-pointer  hover:cursor-pointer hover:shadow-card-shadow transition-shadow duration-300'>
                        <img className='w-[5rem]' src={require('../../assets/colorectal.png')} alt="" />
                        <h4 className='text-center text-black'>Colorectal</h4>
                    </div>
                    <div className='flex flex-col space-y-8 items-center justify-center w-[200px] h-[200px] border-2 rounded-[16px] border-lightGrey hover:cursor-pointer  hover:cursor-pointer hover:shadow-card-shadow transition-shadow duration-300'>
                        <img className='w-[5rem]' src={require('../../assets/prostate.png')} alt="" />
                        <h4 className='text-center text-black'>Prostate</h4>
                    </div>

        </div>
    </div>
  )
}

export default AboutPurpose