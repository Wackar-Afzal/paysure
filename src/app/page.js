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
  "bannerIcons": {
    "billblack": workicons.medBilling,
    "revenue": workicons.coding,
    "clock": workicons.securePaper,
    "healthcare": workicons.healthcare,
  },
  "sections": [
    {
      "icon": "billblack",
      "link": "/medical-billing-services",
      "title": "Medical Billing Services",
      "description": "Expert patient billers handle check-in/out, claims, payments, and denials, ensuring efficient revenue cycle management for healthcare providers."
    },
    {
      "icon": "revenue",
      "link": "",
      "title": "Medical Coding Services",
      "description": "Clinical coding officers accurately translate patient services into ICD-10 and CPT codes, generating precise super-bills to facilitate efficient insurance claim submission."
    },
    {
      "icon": "clock",
      "link": "",
      "title": "Credentialing Services",
      "description": "Our credentialing specialists streamline provider enrollment, ensuring healthcare providers gain access to desirable payor networks with optimal privileges."
    },
    {
      "icon": "healthcare",
      "link": "",
      "title": "Healthcare RCM",
      "description": "Our specialized revenue cycle management services provide physicians with dedicated medical billers who cater to their unique needs."
    }
  ]
}

const Home = () => {
  const data={
    h1_1:"Simplifying",
    span:"Medical Billing",
    h1_2:"with Accuracy & Trust",
    p:"At PaySure, we streamline your medical billing process, ensuring precision, compliance, and fast reimbursements.",
    button:true,
    // backgroundimg:"../assets/banner.png"
    backgroundimg:"/banner.png"
  }
  return (
    <div>
        <Banner data={data}/>
        <About bannerIcons={content.bannerIcons} sections={content.sections} showbuttons={true}/>
        <Homebaner2/>

        {/* <Why/> */}
        {/* <Work/> */}
         {/*<Offers/>*/}
        <RCM/>
        <Bookdemo/>
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