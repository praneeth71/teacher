import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Navbar from './Navbar/Navbar';
import DashBoard from "../../teacher-dashboard/src/components/pages/Dashboard/DashBoard";
import './App.css';
import EnrolledStudents from './components/EnrolledStudents/EnrolledStudents';



function App() {

  return (
    <Router>
    <div className="App">
      <Navbar />
      <Switch>
      <Route exact path="/teacherdashboard">
      
          <DashBoard/>
        
      </Route>
      <Route exact path="/coursedetails/:course_name">
        <EnrolledStudents />
      </Route>
      </Switch>
      </div>
      </Router>
  );
}

export default App;
