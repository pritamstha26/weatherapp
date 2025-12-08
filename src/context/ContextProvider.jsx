import React, { useEffect, useState } from "react";
import { WeatherContext } from "./WeatherContext";
import { getCurrentLocation, searchByName } from "../api/api";
export default function ContextProvider({ children }) {
  const [data, setData] = useState(null);

  const searchByCity = async (city) => {
    const searchCity = await searchByName(city);
    setData(searchCity);
  };
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (pos) => {
      const { latitude, longitude } = pos.coords;
      const locationData = await getCurrentLocation(latitude, longitude);
      setData(locationData);
    });
  }, []);
  const handleSubmit = async (city) => {
    if (city.trim().length > 0) {
      await searchByCity(city);
    } else {
      console.log("error fetching data");
    }
  };

  return (
    <WeatherContext.Provider value={{ data, searchByCity, handleSubmit }}>
      {children}
    </WeatherContext.Provider>
  );
}
