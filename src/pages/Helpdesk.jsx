import React, { useState } from "react";

import {
  ArrowLeft,
  Search,
  Plus,
  MessageSquare,
  Clock,
  CheckCircle,
  XCircle,
  AlertTriangle,
} from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Helpdesk() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const tickets = [
    {
      id: 1,
      title: "Email not working",
      category: "Email",
      status: "Open",
      priority: "High",
      date: "2024-07-15",
    },
    {
      id: 2,
      title: "Printer offline",
      category: "Hardware",
      status: "In Progress",
      priority: "Medium",
      date: "2024-07-14",
    },
    {
      id: 3,
      title: "VPN connection issues",
      category: "Network",
      status: "Closed",
      priority: "Low",
      date: "2024-07-13",
    },
    {
      id: 4,
      title: "Software installation request",
      category: "Software",
      status: "Open",
      priority: "Medium",
      date: "2024-07-12",
    },
    {
      id: 5,
      title: "Password reset",
      category: "Account",
      status: "Closed",
      priority: "Low",
      date: "2024-07-11",
    },
  ];

  const categories = [
    "All",
    "Email",
    "Hardware",
    "Network",
    "Software",
    "Account",
  ];

  const filteredTickets = tickets.filter(
    (ticket) =>
      (selectedCategory === "All" || ticket.category === selectedCategory) &&
      (ticket.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        ticket.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        ticket.status.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const handleNewTicketClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "Open":
        return <Clock className="h-5 w-5 text-yellow-500" />;
      case "In Progress":
        return <AlertTriangle className="h-5 w-5 text-blue-500" />;
      case "Closed":
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      default:
        return null;
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100">
        <main className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div className="flex-1 mb-4 md:mb-0 md:mr-4">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search tickets..."
                      className="w-full pl-10 pr-4 py-2 border rounded-md"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  </div>
                </div>
                <div className="flex space-x-2">
                  <select
                    className="border rounded-md px-3 py-2"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                  >
                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                  <button
                    onClick={handleNewTicketClick}
                    className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors flex items-center"
                  >
                    <Plus className="h-5 w-5 mr-2" />
                    New Ticket
                  </button>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Ticket
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Category
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Priority
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Date
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {filteredTickets.map((ticket) => (
                      <tr key={ticket.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <MessageSquare className="h-5 w-5 text-gray-400 mr-2" />
                            <div className="text-sm font-medium text-gray-900">
                              {ticket.title}
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-500">
                            {ticket.category}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            {getStatusIcon(ticket.status)}
                            <span className="ml-2 text-sm text-gray-500">
                              {ticket.status}
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span
                            className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                              ticket.priority === "High"
                                ? "bg-red-100 text-red-800"
                                : ticket.priority === "Medium"
                                ? "bg-yellow-100 text-yellow-800"
                                : "bg-green-100 text-green-800"
                            }`}
                          >
                            {ticket.priority}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {ticket.date}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-lg mb-2">
                  How do I reset my password?
                </h3>
                <p className="text-gray-600">
                  To reset your password, visit the account settings page and
                  click on the "Reset Password" button. Follow the instructions
                  sent to your email to complete the process.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-lg mb-2">
                  What should I do if my computer won't start?
                </h3>
                <p className="text-gray-600">
                  First, ensure all cables are properly connected. If the issue
                  persists, try unplugging the power cord, waiting for 30
                  seconds, and plugging it back in. If the problem continues,
                  please create a new ticket for assistance.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-lg mb-2">
                  How can I request new software installation?
                </h3>
                <p className="text-gray-600">
                  To request new software, create a ticket using the "New
                  Ticket" button above. Select "Software" as the category and
                  provide details about the software you need installed.
                </p>
              </div>
            </div>
          </div>

          {/* New Ticket Modal */}
          {isModalOpen && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full">
                <h2 className="text-xl font-semibold mb-4">
                  Create New Ticket
                </h2>
                <form>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                      Title
                    </label>
                    <input
                      type="text"
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                      Category
                    </label>
                    <select className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2">
                      {categories.map((category) => (
                        <option key={category} value={category}>
                          {category}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                      Description
                    </label>
                    <textarea
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                      rows="4"
                      required
                    ></textarea>
                  </div>
                  <div className="flex justify-end space-x-2">
                    <button
                      type="button"
                      className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md"
                      onClick={closeModal}
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
                    >
                      Submit
                    </button>
                  </div>
                </form>
                <button
                  className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
                  onClick={closeModal}
                >
                  &times;
                </button>
              </div>
            </div>
          )}
        </main>
        <Footer />
      </div>
    </>
  );
}
