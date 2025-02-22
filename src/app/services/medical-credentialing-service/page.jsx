import About from "@/components/About/About";
import AboutBanner from "@/components/AboutPageComponents/AboutBanner";
import Banner from "@/components/HomeComponents/Banner/Banner";
import Why from "@/components/Why/Why";
import {workicons} from "@/assets/icons"
import Bookdemo from "@/components/bookdemo/Bookdemo";


const page = () => {
    const data={
        h1_1:"Quality First",
        span:"Medical Coding Service",
        // h1_2:"with Accuracy & Trust",
        p:"Our medical coding services cover all claims' coding to remove inaccuracies and boost reimbursements.",
        button:true,
        // backgroundimg:"../assets/banner.png"
        backgroundimg:"/banner.png"
      }
      const aboutBanner={
        button:"call us",
        img:"/aboutImg1.png",
        // subH:"We Offer",
        h_1:"Medical Coding and Auditing",
        hspan:"Doctors",
        h_2:"",
        p:"With quality medical coding and auditing, our AAPC and AHIMA certified coding specialists perform medical coding audits to mitigate inaccuracies and denials. HMS coding experts conduct independent coding reviews for practices to reduce the level of rebuttals they receive from payers.Based on the granular chart review, we empower healthcare providers with the knowledge and tools to optimize the medical coding process while educating them about services they can bill to insurance. With medical coding services, we PLUG revenue leaks that most practices are unaware of, instantly boosting their monthly reimbursement.Our focus is on quality and accuracy to help ensure that our clients receive the reimbursement they are entitled to. We also offer educational services to healthcare providers to learn about the different services that they can bill to insurance companies. Our goal is to help practices optimize their medical coding process and improve their bottom line.",
      }
      const content = {
         card_per_row:3,
        h1:"Our Medical Credentialing Services",
        p1:"You are a new provider or want to get re-credentialed with insurance companies. We offer medical credentialing services to alleviate your hassles with the provider enrollment process.",
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
            "title": "Recredentialing",
            "description": "We periodically review and verify credentialing status to get you re-credentialed on time, so you don't have to face insurance denials."
          },
          {
           
            "icon": "revenue",
            "link": "",
            "title": "Licensing",
            "description": "Our provider enrollment and credentialing services help you get essential certifications, accreditations, and licenses to enroll with insurance successfully."
          },
          {
            "icon": "clock",
            "link": "",
            "title": "Enrollment for Electronic Transactions",
            "description": "HMS gets you authorized with all the payers that allow you to send EDI, ERA, and EFT transactions without any inconvenience."
          },
          {
            "icon": "clock",
            "link": "",
            "title": "Accreditation",
            "description": "HMS accreditation services enable your practice to get formal recognition and affiliation to reduce enrollment holds with insurance agencies."
          },
          {
            "icon": "clock",
            "link": "",
            "title": "IPA Enrollment",
            "description": "Our credentialing consultants ensure to enroll you with insurances through the Integrated Provider Associations (IPA) on close panels."
          },
          {
            "icon": "clock",
            "link": "",
            "title": "Contract Renegotiation",
            "description": "We negotiate with the insurance companies on your behalf to improve your contracted amount and enhance your practice reimbursement."
          },
        
        ]
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
  return (
    <div>
        <Banner data={data}/>
        <AboutBanner aboutBanner={aboutBanner}/>
        <About content={content} showbuttons={false}/>
        <Why/>
        <About content={content2} showbuttons={false}/>
        <Bookdemo/>    

    </div>
  );
};

export default page;
