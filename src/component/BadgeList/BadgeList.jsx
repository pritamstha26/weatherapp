import React, { useContext, useState } from "react";
import Badges from "../common/Badges";
import { FaThermometerHalf, FaWind } from "react-icons/fa";
import { MdOutlineRemoveRedEye, MdOutlineVisibility } from "react-icons/md";
import { WiHumidity } from "react-icons/wi";
import { WeatherContext } from "../../context/WeatherContext";
export default function BadgeList() {
  const { data } = useContext(WeatherContext);

  const weatherData = data
    ? [
        {
          title: "Temperature",
          value: `${data?.main.temp.toFixed(0)}°C`,
          img: <FaThermometerHalf size={32} />,
        },
        {
          title: "Pressure",
          value: `${data?.main.pressure}`,
          img: <MdOutlineRemoveRedEye size={32} />,
        },
        {
          title: "Humidity",
          value: `${data?.main.humidity}%`,
          img: <WiHumidity size={32} />,
        },
        {
          title: "Visibility",
          value: `${data?.visibility} km`,
          img: <MdOutlineVisibility size={32} />,
        },
        {
          title: "Wind ",
          value: `${data?.main.temp.toFixed(0)} kmph`,
          img: <FaWind size={32} />,
        },
      ]
    : [];

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2  container mx-auto  md:grid-cols-3 my-4 p-3 gap-4  ">
      {weatherData &&
        weatherData.map((val, index) => {
          return (
            <div key={index}>
              <Badges weatherData={val} />
            </div>
          );
        })}
    </section>
  );
}
