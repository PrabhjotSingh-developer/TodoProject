import React, { useEffect, useState } from "react";
import AddTask from "../../Components/AddTask/AddTask";
import TodoItem from "../../Components/TodoItem/TodoItem";
import { useSelector } from "react-redux";
const Today = () => {
  const allTasks = useSelector((state) => state.todos.allTask);
  const [todayTasks, setTodayTasks] = useState([]);
  
  useEffect(() => {
    let date = new Date().toISOString().slice(0, 10);
    console.log(date);
    const today = allTasks.filter((item) => {
      if (item.date.slice(0, 10) === date) return item;
    });
    setTodayTasks(today);
  }, [allTasks]);
  return (
    <div className="w-[100%]">
      <AddTask />
        {todayTasks.length > 0 ? (
          <div className="todayTasks">
         <h2 className='py-4 px-2 text-font text-[30px]'>Today Tasks</h2>
             
          {
          todayTasks.map((item) => {
           
            if (!item.completed) return <TodoItem item={item} key={item.id} />;
          })
        }
         </div>
        ) : (
          <h3>No Task recorded</h3>
        )}
      {todayTasks.length > 0 &&
      <div className="completedTask">
        <p className="text-font text-[15px] my-2 px-4 ">Completed</p>

        {todayTasks.map((item) => {
          if (item.completed) return <TodoItem item={item} key={item.id} />;
        })}
      </div>
}
    </div>
  );
};

export default Today;
