import About from "@/components/About/About";
import AboutBanner from "@/components/AboutPageComponents/AboutBanner";
import Banner from "@/components/HomeComponents/Banner/Banner";
import Why from "@/components/Why/Why";
import {workicons} from "@/assets/icons"
import Bookdemo from "@/components/bookdemo/Bookdemo";
import RevenuCycle from "@/components/RevenuCycle/RevenuCycle";


const page = () => {
    const data={
        h1_1:"PaySure",
        span:"Revenue Cycle Management Service",
        // h1_2:"with Accuracy & Trust",
        p:"Medical Revenue Service by BellMedEx streamlines end-to-end RCM operations to maximize provider payments and financial outcomes.",
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
  
      const content = {
        card_per_row:3,
       h1:"PaySure way of Transforming Medical Billing Services for Small Practices",
       p1:"PaySure is the leading medical billing services company that delivers a reliable, swift, and reasonable pricing model to ensure that your practice gets the maximum reimbursement possible. We are a team of certified professional billers and coders covering every aspect of RCM billing services with utmost accuracy and efficiency.",
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
           "title": "Patient Preauthorization",
           "description": "With our RCM billing services, you will get prior authorization from the insurance to perform a procedure and get reimbursement accordingly."
         },
         {
           "icon": "revenue",
           "link": "",
           "title": "Eligibility & Benefits Verification",
           "description": "Our medical billing experts perform patient eligibility & benefits verification to confirm insurance coverage for complete reimbursements."
         },
         {
           "icon": "clock",
           "link": "",
           "title": "Claim Submission",
           "description": "Enable a 99% claim success ratio with PaySure clean claim submission process. Our coding and billing experts ensure your claims get paid accurately."
         },
         {
           "icon": "healthcare",
           "link": "",
           "title": "Payment Posting",
           "description": "Our experts proactively perform insurance payment posting and patient payments in medical billing software to streamline the practice cash flow."
         },
         {
           "icon": "healthcare",
           "link": "",
           "title": "A/R Follow-Up & Denial Management",
           "description": "We continuously perform follow-ups for effective denial management to keep track of your A/R to improve the collections rate."
         },
         {
           "icon": "healthcare",
           "link": "",
           "title": "Medical Billing Audit",
           "description": "PaySure medical billing audit helps you track and improve the claim processing and payment posting to maximize your practice revenue."
         }
       ]
     }
     const dataWhy={

     }
  return (
    <div>
        <Banner data={data}/>
        <AboutBanner aboutBanner={aboutBanner} imgRight={false}/>
        <RevenuCycle/>
        <Why/>
        <About content={content} showbuttons={false} />
        <Bookdemo/>    

    </div>
  );
};

export default page;
