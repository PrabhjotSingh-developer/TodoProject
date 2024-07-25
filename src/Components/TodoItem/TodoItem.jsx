import React from 'react'
import '../../App.css'
import { FaRegStar } from "react-icons/fa";
const TodoItem = ({item}) => {
    console.log(item.content)
  return (
    <div className='w-[100%] h-[80px] py-[16px] pr-[32px] text-font flex items-center justify-between ' style={{borderTop:"1.5px solid #496E4B"}}>
         <div className='flex items-center gap-4 px-[15px]' >
           <input type="checkbox" name="" id="" className='w-[18px] h-[18px] ' />
           <p className='text-[15px] font-[400] '>
            {item.content}
           </p>
        </div>
        <div>
             <FaRegStar className='text-[24px]'/>
        </div> 
    </div>
  )
}

export default TodoItem
