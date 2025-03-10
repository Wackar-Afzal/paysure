import Link from 'next/link';
import React from 'react';

const Banner = ({data}) => {

  return (
    <div  className={`flex items-center bg-cover bg-center h-banner-height w-full bg-gradient-to-r from-slate-50 to-blue-200 bannerImage relative md:h-[30rem] sm:h-[33rem] `} style={{ backgroundImage: `url(${data.backgroundimg})` }}>
      <div data-aos="fade-right" className='flex flex-col space-y-8 absolute w-[45%] left-[5rem] md:space-y-6 md:w-[100%] md:left-[0px] md:mt-MMT md:p-MXpad'>
        <div className='flex flex-col space-y-6 md:space-y-4'>
        <h1>{data.h1_1}
          <br/>
        <span className="text-primary">{data.span}</span>
         <br/>
         {data.h1_2}</h1>
        <p className='text-grey text-[20px]'>{data.p}</p>
        </div>
          {data.button?  <div className='flex space-x-3 sm:flex-col sm:space-y-2 sm:space-x-0'>
          <Link href={`${data.link}`} className="btn w-[max-content]">
            Let's Connect
          </Link>
        </div>:null
        }
      </div>
    </div>
  );
};

export default Banner;
