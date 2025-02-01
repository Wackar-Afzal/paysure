import {home2ndbannericons} from '../../assets/icons'
const About = () => {
    return (

            <div  className="flex space-y-10 flex-col py-[6rem] justify-center items-center w-full md:py-[3rem] md:p-MXpad ">
                {/* <h3 data-aos="fade-up" className='text-black'>We are Creating 3D Model For</h3> */}

                <div className='flex justify-center items-center space-x-6 flex-wrap lg:space-x-6 lg:space-y-2'>

                    <div data-aos="fade-up"  className='flex p-6 flex-col space-y-8 items-center justify-center w-[18rem]  border border-[2px] rounded-[16px] border-lightGrey hover:cursor-pointer hover:shadow-card-shadowhome transition-shadow duration-300 md:w-full'>
                        {home2ndbannericons.billblack}

                        <h4 className='text-center text-black font-bold'>Optimized RCM</h4>
                        <p className='h-[12rem]'> PaySure medical billing consultancy service optimizes the revenue cycle end-to-end to accelerate patient intake, expedite claims, and maximize collections. The result? More cash on hand, lower expenses, and happier patients.</p>
                    </div>

                    <div data-aos="fade-up"  className='flex p-6 f flex-col space-y-8 items-center justify-center w-[18rem]  border border-[2px] rounded-[16px] border-lightGrey hover:cursor-pointer hover:shadow-card-shadowhome transition-shadow duration-300  md:w-full'>
                        {home2ndbannericons.revenu}

                        <h4 className='text-center text-black font-bold'>Increased Revenue</h4>
                        <p> PaySure medical billing consultation group works closely with health centers to guarantee claims are submitted properly. With reimbursements coming in “full” and “on time”, health facilities thrive. As consultants, we enable long-term revenue growth.</p>
                    </div>

                    <div data-aos="fade-up"  className='flex p-6 f flex-col space-y-8 items-center justify-center w-[18rem]  border border-[2px] rounded-[16px] border-lightGrey hover:cursor-pointer hover:shadow-card-shadowhome transition-shadow duration-300  md:w-full'>
                        {home2ndbannericons.clock}

                        <h4 className='text-center text-black font-bold'>Fast Claim Processing</h4>
                        <p className='h-[12.5rem]  md:h-[max-content]'> PaySure medical billing consulting solutions optimize doctor’s cash flow. Our consultants identify issues delaying payments and provide electronic claim processing solutions for faster payouts.</p>
                    </div>

                </div>



            </div>




    )
}

export default About