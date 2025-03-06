import AllComponents from "@/components/healthCare/AllComponents"
import { ChatRounded, Search, Web } from "@mui/icons-material"

const content = {
  hero: {
    title: "Reach More Patients. Save More Lives",
    description:
      "We help you reach higher search ranks, drive great leads and win at social media marketing to reach the right patients and grow your practice.",
    buttonText: "Get Free Analysis",
    formFields: [
      { type: "text", placeholder: "Your Name" },
      { type: "email", placeholder: "Work Email" },
      { type: "tel", placeholder: "Phone Number" },
      { type: "text", placeholder: "Website URL" },
    ],
    img_left:{src:"https://bellmedex.com/wp-content/uploads/2023/11/HS-S1-P2.webp", alt: "Partner 1" },
    img_right:{src: "https://bellmedex.com/wp-content/uploads/2023/11/HS-S1-P1.webp", alt: "Partner 2"}
  },
  features: [
    {
      icon: <Web sx={{ color: "#34b9e8" }}/>,
      title: "Website Care",
      description: "Optimize your website for better search rankings and user experience.",
    },
    {
      icon: <ChatRounded sx={{ color: "#34b9e8" }}/>,
      title: "Online Marketing",
      description: "Reach your target audience through effective digital marketing campaigns.",
    },
    {
      icon: <Search sx={{ color: "#34b9e8" }}/>,
      title: "Local SEO",
      description: "Improve your local search presence and attract nearby patients.",
    },
  ],
  services: [
    {
      title: "Healthcare SEO",
      description: "We help healthcare providers improve their search rankings to reach more patients.",
      buttonText: "Let's Talk",
      link:'/#contact',
      image: "https://bellmedex.com/wp-content/uploads/2023/10/Layer_1.png",
    },
    {
      title: "Online Advertising",
      description: "Strategic digital advertising campaigns to reach your target audience.",
      buttonText: "Let's Talk",
      link:'/#contact',
      image: "https://bellmedex.com/wp-content/uploads/2023/10/Layer_1-1.png",
    },
    {
      title: "Local SEO",
      description: "Dominate local search results and attract more nearby patients.",
      buttonText: "Let's Talk",
      link:'/#contact',
      image: "https://bellmedex.com/wp-content/uploads/2023/10/Layer_1-2.png",
    },
  ],
  ctaSection: {
    title: "Get Your SEO Done at Market Lowest Prices!",
    description: "Unbeatable SEO packages for healthcare providers to boost your online presence.",
    buttonText: "Submit Now",
    formFields: [
      { type: "text", placeholder: "Your Name" },
      { type: "email", placeholder: "Work Email" },
      { type: "tel", placeholder: "Phone Number" },
      { type: "text", placeholder: "Website URL" },
    ],
  },
  trustSection: {
    title: "We Know Healthcare. We Know Digital Marketing.",
    description: "Whether you need a website, an ad, a content, or a social media strategy, we can help you connect with your target audience and grow your practice. Contact us today and let our creative solutions help you succeed.",
    benefits: ["HIPAA Compliant", "Healthcare Focused", "Results Driven", "Transparent Reporting"],
  },
  aboutBanner:{
    // button:"call us",
    img:"https://bellmedex.com/wp-content/uploads/2023/11/HC-S5-P2.webp",
    // subH:"We Offer",
    h_1:"Boost Your Online Presence",
    p:"Our healthcare digital marketing service manages the entire digital marketing operations of your healthcare facility, from plaining to execution to optimization. Our experts help you create a strong online brand identity, reach and engage your target audience, and generate more leads and conversions.",
  }
}

export default function Page() {
  return <AllComponents content={content} />
}

