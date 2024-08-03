import React from "react";
import { NavLink } from "react-router-dom";
import { MdOutlineEventNote, MdOutlineMenuBook } from "react-icons/md";
import { CiCalendar, CiStar } from "react-icons/ci";
import { FaPlus } from "react-icons/fa6";
import { TbCalendarUser } from "react-icons/tb";
import MiniChart from "../PieChart/MiniChart.jsx";
import profile from "../../assets/profile.png";
import "../../App.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { mobileToggle  } from "../../Features/Todo/MenuSlice.js";
import { toggleMiniTodo } from "../../Features/Todo/MiniTodo.js";
const LinksNames = [
  {
    name: "All Tasks",
    icon: <MdOutlineEventNote  />,
    id: 2,
    path: "alltasks",
  },
  {
    name: "Today",
    icon: <CiCalendar />,
    id: 1,
    path: "",
  },
  {
    name: "Important",
    icon: <CiStar />,
    path: "important",
    id: 3,
  },
  {
    name: "Planned",
    icon: <MdOutlineMenuBook />,
    id: 4,
    path: "planned",
  },
  {
    name: "Assigned to me",
    icon: <TbCalendarUser />,
    id: 5,
    path: "assignedTome",
  },
];
const SideBar = () => {
  const allTodos = useSelector((state)=>state.todos.allTask)
  const theme = useSelector((state)=>state.theme.theme)
  const mobileBar = useSelector((state)=>state.menubar.mobileBar);
  const miniState = useSelector((state)=>state.miniBar.miniTodo)
  const dispatch = useDispatch();
  const bgColor = (theme === "light") ?"back-color":"bg-[#2C2C2C]"
  function closeMenubar()
  {
      dispatch(toggleMiniTodo({...state,isOpen:false}))
        dispatch(mobileToggle())
  }
  return (
    <div className={`flex justify-center  px-24 flex-col items-center relative z-[5] pt-4 ${bgColor}`} >
      <div className={` w-[118px] h-[118px]`}>
        <img src={profile} alt="" className="w-[100%] h-[100%]" />
      </div>
      <div className={`contentBox ${bgColor} w-[100%] flex flex-col items-center absolute top-[60%] z-[-1] pt-[4.5rem] h-[900px] text-font gap-[9px]`} style={{transition:".3s linear all"}}>
        <h2 className="font-normal leading-[20px] text-[15px]">Hey, ABCD</h2>
        <div className={`${theme === 'light'?'back-color-whitish':"bg-[#232323]"} py-[24px] w-[240px] mainLinks`}>
          <ul className="">
            {LinksNames.map((item) => {
             
              return (
                <li key={item.id} className={``}>
                  <NavLink
                    to={item.path}
                    className="flex items-center gap-[16px] py-[8px] px-[16px] text-[15px] rounded-[16px]"
                    activeclassname="active"
                    onClick={()=>
                      {mobileBar && closeMenubar() 
                         if(miniState.isOpen)
                            dispatch(toggleMiniTodo({isOpen:false}))
                      }}
                  >
                    <span className="text-[24px]">{item.icon}</span>
                      {item.name}
          
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
        <div className={`addList  w-[240px] py-[24px] ${theme === 'light'? 'back-color-whitish':"bg-[#232323]"}`}>
          <div className="inner flex gap-[16px] py-[8px] px-[16px] ">
            <FaPlus className="text-[20px]" />
            <h2 className="text-[15px] font-normal   ">Add list</h2>
          </div>
        </div>

        {/* Below div contain total task and chart */}
        <div className={`chart  flex items-center flex-col w-[236px] h-[307px]  text-font ${theme === 'light'? 'back-color-whitish':"bg-[#232323]"}`} >
          <div className="totalTasks flex flex-col w-[100%] px-[8px] py-[16px]  ">
            <div className="flex justify-between items-center w-[100%] ">
              <h3 className="text-14px">All Tasks</h3>
              <span className="w-[16px] h-[16px] bg-[#BDBDBD] rounded-[50%] text-white flex justify-center items-center ">i</span>
            </div>
            <p className="text-[22px] font-semibold">{allTodos.length}</p>
          </div>
          <div className="mainChart py-4">
            <MiniChart />
             {/* labels */}
             <div className="labels flex gap-2 items-center mt-2">
                  <div  className="flex gap-1 items-center">
                      <span className="w-[6px] h-[6px] rounded-full bg-[#3F9142] "></span>
                      <p className="text-[12px] font-normal leading-[9.65px]">Pending</p>
                  </div>
                  <div className="flex gap-1 items-center">
                       <span className="w-[6px] h-[6px] rounded-full bg-[#142E15]"></span>
                       <p className="text-[12px] font-normal leading-[9.65px]">Done</p>
                  </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
