import React from 'react'
import { icons } from '../../assets/icons';

const AboutBanner = () => {
  return (
    <div className='flex space-x-[6.5rem] lg:flex-col-reverse lg:gap-10 lg:space-x-0 lg:space-y-0'>
    <div className='flex flex-col space-y-6 lg:w-full'>
      <button className='btn font-medium' style={{border:"none",backgroundColor:"#14A09D29",width:"fit-content", borderRadius:"4px",color:"var(--primary)"}}>What About Us</button>

      <div className='flex flex-col space-y-5'>
      <h3 className='text-left text-[31px]'>Joining Hands With <span className='text-primary'>Company Name</span></h3>
      <h6 className='text-grey'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a augue est praesent at risus in dolor viverra facilisis. Vivamus fermentum lorem neque, non congue.</h6>
      </div>

      <div  className='flex flex-col space-y-3 w-[25.8rem] justify-between sm:w-full sm:space-y-1'>

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

      </div>

      <button className="text-[18px] flex justify-center items-center w-[10rem] h-[2.765rem] min-w-[6.875rem] bg-primary rounded-full text-white border border-primary transition-all duration-200 ease-linear hover:bg-[#fffefe] hover:text-black hover:border-[#000000]" 
      >Request Demo</button>
    </div>

      <div className='w-[424px] md:w-full'>
        <img src={'./aboutImg1.png'} alt="" />
      </div>
  </div>
  )
}

export default AboutBanner