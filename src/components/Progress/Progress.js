import { useState } from "react";
import Subject from "./Subject";
import "./Progress.css";

const Progress = () => {
  const [subjects] = useState([
    { id: 1, name: "Chem 101", percent: 70},
    { id: 2, name: "Chem 201", percent: 80},
    { id: 3, name: "Chem 101", percent: 90},
  ]);
  return (
    <div className="box1">
      <h2>Progress</h2>
      <div className="subject">
        {subjects.map((subject) => (
          <Subject key={subject.id} {...subject} />
        ))}
      </div>
    </div>
  );
};

export default Progress;
