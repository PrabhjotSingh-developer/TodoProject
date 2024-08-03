import React, { useEffect, useState } from "react";
import TodoItem from "../TodoItem/TodoItem";
import { useSelector,useDispatch } from "react-redux";
import { FaRegStar,FaStar ,} from "react-icons/fa";
import { isTodoCompleted,setImportantTasks } from "../../Features/Todo/TodoSlice";
import { toggleMiniTodo } from "../../Features/Todo/MiniTodo";
import { MdDelete } from "react-icons/md";
import { CiBellOn,CiCalendar } from "react-icons/ci";
import { GoPencil } from "react-icons/go";
import { RxCross2 } from "react-icons/rx";
import { deleteTodo,editTodo } from "../../Features/Todo/TodoSlice";
import { useLocation,useNavigate } from "react-router-dom";
import { FaSave } from "react-icons/fa";

const InnerTodo = ({ item }) => {
  // console.log(item)
  const [innerItem,setInnerItem] = useState(item);
  const [content,setContent] = useState(item?.content)
  const [isEditable,setIsEditable] = useState(false)
  const theme = useSelector((state) => state.theme.theme);
  const allTodos = useSelector((state)=>state.todos.allTask)

  const location = useLocation()
  const navigate = useNavigate()
  
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
 function deleteTodoItem()
 {
   dispatch(deleteTodo(item.id))
  //  alert("Todo deleted successfully")
    navigate(location.pathname)
   dispatch(toggleMiniTodo({isOpen:false}))
  
 }
 function updateTodo()
 {
     if(!isEditable)
        setIsEditable(true)
     else if(content != "" ){
       dispatch(editTodo({...item,content}))
      }
      else{
       alert("Todo Editable value cannot be empty")
       setContent(innerItem.content)
       setIsEditable(false)

     }

  
     setIsEditable(!isEditable)
 }
  useEffect(()=>{
     const upItem = allTodos.find((i)=>i.id === item?.id)
     if(upItem)
     {
       setInnerItem(upItem)
       setContent(upItem.content)
     }
  },[item,allTodos])
  
   return (
      
    <div className={`flex-col flex gap-5 ${bgColor} w-[100%] py-6 md:h-[85vh] h-[100%]  relative mainTodo `}  >
      <div
        className="w-[100%] h-[80px] py-[16px] pr-[32px] text-font flex items-center justify-between "
        style={{ borderTop: "1.5px solid #496E4B" }}
      >
        <div className="flex items-center gap-4 px-[15px] grow-[1]">
          <input
            type="checkbox"
            name=""
            id=""
            className="w-[18px] h-[18px] "
            onChange={() => todoCompleted(innerItem.id)}
            checked={innerItem?.completed}
          />
          {
             <input type="text" className={`bg-transparent outline-none px-2 w-[100%] py-1 text-font  ${isEditable?"border-b-slate-600 border-2 border-solid":"border-none"}`} value={content} onChange={(e)=>setContent(e.target.value)} id="" disabled={!isEditable} />
          }
         
        </div>
        <div>
          {innerItem?.important ? (
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
      <div className="flex gap-7 flex-col items-center text-font w-[100%] ">
        <div className="px-8 py-2  w-full" style={{ borderTop: "1.5px solid #496E4B" }}>
         <button className="border-top flex gap-2 items-center  " 
         onClick={updateTodo} >{ isEditable?<><FaSave className="text-[20px] w-[24px]"/>Save Data</> :<><GoPencil className="text-[20px] w-[24px]" />Edit Todo</>}</button>
        </div>
        <div className="px-8 py-2  w-full" style={{ borderTop: "1.5px solid #496E4B" }}>

      <button className="border-top gap-2 items-center flex " > <CiBellOn className="text-[20px] w-[24px] "/> Set Reminder</button>
      </div>
      <div className="px-8 py-2  w-full" style={{ borderTop: "1.5px solid #496E4B" }}>
      <button className="border-top flex gap-2 items-center " > <CiCalendar className="text-[20px] w-[24px] "/> Add Due Date</button>
      </div>
      <div className="w-full flex justify-between px-8 py-2 absolute bottom-0" style={{ borderTop: "1.5px solid #496E4B" }}>
      <button className="border-top gap-1 items-center text-[25px]" onClick={()=> dispatch(toggleMiniTodo({isOpen:false,item}))}> <RxCross2 /></button>
      <button className=" text-[25px]" onClick={deleteTodoItem}><MdDelete /></button>
      </div>
      </div>
     
    </div>
    
  );

};

export default InnerTodo;
