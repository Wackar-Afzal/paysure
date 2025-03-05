import Link from "next/link"

const FooterMessage = () => {
  return (
    <div className="bg-secondary py-8 px-16 m-16 flex flex-col justify-center items-center gap-8 md:py-[2rem] md:m-0">
        <h3 className="text-white text-center">
        Reduce Billing Claim Denials and Boost Your Medical Revenue Up to 30%
        </h3>
        <p className="text-white text-center">
        Claim denials are a major source of lost revenue for healthcare providers. They can result from errors in medical billing and coding. BellMedEx’s medical billing consulting service prevents these errors by ensuring claim submission that’s compliant with payer rules and regulations.
        </p>

        <Link href={'/#contact'} className="btn !bg-transparent !border-white hover:text-lightGrey">Let's Talk →</Link>
    </div>
  )
}

export default FooterMessage