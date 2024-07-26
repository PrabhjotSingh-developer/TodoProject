import React from 'react'
import { useSelector } from 'react-redux'
import TodoItem from '../../Components/TodoItem/TodoItem'
const AllTask = () => {
    const allTodos = useSelector((state)=>state.todos.allTask)
    console.log(allTodos)
  return ( 
    <div>
         <h2 className='py-4 px-2 text-font text-[30px]'>All Tasks</h2>
        { allTodos &&
             allTodos.map((item)=>{
               if(!item.completed)
                return <TodoItem key={item.id} item={item}/>
             })
        }
      <div className="completedTask">
         <p className="text-font text-[15px] my-2 px-4">Completed</p>
         {allTodos.length > 0 &&
          allTodos.map((item) => {
            if (item.completed) return <TodoItem item={item} key={item.id} />;
          })}
      </div>
    </div>
  )
}

export default AllTask
