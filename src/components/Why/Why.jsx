import { listtick } from "@/assets/icons"
const Why = () => {
  return (
    <div className="bg-primary p-6 flex gap-6 lg:flex-col ">
        <div className="w-[45%] h-[90vh] flex justify-center overflow-hidden bg-white rounded-xl lg:w-full lg:h-[50vh]">
            <img className="object-cover  " src='./whychoose.png'/>
        </div>
        <div className="w-[59%] text-white p-10 text-left bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl shadow-md p-4 lg:w-full">
            <h4 className="font-bold text-white text-left mb-2">WHY CHOOSE US ?</h4>
            <h2 className="text-left mb-4 text-black">PaySure Medical Billing Consulting – Ensuring Timely Payments for Doctors</h2>
            <p className="mb-2">At PaySure, our expert medical billing consultants specialize in optimizing revenue for healthcare providers. We streamline claim filing, coding accuracy, and A/R follow-ups to ensure you receive every dollar earned—on time.</p>
            <p className="mb-2">We assist practices large and small in overcoming lost, delayed, or underpaid claims. Engage our 24/7 medical billing and coding consultancy for the medical billing help your practice needs.</p>
            <div className="flex gap-2">{listtick.bluetick}<p>Maximize reimbursements & improve cash flow</p></div>
            <div className="flex gap-2">{listtick.bluetick}<p>Expedite claims processing & reduce payment delays</p></div>
            <div className="flex gap-2">{listtick.bluetick}<p>Identify & resolve billing issues efficiently</p></div>
            <div className="flex gap-2">{listtick.bluetick}<p>Automate workflows to minimize administrative burden</p></div>
            <div className="flex gap-2">{listtick.bluetick}<p>Ensure compliance with regulatory requirements</p></div>
            <div className="flex gap-2">{listtick.bluetick}<p>Eliminate revenue leakage & costly billing errors</p></div>
            <div className="flex gap-2 mb-2">{listtick.bluetick}<p>Reduce operational costs—no need for in-house billing staff or expensive software</p></div>
            <p className="font-bold">Partner with us for 24/7 support and seamless medical billing solutions.</p>
        </div>
    </div>
  )
}

export default Why