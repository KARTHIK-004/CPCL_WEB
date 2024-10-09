import React, { useState } from "react";
import {
  ArrowLeft,
  User,
  Bell,
  Lock,
  Eye,
  EyeOff,
  Globe,
  Smartphone,
} from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Setting() {
  const [showPassword, setShowPassword] = useState(false);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [language, setLanguage] = useState("en");

  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const toggleNotifications = () =>
    setNotificationsEnabled(!notificationsEnabled);

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100 text-black">
        <main className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="p-6 space-y-6">
              <section>
                <h2 className="text-3xl font-bold mb-4">Account Settings</h2>
                <div className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-1"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-3 py-2 border rounded-md bg-white border-gray-300"
                      defaultValue="Rajesh Kumar"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-1"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-3 py-2 border rounded-md bg-white border-gray-300"
                      defaultValue="rajesh.kumar@cpcl.co.in"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium mb-1"
                    >
                      Password
                    </label>
                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        id="password"
                        name="password"
                        className="w-full px-3 py-2 border rounded-md bg-white border-gray-300"
                        defaultValue="********"
                      />
                      <button
                        type="button"
                        onClick={togglePasswordVisibility}
                        className="absolute inset-y-0 right-0 pr-3 flex items-center"
                      >
                        {showPassword ? (
                          <EyeOff className="h-5 w-5" />
                        ) : (
                          <Eye className="h-5 w-5" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4">Mobile App</h2>
                <div className="space-y-4">
                  <p className="text-sm">
                    Download our mobile app for easy access to CPCL Intranet on
                    the go.
                  </p>
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                    >
                      <img
                        src="src/assets/apple.png"
                        alt="apple"
                        className="h-5 w-5 mr-2"
                      />
                      Download for iOS
                    </a>
                    <a
                      href="#"
                      className="flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                    >
                      <img
                        src="src/assets/android.png"
                        alt="android"
                        className="h-5 w-5 mr-2"
                      />
                      Download for Android
                    </a>
                  </div>
                </div>
              </section>
            </div>

            <div className="px-6 py-4 bg-gray-50">
              <button
                type="button"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Save Changes
              </button>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}
