import { DownloadIcon } from "lucide-react";
import React from "react";

function Download() {
  return (
    <div className="bg-white rounded-lg shadow border border-white mt-8 p-6">
      <div className="flex items-center mb-4">
        <DownloadIcon className="h-8 w-8 text-blue-600 mr-3" />
        <h2 className="text-2xl font-bold">DOWNLOAD</h2>
      </div>
      <div className="space-y-4">
        {" "}
        {/* Added space between buttons */}
        <a
          href="https://play.google.com/store/apps/details?id=com.example.app"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition-colors"
        >
          <img
            src="src/assets/android.png"
            alt="Download on Android"
            className="h-5 w-5 mr-2"
          />
          <span className="font-semibold">Download on Android</span>
        </a>
        <a
          href="https://www.apple.com/app-store/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition-colors"
        >
          <img
            src="src/assets/apple.png"
            alt="Download on iOS"
            className="h-5 w-5 mr-2"
          />
          <span className="font-semibold">Download on iOS</span>
        </a>
      </div>
    </div>
  );
}

export default Download;
