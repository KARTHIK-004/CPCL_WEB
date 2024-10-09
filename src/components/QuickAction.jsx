import { Search } from "lucide-react";
import React, { useState } from "react";

const categories = [
  "BTS MIS",
  "FTS MIS",
  "SAP Help",
  "BTS Login",
  "Canteen",
  "e-Serve",
  "Help Desk",
  "OT Reports",
  "Password Help",
  "Plant Status",
  "Mfg. Co Ord Min",
  "TimeSheet-Updation",
  "ESS Password Reset",
  "Controlling Officers",
  "Outstation Leave Entry",
  "Download Hindi Software",
  "PESB Advertised Vacancy",
  "Intranet Password Reset",
  "Audit and Incident Reports",
  "Master Date Governance (MDG)",
  "Today Attendance SM and Above",
  "Click here to update Online Integrity Pledge",
  "NMI/Unsafe Act/Unsafe Condition/Work Permit/ BBS",
  "Department Training Details to be viewed by SM & Above",
];

function QuickAction() {
  const [searchTerm, setSearchTerm] = useState("");
  const [showMore, setShowMore] = useState(false);

  const filteredCategories = categories.filter((category) =>
    category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const displayedCategories = showMore
    ? filteredCategories
    : filteredCategories.slice(0, 8);

  return (
    <div className="bg-white rounded-lg shadow p-6 my-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold mr-4">QUICK ACTION</h2>
        <div className="flex items-center border rounded-lg">
          <input
            id="Quick_Action"
            type="text"
            placeholder="Search Quick Action"
            className="w-full p-2"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="h-5 w-5 text-gray-500 mx-4" />
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {displayedCategories.length > 0 ? (
          displayedCategories.map((category) => (
            <button
              key={category}
              className="p-4 bg-gray-100 rounded text-center hover:bg-gray-200 transition-transform duration-300 ease-in-out transform hover:scale-105"
            >
              {category}
            </button>
          ))
        ) : (
          <div className="col-span-2 md:col-span-4 text-center text-gray-500">
            No categories found
          </div>
        )}
      </div>
      {/* Show More Button aligned to the right */}
      {filteredCategories.length > 8 && !showMore && (
        <div className="flex justify-end mt-4">
          <button
            onClick={() => setShowMore(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-transform duration-300 ease-in-out transform hover:scale-105"
          >
            Show More
          </button>
        </div>
      )}
      {/* Show Less Button aligned to the right */}
      {showMore && (
        <div className="flex justify-end mt-4">
          <button
            onClick={() => setShowMore(false)}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-transform duration-300 ease-in-out transform hover:scale-105"
          >
            Show Less
          </button>
        </div>
      )}
    </div>
  );
}

export default QuickAction;
