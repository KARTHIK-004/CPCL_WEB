import { Cake } from "lucide-react";
import React, { useState } from "react";

const birthdays = [
  { name: "Priya Sharma", date: "Birthday today" },
  { name: "Arun Kumar", date: "Birthday on July 20, 2024" },
  { name: "Deepa Patel", date: "Birthday on July 25, 2024" },
  { name: "Vikram Singh", date: "Birthday on August 1, 2024" },
  { name: "Meera Reddy", date: "Birthday on August 5, 2024" },
  { name: "Suresh Kumar", date: "Birthday on September 15, 2024" },
];

const sortBirthdays = (birthdays) => {
  return birthdays.sort((a, b) => {
    const dateA = new Date(a.date.replace("Birthday on ", ""));
    const dateB = new Date(b.date.replace("Birthday on ", ""));
    return dateA - dateB;
  });
};

function Birthday() {
  const [visibleBirthdays, setVisibleBirthdays] = useState(4);
  const [searchTerm, setSearchTerm] = useState("");

  const handleLoadMore = () => {
    setVisibleBirthdays((prev) => prev + 4);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredBirthdays = birthdays.filter((person) =>
    person.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedBirthdays = sortBirthdays(filteredBirthdays);

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center mb-4">
        <Cake className="h-8 w-8 text-blue-600 mr-3" />
        <h2 className="text-2xl font-bold ">BIRTHDAYS</h2>
      </div>
      <input
        id="search_birthday"
        type="text"
        placeholder="Search by name"
        className="w-full p-2 border rounded mb-4"
        value={searchTerm}
        onChange={handleSearch}
      />
      <ul className="space-y-4 max-h-48 overflow-y-auto">
        {sortedBirthdays.slice(0, visibleBirthdays).map((person, index) => (
          <li
            key={index}
            className={`flex items-center space-x-4 ${
              person.date === "Birthday today"
                ? "bg-blue-100 p-2 rounded-lg"
                : ""
            }`}
          >
            <img
              src="src/assets/User.png"
              alt={person.name}
              className="w-10 h-10 rounded-full"
            />
            <div>
              <p className="font-semibold">{person.name}</p>
              <p className="text-sm text-gray-500">{person.date}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Birthday;
