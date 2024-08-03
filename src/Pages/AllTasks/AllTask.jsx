import React, { useEffect ,useState} from 'react'
import { useSelector } from 'react-redux'
import TodoItem from '../../Components/TodoItem/TodoItem'
const AllTask = () => {
    const allTodos = useSelector((state)=>state.todos.allTask)
    const [completeTask,setCompletedTask] = useState([]);
 
   useEffect(()=>{
      const compItem =    allTodos.filter((item)=> item.completed === true )
         setCompletedTask(compItem)
   },[allTodos])
  return ( 
   
    <div>
         <h2 className='py-4 px-2 text-font text-[30px]'> {allTodos.length > 0 ? "All Tasks":"No Tasks Added"} </h2>
        { allTodos.length >0 &&
             allTodos.map((item)=>{
               if(!item.completed)
                return <TodoItem key={item.id} item={item}/>
             })
        }
    {  completeTask.length > 0 &&
      <div className="completedTask">
         <p className="text-font text-[15px] my-2 px-4">Completed</p>
          {
            completeTask.map((item)=>{
              return <TodoItem item={item} key={item.id}/>
            })
          }
      </div>
    }
      
       
    </div>

        

  ) 
}

export default AllTask
