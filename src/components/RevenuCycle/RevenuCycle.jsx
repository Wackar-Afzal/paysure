import Link from "next/link"

const RevenuCycle = () => {
    return (
        <div className={`flex flex-row-reverse lg:flex-col-reverse gap-[3rem] px-[4rem] pt-4 pb-1 bg-lightGrey mt-8 sm:px-[.5rem]`}>
            <div className='md:w-full'>
                <img src='https://bellmedex.com/wp-content/uploads/2024/02/rcm-p1-1.webp' alt="" className='cover mt-[-50px] lg:mt-[0px]' />
            </div>
        <div className='flex flex-col space-y-6'> 
          <div className='flex flex-col space-y-5 w-full'>
          <h3 className='text-left text-[31px]'>BellMedEx offers revenue cycle care, with billing at its core</h3>
          <p className='text-grey w-[50vw] md:w-full'>Our unique approach to medical billing is how BellMedEx RCM Service delivers measurable improvements to the revenue cycle process. The SmartClaim system we developed in-house analyzes billing codes and clinical documentation to catch issues before claim submission. This technology achieves first-time acceptance rates upwards of 98%, putting money back in our providers’ pockets faster.</p>
          </div>
           <Link href={"/#contact"} className='!bg-transparent  !text-secondary px-[1rem] underline my-4' >
           Click here to book BellMedEx medical billing RCM service</Link>
        </div>
    
    
      </div>
      )
}

export default RevenuCycle