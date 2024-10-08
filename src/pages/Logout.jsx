import React, { useEffect } from "react";

export default function Logout() {
  useEffect(() => {
    // Here you would typically make an API call to invalidate the session
    const logoutTimer = setTimeout(() => {
      window.location.href = "/login";
    }, 3000);

    return () => clearTimeout(logoutTimer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md text-center">
        <h2 className="text-2xl font-bold mb-4">Logged Out</h2>
        <p className="text-gray-600 mb-6">
          You have been successfully logged out of the CPCL Intranet.
        </p>
        <p className="text-gray-600 mb-6">
          Thank you for using the CPCL Intranet. For security reasons, please
          close all browser windows.
        </p>
        <button
          onClick={() => (window.location.href = "/login")}
          className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Return to Login
        </button>
      </div>
    </div>
  );
}
