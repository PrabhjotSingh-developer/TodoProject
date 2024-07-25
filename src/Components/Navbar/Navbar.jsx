import React from 'react'
import { FaBars } from "react-icons/fa6";
import LogoImg from '../../assets/logomark.png'
import { CiGrid41,CiSearch } from "react-icons/ci";
import { RiMoonClearLine,RiSunLine  } from "react-icons/ri";
import SideBar from '../SideBar/SideBar';
import { Outlet } from 'react-router';
import { useSelector,useDispatch } from 'react-redux';
import { themeChanger } from '../../Features/Todo/ThemeSlice';
import { mobileToggle,  } from '../../Features/Todo/MenuSlice';

const Navbar = () => {
  const theme = useSelector((state)=>state.theme)
  const mobileBar = useSelector((state)=>state.menubar.mobileBar);

 
  const bgColor = (theme === "light") ?"back-color":"bg-[#2C2C2C]"
  const dispatch = useDispatch();
  function changeTheme(){
           dispatch(themeChanger())
  }
  function toggleMenubar()
  {
      
      let widthScreen = screen.width;
      if(widthScreen < 1024)
        dispatch(mobileToggle())
      
  }
  return (
   <div className={`py-[12px]  `}>
        <nav className='flex items-center justify-between '>
              <div className={`flex items-center gap-[24px] `}>
                <FaBars className={`w-[24px] h-[24px] lg:hidden`} onClick={toggleMenubar}/>
                {/* logo icon -> */}
                <div className="logoIcon flex items-center">
                 <img className ="w-[32px] h-[32px]" src={LogoImg} alt="" />
                 <h2 className='font-[700] text-color text-[24px]'>DoIt</h2>
                </div>
              </div>
              <div className='flex gap-[24px]'>
              <CiSearch  className='w-[24px] h-[24px]'/>
              <CiGrid41  className='w-[24px] h-[24px]'/>
              { theme === "light" ?
                <RiMoonClearLine  className='w-[24px] h-[24px]' onClick={changeTheme}/>
                :
                <RiSunLine  className='w-[24px] h-[24px]' onClick={changeTheme}/>
              }
              </div>
        </nav>
        {/* <SideBar/> */}
        <div className={`flex lg:hidden z-10 relative w-[100%] sm:w-[50%]  ${mobileBar ? "" : "translate-x-[-120%] " }`} style={{transition:".2s linear all"}}>
              <div className='absolute top-0 w-[100%]'>
                <SideBar/>

              </div>
        </div>
   </div>
  )
}

export default Navbar
