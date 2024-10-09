import React, { useEffect, useRef, useState } from "react";
import { Search, HelpCircle, User, Settings, LogOut } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsUserMenuOpen(false);
      }
    };

    if (isUserMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isUserMenuOpen]);

  const toggleSearch = () => {
    setIsSearchOpen((prev) => !prev);
  };

  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link to="/">
            <img src="src/assets/logo.png" alt="CPCL Logo" className="h-14" />
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          {isSearchOpen && (
            <input
              type="text"
              placeholder="Search..."
              className={`p-2 border border-gray-300 rounded-lg transition-all duration-300 ease-in-out transform ${
                isSearchOpen ? "scale-100 opacity-100" : "scale-0 opacity-0"
              }`}
            />
          )}
          <button onClick={toggleSearch} className="focus:outline-none">
            <Search className="h-5 w-5 text-black" />
          </button>

          <HelpCircle className="h-5 w-5 text-black" />
          <div className="relative">
            <button
              className="flex items-center space-x-2 focus:outline-none transition-transform duration-300 ease-in-out transform hover:scale-105"
              onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
            >
              <img
                src="src/assets/User.png"
                alt="User Avatar"
                className="h-8 w-8 rounded-full"
              />
            </button>
            {isUserMenuOpen && (
              <div
                ref={menuRef}
                className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 transition-opacity duration-300 ease-in-out"
                style={{ opacity: isUserMenuOpen ? 1 : 0 }}
              >
                <div className="grid gap-4 p-4">
                  {/* User Information */}
                  <div className="space-y-2">
                    <h4 className="font-medium leading-none text-black">
                      Karthik
                    </h4>
                    <p className="text-sm text-muted-foreground text-black">
                      Operations Manager
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="grid gap-2 text-black">
                    <button
                      className="w-full flex items-center justify-start hover:bg-gray-100 p-2 rounded-md"
                      onClick={() => alert("Profile clicked")}
                    >
                      <User className="mr-2 h-4 w-4 text-black" />
                      Profile
                    </button>
                    <Link to="/setting">
                      <button className="w-full flex items-center justify-start hover:bg-gray-100 p-2 rounded-md">
                        <Settings className="mr-2 h-4 w-4" />
                        Settings
                      </button>
                    </Link>

                    <NavLink to="/logout">
                      <button className="w-full flex items-center justify-start text-red-500 hover:bg-red-100 p-2 rounded-md">
                        <LogOut className="mr-2 h-4 w-4" />
                        Log out
                      </button>
                    </NavLink>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
