import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { PieChart, Pie, Sector, Cell, Tooltip } from "recharts";
import "../Charts/Charts.css";


const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function OutlinedCard() {
  const classes = useStyles();
  const data = [
    { name: "Male Students", value: 105000 },
    { name: "Female Students", value: 45000 },
    
  ];
  const COLORS = [ "#FFBB28", "#0088FE"];

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
      

    <PieChart width={800} height={400}>
      <Pie
        data={data}
        cx={120}
        cy={180}
        
        outerRadius={120}
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
  );

      </CardContent>
     
    </Card>
  );
}