import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import AboutBanner from "../AboutPageComponents/AboutBanner";
import ContactSection from "../Contact/Contact";
import Link from "next/link";
const AllComponents = ({ content }) => {
  const { hero, features, services, ctaSection, trustSection } = content

  return (
    <div className="min-h-screen bg-white ">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-white py-4 p-[4rem] lg:p-[1rem]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex gap-8 w-full justify-center">
            <div className="w-[20%] lg:w-[50%] md:hidden">
            <img
                    src={hero.img_right.src || "/placeholder.svg"}
                    alt={hero.img_right.alt}
                    className="w-fullobject-contain"
                  />
            </div>

    
            <div className="flex flex-col justify-center  w-[40%] lg:w-auto ">
              <h1 className="text-3xl font-bold tracking-tighter text-[#2D2150] sm:text-4xl md:text-5xl">
                {hero.title}
              </h1>
              <p className="text-gray-600 md:text-lg">{hero.description}</p>
              <form className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  {hero.formFields.map((field, index) => (
                    <input
                      key={index}
                      type={field.type}
                      placeholder={field.placeholder}
                      className="w-full rounded-lg border border-gray-200 px-4 py-2.5 focus:border-[#2D2150] focus:outline-none focus:ring-1 focus:ring-[#2D2150]"
                    />
                  ))}
                </div>
                <button className="btn !bg-secondary  focus:outline-none focus:ring-2 focus:ring-[#2D2150] focus:ring-offset-2">
                  {hero.buttonText}
                </button>
              </form>
             
            </div>
            <div className="w-[15%] block  lg:hidden">
            <img
                    src={hero.img_left.src || "/placeholder.svg"}
                    alt={hero.img_left.alt}
                    className=" object-contain w-full"
                  />
                  </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-8 px-[4rem]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex gap-4 flex-wrap justify-center">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col items-center space-y-3 text-center w-[20rem]">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-lightGrey">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-[#2D2150]">{feature.title}</h3>
                <p className="text-gray-600 text-center">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-[8rem] lg:px-[1rem]">
        <div className="">
          {services.map((service, index) => (
            <div key={index} className="mb-16 flex justify-center gap-4 md:flex-col ">
              <div className={`space-y-8  w-[50%] md:w-full bg-lightGrey rounded-3xl p-8`}>
                <h2 className="text-2xl text-left font-bold text-[#2D2150] sm:text-3xl">{service.title}</h2>
                <p className="text-gray-600">{service.description}</p>
                <Link href={service.link} className="inline-flex items-center space-x-2 rounded-lg border-2 border-[#2D2150] px-6 py-2 font-medium text-[#2D2150] hover:bg-[#2D2150] hover:text-white">
                  <span>{service.buttonText}</span>
                  <ArrowForwardIcon className="h-4 w-4" />
                </Link>
              </div>
              <div className={`relative p-8 rounded-3xl ${index%2==0?"bg-primary":"bg-secondary"}`}>
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="w-full rounded-lg object-cover "
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#2D2150] py-16 ">
        <div className=" mx-auto px-[4rem]">
          <div className="grid gap-8 grid-cols-2 sm:grid-cols-1">
            <div className="space-y-4">
              <h2 className="text-left text-2xl font-bold text-white sm:text-3xl">{ctaSection.title}</h2>
              <p className="text-gray-200">{ctaSection.description}</p>
            </div>
            <form className="space-y-4 rounded-lg bg-white p-6 shadow-lg">
              {ctaSection.formFields.map((field, index) => (
                <input
                  key={index}
                  type={field.type}
                  placeholder={field.placeholder}
                  className="w-full rounded-lg border border-gray-200 px-4 py-2.5 focus:border-[#2D2150] focus:outline-none focus:ring-1 focus:ring-[#2D2150]"
                />
              ))}
              <button className="w-full rounded-lg bg-[#2D2150] px-8 py-3 text-white hover:bg-[#231a40] focus:outline-none focus:ring-2 focus:ring-[#2D2150] focus:ring-offset-2">
                {ctaSection.buttonText}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 px-[4rem]">
        <div className="mx-auto px-4 ">
          <div className="space-y-8  ">
            <div className="space-y-4 flex sm:flex-col gap-8 items-baseline">
              <h2 className="text-left text-2xl font-bold text-[#2D2150] sm:text-3xl">{trustSection.title}</h2>
              <p className=" text-left mx-auto max-w-2xl text-gray-600">{trustSection.description}</p>
            </div>
            <div className="flex flex-wrap gap-4">
              {trustSection.benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3 w-[13rem]">
                  <CheckCircleIcon className="h-6 w-6 text-[#2D2150]" />
                  <span className="font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="">
        <AboutBanner aboutBanner={content.aboutBanner} imgRight={false}/>
      </section>
      <ContactSection/>
    </div>
  )
}

export default AllComponents

