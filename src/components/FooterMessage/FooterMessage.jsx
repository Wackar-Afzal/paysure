import Link from "next/link"

const FooterMessage = () => {
  return (
    <div className="bg-secondary py-8 px-16 m-16 flex flex-col justify-center items-center gap-8 md:py-[2rem] md:m-0">
        <h3 className="text-white text-center">
        Minimize claim Denials and increase Medical Revenue by up to 30%.
        </h3>
        <p className="text-white text-center">
        Claim denials are a leading cause of revenue loss for healthcare providers, often due to billing and coding errors. PaySure’s medical billing consulting services ensure error-free, compliant claim submissions, reducing denials and maximizing reimbursements.
        </p>

        <Link href={'/#contact'} className="btn !bg-transparent !border-white hover:text-lightGrey">Let's Talk →</Link>
    </div>
  )
}

export default FooterMessage