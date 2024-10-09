import { Search } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const employees = [
  {
    name: "Rajesh Kumar",
    department: "Operations",
    position: "Senior Engineer",
    image: "src/assets/User.png",
  },
  {
    name: "Priya Sharma",
    department: "HR",
    position: "HR Manager",
    image: "src/assets/User.png",
  },
  {
    name: "Amit Patel",
    department: "Finance",
    position: "Financial Analyst",
    image: "src/assets/User.png",
  },
  {
    name: "Sneha Reddy",
    department: "IT",
    position: "Systems Administrator",
    image: "src/assets/User.png",
  },
];

function EmployeeDirectory() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredEmployees = employees.filter(
    (employee) =>
      employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.position.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-white rounded-lg shadow p-6 mt-8">
      <div className="flex justify-between items-center mb-4">
        <Link
          to="/directory"
          className="flex items-center  hover:text-blue-800"
        >
          <h2 className="text-2xl font-bold mb-4">EMPLOYEE DIRECTORY</h2>
        </Link>
        <div className="flex items-center border rounded-lg">
          <input
            id="employee_directory"
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="p-2 pl-4 focus:outline-none rounded-l-lg"
          />
          <Search className="h-5 w-5 text-gray-500 mx-4" />
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 text-left">Profile</th>
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Department</th>
              <th className="px-4 py-2 text-left">Position</th>
            </tr>
          </thead>
          <tbody>
            {filteredEmployees.map((employee, index) => (
              <tr key={index} className="border-b">
                <td className="px-4 py-2">
                  <img
                    src={employee.image}
                    alt={employee.name}
                    className="rounded-full w-10 h-10"
                  />
                </td>
                <td className="px-4 py-2">{employee.name}</td>
                <td className="px-4 py-2">{employee.department}</td>
                <td className="px-4 py-2">{employee.position}</td>
              </tr>
            ))}
            {filteredEmployees.length === 0 && (
              <tr>
                <td colSpan="4" className="text-center py-4 text-gray-500">
                  No results found
                </td>
              </tr>
            )}
          </tbody>
        </table>
        <div className="flex justify-end mt-4">
          <Link to="/directory">
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
              Show More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default EmployeeDirectory;
