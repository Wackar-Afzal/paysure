'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect, useRef } from 'react'
import MobNav from '../MobNav/MobNav'
import { ArrowDropDown } from '@mui/icons-material'

const Header = () => {
  const pathname = usePathname()
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const dropdownRef = useRef(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsServicesOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <div className='bg-white z-20 flex shadow-custom-shadow justify-between sticky top-0 h-21 px-16 py-2 items-center md:px-0'>

      <div className='flex space-x-0 items-center'>
        <div className='hidden md:block '>
          <MobNav />
        </div>
        <Link href='/' className='flex justify-center items-center gap-2'>
          <img className='w-7' src='/logo.png' alt="Logo"/>
          <h1 className='text-primary text-[25px]'>PaySure</h1>
        </Link>
      </div>

      <div className='flex  items-center gap-4'>
        <div className='flex items-center space-x-8 md:hidden relative'>

          <Link className={pathname === '/' ? "text-primary" : "text-gray-600"} href={'/'}>Home</Link>

          {/* Services Dropdown */}
          <div 
            className="relative" 
            ref={dropdownRef} 
          >
            <button
            onClick={() => setIsServicesOpen(!isServicesOpen)}
            onMouseEnter={() => setIsServicesOpen(!isServicesOpen)}
            className={`relative flex items-center gap-1 ${isServicesOpen ? "text-primary" : "text-gray-600"}`}
            >
              Services <ArrowDropDown/>
            </button>
            {isServicesOpen && (
            <div className="absolute left-0 mt-2 px-8 bg-white shadow-md rounded-md p-2 space-y-2 flex flex-col w-[max-content]"
            onMouseLeave={() => setIsServicesOpen(false)}
             >
                <Link className={pathname === '/services/medical-billing-services' ? "text-primary" : "text-gray-600"} href="/services/medical-billing-services">Medical Billing Services</Link>
                <Link className={pathname === '/services/medical-coding-service' ? "text-primary" : "text-gray-600"} href="/services/medical-coding-service">Medical Coding Service</Link>
                <Link className={pathname === '/services/medical-credentialing-service' ? "text-primary" : "text-gray-600"} href="/services/medical-credentialing-service">Medical Credentialing Service</Link>
                <Link className={pathname === '/services/rcm' ? "text-primary" : "text-gray-600"} href="/services/rcm">RCM</Link>
                <Link className={pathname === '/services/healthcare-seo' ? "text-primary" : "text-gray-600"} href="/services/healthcare-seo">Healthcare SEO</Link>
              </div>
            )}
          </div>

          <Link className={pathname === '/about' ? "text-primary" : "text-gray-600"} href={'/about'}>About</Link>
          <Link className={pathname === '/#contact' ? "text-primary" : "text-gray-600"} href={'/#contact'}>Contact</Link>
          <Link className={pathname === '/#faqs' ? "text-primary" : "text-gray-600"} href={'/#faqs'}>FAQ</Link>

        </div>
        <Link href={'/#contact'} className='xs:!hidden btn !text-[0.8rem] md:!text-[0.6rem] animate-shadowPulse'>Talk To An Expert →</Link>
      </div>
    </div>
  )
}

export default Header
