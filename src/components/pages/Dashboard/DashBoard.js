import React from "react";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Store from "@material-ui/icons/Store";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
// core components
import GridItem from "../../Grid/GridItem";
import GridContainer from "../../Grid/GridContainer";
import Card from "../../Card/Card";
import CardHeader from "../../Card/CardHeader";
import CardIcon from "../../Card/CardIcon";
import CardBody from "../../Card/CardBody";
import CardFooter from "../../Card/CardFooter";
import Charts from "../../Charts/Charts";
import "../../pages/Dashboard/DashBoard.css";
import Progress from "../../Progress/Progress";
import Classes from "../../variables/Classes";

import {
  dailySalesChart
} from "../../variables/charts";

import styles from "../../../assets/jss/dashboard-react/dashboardStyle";
import Courses from "../../Courses/Courses";
import Calendar from "react-calendar";
import { ImportContacts, Layers, MonetizationOn, PeopleAlt } from "@material-ui/icons";
import SideBar from "../../SideBar/SideBar";



const useStyles = makeStyles(styles);

export default function Dashboard() {
  const classes = useStyles();
  return (
    
    <div className="Dashboard">
  
      <GridContainer>
        <GridItem xs={12} sm={12}>
          <Card>
            <div style={{marginTop: 0}}className="top">
              <h1 className="h1">Welcome Back, Praneeth!</h1>
              <p className="p">Your students completed <strong>80%</strong> of the tasks.
                Progress is <strong>very good!</strong>
              </p>
            </div>
          </Card>
        </GridItem>
      </GridContainer>
      <GridContainer>
        
        <GridItem xs={12} sm={12} md={4}>
          <GridContainer>
            
            <GridItem xs={12} sm={12} md={6}>
              <Card style={{marginTop:"80px"}}>
                <CardHeader  stats icon>
                  <CardIcon color="warning">
                    <PeopleAlt />
                  </CardIcon>
                  <h2 className={classes.cardCategory}>Total Students</h2>
                  <h3 className={classes.cardTitle}>
                    35000 
                  </h3>
                </CardHeader>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <Card style={{marginTop:"80px"}}>
                <CardHeader color="success" stats icon>
                  <CardIcon color="success">
                    <ImportContacts />
                  </CardIcon>
                  <p className={classes.cardCategory}>Total Exams</p>
                  <h3 className={classes.cardTitle}>19050</h3>
                </CardHeader>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={6} >
              <Card style={{marginTop:"60px"}}>
                <CardHeader color="danger" stats icon>
                  <CardIcon color="danger">
                    <Layers />
                  </CardIcon>
                  <p className={classes.cardCategory}>Graduate Studies</p>
                  <h3 className={classes.cardTitle}>23890</h3>
                </CardHeader>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <Card style={{marginTop:"60px"}}>
                <CardHeader color="info" stats icon>
                  <CardIcon color="info">
                    <MonetizationOn />
                  </CardIcon>
                  <p className={classes.cardCategory}>Total Income</p>
                  <h3 className={classes.cardTitle}>$2102050</h3>
                </CardHeader>
              </Card>
            </GridItem>
            
          </GridContainer>       
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <GridContainer>
            <h2>Classes Per Week</h2>
                <Classes />
          </GridContainer>
            </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <h2>Calendar</h2>
            <Calendar />
        </GridItem>
        <GridItem  xs={12} sm={6} md={3}>
          <Card style={{height:"370px"}}>
              <Charts />
          </Card>
        </GridItem>
        <GridItem style={{marginTop:"20px"}} xs={12} sm={12} md={5}>
          <Card chart style={{height:"350px"}}>
            <CardHeader color="danger">
              <ChartistGraph
                className="ct-chart"
                data={dailySalesChart.data}
                type="Line"
                options={dailySalesChart.options}
                listener={dailySalesChart.animation}
              />
            </CardHeader>
            <CardBody>
              <h4 className={classes.cardTitle}>Daily Attendance</h4>
            </CardBody>
            <CardFooter chart>
              <div className={classes.stats}>
                <AccessTime /> updated 4 minutes ago
              </div>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem  xs={12} sm={12} md={4}>
          <Card style={{height:"370px"}}>
            <Progress />
          </Card>
        </GridItem>
        <GridItem xs={12} >
          <Courses />
        </GridItem>
        
      </GridContainer>
    </div>
  );
}
