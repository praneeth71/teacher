import { useState } from "react";
import Subject from "../Homework/Subject";
import "../Homework/HomeWork.css";

const HomeWork = () => {
  const [subjects] = useState([
    { id: 1, name: "Chem 101", percent: 70},
    { id: 2, name: "Chem 201", percent: 80},
    { id: 3, name: "Chem 101", percent: 90},
  ]);
  return (
    <div className="box1">
      <h1>Progress</h1>
      <div className="subject">
        {subjects.map((subject) => (
          <Subject key={subject.id} {...subject} />
        ))}
      </div>
    </div>
  );
};

export default HomeWork;
