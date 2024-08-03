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
      <div className={`flex gap-[48px] items-start   md:py-10 w-[100%] `}>
        <div className="hidden xl:flex ">
          <SideBar />
        </div>
        <div
          className={`w-[100%] lg:mt-0  relative  md:h-[964px] overflow-hidden ${mobileBar ? "opacity-[0.2]  " : ""}  ${miniState.isOpen ? "flex  overflow-hidden h-[90vh] ":"flex h-auto"}`}
        >
          <div
            className={`w-[100%]  md:h-[100%]  md:overflow-y-scroll ${miniState.isOpen?"lg:w-[60%] md:w-[55%]  h-[85vh] overflow-y-scroll md:h-[100%] ":"w-[100%]"} ${mobileBar?"h-[100vh] overflow-hidden hidden":""}}`}
            style={{ transition: ".2s linear all"}}
          >
            <Outlet />
          </div>
          
           <div className={`absolute h-[85vh]  md:sticky md:top-[0%]   md:h-[100%]   ${miniState.isOpen?"w-[100%] md:w-[45%] lg:w-[40%]  translate-x-[0]  overflow-hidden ":" w-[100%] translate-x-[100%] md:hidden "}`}  style={{ transition: ".3s linear all"}}>
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
