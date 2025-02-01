'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import MobNav from '../MobNav/MobNav'
const Header = () => {
  const pathname = usePathname()
  return (
    <div className='flex shadow-custom-shadow justify-between items-start h-21 px-16 py-2 items-center md:px-0'>


      <div className='flex space-x-0 items-center'>
      <div className='hidden md:block '>
        <MobNav />
      </div>
      <Link href='/' className='flex justify-center items-center gap-2'>
      <img className='w-7' src='/logo.png'/>
      <h1 className='text-primary text-[25px]'>PaySure</h1>
      </Link>
      </div>
   


        <div className='flex space-x-14 items-center md:space-x-0'>
        <div className='flex space-x-8  md:hidden'>
            <Link className={pathname==='/'?"text-primary":"text-black"}  href={'/'} >Home</Link>
            <Link className={pathname==='/news'?"text-primary":"text-black"} href={'/'} >Services</Link>
            <Link className={pathname==='/about'?"text-primary":"text-black"} href={'/about'} >About</Link>
            <Link className={pathname==='/contact'?"text-primary":"text-black"} href={'/'} >Contact</Link>
            <Link className={pathname==='/#faqs'?"text-primary":"text-black"} href={'/#faqs'} >FAQ</Link>
        </div>  
        </div>

    </div>
  )
}

export default Header