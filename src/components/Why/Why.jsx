import { listtick } from "@/assets/icons"
import CheckIcon from "@mui/icons-material/Check";

const Why = () => {
  return (
    <div className=" p-[4rem] sm:p-[1rem] flex gap-6 lg:flex-col ">

        <div className=" text-secondary  text-left w-[55%] lg:w-full">
            <h4 className=' mb-4 bg-primary text-white px-4 py-2 text-[18px] !w-[max-content] !border-none !rounded-none'>WHY CHOOSE US ?</h4>
            <h2 className="text-left mb-4 text-black">PaySure Medical Billing Consulting – Ensuring Timely Payments for Doctors</h2>
            <p className="mb-2">At PaySure, our expert medical billing consultants specialize in optimizing revenue for healthcare providers. We streamline claim filing, coding accuracy, and A/R follow-ups to ensure you receive every dollar earned—on time.</p>
            <p className="mb-2">We assist practices large and small in overcoming lost, delayed, or underpaid claims. Engage our 24/7 medical billing and coding consultancy for the medical billing help your practice needs.</p>
            <div className="flex items-center gap-2 mb-2"> <div className="rounded-full bg-primary px-[0.15rem] py-[0.08rem]">
                  <CheckIcon className="h-4 w-4 text-white" />
                </div><p>Maximize reimbursements & improve cash flow</p></div>
            <div className="flex items-center gap-2 mb-2"><div className="rounded-full bg-primary px-[0.15rem] py-[0.08rem]">
                  <CheckIcon className="h-4 w-4 text-white" />
                </div><p>Expedite claims processing & reduce payment delays</p></div>
            <div className="flex items-center gap-2 mb-2"><div className="rounded-full bg-primary px-[0.15rem] py-[0.08rem]">
                  <CheckIcon className="h-4 w-4 text-white" />
                </div><p>Identify & resolve billing issues efficiently</p></div>
            <div className="flex  items-center gap-2 mb-2"><div className="rounded-full bg-primary px-[0.15rem] py-[0.08rem]">
                  <CheckIcon className="h-4 w-4 text-white" />
                </div><p>Automate workflows to minimize administrative burden</p></div>
            <div className="flex items-center gap-2 mb-2"><div className="rounded-full bg-primary px-[0.15rem] py-[0.08rem]">
                  <CheckIcon className="h-4 w-4 text-white" />
                </div><p>Ensure compliance with regulatory requirements</p></div>
            <div className="flex items-center gap-2 mb-2"><div className="rounded-full bg-primary px-[0.15rem] py-[0.08rem]">
                  <CheckIcon className="h-4 w-4 text-white" />
                </div><p>Eliminate revenue leakage & costly billing errors</p></div>
            <div className="flex items-center gap-2 mb-2 mb-2"><div className="rounded-full bg-primary px-[0.15rem] py-[0.08rem]">
                  <CheckIcon className="h-4 w-4 text-white" />
                </div><p>Reduce operational costs—no need for in-house billing staff or expensive software</p></div>
            <p className="font-bold">Partner with us for 24/7 support and seamless medical billing solutions.</p>
        </div>
        <div className="w-[45%] h-[90vh] flex justify-center overflow-hidden bg-white rounded-xl lg:w-full lg:h-[50vh]">
            <img className="object-cover  " src='/whychoose.png'/>
        </div>
    </div>
  )
}

export default Why