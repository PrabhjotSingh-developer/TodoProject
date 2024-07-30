import React, { useState } from "react";
import { MdOutlineArrowDropDown } from "react-icons/md";
import "../../App.css";
import { FaRegBell, FaRegCalendar } from "react-icons/fa";
import { FaRepeat } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import {addTodo}  from '../../Features/Todo/TodoSlice.js'
const AddTask = () => {
  const theme = useSelector((state) => state.theme);
  const [newTodoItem, setTodoItem] = useState("");
  const dispatch = useDispatch();

  function addTodoItem()
  {
     if(newTodoItem === "")
        alert("Todo Is not Empty")
     else 
     {
         const currentDate = new Date().toISOString();
          dispatch(addTodo({
            id:Date.now(),
            content:newTodoItem,
            date:currentDate,
            completed:false,
            important:false
          }))
     }
     setTodoItem('');
  }
  return (
    <div className="text-font w-[100%] overflow-hidden mb-4">
      <div className=" flex">
        <p className="text-[13px] leading-[16px]">ToDo</p>
        <MdOutlineArrowDropDown />
      </div>
      <div className="addTaskBox  w-[100%] px-[20px] py-[20px] md:py-[30px]">
        <div className="h-[100px] sm:h-[146px] xl:w-[667px] w-[100%] ">
          <textarea
            type="text"
            placeholder="Add A Tasks"
            className="w-[90%] bg-transparent outline-none  h-[100%] resize-none text-wrap  whitespace-pre-wrap break-words"
            value={newTodoItem}
            onChange={(e) => setTodoItem(e.target.value)}
          />
        </div>
        <div className="icons flex justify-between items-center">
          <div className="flex gap-[20px]">
            <FaRegBell />
            <FaRepeat />
            <FaRegCalendar />
          </div>
          <button
            className={`uppercase   px-[16px] py-[8px] rounded-[8px] ${
              theme === "light"
                ? "bg-[#35793729] text-[#357937]"
                : "bg-[#357937] text-white"
            }`}
            onClick={addTodoItem}
          >
            Add Task
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTask;
