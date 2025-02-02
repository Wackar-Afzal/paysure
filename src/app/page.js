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
      "link": "",
      "title": "Medical Billing Services",
      "description": "Expert patient billers offer the most complete medical billing services that entail handling check-in/out, claims, payments, and denials for health care providers."
    },
    {
      "icon": "revenue",
      "link": "",
      "title": "Medical Coding Services",
      "description": "Clinical coding officers translate patient services into ICD-10 and CPT codes and generate a clean “super-bill” for the biller to submit to the insurance payer."
    },
    {
      "icon": "clock",
      "link": "",
      "title": "Credentialing Services",
      "description": "Provider enrollment services by our credentialing specialists help healthcare providers join the network of desirable payors with maximum privileges."
    },
    {
      "icon": "healthcare",
      "link": "",
      "title": "Healthcare RCM Services",
      "description": "Revenue cycle management services are specialty-specific, which means a physician’s bespoke demands are met by a dedicated medical biller."
    }
  ]
}

const Home = () => {
  return (
    <div>
        <Banner/>
        <About bannerIcons={content.bannerIcons} sections={content.sections}/>
        <Homebaner2/>

        {/* <Why/> */}
        {/* <Work/> */}
        <Offers/>
        <Speciality noficons={3}/>
        <RCM/>
        <Bookdemo/>
        <Location/>
        <Reviews/>
        <Faq/>
        {/* <Insight3dIntro/> */}
        {/* <HowWork/> */}
        {/* <Feature/> */}

    </div>
  )
}

export default Home