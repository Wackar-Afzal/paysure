import React from 'react';
import { footerIcons } from "../../assets/icons"
import Link from 'next/link';
// font-poppins text-base font-normal leading-[1.3125rem] text-left
const Footer = () => {
  return (
    <div data-aos="fade-up" className="flex bg-white text-secondary py-[2.8rem] px-[5.6rem] gap-[3rem] md:p-MXpad lg:flex-wrap md:gap-[2rem]">

      <div className="flex flex-col gap-[.8rem] w-[30%] md:w-[100%] bg-white'">
  {/* <h3 className="font-poppins text-[1.2rem] font-semibold leading-[1.75rem] text-left text-secondary">Logo</h3> */}
  <div className='flex space-x-0 items-center'>
<Link href='/' className='flex justify-center items-center gap-2'>
<img className='w-7' src='/logo.png'/>
<h1 className='text-primary text-[25px] leading-[0px] '>PaySure</h1>
</Link>
</div>

  <p className=" text-sm font-poppins font-light text-left">We specialize in connecting customers with top-rated service providers for all their needs, ensuring quality and reliability.</p>
</div>
<div className="flex flex-col gap-[.8rem] w-[15%] md:w-[100%]">
        <h3 className=" text-secondary font-poppins text-[1rem] font-semibold leading-[1.75rem] text-left"> Quick Links</h3>
        <div className="flex flex-col gap-[.3rem]">
          <Link href="/" className="text-secondary font-poppins text-[0.85rem] font-normal leading-[1.31rem]">Home</Link>
          <Link href="/about" className="text-secondary font-poppins text-[0.85rem] font-normal leading-[1.31rem] ">About</Link>
          <Link href="/#contact" className="text-secondary font-poppins text-[0.85rem] font-normal leading-[1.31rem]">Contact</Link>
          <Link href="/#faqs" className="text-secondary font-poppins text-[0.85rem] font-normal leading-[1.31rem]">FAQ</Link>
        </div>
      </div>
      <div className="flex flex-col gap-[.8rem] w-[15%] md:w-[100%]">
        <h3 className=" text-secondary font-poppins text-[1rem] font-semibold leading-[1.75rem] text-left">Services</h3>
        <div className="flex flex-col gap-[.3rem]">
          <Link href="/services/medical-billing-services" className="text-secondary font-poppins text-[0.85rem] font-normal leading-[1.31rem]">Medical Billing </Link>
          <Link href="/services/medical-coding-service" className="text-secondary font-poppins text-[0.85rem] font-normal leading-[1.31rem]">Medical Billing Audit </Link>
          <Link href="/services/medical-coding-service" className="text-secondary font-poppins text-[0.85rem] font-normal leading-[1.31rem] ">Medical Coding </Link>
          <Link href="/services/medical-credentialing-service" className="text-secondary font-poppins text-[0.85rem] font-normal leading-[1.31rem] ">Credentialing </Link>
          <Link href="/services/rcm" className="text-secondary font-poppins text-[0.85rem] font-normal leading-[1.31rem]">RCM</Link>
          <Link href="/services/healthcare-seo" className="text-secondary font-poppins text-[0.85rem] font-normal leading-[1.31rem]">Healthcare Seo</Link>
        </div>
      </div>




      <div className="flex flex-col  gap-[.8rem] w-[30%] md:w-[100%]">
      <div className="flex flex-col gap-[.8rem] ">
        <h3 className="text-secondary font-poppins text-[1rem] font-semibold leading-[1.75rem] text-left">Let's Connect</h3>
        <div className="flex flex-col">
          {/* <div className="flex items-center gap-[.5rem] mb-[0.5rem]">
            <div >
                {footerIcons.location}
            </div>
            <p className='font-poppins text-[0.85rem] font-normal leading-[1.31rem] whitespace-nowrap'>123 Maple Avenue, Greenfield, <br/> CA 93927, USA</p>
          </div> */}
          {/* <div className="flex items-center gap-[.5rem] mb-[0.5rem] ">
          <div >
                {footerIcons.phone}
            </div>
            <p className='font-poppins text-[0.85rem] font-normal leading-[1.31rem] '>+1(415) 867-6309</p>
          </div> */}
          <div >
            <a href="mailto:youremail@example.com" className="flex items-center gap-[.5rem] mb-[0.5rem]">
          <div >
                {footerIcons.email}
            </div>
            <p className='font-poppins text-[0.85rem] font-normal leading-[1.31rem] '>info@paysure.site</p>
            </a>
          </div>
        </div>
      </div>
        {/* <h3 className="text-secondary font-poppins text-[1rem] font-semibold leading-[1.75rem] text-left">Follow Us</h3>
        <div className="flex gap-[1rem] size-50">
          <div className='bg-white rounded-full p-[.5rem]'>
            <Link href="facebook.com">{footerIcons.fb}</Link>
          </div>
          <div className='bg-white rounded-full  p-[.5rem] '>
          <Link href="instagram.com">{footerIcons.insta}</Link>
          </div>
          <div className='bg-white rounded-full p-[.5rem]'>
          <Link href="linkedin.com">{footerIcons.linkedIn}</Link>
          </div>
        </div> */}
        <h3 className="text-secondary font-poppins text-[1rem] font-semibold leading-[1.75rem] text-left">Newsletter Signup</h3>
        <div className="flex justify-center items-center">
          <input type="email" placeholder="Enter email Address" className=" font-poppins !text-[0.79rem] !font-normal !leading-[1.31rem] w-full py-[0.5rem] !border-primary !border-r-0 rounded-[5px] !rounded-r-none bg bg-transparent !placeholder-secondary lg:h-[2.5rem]" />
          <button type="submit" className=" h-full bg-transparent text-secondary py-[0.5rem] px-[1.1rem] rounded-[5px] cursor-pointer  !border-primary border-l-0 rounded-[5px]  border-[1px] rounded-l-none  lg:h-[2.5rem]">
            {footerIcons.plane}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;