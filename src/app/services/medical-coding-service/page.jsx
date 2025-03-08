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
        link:"/#contact",
        // backgroundimg:"../assets/banner.png"
        backgroundimg:"/Capture.png"
      }
      const aboutBanner={
        button:"call us",
        img:"/Medical-Coding.webp",
        // subH:"We Offer",
        h_1:"Medical Coding and Auditing",
        hspan:"Doctors",
        h_2:"",
        p:"With quality medical coding and auditing, our AAPC and AHIMA certified coding specialists perform medical coding audits to mitigate inaccuracies and denials. PaySure coding experts conduct independent coding reviews for practices to reduce the level of rebuttals they receive from payers.Based on the granular chart review, we empower healthcare providers with the knowledge and tools to optimize the medical coding process while educating them about services they can bill to insurance. With medical coding services, we PLUG revenue leaks that most practices are unaware of, instantly boosting their monthly reimbursement.Our focus is on quality and accuracy to help ensure that our clients receive the reimbursement they are entitled to. We also offer educational services to healthcare providers to learn about the different services that they can bill to insurance companies. Our goal is to help practices optimize their medical coding process and improve their bottom line.",
      }
      const content = {
         card_per_row:3,
        h1:"Our Medical Coding Services",
        p1:"Our custom medical coding services guarantee prompt reimbursements, error-free claim submissions, and a streamlined workflow so you can focus on delivering excellent patient healthcare.",
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
            "title": "Telehealth Coding",
            "description": "Our medical coding and auditing cover all the aspects of telehealth and telemedicine coding, and we code and bill every telehealth service you provide."
          },
          {
            "icon": "revenue",
            "link": "",
            "title": "External Coding Audits",
            "description": "Our medical coding auditor helps medical providers identify the ICD 10 and CPT coding discrepancies and suggest modifications after reviewing coding charts."
          },
          {
            "icon": "clock",
            "link": "",
            "title": "Independent Coding Reviews",
            "description": "By maintaining compliance and ensuring your practice gets the maximum reimbursement for services rendered, We tackle the rebuttals you receive from the insurance companies."
          },
          {
            "icon": "healthcare",
            "link": "",
            "title": "Provider Education Webinars",
            "description": "PaySure offers meetings and educational webinars to healthcare providers to identify the revenue-losing area, providing the latest coding updates and compliance with industry standards."
          },
          {
            "icon": "healthcare",
            "link": "",
            "title": "Evaluation and Management E/M",
            "description": "Comprehensive E/M coding services for all specialties, focusing on assigning error-free codes to ensure accurate medical decision making (MDM) for your practice."
          },
          {
            "icon": "healthcare",
            "link": "",
            "title": "Customized Template",
            "description": "We offer customized templates to healthcare providers to create patients' progress notes on performed services effectively and timely manner."
          }
        ]
      }
      const why = {
        heading: "WHY PAYSURE ?",
        subheading: "PaySure delivers end-to-end medical coding services to maximize revenue and compliance.",
        description: [
          " We meticulously review progress notes, assign accurate MDM levels to prevent up-coding or down-coding, and apply the latest coding guidelines, modifiers, and CCI edits to ensure accuracy across all PoS.",
        ],
        benefits: [
          "Faster turnaround & higher reimbursements",
          "Expert coders ensuring accuracy & compliance",
          "Error-free coding aligned with regulations",
          "Audits & feedback to prevent denials",
          "ICD & CPT expertise for seamless billing",
        ],
        footer: "Partner with us for 24/7 support and seamless medical billing solutions.",
        image: "/whycode.jpg"
      };
      const bookDemoContent = {
        heading: "Lets transform your medical records into accurate, compliant revenue.",
        description:
          "Our experts analyze patient data to optimize coding accuracy and maximize reimbursements.",
        buttonText: "Book Demo",
        buttonLink: "/#contact",
        benefits: [
          "Skilled & Accurate Coders",
          "HIPAA-compliant",
          "Enhanced Cash Flow",
          "Minimized Denials",
        ],
      };
      
  return (
    <div>
        <Banner data={data}/>
        <AboutBanner aboutBanner={aboutBanner}/>
        <Why content={why}/>
        <About content={content} showbuttons={false}/>
        <Bookdemo bookDemoContent={bookDemoContent}/>
        

    </div>
  );
};

export default page;
