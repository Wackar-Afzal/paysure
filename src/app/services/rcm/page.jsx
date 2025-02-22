import About from "@/components/About/About";
import AboutBanner from "@/components/AboutPageComponents/AboutBanner";
import Banner from "@/components/HomeComponents/Banner/Banner";
import Why from "@/components/Why/Why";
import {workicons} from "@/assets/icons"
import Bookdemo from "@/components/bookdemo/Bookdemo";


const page = () => {
    const data={
        h1_1:"PaySure",
        span:"Medical Revenue Cycle Management Service",
        // h1_2:"with Accuracy & Trust",
        p:"Medical Revenue Service by BellMedEx, generates and collects payments for the services a provider provides to their patients. It’s a complete RCM solution managing end-to-end RCM operations like patient registration, insurance verification, coding, billing, and collections. Our RCM billing company optimizes revenue cycle for better financial outcomes of the physician’s medical center.",
        button:true,
        // backgroundimg:"../assets/banner.png"
        backgroundimg:"/banner.png"
      }
      const aboutBanner={
        // button:"call us",
        img:"/aboutImg1.png",
        // subH:"We Offer",
        h_1:"Importance of Choosing PaySure Revenue Cycle Management Service in ",
        hspan:"Medical Billing",
        h_2:"",
        p:"Managing a medical practice’s finances is complex. Between evolving regulations, strict insurance policies, and patients with expectations higher than Mt. Everest – it’s a recipe for revenue leakage, cash flow disaster, and operational chaos. Luckily, the medical revenue cycle management (RCM) experts at BellMedEx can restore your practice to full financial health. Our certified coders ensure accurate billing and coding to stop revenue leakage. Our enrollment specialists secure contracts with top commercial payers to expand your patient pool. And our billing experts work diligently to collect every dollar your practice earns. So don’t let medical finances frustrate you. BellMedEx Medical Revenue Service has the cure for what ails your practice’s finances. Call today to experience how we align a provider’s whole revenue cycle process to maximize collections while delighting patients.",
      }
  
      const content2 = {
        card_per_row:3,
       h1:"Our Value-Added Services",
       p1:"HMS provides the most comprehensive and profound medical billing services in the industry. We go above and beyond to ensure that our clients receive maximum reimbursement for their services.",
       p2:"",
       "bannerIcons": {
         "billblack": workicons.medBilling,
         "revenue": workicons.coding,
         "clock": workicons.securePaper,
         "healthcare": workicons.healthcare,
         "healthcare": workicons.healthcare,
       },
       "sections": [
         {
           "icon": "billblack",
           "link": "",
           "title": "TMS Credentialing with High Reimbursement",
           "description": "We arrange your price structure to bring you the best tms reimbursement rates on every contract we get. Most importantly, our approach is frictionless, and we keep you updated every other week with a complete summary report."
         },
         {
           img:"/aboutImg1.png",
           "icon": "revenue",
           "link": "",
           "title": "External lol Coding Audits",
           "description": "Our medical coding auditor helps medical providers identify the ICD 10 and CPT coding discrepancies and suggest modifications after reviewing coding charts."
         },
         {
           "icon": "clock",
           "link": "",
           "title": "New Practice Credentialing",
           "description": "For new providers to start a successful medical practice, our new practice credentialing enables them to start from scratch. With HMS, you can quickly begin your journey by getting successfully enrolled with all the major payers."
         },
       
       ]
     }
     const dataWhy={

     }
  return (
    <div>
        <Banner data={data}/>
        <AboutBanner aboutBanner={aboutBanner} imgRight={true}/>
        <Why/>
        <About content={content2} showbuttons={false} />
        <Bookdemo/>    

    </div>
  );
};

export default page;
