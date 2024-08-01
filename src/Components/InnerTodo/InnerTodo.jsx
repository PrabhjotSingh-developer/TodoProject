import React, { useEffect, useState } from "react";
import TodoItem from "../TodoItem/TodoItem";
import { useSelector,useDispatch } from "react-redux";
import { FaRegStar,FaStar } from "react-icons/fa";
import { isTodoCompleted,setImportantTasks } from "../../Features/Todo/TodoSlice";
import { toggleMiniTodo } from "../../Features/Todo/MiniTodo";
import { MdOutlineEdit } from "react-icons/md";
const InnerTodo = ({ item }) => {
  console.log(item)
  const [innerItem,setInnerItem] = useState(item);
  const theme = useSelector((state) => state.theme.theme);
  const allTodos = useSelector((state)=>state.todos.allTask)
  // console.log(allTodos)
  const bgColor = theme === "light" ? "back-color" : "bg-[#2C2C2C]";
  const dispatch = useDispatch()
  function todoCompleted(id)
  {
    dispatch(isTodoCompleted(id))
    console.log(item.completed)
  }
  function importantToggle(id)
  {
     dispatch(setImportantTasks(id))
     console.log(item)
  }
 
  useEffect(()=>{
     const upItem = allTodos.find((i)=>i.id === item.id)
     console.log(upItem)
     setInnerItem(upItem)
  },[allTodos,item])
  
   return (
    <div className={`flex-col flex gap-5 ${bgColor} w-[100%] py-6 h-[100%]  mainTodo`}  >
      <div
        className="w-[100%] h-[80px] py-[16px] pr-[32px] text-font flex items-center justify-between"
        style={{ borderTop: "1.5px solid #496E4B" }}
      >
        <div className="flex items-center gap-4 px-[15px] grow-[1]">
          <input
            type="checkbox"
            name=""
            id=""
            className="w-[18px] h-[18px] "
            onChange={() => todoCompleted(innerItem.id)}
            checked={innerItem.completed}
          />
          <p
            className={`text-[15px] font-[400] ${
              innerItem.completed ? "line-through" : ""
            }  grow-[2]`}
            
          >
            {innerItem.content}
          </p>
        </div>
        <div>
          {innerItem.important ? (
            <FaStar
              className="text-[24px]"
              onClick={() => importantToggle(innerItem.id)}
            />
          ) : (
            <FaRegStar
              className="text-[24px]"
              onClick={() => importantToggle(innerItem.id)}
            />
          )}
        </div>
      </div>
      <div className="flex gap-3 flex-col items-center">
         <button className="border-top flex gap-1 items-center"> <MdOutlineEdit/> Edit Todo</button>
      <button className="border-top gap-1 items-center">Delete Todo</button>
      <button className="border-top gap-1 items-center" onClick={()=> dispatch(toggleMiniTodo({isOpen:false,item}))}> Close Edit Bar</button>
      </div>
     
    </div>
  );

};

export default InnerTodo;
