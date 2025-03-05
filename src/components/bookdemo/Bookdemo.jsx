import { listtick } from "@/assets/icons"
import Link from "next/link"
import CheckIcon from "@mui/icons-material/Check";


const Bookdemo = () => {
  return (
            <div className="p-[4rem] text-white p-10 text-left bg-lightGrey p-4 lg:w-full md:p-[2rem]">
                <div className="bg-secondary p-4 rounded-xl">
                <div className="flex justify-evenly items-center mb-4 md:flex-col md:justify-start md:items-start">
                <div>
                <h2 className="text-left  text-white">Lets experience our medical billing services for as low as 2.49%</h2>
                <p className="mb-2">Over 1500 medical practices trust BellMedEx  medical billing services company. So let's have a chat.</p>
                </div>
                    <Link className="btn min-w-[max-content] " href='/#contact'>Book Demo</Link>
                </div>
                <hr className="bg-white m-4"/>
     
                
                 <div className="flex gap-4 flex-wrap mx-4">
                <div className="flex gap-2 items-center">
                <div className="rounded-full bg-primary p-[0.08rem]">
                  <CheckIcon className="h-4 w-4 text-white" />
                </div>
                <p>Maximize reimbursements & improve cash flow</p>
                </div>
                <div className="flex gap-2 items-center">
                <div className="rounded-full bg-primary p-[0.08rem]">
                  <CheckIcon className="h-4 w-4 text-white" />
                </div>
                <p>Maximize reimbursements & improve cash flow</p>
                </div>
                <div className="flex gap-2 items-center">
                <div className="rounded-full bg-primary p-[0.08rem]">
                  <CheckIcon className="h-4 w-4 text-white" />
                </div>
                <p>Maximize reimbursements & improve cash flow</p>
                </div>
                <div className="flex gap-2 items-center">
                <div className="rounded-full bg-primary p-[0.08rem]">
                  <CheckIcon className="h-4 w-4 text-white" />
                </div>
                <p>Maximize reimbursements & improve cash flow</p>
                </div>
                </div> 
                </div>
            </div>
  )
}

export default Bookdemo