import React from "react";
import { Shield, FileText, User, Download } from "lucide-react";

const documents = [
  {
    title: "Safety Manual 2024",
    category: "Safety",
    downloads: 1250,
    icon: <Shield className="h-5 w-5 text-blue-500" />,
  },
  {
    title: "Environmental Policy",
    category: "Policy",
    downloads: 980,
    icon: <FileText className="h-5 w-5 text-green-500" />,
  },
  {
    title: "Employee Handbook",
    category: "HR",
    downloads: 1500,
    icon: <User className="h-5 w-5 text-yellow-500" />,
  },
  {
    title: "Emergency Response Plan",
    category: "Safety",
    downloads: 2000,
    icon: <Shield className="h-5 w-5 text-blue-500" />,
  },
];

function DocumentLibrary() {
  return (
    <div className="bg-white rounded-lg shadow p-6 mt-8">
      <h2 className="text-2xl font-bold mb-4">DOCUMENT LIBRARY</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 text-left">Document Title</th>
              <th className="px-4 py-2 text-left">Category</th>
              <th className="px-4 py-2 text-left">Downloads</th>
              <th className="px-4 py-2 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {documents.map((doc, index) => (
              <tr key={index} className="border-b">
                <td className="px-4 py-2 flex items-center">
                  {doc.icon} {/* Render the icon */}
                  <span className="ml-2">{doc.title}</span>
                </td>
                <td className="px-4 py-2">{doc.category}</td>
                <td className="px-4 py-2">{doc.downloads}</td>
                <td className="px-4 py-2">
                  <button className="flex items-center bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 transition-colors">
                    <Download className="h-5 w-5 mr-1" />
                    Download
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DocumentLibrary;
