import React, { useEffect } from "react";
import { useState } from "react";
import Navbar from "../Navbar/Navbar";
import SideBar from "../SideBar/SideBar";
import { Outlet } from "react-router";
import { useSelector } from "react-redux";
import InnerTodo from "../InnerTodo/InnerTodo";
import '../../App.css'
const Layout = () => {
  const miniState = useSelector((state) => state.miniBar.miniTodo);
 const [isVisible,setIsVisible] = useState(false)
  const mobileBar = useSelector((state) => state.menubar.mobileBar);
  const desktopBar = useSelector((state) => state.menubar.desktopBar);
  const allTodos = useSelector((state) => state.todos.allTask);
  useEffect(()=>{
        if(miniState.isOpen)
        {
         window.scrollTo({top:0,behavior:'smooth'})
          setIsVisible(true)
        }
        else  
          setTimeout(()=>setIsVisible(false),300) 
  },[miniState.isOpen])
  return (
    <>
      <Navbar />
      <div className="flex gap-[48px] items-start py-10 w-[100%] ">
        <div className="hidden xl:flex ">
          <SideBar />
        </div>
        <div
          className={`w-[100%] lg:mt-0  relative  md:h-[964px] overflow-hidden  ${mobileBar ? "opacity-[0.2] " : ""}  ${miniState.isOpen ? "flex h-[100%]":"flex "}`}
          
        >
          <div
            className={`w-[100%]  md:h-[100%]   ${miniState.isOpen?"lg:w-[60%] md:w-[55%] md:overflow-x-scroll h-[90vh] overflow-hidden ":"w-[100%]"} ${mobileBar?"h-[100vh] overflow-hidden":""}}`}
            style={{ transition: ".2s linear all" }}
          >
            <Outlet />
          </div>
          
           <div className={`absolute   md:static  md:h-[100%]   h-[100%] ${miniState.isOpen?"w-[100%] md:w-[45%] lg:w-[40%]  translate-x-[0] h-[90vh] ":" w-[100%] translate-x-[100%] md:hidden "}`}  style={{ transition: ".3s linear all" }}>
                {isVisible &&
                  <InnerTodo item={miniState.item }  /> 
                }

                
                
            
               

          </div>
         
          

        </div>
      </div>
    </>
  );
};

export default Layout;
