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
        <div className="w-[45%] h-[40vh] flex justify-center overflow-hidden bg-white rounded-xl lg:w-full lg:h-[50vh]">
          <img className="object-cover  " src="./whychoose.png" />
        </div>
        <div className="w-[45%] text-white p-10 text-left rounded-xl p-4 lg:w-full">
          <p className=" text-primary text-left font-semibold mb-1">
            SECURE CLAIM DATA TRANSMISSION
          </p>
          <li className="text-left text-[13px] mb-6">
            Safest digital encryption protects sensitive patient data.
          </li>
          <p className=" text-primary text-left font-semibold mb-1">
            INCREASE REVENUE
          </p>
          <li className="text-left text-[13px] mb-6">
            Get full payments, without unfair cuts by the insurance networks.
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
            Denied claims are appealed and reprocessed successfully.
          </li>

          <Link className="btn mt-4 w-[max-content] xs:text-[14px]" href="/#contact">
            Book Free Consultation
          </Link>
        </div>
      </div>

      <div className="flex gap-6 lg:flex-col pt-4">
        <div className="w-[45%] lg:w-full">
          <h3 className="text-left text-white mb-4">
            The billing firm that does medical claims processing
          </h3>
          <p className="">
            Management of billing claims poses difficulties for providers
            pursuing timely submissions and full remittance for care given. But
            take heart – our niche medical billing services ease the way.</p>
            <br></br>
            <p>
            We optimize each invoicing phase, armed with clinical knowledge and
            zeal for first-class claims processing. Cloud tech validates a
            patient’s insurance eligibility right away and file claims
            electronically to quicken payments. Plus, our expert billers ensure
            every claim reaches the insurer to obtain full provider
            reimbursements.</p>

          
        </div>
        <div className="w-[45%] lg:w-full">
          <div>
            <h3 className="text-white text-left mb-4">
              When “good enough” isn’t enough, you need a specialized medical
              billing agency.
            </h3>
            <p className="mb-4">
              As a leading medical billing services provider, our billing firm
              wrings every last dollar from a provider’s claims via 24/7 billing
              cycle oversight. We’re experts on the big commercial ones, Aetna
              and Blue Cross Blue Shield. We know the government plans inside
              and out, Medicare and Medicaid. We work hand in glove with the top
              payers so the provider billing reimbursement forms like CMS-1500,
              CMS-1450 (UB-04), and CMS-1728-20 are shipshape. BellMedEx medical
              transcription and billing company makes claims and repayments
              happen, period!
            </p>
            <Link className="text-primary text-[18px] font-medium underline" href="/#contact">Ok.. I am interested, but first provide me a FREE BILLING DEMO→</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homebaner2;
