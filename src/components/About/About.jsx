import Link from "next/link";

const About = ({ bannerIcons, sections }) => {
  return (
    <div className="flex space-y-10 flex-col py-[6rem] px-[4rem]  justify-center items-center w-full md:py-[3rem] md:p-MXpad">
      <h1 className="text-center">
        PaySure Offers <span className="text-primary"> Electronic Medical Billing</span>{" "}
        Services
      </h1>
      <p className="w-[70vw] text-center">
        Our leading medical billing company has revolutionized healthcare
        billing solutions by replacing outdated, error-prone practice management
        procedures with smart, electronic medical billing services and clinical
        billing and accounts management solutions for all specialties.
      </p>
      <p className="w-[70vw] text-center">
        The results? Fast reimbursements, accurate claim transmission, better
        patient care and smooth cash flow while adhering to HIPAA-compliant
        patient claims billing principles. PaySure's medical billing management
        services make them the perfect ten for full billing services, including:
      </p>
      <div className="flex justify-center items-center gap-4 flex-wrap ">
        {sections.map((section, index) => (
          <div
            key={index}
            data-aos="fade-up"
            className="flex p-6 flex-col space-y-8  items-center justify-center w-[18rem] border border-[2px] rounded-[16px] border-lightGrey hover:cursor-pointer hover:shadow-card-shadowhome transition-shadow duration-300 md:w-full"
          >
            {bannerIcons[section.icon]}
            <h4 className="text-center text-black font-bold">
              {section.title}
            </h4>
            <p className="h-[12rem] md:h-auto">{section.description}</p>
            <Link className="btn"
              href={"/services"}> Explore More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
