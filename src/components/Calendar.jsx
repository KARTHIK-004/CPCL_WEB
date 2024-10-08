import { CalendarDays } from "lucide-react";
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const CalendarTab = () => {
  const [value, onChange] = useState(new Date());

  return (
    <div className="bg-white rounded-lg shadow border border-white mb-8  p-6">
      <div className="flex items-center mb-4">
        <CalendarDays className="h-8 w-8 text-blue-600 mr-3" />
        <h2 className="text-2xl font-bold ">Calendar</h2>
      </div>
      <Calendar
        onChange={onChange}
        value={value}
        className="react-calendar rounded-lg font-bold border-none  "
      />
    </div>
  );
};

export default CalendarTab;
