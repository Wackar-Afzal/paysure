import Image from "next/image";
import Link from "next/link";

const About = ({ content,showbuttons}) => {
  return (
    <div className="flex space-y-10 flex-col py-[6rem] px-[4rem]  justify-center items-center w-full md:py-[3rem] md:p-MXpad">
      <h1 className="text-center">
        {content.h1}
      </h1>
      <p className="w-[70vw] text-center">
        {content.p1}
      </p>
      {content.p2?<p className="w-[70vw] text-center">
        {content.p2}
      </p>:null}
      <div className="flex justify-center  gap-4 flex-wrap ">
        {content.sections.map((section, index) => (
          <div
            key={index}
            data-aos="fade-up"
            className={`flex  ${section.img?"p-0":"p-6"} flex-col space-y-8  items-center justify-center ${content.card_per_row>3?"w-[15rem]":"w-[25%]"} border border-[2px] rounded-[16px] border-lightGrey hover:cursor-pointer hover:shadow-card-shadowhome transition-shadow duration-300 md:w-full`}
          >
            {section.img?       <Image
                        src={section.img}
                        alt="Optimized Image"
                        width={0}
                        height={0}
                        sizes="100%"
                        //loading="lazy"
                        style={{ width: '100%', height: 'auto' }}
                      placeholder="blur" 
                        className="w-full h-full object-cover"
                      blurDataURL={`https://www.paysure.site${section.img.replace("/", "lowres_")}`}
                      />:<>
            {content.bannerIcons[section.icon]}
            <h4 className="text-center text-black font-bold">
              {section.title}
            </h4>
            <p className="h-[12rem] md:h-auto">{section.description}</p>
            {showbuttons?<Link className="btn"
              href={`${section.link}`}> Explore More
            </Link>:null}
            </>}
           
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
