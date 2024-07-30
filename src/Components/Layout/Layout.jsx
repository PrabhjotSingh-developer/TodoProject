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

  return (
    <>
      <Navbar />
      <div className="flex gap-[48px] items-start py-10 w-[100%]">
        <div className="hidden xl:flex ">
          <SideBar />
        </div>
        <div
          className={`w-[100%] lg:mt-0 overflow-x-hidden relative lg:static  h-[100%] lg:h-[100vh] ${mobileBar ? "opacity-[0.2] " : ""}  ${
            miniState ? "flex" : ""
          }`}
        >
          <div
            className={`${
              miniState.isOpen ? "lg:w-[65%] W-[100%]" : "w-[100%]"
            }`}
            
          >
            <Outlet />
          </div>
          <div
            className={`absolute lg:static h-full w-[100%] ${
              miniState.isOpen
                ? "translate-x-[0%] lg:w-[40%]  "
                : "translate-x-[400%] "
            }`}
            style={{ transition: ".3s linear" }}
          >
            {miniState.isOpen &&

             <InnerTodo item={miniState.item} />
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
