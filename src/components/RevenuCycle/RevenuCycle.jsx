import Link from "next/link"

const RevenuCycle = () => {
    return (
        <div className={`flex flex-row-reverse lg:flex-col-reverse gap-[3rem] px-[4rem] pt-4 pb-1 bg-lightGrey mt-8 sm:px-[.5rem]`}>
            <div className='md:w-full'>
                <img src='/rcm3.jpg' alt="" className='cover mt-[-50px] lg:mt-[0px]' />
            </div>
        <div className='flex flex-col space-y-6'> 
          <div className='flex flex-col space-y-5 w-full'>
          <h3 className='text-left text-[31px]'>PaySure offers revenue cycle care, with billing at its core</h3>
          <p className='text-grey w-[50vw] md:w-full'>PaySure RCM Service optimizes the revenue cycle through a sophisticated approach. Our proprietary SmartClaim system analyzes billing codes and clinical documentation, identifying potential issues before claim submission. This advanced technology ensures first-time acceptance rates exceeding 98%, accelerating reimbursement and maximizing revenue for providers.</p>
          </div>
           <Link href={"/#contact"} className='!bg-transparent  !text-secondary px-[1rem] underline my-4' >
           Click here to schedule your PaySure Medical Billing RCM service.</Link>
        </div>
    
    
      </div>
      )
}

export default RevenuCycle