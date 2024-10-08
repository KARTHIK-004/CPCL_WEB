import React from "react";
import {
  Users,
  Settings,
  ShieldCheck,
  ChartColumnIncreasing,
  MessageCircleQuestion,
} from "lucide-react";

const links = [
  { name: "Operations", icon: <Settings /> },
  { name: "HSE Portal", icon: <ShieldCheck /> },
  { name: "IT Helpdesk", icon: <MessageCircleQuestion /> },
  { name: "Reports", icon: <ChartColumnIncreasing /> },
  { name: "Directory", icon: <Users /> },
];

function Links() {
  return (
    <div className="justify-between mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
      {links.map((link) => (
        <a
          key={link.name}
          href="#"
          className="flex flex-col items-center justify-center w-24 h-24 bg-blue-700 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          <span className="text-2xl mb-2">{link.icon}</span>
          <span className="text-sm text-center">{link.name}</span>
        </a>
      ))}
    </div>
  );
}

export default Links;
