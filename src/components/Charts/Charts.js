import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { PieChart, Pie, Sector, Cell, Tooltip } from "recharts";
import "../Charts/Charts.css";


const useStyles = makeStyles({
  root: {
    minWidth: 450,
    width: 250
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 10,
  },
});

export default function Charts() {
  const classes = useStyles();
  const data = [
    { name: "Male Students", value: 105000 },
    { name: "Female Students", value: 45000 },
    
  ];
  const COLORS = [ "red", "blue"];

  return (
      <div className="Charts">
    
          <h2>Students</h2>
      <PieChart width={1200} height={300} className="circle">
      <Pie
        data={data}
        cx={120}
        cy={150}
        outerRadius={126}
        fill="#8884d8"
        paddingAngle={5}
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      
        <Tooltip />
        
    </PieChart>
  
    </div>
  );
}