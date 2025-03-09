import CheckIcon from "@mui/icons-material/Check";
import Image from "next/image";

const Why = ({content}) => {
  return (
    <div className=" p-[4rem] sm:p-[1rem] flex gap-6 lg:flex-col ">
      <div className=" text-secondary text-left w-[55%] lg:w-full">
        <h4 className='mb-4 bg-primary text-white px-4 py-2 text-[18px] !w-[max-content] !border-none !rounded-none'>
          {content.heading}
        </h4>
        <h2 className="text-left mb-4 text-black">{content.subheading}</h2>
        {content.description.map((para, index) => (
          <p key={index} className="mb-2">{para}</p>
        ))}
        {content.benefits.map((benefit, index) => (
          <div key={index} className="flex items-center gap-2 mb-2">
            <div className="rounded-full bg-primary px-[0.15rem] py-[0.08rem]">
              <CheckIcon className="h-4 w-4 text-white" />
            </div>
            <p>{benefit}</p>
          </div>
        ))}
        <p className="font-bold">{content.footer}</p>
      </div>
      <div className=" w-[45%]  flex justify-center overflow-hidden bg-white rounded-xl lg:w-full">
        <img className="object-cover" src={content.image} alt="Why Choose Us" />
        <Image
            src={content.image}
            alt="Optimized Image"
            width={0}
            height={0}
            sizes="100%"
            //loading="lazy"
            style={{ width: '100%', height: 'auto' }}
            className="object-cover"
            placeholder="blur" 
            blurDataURL={`/low/${content.image}`}
          />
      </div>
    </div>
  );
};

export default Why;
