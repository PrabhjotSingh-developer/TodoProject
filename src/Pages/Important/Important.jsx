import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import TodoItem from "../../Components/TodoItem/TodoItem";
import { useState } from "react";
const Important = () => {
  const allTodos = useSelector((state) => state.todos.allTask);
 const [impTask,setImpTask] = useState([]);
 const [completeTask,setCompletedTask] = useState([]);
 
  useEffect(()=>{
      const imp =  allTodos.filter((item)=> item.important)
      setImpTask(imp)
      setCompletedTask(imp.filter((item)=>(item.important && item.completed)=== true))
  },[allTodos])
  return (
    <div>
      { impTask.length>0 ?
        <div>
        <h2 className="py-4 px-2 text-font text-[30px]">Important Tasks</h2>
        {
          impTask.map((item) => {
            if ( !item.completed) return <TodoItem key={item.id} item={item} />;
          })
        }
        { completeTask.length > 0 &&
          
        <div className="completedTask">
          <p className="text-font text-[15px] my-2 px-4">Completed</p>
           { completeTask.map((item)=>(<TodoItem key={item.id} item={item}/>))

           }  
           
        </div>
        }
        
      </div>
        :<div>
        <h2 className="py-4 px-2 text-font text-[30px]">No Important Tasks</h2>

        </div>
      }
      
    </div>
  );
};

export default Important;
