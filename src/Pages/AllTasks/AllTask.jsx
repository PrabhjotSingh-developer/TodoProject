import React from 'react'
import { useSelector } from 'react-redux'
import TodoItem from '../../Components/TodoItem/TodoItem'
const AllTask = () => {
    const allTodos = useSelector((state)=>state.todos.allTask)
    console.log(allTodos)
  return (
    <div>
        { allTodos &&
             allTodos.map((item)=>{
                return <TodoItem key={item.id} item={item}/>
             })
        }
    </div>
  )
}

export default AllTask
