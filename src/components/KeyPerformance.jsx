import React from "react";

const keyperformance = [
  {
    title: "Refinery Throughput",
    value: "98.5%",
    change: "up",
    period: "this quarter",
  },
  {
    title: "Safety Incidents",
    value: "0",
    change: "down",
    period: "this month",
  },
  {
    title: "Energy Efficiency",
    value: "92.3%",
    change: "up",
    period: "this quarter",
  },
  {
    title: "On-time Deliveries",
    value: "99.1%",
    change: "up",
    period: "this month",
  },
  {
    title: "Environmental Compliance",
    value: "100%",
    change: "stable",
    period: "this quarter",
  },
];

function KeyPerformance() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mt-8">
      {keyperformance.map((keyperformance, index) => (
        <div key={index} className="bg-blue-700 text-white p-4 rounded-lg">
          <h3 className="text-sm mb-2">{keyperformance.title}</h3>
          <p className="text-3xl font-bold mb-1">{keyperformance.value}</p>
          <p className="text-sm">{keyperformance.period}</p>
        </div>
      ))}
    </div>
  );
}

export default KeyPerformance;
