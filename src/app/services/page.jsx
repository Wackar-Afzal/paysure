"use clinet";

import React from "react";
import About from "@/components/About/About";
import Why from "@/components/Why/Why";
import Work from "@/components/work/Work";
import Homebaner2 from "@/components/homebnaaer2/Homebanner2";
import {  home2ndbannericons  } from "../../assets/icons";


const content = {
  "bannerIcons": {
    "billblack": home2ndbannericons.billblack,
    "revenue": home2ndbannericons.clock,
    "clock": home2ndbannericons.revenu
  },
  "sections": [
    {
      "icon": "billblack",
      "title": "Optimized RCM",
      "description": "PaySure medical billing consultancy service optimizes the revenue cycle end-to-end to accelerate patient intake, expedite claims, and maximize collections. The result? More cash on hand, lower expenses, and happier patients."
    },
    {
      "icon": "revenue",
      "title": "Increased Revenue",
      "description": "PaySure medical billing consultation group works closely with health centers to guarantee claims are submitted properly. With reimbursements coming in “full” and “on time”, health facilities thrive. As consultants, we enable long-term revenue growth."
    },
    {
      "icon": "clock",
      "title": "Fast Claim Processing",
      "description": "PaySure medical billing consulting solutions optimize doctor’s cash flow. Our consultants identify issues delaying payments and provide electronic claim processing solutions for faster payouts."
    }
  ]
}


const Page = () => {
  return (
    <div>
      <div className="flex flex-col mt-[2.3rem] items-center">
        <About bannerIcons={content.bannerIcons} sections={content.sections} />
        <Why />
        <Work />
      </div>
    </div>
  );
};

export default Page;
