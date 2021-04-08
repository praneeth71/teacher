
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Legend
} from "recharts";

const data = [
  {
    name: "Week 01",
    pv: 4,

  },
  {
    name: "Week 02",
    pv: 6,
  },
  {
    name: "Week 03",
    pv: 3,
  },
  {
    name: "Week 04",
    pv: 5,
  },
  
];

export default function Classes() {
  return (
    <BarChart
      width={650}
      height={400}
      data={data}
      margin={{
        top: 5,
        right: 15,
        left: 10,
        bottom: 5
      }}
    >
      
      <XAxis dataKey="name" />
      <YAxis />
      <Legend />
      <Bar dataKey="pv" fill="#187bcd" background={{ fill: "#eee" }} />
    
    </BarChart>
  );
}