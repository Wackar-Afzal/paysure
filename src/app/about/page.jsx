"use clinet"

import React from "react";
import AboutBanner from "@/components/AboutPageComponents/AboutBanner";
import AboutImpact from "@/components/AboutPageComponents/AboutImpact";

import Speciality from "@/components/Speciality/Speciality";
import AboutForm from "@/components/AboutPageComponents/AboutForm";

const Page = () => {
  return (
    <div>
      <div className="flex flex-col mt-[2.3rem] items-center">
        <div className="flex flex-col items-center gap-10">
          <AboutBanner />
          <AboutImpact />
          <Speciality />
          {/* <WhatClientSay /> */}
          <AboutForm />
        </div>

        <div className="flex flex-col my-[100px] space-y-[1.3rem] justify-center items-center w-full h-[15rem] rounded-[1rem] FaqImage md:my-[50px]  sm:h-[20rem] sm:px-MXpad xs:h-[20rem] xs:space-y-[0.6rem]">
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
        </div>
      </div>
    </div>
  );
};

export default Page;
