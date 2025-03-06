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
        button:"Contact Us",
        img:"/aboutImg1.png",
        // subH:"We Offer",
        h_1:"Medical Coding and Auditing",
        hspan:"Doctors",
        h_2:"",
        p:"Our AAPC- and AHIMA-certified specialists deliver expert medical coding and auditing services to enhance accuracy and minimize denials. PaySure conducts independent coding reviews to reduce payer rebuttals and ensure compliance. Through detailed chart analysis, we equip healthcare providers with the insights and tools needed to optimize coding processes and maximize billable services. By identifying and addressing revenue leaks, we help practices enhance their financial performance and increase monthly reimbursements. Committed to precision and efficiency, we ensure clients receive the full reimbursement they are entitled to. Additionally, our educational programs empower providers with a comprehensive understanding of billing opportunities, driving long-term revenue optimization.",
        
      }
      const content = {
         card_per_row:3,
        h1:"Our Medical Coding Services",
        p1:"Our customized medical coding solutions ensure precision, compliance, and efficiency, facilitating error-free claim submissions, faster reimbursements, and an optimized workflow—enabling you to prioritize exceptional patient care.",
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
            "description": "Our medical coding and auditing services ensure accurate and compliant billing for all telehealth and telemedicine procedures."
          },
          {
            "icon": "revenue",
            "link": "",
            "title": "External Coding Audits",
            "description": "Our medical coding auditors identify ICD-10 and CPT discrepancies, providing expert recommendations for accurate and compliant coding."
          },
          {
            "icon": "clock",
            "link": "",
            "title": "Independent Coding Reviews",
            "description": "We ensure compliance and maximize reimbursements while addressing insurance company rebuttals effectively."
          },
          {
            "icon": "healthcare",
            "link": "",
            "title": "Provider Education Webinars",
            "description": "PaySure hosts meetings and webinars to help healthcare providers identify revenue gaps, stay updated on coding changes, and ensure compliance."
          },
          {
            "icon": "healthcare",
            "link": "",
            "title": "Evaluation and Management E/M",
            "description": "Comprehensive E/M coding for all specialties, ensuring error-free code assignment and accurate medical decision-making (MDM)."
          },
          {
            "icon": "healthcare",
            "link": "",
            "title": "Customized Template",
            "description": "We provide customized templates to help healthcare providers efficiently document patient progress notes with accuracy and timeliness."
          }
        ]
      }
      
  return (
    <div>
        <Banner data={data}/>
        <AboutBanner aboutBanner={aboutBanner}/>
        <Why/>
        <About content={content} showbuttons={false}/>
        <Bookdemo/>
        

    </div>
  );
};

export default page;
