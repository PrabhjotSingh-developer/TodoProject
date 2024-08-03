import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
import { useEffect } from 'react';

const COLORS = ['#3F9142', ' #142E15']
const MiniChart = () => {

const allTodos = useSelector((state)=>state.todos.allTask);

const [completedTask,setCompletedTask] = useState([]);
useEffect(()=>{
    const items = allTodos.filter((item)=>item.completed === true )
    setCompletedTask(items);
},[allTodos])
const data = [
  { name: 'Pending', value: allTodos.length - completedTask.length },
  { name: 'Fulfilled', value: completedTask.length },
 
];


    return (
        <PieChart width={152} height={152} >
          <Pie
            data={data}
            innerRadius={40}
            outerRadius={70}
            fill="#8884d8"
            paddingAngle={0}
            dataKey="value"
            rotate={50}
            startAngle={540}
            endAngle={180}
>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        
        </PieChart>
      );
}

export default MiniChart
