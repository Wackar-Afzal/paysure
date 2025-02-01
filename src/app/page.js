import Banner from '../components/HomeComponents/Banner/Banner'
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
import Footer from '@/components/Footer/Footer';
const Home = () => {
  return (
    <div>
        <Header/>
        <Banner/>
        <About/>
        <Why/>
        <Work/>
        <Offers/>
        <Speciality noficons={3}/>
        <Faq/>
        {/* <Insight3dIntro/> */}
        {/* <HowWork/> */}
        {/* <Feature/> */}
        <Footer/>
    </div>
  )
}

export default Home