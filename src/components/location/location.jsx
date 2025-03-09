'use client'

import Image from "next/image"

function Location() {
  const locations = [
    { name: 'Chicago', id: 1 },
    { name: 'Los Angeles', id: 2 },
    { name: 'Alabama', id: 3 },
    { name: 'California', id: 4 },
    { name: 'Indiana', id: 5 },
    { name: 'New York', id: 6 }
  ]

  const services = [
    { name: 'Billing Software', id: 1 },
    { name: 'Electronic Statements', id: 2 },
    { name: 'Denial Management', id: 3 },
    { name: 'Clearinghouse Services', id: 4 },
    { name: 'Accounts Management', id: 5 },
    { name: '1:1 Technical Support', id: 6 }
  ]

  return (
    <section className="p-[4rem] md:p-[2rem]">
      <div className="flex gap-12 lg:flex-col ">
        {/* Nationwide Availability */}
        <div className="space-y-8 w-[45%] lg:w-full">
          <div className="">
            <h2 className="text-[22px] font-bold">Nationwide Availability</h2>
            <p className="text-gray-600">
            As a leading U.S. medical billing company, PaySure empowers providers with expert payer knowledge to maximize claim reimbursements nationwide.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {locations.map(location => (
              <div key={location.id} className="flex items-center gap-2">
                <svg className="w-5 h-5 text-secondary" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">{location.name}</span>
              </div>
            ))}
          </div>

          <div className="relative flex justify-center">
            {/* <img
              src="/map.png"
              alt="USA Coverage Map"
              className="w-full lg:w-[60vw]"
            /> */}
            <Image
                src="/map.png"
                alt="Optimized Image"
                width={0}
                height={0}
                sizes="100%"
                loading="lazy"
                style={{ width: '100%', height: 'auto' }}
                className="w-full lg:w-[60vw]"
                placeholder="blur" 
                blurDataURL={`/low/"/map.png"`}
              />
          </div>
        </div>

        {/* Affordable Pricing */}
        <div className="space-y-8 w-[45%] lg:w-full">
          <div className="">
            <h2 className=" font-bold text-[22px] p-0">Affordable Pricing</h2>
            <p className="text-gray-600">
            Reduce in-house billing costs with our 2.9% collection rate, pay-for-paid model, free EMR software, scalable solutions, and complimentary denied claims appeals. Outsource to us for streamlined billing and exclusive perks, including:
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {services.map(service => (
              <div key={service.id} className="flex items-center gap-2">
                <svg className="w-5 h-5 text-secondary" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">{service.name}</span>
              </div>
            ))}
          </div>

          <div className="border rounded-lg overflow-hidden">
            <div className="bg-primary text-white p-4 text-center text-[14px]">
              IN-HOUSE BILLING COSTS
            </div>
            <div className="text-sm text-gray-500 p-2 text-center bg-gray-50">
              *calculations based on a medium-scale practice with $100,000 collections
            </div>
            <div className="divide-y text-[14px]">
              <div className="flex justify-between p-2">
                <span>Annual Salary</span>
                <span className="text-right">$30,000</span>
              </div>
              <div className="flex justify-between p-4">
                <span>Overheads</span>
                <span className="text-right">$20,000</span>
              </div>
              <div className="flex justify-between p-4 font-medium">
                <span>Total</span>
                <span className="text-right">$50,000</span>
              </div>
            </div>

            <div className="bg-secondary text-white p-2 text-center text-[14px]">
               FULL SERVICE MEDICAL BILLING COSTS
            </div>
            <div className="text-sm text-gray-500 p-2 text-center bg-gray-50">
              *calculations based on a medium-scale practice with $100,000 collections
            </div>
            <div className=" text-[14px]">
              <div className="flex justify-between p-4">
                <span>Billing Service Rates</span>
                <span className="text-right">as low as 2.9% of the collections</span>
              </div>
              <div className="flex justify-between p-4 font-medium">
                <span>Total</span>
                <span className="text-right">$2,900</span>
              </div>
            </div>

            <div className="bg-secondary text-white p-2">
              <div className="text-center text-[14px]">ANNUAL SAVINGS WITH PaySure</div>
              <div className="text-center text-[14px] font-bold">$47,100</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Location