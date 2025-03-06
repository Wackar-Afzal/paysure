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
    p:"PaySure is more than just a medical billing company – we are your partner in the healthcare journey. Our expert team refines every aspect of your billing process, from coding and denial management to ensuring fast reimbursement and effective follow-up. With the right tools and techniques, we tackle any billing challenge, no matter the scale or specialty of your practice. With PaySure, you can leave billing headaches behind and focus on what truly matters – exceptional patient care.",
    button:false,
    backgroundimg:"/aboutheader2.png"
  }
  const aboutBanner={
    img:"./aboutImg1.png",
    subH:"Our Mission",
    h_1:"Joining Hands With",
    hspan:"Doctors",
    h_2:"",
    p:"Doctors play a critical role in patient care, but medical billing often presents a significant challenge. The complexities of billing and coding, combined with the risk of non-compliance, errors, fines, and audits, can divert their attention from what matters most—providing excellent care. At PaySure, we provide innovative and trustworthy medical billing solutions that handle these complexities for you. Our team of experts manages all aspects of billing and coding, ensuring accuracy and compliance. This allows healthcare providers to focus on their practice, while we optimize their billing processes to maximize revenue. Over 1,000 providers have benefited from our services, improving cash flow and streamlining their operations, all while avoiding the pitfalls of billing errors and costly audits.",
  }

  const why = {
    heading: "WHY CHOOSE US ?",
    subheading: "PaySure Medical Billing Consulting – Ensuring Timely Payments for Doctors",
    description: [
      "At PaySure, our expert medical billing consultants specialize in optimizing revenue for healthcare providers. We streamline claim filing, coding accuracy, and A/R follow-ups to ensure you receive every dollar earned—on time.",
      "We assist practices large and small in overcoming lost, delayed, or underpaid claims. Engage our 24/7 medical billing and coding consultancy for the medical billing help your practice needs."
    ],
    benefits: [
      "Maximize reimbursements & improve cash flow",
      "Expedite claims processing & reduce payment delays",
      "Identify & resolve billing issues efficiently",
      "Automate workflows to minimize administrative burden",
      "Ensure compliance with regulatory requirements",
      "Eliminate revenue leakage & costly billing errors",
      "Reduce operational costs—no need for in-house billing staff or expensive software"
    ],
    footer: "Partner with us for 24/7 support and seamless medical billing solutions.",
    image: "/whychoose.png"
  };
  
  return (
    <div>
      <div className="flex flex-col items-center" >
        <div className="flex flex-col items-center gap-10 ">
          <Banner data={data}/>
          <AboutBanner aboutBanner={aboutBanner} />
          {/* <AboutImpact /> */}
          <Why content={why}/>
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
