import React from "react";
import { AlertTriangle, Shield, ThumbsUp } from "lucide-react";

const stats = [
  {
    title: "Days Without Incident",
    value: 365,
    icon: <AlertTriangle className="h-8 w-8 text-green-500" />,
  },
  {
    title: "Safety Trainings Completed",
    value: 1250,
    icon: <Shield className="h-8 w-8 text-blue-500" />,
  },
  {
    title: "Near Misses Reported",
    value: 15,
    icon: <ThumbsUp className="h-8 w-8 text-yellow-500" />,
  },
];

function SafetyStatistics() {
  return (
    <div className="bg-white rounded-lg shadow p-6 mt-8">
      <h2 className="text-2xl font-bold mb-4">SAFETY STATISTICS</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg"
          >
            {stat.icon}
            <div>
              <p className="text-sm text-gray-600">{stat.title}</p>
              <p className="text-2xl font-bold">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SafetyStatistics;
