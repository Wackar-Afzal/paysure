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
        p:"Medical Revenue Service by PaySure streamlines end-to-end RCM operations to maximize provider payments and financial outcomes.",
        button:true,
        link:"/#contact",
        // backgroundimg:"../assets/banner.png"
        backgroundimg:"/Capture2rcm.png"
      }
      const aboutBanner={
        // button:"call us",
        img:"/rcm2.jpg",
        // subH:"We Offer",
        h_1:"Importance of Choosing PaySure Revenue Cycle Management Service in ",
        hspan:"Medical Billing",
        h_2:"",
        p:"Managing a medical practice’s finances is challenging, with constantly changing regulations, insurance policies, and patient expectations leading to revenue leakage and cash flow problems. PaySure’s Medical Revenue Cycle Management (RCM) experts provide a comprehensive solution to address these issues. Our certified coders ensure accurate billing, while our enrollment specialists secure contracts with leading payers to grow your patient base. Our billing experts diligently pursue every dollar your practice earns. Let PaySure optimize your revenue cycle to maximize collections, improve cash flow, and enhance patient satisfaction. Reach out today to strengthen your practice’s financial performance.",
      }
  
      const content = {
        card_per_row:3,
       h1:"PaySure's Approach to Transforming Medical Billing for Small Practices",
       p1:"PaySure is a premier medical billing service provider, offering efficient, cost-effective solutions to maximize reimbursements. Our certified professionals handle all aspects of revenue cycle management with precision and expertise.",
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
           "description": "Our RCM billing services ensure timely prior authorization from insurance providers for procedures, securing appropriate reimbursement."
         },
         {
           "icon": "revenue",
           "link": "",
           "title": "Eligibility & Benefits Verification",
           "description": "Our medical billing experts verify patient eligibility and benefits to confirm insurance coverage, ensuring full reimbursement."
         },
         {
           "icon": "clock",
           "link": "",
           "title": "Claim Submission",
           "description": "Achieve a 99% claim success rate with PaySure’s clean claim submission process. Our coding and billing experts ensure accurate and timely payment for your claims."
         },
         {
           "icon": "healthcare",
           "link": "",
           "title": "Payment Posting",
           "description": "Our experts proactively handle insurance payment posting and patient payments within medical billing software, optimizing your practice's cash flow."
         },
         {
           "icon": "healthcare",
           "link": "",
           "title": "A/R Follow-Up & Denial Management",
           "description": "We consistently follow up on denials and manage accounts receivable to improve collection rates and ensure effective denial resolution."
         },
         {
           "icon": "healthcare",
           "link": "",
           "title": "Medical Billing Audit",
           "description": "PaySure's medical billing audit helps track and optimize claim processing and payment posting, ensuring maximum revenue for your practice."
         }
       ]
     }
     const why = {
      heading: "Why Choose Us?",
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
      image: "/rcm4.jpg"
    };
    
    const bookDemoContent = {
      heading: "Let's experience our medical billing services for as low as 2.9%",
      description:
        "Over 1500 medical practices trust PaySure medical billing services company. So let's have a chat.",
      buttonText: "Book Demo",
      buttonLink: "/#contact",
      benefits: [
        "Instant verification of patient insurance coverage.",
        "HIPAA-compliant medical billing services for data safety.",
        "24/7 medical billing for accurate and timely claims.",
        "98% claim reimbursement for maximized cash flow.",
      ],
    };
  return (
    <div>
        <Banner data={data}/>
        <AboutBanner aboutBanner={aboutBanner} imgRight={false}/>
        <RevenuCycle/>
        <Why content={why}/>
        <About content={content} showbuttons={false} />
        <Bookdemo bookDemoContent={bookDemoContent}/>    

    </div>
  );
};

export default page;
