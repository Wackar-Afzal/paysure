import About from "@/components/About/About";
import AboutBanner from "@/components/AboutPageComponents/AboutBanner";
import Banner from "@/components/HomeComponents/Banner/Banner";
import Why from "@/components/Why/Why";
import {workicons} from "@/assets/icons"
import Bookdemo from "@/components/bookdemo/Bookdemo";


const page = () => {
    const data={
        h1_1:"Quality First",
        span:"Medical Credentialing Services",
        // h1_2:"with Accuracy & Trust",
        p:"PaySure enables you to get credentialed with commercial and non-commercial insurances.",
        button:true,
        link:"/#contact",
        // backgroundimg:"../assets/banner.png"
        backgroundimg:"/Capture1cred.png"
      }
      const aboutBanner={
        button:"Contact Us",
        img:"/provider.webp",
        // subH:"We Offer",
        h_1:"Provider Enrollment & Credentialing",
        hspan:"",
        h_2:"",
        p:"PaySure offers a comprehensive and efficient credentialing solution, ensuring smooth enrollment with all payers while maintaining full regulatory compliance. Our expert team manages the entire process, from gathering and submitting provider enrollment documents to maintaining ongoing data accuracy, including CAQH profile updates. We stay up to date with evolving payer requirements and regulatory standards, reducing the risk of delays, denials, or compliance issues. Our proactive follow-up approach ensures that applications progress without unnecessary hold-ups, expediting approvals and allowing providers to begin billing as soon as possible. By handling administrative burdens, PaySure enables healthcare providers to focus on delivering high-quality patient care while maximizing reimbursements and maintaining seamless payer relationships.",
      }
      const content = {
         card_per_row:3,
        h1:"Our Medical Credentialing Services",
        p1:"If you're a new provider or need re-credentialing, our expert services simplify the enrollment process, ensuring quick and hassle-free insurance approvals.",
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
            "description": "We continuously monitor and verify your credentialing status to ensure timely re-credentialing and prevent insurance denials."
          },
          {
           
            "icon": "revenue",
            "link": "",
            "title": "Licensing",
            "description": "Our provider enrollment and credentialing services ensure you obtain the necessary certifications, accreditations, and licenses for successful insurance enrollment."
          },
          {
            "icon": "clock",
            "link": "",
            "title": "Enrollment for Electronic Transactions",
            "description": "PaySure gets you authorized with all the payers that allow you to send EDI, ERA, and EFT transactions without any inconvenience."
          },
          {
            "icon": "clock",
            "link": "",
            "title": "Accreditation",
            "description": "PaySure streamlines authorization with all payers, ensuring smooth EDI, ERA, and EFT transactions without hassle."
          },
          {
            "icon": "clock",
            "link": "",
            "title": "IPA Enrollment",
            "description": "Our credentialing consultants facilitate your enrollment with insurance companies through Integrated Provider Associations (IPA) on closed panels."
          },
          {
            "icon": "clock",
            "link": "",
            "title": "Contract Renegotiation",
            "description": "We negotiate with insurance companies on your behalf to secure better contract rates and maximize your practice reimbursements."
          },
        
        ]
      }
      const content2 = {
        card_per_row:3,
       h1:"Our Value-Added Services",
       p1:"PaySure delivers superior medical billing services, ensuring maximum reimbursement through precision, efficiency, and industry expertise.",
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
           "title": "TMS Credentialing for Maximum Reimbursement.",
           "description": "We strategically structure your pricing to secure the highest TMS reimbursement rates across all contracts. Our streamlined process includes bi-weekly updates, delivering comprehensive summary reports to keep you informed."
         },
         {
           img:"/credentialing_main.jpg",
           "icon": "revenue",
           "link": "",
           "title": "External lol Coding Audits",
           "description": "Our medical coding auditor helps medical providers identify the ICD 10 and CPT coding discrepancies and suggest modifications after reviewing coding charts."
         },
         {
           "icon": "clock",
           "link": "",
           "title": "New Practice Credentialing",
           "description": "Our new practice credentialing service is designed to facilitate a smooth and efficient practice launch. With PaySure, you can quickly secure enrollment with all major payers, ensuring a strong foundation for your medical practice’s success."
         },
       
       ]
     }

     const why = {
      heading: "WHY CHOOSE US ?",
      subheading: "PaySure, a leading credentialing specialist, offers expert provider enrollment and MD credentialing services",
      description: ["Our dedicated team ensures seamless enrollment, handling physician credentialing and complex qualification verifications with industry expertise." ],
      benefits: [
        "Time & Cost Efficiency – Streamlined credentialing process to save time and reduce costs.",
        "End-to-End Management – We handle all paperwork, minimizing administrative burdens.",
        "Real-Time Updates – Stay informed on application status with proactive communication.",
        "Seamless Contracting – Ensuring compliance for smooth provider enrollment.",
        "Dedicated Support – Prompt customer service for all concerns and inquiries.",
        "Focus on Patient Care – We manage credentialing so you can prioritize your patients.",
      ],
      footer: "contact us today to learn more or request a free quote!",
      image: "/whycredential.jpg"
    };
    const bookDemoContent = {
      heading: "We empower providers to secure valuable in-network contracts.",
      description:
        "PaySure’s provider enrollment services secure in-network contracts, even with exclusive payor panels.",
      buttonText: "Book Demo",
      buttonLink: "/#contact",
      benefits: [
        "Championing Healthcare Providers",
        "Collaborating with Insurance Payers.",
        "Gain Access to Exclusive Networks",
        "Maximize Hospital Privileges",
      ],
    };
  return (
    <div>
        <Banner data={data}/>
        <AboutBanner aboutBanner={aboutBanner}/>
        <About content={content} showbuttons={false}/>
        <Why content={why}/>
        <About content={content2} showbuttons={false}/>
        <Bookdemo bookDemoContent={bookDemoContent}/>    

    </div>
  );
};

export default page;
