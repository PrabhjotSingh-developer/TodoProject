import React, { useEffect, useState } from "react";
import AddTask from "../../Components/AddTask/AddTask";
import TodoItem from "../../Components/TodoItem/TodoItem";
import { useSelector } from "react-redux";
const Today = () => {
  const allTasks = useSelector((state) => state.todos.allTask);
 console.log(allTasks)
  const [todayTasks, setTodayTasks] = useState([]);
  useEffect(() => {
    let date = new Date().toISOString();
    const today = allTasks.filter((item) => {
      if (item.date.substr(0, 9) === date.substr(0, 9)) return item;
    });
    setTodayTasks(today);
  }, allTasks);
  return (
    <div>
      <AddTask />
      <div className="todayTasks">
        {todayTasks.length > 0 ? (
          todayTasks.map((item) => {
            console.log(item)
            if (!item.completed) return <TodoItem item={item} key={item.id} />;
          })
        ) : (
          <h3>No Task recorded</h3>
        )}
     </div>
      <div className="completedTask">
         <p className="text-font text-[15px] my-2 px-4">Completed</p>
         {todayTasks.length > 0 &&
          todayTasks.map((item) => {
            if (item.completed) return <TodoItem item={item} key={item.id} />;
          })}
      </div>
       
    </div>
  );
};

export default Today;
