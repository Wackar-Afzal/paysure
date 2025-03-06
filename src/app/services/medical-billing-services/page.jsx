"use clinet";

import React from "react";
import About from "@/components/About/About";
import Why from "@/components/Why/Why";
import Work from "@/components/work/Work";
import Homebaner2 from "@/components/homebnaaer2/Homebanner2";
import {  home2ndbannericons  } from "@/assets/icons";
import Offers from "@/components/offers/Offers";
import Bookdemo from "@/components/bookdemo/Bookdemo";
import FooterMessage from "@/components/FooterMessage/FooterMessage";


const content = {
  card_per_row:3,
  h1:"Our Medical Billing Services",
  p1:"PaySure is a leading medical billing consulting firm specializing in revenue cycle optimization. Our expert consultants work closely with healthcare providers to identify inefficiencies, reduce claim denials, and expedite reimbursements for sustained financial success.",
  p2:"Our medical billing consulting group offers strategic guidance and hands-on support to enhance billing processes, technology, and staff proficiency. Our expert solutions empower healthcare practices to thrive with greater efficiency, accuracy, and financial success.",

  "bannerIcons": {
    "billblack": home2ndbannericons.billblack,
    "revenue": home2ndbannericons.clock,
    "clock": home2ndbannericons.revenu
  },
  "sections": [
    {
      "icon": "billblack",
      "title": "Optimized RCM",
      "description": "PaySure medical billing consultancy service optimizes the revenue cycle end-to-end to accelerate patient intake, expedite claims, and maximize collections. "
    },
    {
      "icon": "revenue",
      "title": "Increased Revenue",
      "description": "PaySure medical billing consultation group works closely with health centers to guarantee claims are submitted properly. With reimbursements coming in “full” and “on time”, health facilities thrive."
    },
    {
      "icon": "clock",
      "title": "Fast Claim Processing",
      "description": "PaySure medical billing consulting solutions optimize doctor’s cash flow. "
    }
  ]
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


const Page = () => {
  return (
    <div>
      <div className="flex flex-col mt-[2.3rem] items-center">
        <About content={content} showbuttons={false}/>
        <Why content={why}/>
        <Work />
        <Offers/>
        <FooterMessage/>

      </div>
    </div>
  );
};

export default Page;
