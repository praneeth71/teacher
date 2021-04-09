import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import DashBoard from "./pages/Dashboard/DashBoard";
import './App.css';
import EnrolledStudents from './components/EnrolledStudents/EnrolledStudents';
import CreateCourse from './pages/Courses/CreateCourse';



function App() {

  return (
    <Router>
    <div className="App">
      <Navbar />
        <Switch>
          <Route exact path="/teacherdashboard">
              <DashBoard/>
          </Route>
          <Route exact path="/coursedetails/:id">
            <EnrolledStudents />
          </Route>
          <Route exact path="/createCourse">
            <CreateCourse/>
          </Route>
        </Switch>
      </div>
      </Router>
  );
}

export default App;
