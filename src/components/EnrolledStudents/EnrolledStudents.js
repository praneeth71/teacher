import { useState, useEffect } from "react";
import {useParams} from 'react-router-dom';
import Loader from "../Loader/Loader";
import axios from "../axios/axios";
import GridItem from "../Grid/GridItem";
import { DataGrid } from '@material-ui/data-grid';
import GridContainer from "../Grid/GridContainer";
import "./Styles.css"

const columns = [
    { field: 'sno', headerName: 'Sno', width: 400 },
    { field: 'course_complete_percentage', headerName: 'Percentage', width: 200 },
    { field: 'is_complete', headerName: 'Completed', width: 300 },
    { field: 'date_of_enrollment', headerName: 'Date Of Enrollment', width: 300 },
    { field: 'course', headerName: 'Course', width: 500 },
    { field: 'user', headerName: 'User', width: 200 },
    
  ];

const EnrolledStudents = () => {
  const [enrolledStudents, setEnrolledStudents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const {course_name} = useParams();

  useEffect(() => {
    const fetchEnrolledStudents = async () => {
      try {
        const { data } = await axios.get("/api/getEnrolledStudents/akash");
        let list = data[course_name]
        list = list.map((item, index) => (  
            {...item,id : index}
          )
        ); 
        setEnrolledStudents([...list]);
        setIsLoading(false);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchEnrolledStudents();
  }, []);

  return (
    <>
      <h2>My Students</h2>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <GridContainer>
          <div style={{ height: 400, width: '100%' }}>
                <DataGrid rows={enrolledStudents} columns={columns} pageSize={5} />
           </div>
          </GridContainer>
     
        </>
      )}
    </>
  );
};

export default EnrolledStudents;