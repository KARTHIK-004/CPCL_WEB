import { Coffee } from "lucide-react";
import React from "react";

const menuItems = [
  {
    day: "Monday",
    main: "Vegetable Biryani",
    side: "Raita",
    dessert: "Gulab Jamun",
  },
  { day: "Tuesday", main: "Butter Chicken", side: "Naan", dessert: "Kheer" },
  {
    day: "Wednesday",
    main: "Masala Dosa",
    side: "Sambar",
    dessert: "Fruit Salad",
  },
];

const getCurrentDay = () => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const today = new Date();
  return days[today.getDay()];
};

function CafeteriaMenu() {
  const today = getCurrentDay();
  const todayMenu = menuItems.find((item) => item.day === today);

  return (
    <div className="bg-white rounded-lg shadow p-6 mt-8">
      <div className="flex items-center mb-4">
        <Coffee className="h-8 w-8 text-blue-600 mr-3" />
        <h2 className="text-2xl font-bold">CAFETERIA MENU</h2>
      </div>
      <div className="space-y-4">
        {todayMenu ? (
          <div className="pb-2">
            <h3 className="font-semibold">{today}</h3>
            <p className="text-sm">Main: {todayMenu.main}</p>
            <p className="text-sm">Side: {todayMenu.side}</p>
            <p className="text-sm">Dessert: {todayMenu.dessert}</p>
          </div>
        ) : (
          <p className="text-sm">No menu available for today.</p>
        )}
      </div>
    </div>
  );
}

export default CafeteriaMenu;
