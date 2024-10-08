import { Calendar } from "lucide-react";
import React from "react";
const events = [
  {
    title: "Quarterly Safety Meeting",
    date: "July 20, 2024",
    time: "10:00 AM",
  },
  { title: "Environmental Audit", date: "July 25, 2024", time: "9:00 AM" },
  { title: "Employee Town Hall", date: "August 1, 2024", time: "2:00 PM" },
];

function UpcomingEvent() {
  return (
    <div className="bg-white rounded-lg shadow p-6 mt-8">
      <h2 className="text-2xl font-bold mb-4">UPCOMING EVENTS</h2>
      <ul className="space-y-4">
        {events.map((event, index) => (
          <li key={index} className="flex items-center space-x-4">
            <Calendar className="h-8 w-8 text-blue-500" />
            <div>
              <p className="font-semibold">{event.title}</p>
              <p className="text-sm text-gray-500">
                {event.date} at {event.time}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UpcomingEvent;
