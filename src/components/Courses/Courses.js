import { useState, useEffect } from "react";
import Course from "../Courses/Course";
import Loader from "../Loader/Loader";
import axios from "../axios/axios";
import { Link, useHistory } from "react-router-dom";
import GridItem from "../Grid/GridItem";
import GridContainer from "../Grid/GridContainer";
import { IoAdd, IoCloseOutline, IoWarningOutline } from "react-icons/io5";
import "./Courses.css";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showInput, setShowInput] = useState(false);


  const history = useHistory();


  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const { data } = await axios.get("/api/getTeacherCourses/akash");
        setCourses(data.filter((course, index) => index < 2));
        setIsLoading(false);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchCourses();
  }, []);

  return (
    <>
    <div className="myCourses">
      <h2 style={{marginLeft: 10}}>My Courses</h2>
      <div className="task-header">
      <Link to="/createCourse">
      <button style={{marginBottom: 10, marginTop: 7}} onClick={() => setShowInput(!showInput)}>
          {showInput ? <IoCloseOutline /> : <IoAdd />}
          
        </button>
        </Link>
      </div>
      </div>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <GridContainer>
            {courses.map((course) => (
              <GridItem onClick={() => history.push(`/coursedetails/${course.course_name}`)} xs={12} md={3}>
                <Course key={course.id} {...course} />
              </GridItem>
            ))}
          </GridContainer>
          <button
            onClick={() => history.push("/enrollment")}
            className="all-courses-btn"
            style={{marginLeft: "450px", backgroundColor: "#C0C0C0", color: "blue"}}
          >
            See all
          </button>
        </>
      )}
    </>
  );
};

export default Courses;