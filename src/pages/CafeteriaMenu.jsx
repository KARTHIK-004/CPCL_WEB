import React, { useState, useEffect } from "react";
import {
  Calendar,
  Coffee,
  Sun,
  Utensils,
  Star,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

const menuData = [
  {
    day: "Monday",
    breakfast: ["Idli", "Sambar", "Chutney", "Coffee/Tea"],
    lunch: ["Rice", "Dal", "Vegetable Curry", "Chapati", "Curd"],
    special: "Vegetable Biryani",
  },
  {
    day: "Tuesday",
    breakfast: ["Pongal", "Vada", "Chutney", "Coffee/Tea"],
    lunch: ["Rice", "Sambar", "Rasam", "Vegetable Poriyal", "Papad"],
    special: "Mushroom Manchurian",
  },
  {
    day: "Wednesday",
    breakfast: ["Poori", "Potato Masala", "Coffee/Tea"],
    lunch: ["Rice", "Dal Tadka", "Mixed Vegetable Curry", "Curd Rice"],
    special: "Gobi Manchurian",
  },
  {
    day: "Thursday",
    breakfast: ["Upma", "Coconut Chutney", "Coffee/Tea"],
    lunch: ["Rice", "Kadhi", "Bhindi Fry", "Chapati", "Raita"],
    special: "Paneer Tikka",
  },
  {
    day: "Friday",
    breakfast: ["Masala Dosa", "Sambar", "Chutney", "Coffee/Tea"],
    lunch: ["Rice", "Dal Fry", "Aloo Gobi", "Chapati", "Buttermilk"],
    special: "Chilli Garlic Noodles",
  },
];

export default function CafeteriaMenu() {
  const [currentDay, setCurrentDay] = useState(0);
  const [activeTab, setActiveTab] = useState("breakfast");

  useEffect(() => {
    const today = new Date().getDay();
    const currentWeekDayIndex = today === 0 || today === 6 ? 0 : today - 1;
    setCurrentDay(currentWeekDayIndex);
  }, []);

  const handlePrevDay = () => {
    setCurrentDay((prev) => (prev === 0 ? weekDays.length - 1 : prev - 1));
  };

  const handleNextDay = () => {
    setCurrentDay((prev) => (prev === weekDays.length - 1 ? 0 : prev + 1));
  };

  const renderMealItems = (items) => (
    <ul className="list-disc list-inside">
      {items.map((item, index) => (
        <li key={index} className="text-gray-700">
          {item}
        </li>
      ))}
    </ul>
  );

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white shadow-md rounded-lg overflow-hidden mb-8">
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-3xl font-bold mx-8 mt-8">CAFETERIA MENU</h1>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <button
                  onClick={handlePrevDay}
                  className="text-blue-600 hover:text-blue-800 focus:outline-none"
                  aria-label="Previous day"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <h2 className="text-2xl font-semibold flex items-center">
                  <Calendar className="h-6 w-6 mr-2" />
                  {menuData[currentDay].day}
                </h2>
                <button
                  onClick={handleNextDay}
                  className="text-blue-600 hover:text-blue-800 focus:outline-none"
                  aria-label="Next day"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </div>

              <div className="mb-6">
                <div className="flex border-b">
                  {["breakfast", "lunch", "special"].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`flex-1 py-2 px-4 text-center ${
                        activeTab === tab
                          ? "border-b-2 border-blue-600 text-blue-600"
                          : "text-gray-500 hover:text-gray-700"
                      }`}
                    >
                      {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-sm border p-6">
                {activeTab === "breakfast" && (
                  <div>
                    <h3 className="text-xl font-semibold mb-4 flex items-center">
                      <Coffee className="h-5 w-5 text-orange-500 mr-2" />
                      Breakfast
                    </h3>
                    {renderMealItems(menuData[currentDay].breakfast)}
                  </div>
                )}
                {activeTab === "lunch" && (
                  <div>
                    <h3 className="text-xl font-semibold mb-4 flex items-center">
                      <Sun className="h-5 w-5 text-yellow-500 mr-2" />
                      Lunch
                    </h3>
                    {renderMealItems(menuData[currentDay].lunch)}
                  </div>
                )}
                {activeTab === "special" && (
                  <div>
                    <h3 className="text-xl font-semibold mb-4 flex items-center">
                      <Star className="h-5 w-5 text-purple-500 mr-2" />
                      Daily Special
                    </h3>
                    <p className="text-gray-700">
                      {menuData[currentDay].special}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-4 flex items-center">
                <Utensils className="h-6 w-6 mr-2 text-blue-600" />
                Cafeteria Information
              </h2>
              <ul className="grid gap-4">
                <li className="flex items-center">
                  <span>Breakfast: 7:30 AM - 9:30 AM</span>
                </li>
                <li className="flex items-center">
                  <span>Lunch: 12:00 PM - 2:00 PM</span>
                </li>
                <li className="flex items-center">
                  <span>Dinner: 7:00 PM - 9:00 PM</span>
                </li>
                <li className="flex items-center">
                  <span>Special diets accommodated upon request</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
