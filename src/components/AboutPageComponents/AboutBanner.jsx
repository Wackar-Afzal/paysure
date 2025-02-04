import React from 'react'
import { icons } from '../../assets/icons';

const AboutBanner = () => {
  return (
    <div className='flex space-x-[6.5rem] lg:flex-col-reverse lg:gap-10 lg:space-x-0 lg:space-y-0 p-[4rem]'>
            <div className=' md:w-full'>
        <img src={'./aboutImg1.png'} alt="" />
      </div>
    <div className='flex flex-col space-y-6 lg:w-full'>
      <span className='bg-primary text-white px-4 py-2 text-[18px] !w-[max-content] !border-none !rounded-none' >Our Mission</span>

      <div className='flex flex-col space-y-5'>
      <h3 className='text-left text-[31px]'>Joining Hands With <span className='text-primary'>Doctors</span></h3>
      <p className='text-grey w-[50vw]'>Doctor are the heroes of health, but billing is their kryptonite. That’s the harsh reality that many doctors face when they deal with complexities and risks of medical billing and coding. They are meant to be the healers of humanity, but they often end up in hot water due to non-compliance, errors, fines, penalties, and audits. That’s why we decided to transform the medical billing industry with our cutting-edge and trustworthy solutions. We crack the hard nuts of billing and coding, so that providers can focus on healing, while we manage their billing. Our medical billing solutions have helped 1000+ providers, who were once up to their neck in trouble, optimize their processes and ramp up their cash flow.</p>
      </div>

      {/* <div  className='flex flex-col space-y-3 w-[25.8rem] justify-between sm:w-full sm:space-y-1'>

        <div className='flex justify-between sm:flex-col sm:items-start sm:space-y-1'>
          <div className='flex space-x-2 justify-center items-center'>
            {icons.tick}
            <h6>Intervention Success</h6>
          </div>
          <div className='flex space-x-2 justify-center items-center'>
            {icons.tick}
            <h6>Intervention Success</h6>
          </div>
        </div>
       

        <div className='flex justify-between sm:flex-col sm:items-start sm:space-y-1'>
          <div className='flex space-x-2 justify-center items-center'>
            {icons.tick}
            <h6>Intervention Success</h6>
          </div>
          <div className='flex space-x-2 justify-center items-center'>
            {icons.tick}
            <h6>Intervention Success</h6>
          </div>
        </div>

        <div className='flex justify-between sm:flex-col sm:items-start sm:space-y-1'>
          <div className='flex space-x-2 justify-center items-center'>
            {icons.tick}
            <h6>Intervention Success</h6>
          </div>
          <div className='flex space-x-2 justify-center items-center'>
            {icons.tick}
            <h6>Intervention Success</h6>
          </div>
        </div>

      <div className='flex justify-between sm:flex-col sm:items-start sm:space-y-1'>
          <div className='flex space-x-2 justify-center items-center'>
            {icons.tick}
            <h6>Intervention Success</h6>
          </div>
          <div className='flex space-x-2 justify-center items-center'>
            {icons.tick}
            <h6>Intervention Success</h6>
          </div>
        </div>

      </div> */}

      {/* <button className="text-[18px] flex justify-center items-center w-[10rem] h-[2.765rem] min-w-[6.875rem] bg-primary rounded-full text-white border border-primary transition-all duration-200 ease-linear hover:bg-[#fffefe] hover:text-black hover:border-[#000000]" 
      >Request Demo</button> */}
    </div>


  </div>
  )
}

export default AboutBanner