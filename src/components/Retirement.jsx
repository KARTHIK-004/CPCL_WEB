import { ContactRound } from "lucide-react";
import React, { useState } from "react";

const retirements = [
  { name: "Rajesh Kumar", date: "Retirement on July 15, 2024" },
  { name: "Anita Verma", date: "Retirement on August 10, 2024" },
  { name: "Ravi Shankar", date: "Retirement on September 5, 2024" },
  { name: "Sunita Mehta", date: "Retirement on October 20, 2024" },
  { name: "Manoj Desai", date: "Retirement on November 1, 2024" },
  { name: "Geeta Singh", date: "Retirement on December 30, 2024" },
];

const sortRetirements = (retirements) => {
  return retirements.sort((a, b) => {
    const dateA = new Date(a.date.replace("Retirement on ", ""));
    const dateB = new Date(b.date.replace("Retirement on ", ""));
    return dateA - dateB;
  });
};

function Retirement() {
  const [visibleRetirements, setVisibleRetirements] = useState(4);
  const [searchTerm, setSearchTerm] = useState("");

  const handleLoadMore = () => {
    setVisibleRetirements((prev) => prev + 4);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredRetirements = retirements.filter((person) =>
    person.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedRetirements = sortRetirements(filteredRetirements);

  return (
    <div className="bg-white rounded-lg shadow p-6 mt-8">
      <div className="flex items-center mb-4">
        <ContactRound className="h-8 w-8 text-blue-600 mr-3" />
        <h2 className="text-2xl font-bold ">RETIREMENTS</h2>
      </div>
      <input
        id="search_retirement"
        type="text"
        placeholder="Search by name"
        className="w-full p-2 border rounded mb-4"
        value={searchTerm}
        onChange={handleSearch}
      />
      <ul className="space-y-4 max-h-48 overflow-y-auto">
        {sortedRetirements.slice(0, visibleRetirements).map((person, index) => (
          <li key={index} className="flex items-center space-x-4">
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

export default Retirement;
