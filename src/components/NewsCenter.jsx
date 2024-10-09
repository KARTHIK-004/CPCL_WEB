import { Newspaper, Briefcase, ShieldCheck, Star, Users } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const newsData = [
  {
    title: "Parliamentary Standing Committee",
    date: "january 18, 2021",
    image: "src/assets/committee.png",
    category: "Operations Updates",
  },
  {
    title: "Health & Safety Guidelines",
    date: "September 12, 2024",
    image: "src/assets/safety.png",
    category: "HSE Announcements",
  },
  {
    title: "Spotlight on Employee Achievements",
    date: "September 15, 2024",
    image: "src/assets/achievement.png",
    category: "Employee Spotlights",
  },
  {
    title: "Constitution Day was celebrated",
    date: "September 26, 2020",
    image: "src/assets/contitution.png",
    category: "Community Initiatives",
  },
];

function NewsCenter() {
  const [selectedCategory, setSelectedCategory] = useState("All News");

  const filteredNews =
    selectedCategory === "All News"
      ? newsData
      : newsData.filter((item) => item.category === selectedCategory);

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <Link to="/news" className="flex items-center  hover:text-blue-800">
        <h2 className="text-2xl font-bold mb-4">NEWS CENTER</h2>
      </Link>
      <div className="flex space-x-4 mb-4 overflow-x-auto pb-3">
        <button
          onClick={() => setSelectedCategory("All News")}
          className={`flex items-center px-4 py-2 rounded whitespace-nowrap transition-transform duration-300 ease-in-out transform hover:scale-105 ${
            selectedCategory === "All News"
              ? "bg-blue-700 text-white"
              : "text-gray-600 hover:bg-gray-100"
          }`}
        >
          <Newspaper
            className={`h-5 w-5 mr-2  ${
              selectedCategory === "All News" ? "text-white" : "text-blue-700"
            }`}
          />
          All News
        </button>
        <button
          onClick={() => setSelectedCategory("HSE Announcements")}
          className={`flex items-center px-4 py-2 rounded whitespace-nowrap transition-transform duration-300 ease-in-out transform hover:scale-105 ${
            selectedCategory === "HSE Announcements"
              ? "bg-blue-700 text-white"
              : "text-gray-600 hover:bg-gray-100"
          }`}
        >
          <ShieldCheck
            className={`h-5 w-5 mr-2 ${
              selectedCategory === "HSE Announcements"
                ? "text-white"
                : "text-red-500"
            }`}
          />
          HSE Announcements
        </button>
        <button
          onClick={() => setSelectedCategory("Operations Updates")}
          className={`flex items-center px-4 py-2 rounded whitespace-nowrap transition-transform duration-300 ease-in-out transform hover:scale-105 ${
            selectedCategory === "Operations Updates"
              ? "bg-blue-700 text-white"
              : "text-gray-600 hover:bg-gray-100"
          }`}
        >
          <Briefcase
            className={`h-5 w-5 mr-2 ${
              selectedCategory === "Operations Updates"
                ? "text-white"
                : "text-purple-500"
            }`}
          />
          Operations Updates
        </button>
        <button
          onClick={() => setSelectedCategory("Employee Spotlights")}
          className={`flex items-center px-4 py-2 rounded whitespace-nowrap transition-transform duration-300 ease-in-out transform hover:scale-105 ${
            selectedCategory === "Employee Spotlights"
              ? "bg-blue-700 text-white"
              : "text-gray-600 hover:bg-gray-100"
          }`}
        >
          <Star
            className={`h-5 w-5 mr-2 ${
              selectedCategory === "Employee Spotlights"
                ? "text-white"
                : "text-yellow-500"
            }`}
          />
          Employee Spotlights
        </button>
        <button
          onClick={() => setSelectedCategory("Community Initiatives")}
          className={`flex items-center px-4 py-2 rounded whitespace-nowrap transition-transform duration-300 ease-in-out transform hover:scale-105 ${
            selectedCategory === "Community Initiatives"
              ? "bg-blue-700 text-white"
              : "text-gray-600 hover:bg-gray-100"
          }`}
        >
          <Users
            className={`h-5 w-5 mr-2 ${
              selectedCategory === "Community Initiatives"
                ? "text-white"
                : "text-green-500"
            }`}
          />
          Community Initiatives
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredNews.map((item, index) => (
          <div
            key={index}
            className="rounded overflow-hidden shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105"
          >
            <img
              className="w-full h-48 object-cover"
              src={item.image}
              alt={item.title}
            />
            <div className="px-6 py-4">
              <div className="flex items-center font-bold text-xl mb-2">
                {item.title}
              </div>
              <p className="text-gray-700 text-base">{item.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NewsCenter;
