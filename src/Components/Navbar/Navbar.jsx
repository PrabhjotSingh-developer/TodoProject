import React from 'react'
import { FaBars } from "react-icons/fa6";
import LogoImg from '../../assets/logomark.png'
import { CiGrid41,CiSearch } from "react-icons/ci";
import { RiMoonClearLine } from "react-icons/ri";
const Navbar = () => {
  return (
    
   <div className='py-[12px]'>
        <nav className='flex items-center justify-between'>
              <div className='flex items-center gap-[24px]'>
                <FaBars className='w-[24px] h-[24px]' />
                {/* logo icon -> */}
                <div className="logoIcon flex items-center">
                 <img className ="w-[32px] h-[32px]" src={LogoImg} alt="" />
                 <h2 className=' font-[700] text-color text-[24px]'>DoIt</h2>
                </div>
              </div>
              <div className='flex gap-[24px]'>
              <CiSearch  className='w-[24px] h-[24px]'/>
              <CiGrid41  className='w-[24px] h-[24px]'/>
              <RiMoonClearLine  className='w-[24px] h-[24px]'/>
              </div>
        </nav>
   </div>
  )
}

export default Navbar
