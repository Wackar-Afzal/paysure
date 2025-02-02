import { listtick } from "@/assets/icons"

const Offers = () => {
  return (
   <div>
    <div className="flex justify-center items-center p-8 bg-lightGrey">
    <div className="text-center w-[70vw]">
    <h4 className="text-center text-primary">WHAT DO WE OFFER</h4>
    <h2 className="text-center">PaySure Top Rated Billing Consultancy Group Is Here for Medical Billing Help</h2>
    <p className="text-center mt-4">Our billing teams are more than just billers. We are every USA provider’s best-managed billing partner. Our medical billing advocates partner with physicians to improve their practice management and achieve sustainable growth. Here is how PaySure healthcare billing consultancy group is helping practices with patient billing:</p>
    </div>
    </div>
    <div className="flex justify-center  flex-wrap p-8 gap-4  "> 
        <div className="w-[45vw]  bg-primary text-white p-4 rounded-lg h-[14rem] custom800:w-full sm:h-auto">
            <h3 className="text-left text-white">Detailed Analysis and Bill Reporting</h3>
            <div className="flex gap-2">{listtick.bluetick}<p>Reporting on RVU to calculate the value of medical services</p></div>
            <div className="flex gap-2">{listtick.bluetick}<p>Clearing up hidden glitches for better revenue collection</p></div>
            <div className="flex gap-2">{listtick.bluetick}<p>Ensuring on-demand availability of latest billing reports</p></div>
            <div className="flex gap-2">{listtick.bluetick}<p>Providing detailed billing reports</p></div>
            
        </div>
        <div className="w-[45vw]  bg-secondary text-white p-4 rounded-lg h-[14rem] overflow-hidden custom800:w-full sm:h-auto">
            <h3 className="text-left text-white"> Proper Service Level Agreements</h3>
            <div className="flex gap-2">{listtick.bluetick}<p>Dealing with payment posting for healthy cash flow</p></div>
            <div className="flex gap-2">{listtick.bluetick}<p>Doing charge entry for service payments</p></div>
            <div className="flex gap-2">{listtick.bluetick}<p>Reviewing denials with quick clear-ups</p></div>
            <div className="flex gap-2">{listtick.bluetick}<p>Creating specialty-specific SLA reports</p></div>
            <div className="flex gap-2">{listtick.bluetick}<p>Tracking accounts receivable aging</p></div>
            
        </div>
        <div  className="w-[35vw]  bg-secondary text-white p-4 rounded-lg h-[14rem] overflow-hidden x custom800:w-full  sm:h-auto">
            <h3 className="text-left text-white">Revenue Leakage Fix</h3>
            <div className="flex gap-2">{listtick.bluetick}<p>Identifying and resolving errors</p></div>
            <div className="flex gap-2">{listtick.bluetick}<p>Coding medical records</p></div>
            <div className="flex gap-2">{listtick.bluetick}<p>Benchmarking the coding</p></div>
            <div className="flex gap-2">{listtick.bluetick}<p>Auditing medical records</p></div>            
        </div>
        <div className="h-[13rem] w-[15rem] flex justify-center xl:hidden">
            <img className="h-[100%]"src="/logo.png"/>          
        </div>
        <div  className="w-[35vw]  bg-primary text-white p-4 rounded-lg h-[14rem] overflow-hidden   custom800:w-full sm:w-full sm:h-auto ">
            <h3 className="text-left text-white">Best Billing Associates</h3>
            <div className="flex gap-2">{listtick.bluetick}<p>Modern technology for fast claim processing</p></div>
            <div className="flex gap-2">{listtick.bluetick}<p>Medical billing with 24/7 physician support</p></div>
            <div className="flex gap-2">{listtick.bluetick}<p>Ensuring correct patient billing</p></div>
            <div className="flex gap-2">{listtick.bluetick}<p>Auditing medical records</p></div>            
        </div>
        <div  className="w-[45vw]  bg-primary text-white p-4 rounded-lg h-[14rem] overflow-hidden custom800:w-full sm:h-auto">
            <h3 className="text-left text-white">Maximizing Clean Billing Claims %</h3>
            <div className="flex gap-2">{listtick.bluetick}<p>Identifying trends and patterns in claims data</p></div>
            <div className="flex gap-2">{listtick.bluetick}<p>Tracking all aspects of the claims process</p></div>
            <div className="flex gap-2">{listtick.bluetick}<p>Using advanced data analysis tools</p></div>
            <div className="flex gap-2">{listtick.bluetick}<p>Appealing on denied claims</p></div>            
            <div className="flex gap-2">{listtick.bluetick}<p>Keeping the provider in loop</p></div>            
        </div>
        <div  className="w-[45vw]  bg-secondary text-white p-4 rounded-lg h-[14rem] overflow-hidden custom800:w-full sm:h-auto">
            <h3 className="text-left text-white">Specialty Specific Specialization</h3>
            <div className="flex gap-2">{listtick.bluetick}<p>Staying updated on the latest changes in healthcare regulations</p></div>
            <div className="flex gap-2">{listtick.bluetick}<p>Offering tailor-made solutions to small and medium practices</p></div>
            <div className="flex gap-2">{listtick.bluetick}<p>Providing comprehensive services for improved bottom line</p></div>
            <div className="flex gap-2">{listtick.bluetick}<p>Resolving RCM-related challenges for every specialty</p></div>            
            <div className="flex gap-2">{listtick.bluetick}<p>Supporting medical practitioners of all specialties</p></div>            
        </div>
    </div>
   </div>
  )
}

export default Offers