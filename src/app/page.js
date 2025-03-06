import Banner from '@/components/HomeComponents/Banner/Banner'
import About from '../components/About/About'
import Why from '@/components/Why/Why';
// import HowWork from '../../Componenets/HomeComponenets/HowWork/HowWork'
// import Insight3dIntro from '../../Componenets/HomeComponenets/Insigh3dIntro/Insight3dIntro'
// import Feature from '../../Componenets/HomeComponenets/Feature/Feature'
import Header from "../components/Header/Header";
import Work from '@/components/work/Work';
import Offers from '@/components/offers/Offers';
import Speciality from '@/components/Speciality/Speciality';
import Faq from '@/components/FAQ/Faq';
import {workicons} from "../assets/icons"
import Homebaner2 from '@/components/homebnaaer2/Homebanner2';
import RCM from '@/components/rcm/RCM';
import Bookdemo from '@/components/bookdemo/Bookdemo';
import Location from '@/components/location/location';
import Reviews from '@/components/reviews/Reviews';
import ContactSection from '@/components/Contact/Contact';
const content = {
  card_per_row:3,
  h1:"PaySure Offers Electronic Medical Billing Services",
  p1:"Our leading medical billing company transforms healthcare revenue management with advanced electronic solutions, replacing outdated, error-prone practices to enhance accuracy, efficiency, and financial performance across all specialties.",
  p2:"The results? Faster reimbursements, precise claim processing, enhanced patient care, and optimized cash flow—all while ensuring strict HIPAA compliance. PaySure’s comprehensive medical billing services make them the trusted choice for end-to-end revenue cycle management, including:",
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
      "link": "/services/medical-billing-services",
      "title": "Medical Billing Services",
      "description": "Expert patient billers handle check-in/out, claims, payments, and denials, ensuring efficient revenue cycle management for healthcare providers."
    },
    {
      "icon": "revenue",
      "link": "/services/medical-coding-service",
      "title": "Medical Coding Services",
      "description": "Clinical coding officers accurately translate patient services into ICD-10 and CPT codes, generating precise super-bills to facilitate efficient insurances claim submission."
    },
    {
      "icon": "clock",
      "link": "/services/medical-credentialing-service",
      "title": "Credentialing Services",
      "description": "Our credentialing specialists streamline provider enrollment, ensuring healthcare providers gain access to desirable payor networks with optimal privileges."
    },
    {
      "icon": "healthcare",
      "link": "/services/rcm",
      "title": "RCM",
      "description": "Our specialized revenue cycle management services provide physicians with dedicated medical billers who cater to their unique needs."
    },
    {
      "icon": "healthcare",
      "link": "/services/healthcare-seo",
      "title": "Healthcare SEO",
      "description": "Our specialized revenue cycle management services provide physicians with dedicated medical billers who cater to their unique needs."
    },
  
  ]
}

const Home = () => {
  const data={
    h1_1:"Simplifying",
    span:"Medical Billing",
    h1_2:"with Accuracy & Trust",
    p:"At PaySure, we streamline your medical billing process, ensuring precision, compliance, and fast reimbursements.",
    button:true,
    link:"/#contact",
    // backgroundimg:"../assets/banner.png"
    backgroundimg:"/banner.png"
  }
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
        <About content={content} showbuttons={true}/>
        <Homebaner2/>

        {/* <Why/> */}
        {/* <Work/> */}
         {/*<Offers/>*/}
        <RCM/>
        <Bookdemo bookDemoContent={bookDemoContent}/>
        <Speciality noficons={3}/>
        <Location/>
        <Reviews/>
        <Faq/>
        <ContactSection/>
        {/* <Insight3dIntro/> */}
        {/* <HowWork/> */}
        {/* <Feature/> */}

    </div>
  )
}

export default Home