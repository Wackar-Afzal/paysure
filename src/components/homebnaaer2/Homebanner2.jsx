import Image from "next/image";
import Link from "next/link";
const Homebaner2 = () => {
  return (
    <div className="bg-secondary p-[4rem] text-white md:p-[2rem] ">
      <h2 className="text-left pb-4">
        Medical Claims Billing Service.
        <br />
        We boost healthcare income with quick, uncut reimbursements!
      </h2>
      <div className="flex gap-6 lg:flex-col ">
        <div className="w-[45%]  flex justify-center overflow-hidden bg-white rounded-xl lg:w-full lg:h-[50vh]">
          {/* <img className="object-cover  " src="./medicalclaimsbilling.jpg" /> */}
          <Image
            src="/medicalclaimsbilling.jpg" 
            alt="Optimized Image"
            width={0}
            height={0}
            sizes="100%"
            //loading="lazy"
            style={{ width: '100%', height: 'auto' }}
            className="object-cover  " 
            placeholder="blur" 
            blurDataURL="https://www.paysure.site/lowres_medicalclaimsbilling.jpg"
          />
        </div>
        <div className="w-[45%] text-white p-10 text-left rounded-xl p-4 lg:w-full">
          <p className=" text-primary text-left font-semibold mb-1">
            SECURE CLAIM DATA TRANSMISSION
          </p>
          <li className="text-left text-[13px] mb-6">
            Secure digital encryption protects sensitive patient data.
          </li>
          <p className=" text-primary text-left font-semibold mb-1">
            INCREASE REVENUE
          </p>
          <li className="text-left text-[13px] mb-6">
            Receive full payments without unfair deductions from insurance networks.
          </li>
          <p className=" text-primary text-left font-semibold mb-1">
            INSTANT CLAIM SUBMISSION
          </p>
          <li className="text-left text-[13px] mb-6">
            Electronic billing service files claims instantly.
          </li>
          <p className=" text-primary text-left font-semibold mb-1">
            CLAIM FOLLOW-UP & RESOLUTION
          </p>
          <li className="text-left text-[13px] mb-6">
            Denied claims are effectively appealed and reprocessed.
          </li>

          <Link className="btn mt-4 w-[max-content] xs:text-[14px]" href="/#contact">
            Book Free Consultation
          </Link>
        </div>
      </div>

      <div className="flex gap-6 lg:flex-col pt-4">
        <div className="w-[45%] lg:w-full">
          <h3 className="text-left text-white mb-4">
            A medical billing firm specializing in claims processing.
          </h3>
          <p className="">
          Managing billing claims is challenging for providers seeking timely submissions and full reimbursement. Our specialized medical billing services simplify the process.</p>
            <br></br>
            <p>
            We optimize every stage of invoicing with clinical expertise and a commitment to excellence in claims processing. Our advanced cloud technology instantly verifies insurance eligibility and submits claims electronically for expedited payments. Experienced billers ensure accurate claim submission, maximizing provider reimbursements.</p>

          
        </div>
        <div className="w-[45%] lg:w-full">
          <div>
            <h3 className="text-white text-left mb-4">
            When excellence is essential, rely on a specialized medical billing agency.
            </h3>
            <p className="mb-4">
            As a leading medical billing services provider, we optimize claim reimbursements with 24/7 billing cycle management. Our expertise covers major commercial insurers, including Aetna and Blue Cross Blue Shield, as well as government programs like Medicare and Medicaid. We collaborate closely with top payers to ensure precise, compliant submission of billing forms such as CMS-1500, CMS-1450 (UB-04), and CMS-1728-20. At PaySure, we streamline claims processing for accurate and timely reimbursements.
            </p>
            <Link className="text-primary text-[18px] font-medium underline" href="/#contact">Ok.. I am interested, but first provide me a FREE BILLING DEMO→</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homebaner2;
