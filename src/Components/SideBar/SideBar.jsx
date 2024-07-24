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
const LinksNames = [
  {
    name: "All Tasks",
    icon: <MdOutlineEventNote width={70} />,
    id: 1,
    path: "",
  },
  {
    name: "Today",
    icon: <CiCalendar />,
    id: 2,
    path: "today",
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
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="flex justify-center w-[280px] flex-col items-center relative py-5">
      <div className=" w-[118px] h-[118px]">
        <img src={profile} alt="" className="w-[100%] h-[100%]" />
      </div>
      <div className="contentBox back-color w-[100%] flex flex-col items-center absolute top-[50%] z-[-1] pt-16 h-[850px] text-font gap-[9px]">
        <h2 className="font-normal leading-[20px] text-[15px]">Hey, ABCD</h2>
        <div className="back-color-whitish py-[24px] w-[240px] mainLinks">
          <ul className="">
            {LinksNames.map((item) => {
              return (
                <li key={item.id} className={``}>
                  <NavLink
                    to={item.path}
                    className="flex items-center gap-[16px] py-[8px] px-[16px] text-[15px] rounded-[16px]"
                    activeclassname="activ"
                  >
                    <span className="text-[24px]">{item.icon}</span>
                    {item.name}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="addList back-color-whitish  w-[240px] py-[24px] ">
          <div className="inner flex gap-[16px] py-[8px] px-[16px] ">
            <FaPlus className="text-[20px]" />
            <h2 className="text-[15px] font-normal   ">Add list</h2>
          </div>
        </div>

        {/* Below div contain total task and chart */}
        <div className="chart  flex items-center flex-col w-[236px] h-[307px] back-color-whitish text-font" >
          <div className="totalTasks flex flex-col w-[100%] px-[8px] py-[16px]  ">
            <div className="flex justify-between items-center w-[100%] ">
              <h3 className="text-14px">Today Tasks</h3>
              <span className="w-[16px] h-[16px] bg-[#BDBDBD] rounded-[50%] text-white flex justify-center items-center ">i</span>
            </div>
            <p className="text-[22px] font-semibold">12</p>
          </div>
          <div className="mainChart">
            <MiniChart />
             {/* labels */}
             <div className="labels flex gap-2 items-center mt-2">
                  <div  className="flex gap-1 items-center">
                      <span className="w-[6px] h-[6px] rounded-full bg-[#3F9142] "></span>
                      <p className="text-[7.98px] font-normal leading-[9.65px]">Pending</p>
                  </div>
                  <div className="flex gap-1 items-center">
                       <span className="w-[6px] h-[6px] rounded-full bg-[#142E15]"></span>
                       <p className="text-[7.98px] font-normal leading-[9.65px]">Done</p>
                  </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
