import { workicons } from "@/assets/icons"
import Image from "next/image"

const Work = () => {
  return (
    <>
    <div className="p-4 pt-8 md:hidden">
        <h1 className="text-center mb-16">How our Billing Process Works?</h1>
        {/* <img src="/work.png"/> */}
        <Image
            src="/work.png"
            alt="Optimized Image"
            width={0}
            height={0}
            sizes="100%"
            //loading="lazy"
            style={{ width: '100%', height: 'auto' }}
          placeholder="blur" 
          blurDataURL={`https://www.paysure.site/lowres_work.png`}
          />
    </div>
    <div className=" flex-col gap-4 p-4 hidden md:flex">
    <h1 className="text-center m-8 md:text-left">How our Billing Process Works?</h1>

    <div className="flex gap-4">
        {workicons.verification}
        <div>
            <h3 className="text-left text-primary">Verification</h3>
            <p>We verify patient with the payer.</p>
        </div>
    </div>
    <div className="flex gap-4">
        {workicons.transcript}
        <div>
            <h3 className="text-left text-primary">Transcription</h3>
            <p>We transcribe doctor’s comments.</p>
        </div>
    </div>
    <div className="flex gap-4">
        {workicons.coding}
        <div>
            <h3 className="text-left text-primary">Coding</h3>
            <p>We code the procedure.</p>
        </div>
    </div>
    <div className="flex gap-4">
        {workicons.submission}
        <div>
            <h3 className="text-left text-primary">Submission</h3>
            <p>We submit the medical claim.</p>
        </div>
    </div>
    <div className="flex gap-4">
        {workicons.pay}
        <div>
            <h3 className="text-left text-primary">Payment</h3>
            <p>The provider gets paid.</p>
        </div>
    </div>
    </div>
    </>
  )
}

export default Work