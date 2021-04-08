import { useState, useEffect } from "react";
import Course from "../Courses/Course";
import Loader from "../Loader/Loader";
import axios from "../axios/axios";
import { useHistory } from "react-router-dom";
import GridItem from "../Grid/GridItem";
import GridContainer from "../Grid/GridContainer";
import { IoAdd, IoCloseOutline, IoWarningOutline } from "react-icons/io5";
import CreateCourses from "../CreateCourses/CreateCourses";
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
      <h2>My Courses</h2>
      <div className="task-header">
      <button onClick={() => setShowInput(!showInput)}>
          <CreateCourses/>
        </button>
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
            style={{marginLeft: "460px"}}
          >
            See all
          </button>
        </>
      )}
    </>
  );
};

export default Courses;