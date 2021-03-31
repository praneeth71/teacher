
import "../Enrollments/Enrollemnt.css";
import Courses from '../EnrolledCourses/EnrolledCourses';

const Enrollment = () => {
  return (
    <div className="enrollment">
      <SideBar active="enrollment" />
      <div className="enrollment-items">
        <Courses />
      </div>
    </div>
  );
};
export default Enrollment;