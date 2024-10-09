import React, { useState } from "react";
import { Search, ChevronDown, ChevronUp, Mail } from "lucide-react";
import Navbar from "../components/Navbar";

const employees = [
  {
    id: 1,
    name: "Rajesh Kumar",
    role: "Process Engineer",
    department: "Operations",
    email: "rajesh.kumar@cpcl.co.in",
    prNumber: "1001",
    image: "src/assets/User.png",
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Safety Officer",
    department: "HSE",
    email: "priya.sharma@cpcl.co.in",
    prNumber: "1002",
    image: "src/assets/User.png",
  },
  {
    id: 3,
    name: "Arun Patel",
    role: "Maintenance Technician",
    department: "Maintenance",
    email: "arun.patel@cpcl.co.in",
    prNumber: "1003",
    image: "src/assets/User.png",
  },
  {
    id: 4,
    name: "Deepa Reddy",
    role: "Quality Control Analyst",
    department: "Quality Assurance",
    email: "deepa.reddy@cpcl.co.in",
    prNumber: "1004",
    image: "src/assets/User.png",
  },
  {
    id: 5,
    name: "Vikram Singh",
    role: "Project Manager",
    department: "Projects",
    email: "vikram.singh@cpcl.co.in",
    prNumber: "1005",
    image: "src/assets/User.png",
  },
  {
    id: 6,
    name: "Anita Desai",
    role: "HR Manager",
    department: "Human Resources",
    email: "anita.desai@cpcl.co.in",
    prNumber: "1006",
    image: "src/assets/User.png",
  },
  {
    id: 7,
    name: "Suresh Menon",
    role: "Financial Analyst",
    department: "Finance",
    email: "suresh.menon@cpcl.co.in",
    prNumber: "1007",
    image: "src/assets/User.png",
  },
  {
    id: 8,
    name: "Kavita Nair",
    role: "Environmental Specialist",
    department: "HSE",
    email: "kavita.nair@cpcl.co.in",
    prNumber: "1008",
    image: "src/assets/User.png",
  },
  {
    id: 9,
    name: "Rahul Verma",
    role: "IT Support Specialist",
    department: "IT",
    email: "rahul.verma@cpcl.co.in",
    prNumber: "1009",
    image: "src/assets/User.png",
  },
  {
    id: 10,
    name: "Meera Iyer",
    role: "Supply Chain Coordinator",
    department: "Logistics",
    email: "meera.iyer@cpcl.co.in",
    prNumber: "1010",
    image: "src/assets/User.png",
  },
];

const departments = [...new Set(employees.map((emp) => emp.department))];

export default function EmployeeDirectory() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: "ascending",
  });

  const filteredEmployees = employees.filter(
    (employee) =>
      (employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        employee.prNumber.includes(searchTerm)) &&
      (selectedDepartment === "" || employee.department === selectedDepartment)
  );

  const sortedEmployees = React.useMemo(() => {
    let sortableEmployees = [...filteredEmployees];
    if (sortConfig.key !== null) {
      sortableEmployees.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableEmployees;
  }, [filteredEmployees, sortConfig]);

  const requestSort = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  const SortIcon = ({ columnKey }) => {
    if (sortConfig.key === columnKey) {
      return sortConfig.direction === "ascending" ? (
        <ChevronUp className="h-4 w-4" />
      ) : (
        <ChevronDown className="h-4 w-4" />
      );
    }
    return null;
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white shadow rounded-lg overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-3xl font-bold mr-4">EMPLOYEE DIRECTORY</h2>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
                <div className="flex-1 min-w-0">
                  <div className="relative rounded-md shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Search className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      className="focus:outline-none rounded-l-lg block w-full pl-10 sm:text-sm rounded-md"
                      placeholder="Search by name or PR number"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                </div>
                <div className="flex space-x-4">
                  <div className="relative inline-block text-left">
                    <div>
                      <button
                        type="button"
                        className="inline-flex justify-between w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        id="options-menu"
                        aria-expanded={dropdownOpen}
                        aria-haspopup="true"
                        onClick={toggleDropdown}
                      >
                        {selectedDepartment
                          ? selectedDepartment
                          : "All Departments"}
                        <ChevronDown className="ml-2 -mr-1 h-5 w-5 text-gray-400" />
                      </button>
                    </div>

                    {dropdownOpen && (
                      <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div
                          className="py-1"
                          role="menu"
                          aria-orientation="vertical"
                          aria-labelledby="options-menu"
                        >
                          <button
                            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                            onClick={() => {
                              setSelectedDepartment("");
                              setDropdownOpen(false);
                            }}
                          >
                            All Departments
                          </button>
                          {departments.map((dept) => (
                            <button
                              key={dept}
                              className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                              onClick={() => {
                                setSelectedDepartment(dept);
                                setDropdownOpen(false);
                              }}
                            >
                              {dept}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                  <button
                    className="px-4 py-1 bg-red-500 text-white rounded-md hover:bg-red-600"
                    onClick={() => setSelectedDepartment("")}
                  >
                    Clear
                  </button>
                </div>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Employee
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                      onClick={() => requestSort("prNumber")}
                    >
                      <div className="flex items-center">
                        PR Number
                        <SortIcon columnKey="prNumber" />
                      </div>
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                      onClick={() => requestSort("role")}
                    >
                      <div className="flex items-center">
                        Role
                        <SortIcon columnKey="role" />
                      </div>
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                      onClick={() => requestSort("department")}
                    >
                      <div className="flex items-center">
                        Department
                        <SortIcon columnKey="department" />
                      </div>
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Email
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {sortedEmployees.map((employee) => (
                    <tr key={employee.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10">
                            <img
                              className="h-10 w-10 rounded-full"
                              src={employee.image}
                              alt="Employee Avatar"
                            />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              {employee.name}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {employee.prNumber}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {employee.role}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {employee.department}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <a
                          href={`mailto:${employee.email}`}
                          className="text-indigo-600 hover:text-indigo-900"
                        >
                          <Mail className="h-5 w-5 inline-block mr-1" />
                          {employee.email}
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
