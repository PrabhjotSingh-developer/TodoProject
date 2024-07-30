import React, { useEffect, useState } from 'react'
import '../../App.css'
import { FaRegStar,FaStar } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import {isTodoCompleted,setImportantTasks} from '../../Features/Todo/TodoSlice.js'
import { toggleMiniTodo} from '../../Features/Todo/MiniTodo.js';
const TodoItem = ({item}) => {
  
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


  return (
    <div className='w-[100%] h-[80px] py-[16px] pr-[32px] text-font flex items-center justify-between' style={{borderTop:"1.5px solid #496E4B"}} >
         <div className='flex items-center gap-4 px-[15px] grow-[1]' >
           <input type="checkbox" name="" id="" className='w-[18px] h-[18px] ' onChange={()=>todoCompleted(item.id)} checked={item.completed}/>
           <p className={`text-[15px] font-[400] ${item.completed?'line-through':''}  grow-[2]` } onClick={()=>dispatch(toggleMiniTodo({isOpen:true,item}))}>
            {item.content}
           </p>
        </div>
        <div>
             { item.important ?
             <FaStar className='text-[24px]' onClick={()=>importantToggle(item.id)}/>
               :  <FaRegStar className='text-[24px]' onClick={()=>importantToggle(item.id)}/>
          }
           
        </div> 
    </div>
  )
}

export default TodoItem
