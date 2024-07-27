import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import TodoItem from "../../Components/TodoItem/TodoItem";
import { useState } from "react";
const Important = () => {
  const allTodos = useSelector((state) => state.todos.allTask);
 const [impTask,setImpTask] = useState([]);
console.log(impTask)
  useEffect(()=>{
      const imp =  allTodos.filter((item)=> item.important)
      setImpTask(imp)
  },[allTodos])
  return (
    <div>
      { impTask.length>0 ?
        <div>
        <h2 className="py-4 px-2 text-font text-[30px]">Important Tasks</h2>
        {
          impTask.map((item) => {
            if ( !item.completed) return <TodoItem key={item.id} item={item} />;
          })}
        <div className="completedTask">
          <p className="text-font text-[15px] my-2 px-4">Completed</p>
          {
            allTodos.map((item) => {
              if (item.completed && item.important) return <TodoItem item={item} key={item.id} />;
            })}
        </div>
      </div>
        :<div>
        <h2 className="py-4 px-2 text-font text-[30px]">No Important Tasks</h2>

        </div>
      }
      
    </div>
  );
};

export default Important;
