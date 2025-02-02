import { specialityicons } from "@/assets/icons"
import Link from "next/link"
const Speciality = ({noficons}) => {
    const data=[
        {svg:"kidney",
        heading:"Urology",
        text:""
        },
        {svg:"cardiology",
            heading:"Cardiology",
            text:""
        },
        {svg:"behaviouralhealth",
            heading:"Urgent Care",
            text:""
        },
        {svg:"urgentcare",
            heading:"Laboratory Billing",
            text:""
        },
        {svg:"laboratory",
            heading:"Behavioral Health",
            text:""
        },
        {svg:"orthopedic",
            heading:"Orthopedics",
            text:""
        },
        {svg:"abatherapy",
            heading:"ABA Therapy",
            text:""
        },
    ]
  return (
    <div className="w-[100%] py-8 px-[4rem] bg-lightGrey sm:px-[2rem]">
        <h2>Our Popular Specialties✨</h2>
        <div className="flex p-8  justify-center items-center gap-8 flex-wrap">
            {data.slice(0,noficons).map((obj,index)=>{
               return<div key={index} className="w-[30%] flex flex-col items-center gap-4">
               {/* {specialityicons[`${obj.svg}`]} */}
               <div className="w-[5rem]" dangerouslySetInnerHTML={{ __html: specialityicons[`${obj.svg}`] }} />
                <h4 className="font-bold">{obj.heading}</h4></div>
            })}
        </div>
        {noficons<data.length?<Link href="/specialities" className="m-auto text-[18px] flex justify-center items-center w-[10rem] h-[2.765rem] min-w-[6.875rem] bg-primary rounded-full text-white border border-primary transition-all duration-200 ease-linear hover:bg-[#fffefe] hover:text-black hover:border-[#000000]"> Explore More</Link>:null}
    </div>
  )
}

export default Speciality