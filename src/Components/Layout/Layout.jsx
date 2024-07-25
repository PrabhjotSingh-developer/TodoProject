import React from 'react'
import Navbar from '../Navbar/Navbar'
import SideBar from '../SideBar/SideBar'
import { Outlet } from 'react-router'
import { useSelector } from 'react-redux'
const Layout = () => {
  const mobileBar = useSelector((state)=>state.menubar.mobileBar)
  const desktopBar = useSelector((state)=>state.menubar.desktopBar)

  return (
 <>
     <Navbar/>
     <div className="flex gap-[48px] items-start py-10">
        <div className='hidden lg:flex '>
           <SideBar/>
        </div>
        <div className={`w-[100%]  lg:mt-0 ${mobileBar?'opacity-[0.2] ':''}`}>
           <Outlet/>
        </div>
     </div>
 </>
  )
}

export default Layout
