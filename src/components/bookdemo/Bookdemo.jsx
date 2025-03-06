import Link from "next/link";
import CheckIcon from "@mui/icons-material/Check";


const Bookdemo = ({bookDemoContent}) => {
  return (
    <div className="p-[4rem] text-white p-10 text-left bg-lightGrey p-4 lg:w-full md:p-[2rem]">
      <div className="bg-secondary p-4 rounded-xl">
        <div className="flex justify-evenly items-center mb-4 md:flex-col md:justify-start md:items-start">
          <div>
            <h2 className="text-left text-white">{bookDemoContent.heading}</h2>
            <p className="mb-2">{bookDemoContent.description}</p>
          </div>
          <Link className="btn min-w-[max-content]" href={bookDemoContent.buttonLink}>
            {bookDemoContent.buttonText}
          </Link>
        </div>
        <hr className="bg-white m-4" />

        <div className="flex gap-4 flex-wrap mx-4">
          {bookDemoContent.benefits.map((benefit, index) => (
            <div key={index} className="flex gap-2 items-center">
              <div className="rounded-full bg-primary p-[0.08rem]">
                <CheckIcon className="h-4 w-4 text-white" />
              </div>
              <p>{benefit}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bookdemo;
