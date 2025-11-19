import React, { useEffect, useState } from "react";
import { WeatherContext } from "./WeatherContext";
import { getCurrentLocation } from "../api/api";
export default function ContextProvider({ children }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dat = await getCurrentLocation();
        console.log(dat);
        setData(dat);
      } catch (error) {
        console.log("Error occured", error);
      }
    };
    fetchData();
  }, []);
  return (
    <WeatherContext.Provider value={{ data }}>
      {children}
    </WeatherContext.Provider>
  );
}
