import React, { useEffect } from "react";
import { useState } from "react";
import Navbar from "../Navbar/Navbar";
import SideBar from "../SideBar/SideBar";
import { Outlet } from "react-router";
import { useSelector } from "react-redux";
import InnerTodo from "../InnerTodo/InnerTodo";
const Layout = () => {
  const miniState = useSelector((state) => state.miniBar.miniTodo);

  const mobileBar = useSelector((state) => state.menubar.mobileBar);
  const desktopBar = useSelector((state) => state.menubar.desktopBar);
  const allTodos = useSelector((state) => state.todos.allTask);
  console.log(miniState.isOpen)
  return (
    <>
      <Navbar />
      <div className="flex gap-[48px] items-start py-10 w-[100%]">
        <div className="hidden xl:flex ">
          <SideBar />
        </div>
        <div
          className={`w-[100%] lg:mt-0 relative overflow-x-hidden  h-[100%] lg:min-h-[100vh] ${mobileBar ? "opacity-[0.2] " : ""}  ${miniState.isOpen ? "flex":"flex"}`}
        >
          <div
            className={`w-[100%] ${miniState.isOpen?"lg:w-[60%] md:[55%]":"w-[100%]"}`}
            style={{ transition: ".3s linear all" }}
          >
            <Outlet />
          </div>
          
           <div className={`absolute md:static  h-[100vh] ${miniState.isOpen?"w-[100%]  md:w-[45%] lg:w-[40%]  left-[0%]":" w-[0%] left-[110%]"}`}  style={{ transition: ".3s linear all" }}>
            
                  <InnerTodo item={miniState.item} />
              
          </div>
         


        </div>
      </div>
    </>
  );
};

export default Layout;
