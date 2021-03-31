import { useState } from "react";
import Calendar from "react-calendar";
import "src/components/Calendar/Calendar.css";

const Calendar = () => {
  const [value, onChange] = useState(new Date());
  return (
    <div className="calendar">
      <h1>Calender</h1>
      <Calendar onChange={onChange} value={value} className="react-calendar" />
    </div>
  );
};

export default Calendar;
