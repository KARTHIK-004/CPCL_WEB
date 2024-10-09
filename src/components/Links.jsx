import React from "react";
import {
  Users,
  Settings,
  ShieldCheck,
  ChartColumnIncreasing,
  MessageCircleQuestion,
} from "lucide-react";

const links = [
  { name: "Setting", icon: <Settings />, link: "/setting" },
  { name: "HSE Portal", icon: <ShieldCheck />, link: "/" },
  { name: "IT Helpdesk", icon: <MessageCircleQuestion />, link: "/helpdesk" },
  { name: "Reports", icon: <ChartColumnIncreasing />, link: "/" },
  { name: "Directory", icon: <Users />, link: "/directory" },
];

function Links() {
  return (
    <div className="justify-between mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
      {links.map((link) => (
        <a
          key={link.name}
          href={link.link}
          className="flex flex-col items-center justify-center w-24 h-24 bg-blue-700 text-white rounded-lg hover:bg-blue-600 transition-transform duration-300 ease-in-out transform hover:scale-105"
        >
          <span className="text-2xl mb-2">{link.icon}</span>
          <span className="text-sm text-center">{link.name}</span>
        </a>
      ))}
    </div>
  );
}

export default Links;
