import React, { useState } from "react";
import { FaBars } from "react-icons/fa6";
import LogoImg from "../../assets/logomark.png";
import { CiGrid41, CiSearch } from "react-icons/ci";
import { RiMoonClearLine, RiSunLine } from "react-icons/ri";
import SideBar from "../SideBar/SideBar";
import { Outlet } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { themeChanger } from "../../Features/Todo/ThemeSlice";
import { mobileToggle } from "../../Features/Todo/MenuSlice";

const Navbar = () => {
  const theme = useSelector((state) => state.theme);
  
  const mobileBar = useSelector((state) => state.menubar.mobileBar);

  const miniState = useSelector((state)=>state.miniBar.miniTodo)
  const bgColor = theme === "light" ? "back-color" : "bg-[#2C2C2C]";
  const dispatch = useDispatch();
  function changeTheme() {
    dispatch(themeChanger());
  }
  function toggleMenubar() {
    let widthScreen = screen.width;
    if (widthScreen < 1280) dispatch(mobileToggle());
  }
  return (
    <div className={`py-[12px] `}>
      <nav className={`flex items-center justify-between py-4 md:py-0 ` }>
        <div className={`flex items-center gap-[24px] `}>
          <FaBars
            className={`w-[24px] h-[24px] xl:hidden`}
            onClick={toggleMenubar}
          />
          {/* logo icon -> */}
          <div className="logoIcon flex items-center">
            <img className="w-[32px] h-[32px]" src={LogoImg} alt="" />
            <h2 className="font-[700] text-color text-[24px]">TaskFlow</h2>
          </div>
        </div>
        <div className="flex gap-[24px] relative ">
          
      
        
          <CiGrid41 className="w-[24px] h-[24px]" />
          {theme === "light" ? (
            <RiMoonClearLine
              className="w-[24px] h-[24px]"
              onClick={changeTheme}
            />
          ) : (
            <RiSunLine className="w-[24px] h-[24px]" onClick={changeTheme} />
          )}
        </div>
      </nav>
      {/* <SideBar/> */}
      <div
        className={`flex xl:hidden z-10 relative w-[100%] sm:w-[50%]   ${
          mobileBar ? "" : "translate-x-[-120%] "
        }`}
        style={{ transition: ".3s linear all" }}
      >
        <div className={`absolute top-0 w-[100%] md:mt-8 lg:mt-0  ${miniState.isOpen ? "h-[85vh]":"h-[100vh]" }  overflow-scroll md:overflow-visible `}>
          <SideBar />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
