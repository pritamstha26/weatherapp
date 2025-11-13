import React from "react";
import { IoIosSunny } from "react-icons/io";

export default function CardHeader() {
  return (
    <header className="flex justify-between items-center gap-3">
      <div>
        <h5 className="text-sm sm:text-lg ">Current weather</h5>
        <h4 className="text-sm  sm:text-lg md:text-2xl font-medium">2:59pm</h4>
      </div>
      <div>
        <IoIosSunny />
      </div>
    </header>
  );
}
