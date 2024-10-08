import React from "react";

const announcements = [
  {
    title: "New Sustainability Goals Announced",
    date: "July 18, 2024",
    priority: "high",
  },
  {
    title: "Quarterly Financial Results",
    date: "July 15, 2024",
    priority: "medium",
  },
  {
    title: "Employee Wellness Program Launch",
    date: "July 10, 2024",
    priority: "low",
  },
];

function CompanyAnnouncement() {
  return (
    <div className="bg-white rounded-lg shadow p-6 mt-8">
      <h2 className="text-2xl font-bold mb-4">COMPANY ANNOUNCEMENTS</h2>
      <div className="space-y-4">
        {announcements.map((announcement, index) => (
          <div key={index} className="border-l-4 border-blue-500 pl-4">
            <h3 className="font-semibold">{announcement.title}</h3>
            <p className="text-sm text-gray-600">{announcement.date}</p>
            <span
              className={`text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-white ${
                announcement.priority === "high"
                  ? "bg-red-600"
                  : announcement.priority === "medium"
                  ? "bg-yellow-500"
                  : "bg-green-500"
              } mt-2`}
            >
              {announcement.priority} priority
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CompanyAnnouncement;
