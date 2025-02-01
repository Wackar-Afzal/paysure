import React from 'react';

const Banner = () => {
  return (
    <div  className={`flex items-center bg-cover bg-center h-banner-height w-full bannerImage relative md:h-[30rem] sm:h-[33rem] `}>
      <div data-aos="fade-right" className='flex flex-col space-y-8 absolute w-[45%] left-[5rem] md:space-y-6 md:w-[100%] md:left-[0px] md:mt-MMT md:p-MXpad'>
        <div className='flex flex-col space-y-6 md:space-y-4'>
        <h1>Simplifying <br/><span className="text-primary">Medical Billing</span> <br/>with Accuracy & Trust</h1>
        <p className='text-grey text-[20px]'>At PaySure, we streamline your medical billing process, ensuring precision, compliance, and fast reimbursements.</p>
        </div>

        <div className='flex space-x-3 sm:flex-col sm:space-y-2 sm:space-x-0'>
          <button className="text-[18px] flex justify-center items-center w-[10rem] h-[2.765rem] min-w-[6.875rem] bg-primary rounded-full text-white border border-primary transition-all duration-200 ease-linear hover:bg-[#fffefe] hover:text-black hover:border-[#000000]">
            Let's Connect
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
