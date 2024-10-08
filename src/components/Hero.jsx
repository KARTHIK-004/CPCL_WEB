import React, { useState, useEffect } from "react";

function Hero({ name = "Karthik", message }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const img = new Image();
    img.src = "/src/assets/hero.png";
    img.onload = () => setIsLoading(false);
    img.onerror = () => setIsLoading(false);
  }, []);

  const SkeletonLoader = () => (
    <div className="relative h-72 bg-gray-300 rounded-lg overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-25"></div>
      <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-between p-4 md:p-8">
        <div className="text-white text-center md:text-left mb-4 md:mb-0">
          <div className="h-8 w-3/4 bg-gray-200 rounded mb-2"></div>
          <div className="h-6 w-1/2 bg-gray-200 rounded"></div>
        </div>

        {/* Skeleton for message section */}
        <div className="bg-white p-4 rounded-lg shadow-lg max-w-md flex flex-col md:flex-row">
          <div>
            <div className="h-6 w-3/4 bg-gray-200 rounded mb-2"></div>
            <div className="h-4 w-5/6 bg-gray-200 rounded mb-4"></div>
            <div className="h-10 w-1/2 bg-blue-600 rounded"></div>
          </div>
          <div className="bg-blue-300 ml-4 mt-4 md:mt-0">
            <div className="h-full w-full bg-gray-200"></div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {isLoading ? (
        <SkeletonLoader />
      ) : (
        <div
          className={`relative h-72 bg-cover bg-center rounded-lg overflow-hidden animated-bg`}
          style={{
            backgroundImage: `url("/src/assets/hero.png")`,
          }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-25"></div>

          <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-between p-4 md:p-8">
            <div className="text-white text-center md:text-left mb-4 md:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold mb-2">
                Welcome, {name}!
              </h2>
              <p className="text-lg md:text-xl">
                Powering progress, fueling the future.
              </p>
            </div>

            {/* Message Section */}
            <div className="bg-white p-4 rounded-lg shadow-lg max-w-md flex flex-col md:flex-row">
              <div>
                <h3 className="text-lg md:text-xl font-bold mb-2">
                  Message from the Managing Director
                </h3>
                <p className="text-sm mb-4">
                  {message ||
                    "Our commitment to safety, innovation, and sustainability drives our success. Thank you for your dedication to CPCL's mission."}
                </p>
                <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-transform duration-300 ease-in-out transform hover:scale-105">
                  Read More
                </button>
              </div>
              <div className="bg-blue-300 ml-4 mt-4 md:mt-0">
                <img
                  src="https://via.placeholder.com/600x400"
                  alt="CEO Message"
                  className="h-full w-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://via.placeholder.com/400x300";
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Hero;
