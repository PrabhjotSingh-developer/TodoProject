import React from 'react'
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Pending', value: 700 },
  { name: 'Fulfilled', value: 300 },
 
];
const COLORS = ['#3F9142', ' #142E15']
const MiniChart = () => {
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
