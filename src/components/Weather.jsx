import React, { useEffect, useState } from "react";
import axios from "axios";
import { Sun, Cloud, Snowflake, CloudSun } from "lucide-react";

function Weather() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const city = "Chennai";
  const API_KEY = "e84ad1e3651dfd3108a7d3456a143aba";

  const getWeatherIcon = (weather) => {
    const mainCondition = weather[0].main.toLowerCase();

    if (mainCondition === "snow") {
      return "snow";
    } else if (mainCondition === "clouds") {
      return "cloud";
    } else if (mainCondition === "clear") {
      return "sun";
    } else if (mainCondition === "drizzle" || mainCondition === "rain") {
      return "cloudsun";
    } else {
      return "sunny";
    }
  };

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
        );
        setWeatherData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching the weather data:", error);
        setError("Error fetching the weather data");
        setLoading(false);
      }
    };

    fetchWeather();
  }, [city]);

  // Skeleton Loader
  const SkeletonLoader = () => (
    <div className="bg-white rounded-lg shadow p-6 mb-8">
      <div className="animate-pulse">
        <div className="h-6 bg-gray-200 rounded mb-4 w-1/4"></div>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="h-8 w-8 bg-gray-200 rounded-full mr-2"></div>
            <div>
              <div className="h-4 bg-gray-200 rounded mb-2 w-2/3"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2"></div>
            </div>
          </div>
          <div>
            <div className="h-4 bg-gray-200 rounded mb-2 w-1/2"></div>
            <div className="h-4 bg-gray-200 rounded w-1/3"></div>
          </div>
        </div>
      </div>
    </div>
  );

  if (loading) {
    return <SkeletonLoader />;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!weatherData) {
    return <div>Failed to load weather data.</div>;
  }

  const weatherIcon = getWeatherIcon(weatherData.weather);

  const renderIcon = () => {
    switch (weatherIcon) {
      case "snow":
        return <Snowflake className="h-8 w-8 mr-4 text-blue-500 pulsate" />;
      case "cloud":
        return <Cloud className="h-8 w-8 mr-4 text-gray-500 pulsate" />;
      case "sun":
        return <Sun className="h-8 w-8 mr-4 text-yellow-500 pulsate" />;
      case "cloudsun":
        return <CloudSun className="h-8 w-8 mr-4 text-yellow-400 pulsate" />;
      default:
        return <Sun className="h-8 w-8 mr-4 text-yellow-500 pulsate" />;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow p-6 mb-8">
      <h3 className="text-2xl font-bold mb-4">CHENNAI WEATHER</h3>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          {renderIcon()}
          <div>
            <p className="text-2xl font-bold">
              {weatherData.main.temp.toFixed(1)}°C
            </p>
            <p className="text-sm text-gray-500">
              {weatherData.weather[0].description}
            </p>
          </div>
        </div>
        <div>
          <p className="text-sm">Humidity: {weatherData.main.humidity}%</p>
          <p className="text-sm">
            Wind: {(weatherData.wind.speed * 3.6).toFixed(1)} km/h
          </p>
        </div>
      </div>
    </div>
  );
}

export default Weather;
