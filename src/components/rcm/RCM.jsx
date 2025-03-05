'use client'

// import { Check } from 'lucide-react'
import CheckIcon from "@mui/icons-material/Check";

import { Card, CardContent } from "@mui/material";
import Link from "next/link";


const services = [
  { name: 'Patient Verification', id: 1 },
  { name: 'Claim Scrubbing', id: 2 },
  { name: 'Claim Submission', id: 3 },
  { name: 'Revenue Cycle Management', id: 4 },
  { name: 'A/R Recovery', id: 5 },
  { name: 'Fast Reimbursement', id: 6 }
]

export default function RCM() {
  return (
    <section className="p-[4rem]  max-w-7xl mx-auto md:p-[2rem]">
      <div className="flex items-center justify-evenly gap-6 lg:flex-col lg:space-y-4">
        <div className="space-y-8 w-[45%] lg:w-full">
          <h3 className="font-bold tracking-tight text-left">
            The Only <span className="text-primary">Medical Billing Company</span> Integrating Technology and Expertise to Fulfill Providers' Vision
          </h3>
          
          <p className="text-lg text-gray-600">
          Our U.S.-based healthcare revenue cycle management company assists individual and institutional providers in streamlining patient billing and coding through advanced medical billing services.
          </p>

          <div className="flex gap-4 flex-wrap sm:flex-col">
            {services.map((service) => (
              <div key={service.id} className="flex items-center gap-2 w-[45%] sm:w-full ">
                <div className="rounded-full bg-secondary p-[0.08rem]">
                  <CheckIcon className="h-4 w-4 text-white" />
                </div>
                <span className="text-gray-700">{service.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex gap-4 w-[45%] lg:w-full md:flex-col">
          <Card className="p-6 !shadow-lg">
            <CardContent className="space-y-4 p-0">
              <div className="bg-primary text-white px-4 py-1 rounded-full w-fit text-sm">
                Happiness Score
              </div>
              <div className="text-6xl font-bold">
                96<span className="text-4xl">%</span>
              </div>
              <p className="text-gray-600">
                Based on a 4.8-star rating from 350+ providers across the states.
              </p>
              <Link
                href="/#reviews" 
                className="text-secondary hover:text-primary/80 font-medium inline-flex items-center"
              >
                See testimonials →
              </Link>
            </CardContent>
          </Card>

          <Card className="p-6 !shadow-lg">
            <CardContent className="space-y-4 p-0">
              <div className="bg-secondary text-white px-4 py-1 rounded-full w-fit text-sm">
                Billing Experts
              </div>
              <div className="text-6xl font-bold">
                1.2<span className="text-4xl">k+</span>
              </div>
              <p className="text-gray-600">
                CMRS, RHIA, CPB certified medical billers and coders for every specialty.
              </p>
              <Link
                href="/about" 
                className="text-secondary hover:text-primary/80 font-medium inline-flex items-center"
              >
                About us →
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}