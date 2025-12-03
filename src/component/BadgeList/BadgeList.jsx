import React, { useContext, useState } from "react";
import Badges from "../common/Badges";
import { WeatherContext } from "../../context/WeatherContext";
export default function BadgeList() {
  const { data } = useContext(WeatherContext);
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2   md:grid-cols-3 my-4 p-3 gap-4  ">
      {data?.main &&
        Object.keys(data?.main).map((key) => {
          return (
            <div className="" key={key}>
              <Badges title={key.replace("_", " ")} value={data?.main[key]} />
            </div>
          );
        })}
    </section>
  );
}
