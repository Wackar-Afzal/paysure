"use clinet"

import React from "react";
import AboutBanner from "@/components/AboutPageComponents/AboutBanner";
import AboutImpact from "@/components/AboutPageComponents/AboutImpact";

import Speciality from "@/components/Speciality/Speciality";
import AboutForm from "@/components/AboutPageComponents/AboutForm";
import Banner from "@/components/HomeComponents/Banner/Banner";
import Why from "@/components/Why/Why";
import Offers from "@/components/offers/Offers";

const Page = () => {
  const data={
    // h1_1:"About Us",
    span:"About Us",
    // h1_2:"Accuracy you can trust",
    p:"PaySure,  is more than a medical billing company. We are your collaborator in the art of health care. Our expert staff sculpts the fine details of your billing process, from coding and denial management to fast reimbursement and follow-up. We wield the tools and techniques to shape any billing challenge, regardless of the scale or specialty of your practice. With PaySure, you can drop the mic on billing woes and bask in the spotlight of patient care.",
    button:false,
    backgroundimg:"/aboutheader2.png"
  }
  const aboutBanner={
    img:"./aboutImg1.png",
    subH:"Our Mission",
    h_1:"Joining Hands With",
    hspan:"Doctors",
    h_2:"",
    p:"Doctor are the heroes of health, but billing is their kryptonite. That’s the harsh reality that many doctors face when they deal with complexities and risks of medical billing and coding. They are meant to be the healers of humanity, but they often end up in hot water due to non-compliance, errors, fines, penalties, and audits. That’s why we decided to transform the medical billing industry with our cutting-edge and trustworthy solutions. We crack the hard nuts of billing and coding, so that providers can focus on healing, while we manage their billing. Our medical billing solutions have helped 1000+ providers, who were once up to their neck in trouble, optimize their processes and ramp up their cash flow.",
  }
  return (
    <div>
      <div className="flex flex-col items-center" >
        <div className="flex flex-col items-center gap-10 ">
          <Banner data={data}/>
          <AboutBanner aboutBanner={aboutBanner} />
          {/* <AboutImpact /> */}
          <Why/>
          {/* <Offers/> */}
          {/* <Speciality /> */}
          {/* <WhatClientSay /> */}
          <AboutForm />
        </div>

        {/* <div className="flex flex-col my-[100px] space-y-[1.3rem] justify-center items-center w-full h-[15rem] rounded-[1rem] FaqImage md:my-[50px]  sm:h-[20rem] sm:px-MXpad xs:h-[20rem] xs:space-y-[0.6rem]">
          <h2 className="text-white">Get your first demo 3D model</h2>
          <div>
            <h6 className="text-white text-center">
              You can register on our platform by using the login button above
              or
            </h6>
            <h6 className="text-white text-center">
              submit your contact details here.
            </h6>
          </div>
          <button className="secondary_btn" style={{ borderColor: "white" }}>
            Request Demo
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default Page;
