import React from 'react'
import "./Courses.css";

const Course = (props) => {
  const {
    course_name,
    image,
    date_of_enrollment,
    author_name,
    author_picture,
    course_description,
    percentage_completed,
    goals,
    concepts,
    totallesson,
    video
  } = props;

  return (
    <div style={{minHeight:"250px", marginLeft: 15}}className="Course">
      <div className="course-title">
        <img style={{width: 100}} src={image} alt={course_name} />
        <div>
          <h2>{course_name}</h2>
          
        </div>
      </div>
      <div className="instructor">
        <p style={{paddingRight: 8}}>by </p>
        <h3 style={{color: "brown", fontWeight: "700"}}>{author_name}</h3>
      </div>
      <div className="course-description">
        <p>{course_description}</p>
        <p>Total Lesson: {totallesson}</p>
        <p style={{color: "red"}}><strong style={{color: "black"}}>Goals: </strong>{goals.map((item) => (
          item.goals
        ))}</p>
      </div>
      <button style={{backgroundColor: "black", borderRadius: 20, marginLeft: 5}}><a href={video}>
        <p style={{color: "white", maxHeight: 15, marginTop: "0%", fontSize: 15, fontStyle: "none"}}>Watch Here</p>
      </a>
      </button>
    </div>
  );
};

export default Course;
