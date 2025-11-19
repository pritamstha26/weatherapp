import React, { useState } from "react";
import WeatherCard from "./component/WeatherCard/WeatherCard";
import Badges from "./component/common/Badges";

export default function App() {
  return (
    <div className="text-2xl">
      <WeatherCard />

      <div className="grid grid-cols-3 gap-4 bg-red-500 ">
        <div className="col-span-1">
          <Badges title="Wind" value="1 mph" />
        </div>
      </div>
    </div>
  );
}
