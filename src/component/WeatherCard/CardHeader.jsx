import React, { useContext } from "react";
import { IoIosSunny } from "react-icons/io";
import { IoCloudyNight } from "react-icons/io5";
import { WeatherContext } from "../../context/WeatherContext";

export default function CardHeader() {
  const { data } = useContext(WeatherContext);
  const isDay = data?.weather[0]?.icon.endsWith("d") ? (
    <IoIosSunny color="yellow" />
  ) : (
    <IoCloudyNight color="grey" />
  );
  const unixTime = data?.dt;
  const dateNow = new Date(unixTime * 1000);
  const getUTCTime = dateNow.getHours();

  return (
    <header className="flex justify-between items-center gap-3">
      <div>
        <h5 className="text-sm sm:text-lg ">Current weather</h5>
        <h4 className="text-sm  sm:text-lg md:text-2xl font-medium">12</h4>
      </div>
      <div>{isDay}</div>
    </header>
  );
}
