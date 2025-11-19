import React from "react";
import { FaCloudversify } from "react-icons/fa6";
export default function Badges({ title = "Air Quality", value = "256" }) {
  return (
    <>
      <div className="inline-flex flex-col  gap-2 rounded-2xl min-w-fit w-full max-w-[400px]     bg-white shadow-2xl px-6 py-2 text-md font-medium text-gray-400 inset-ring inset-ring-gray-400/20">
        <div className="flex justify-center gap-2">
          <FaCloudversify className="text-gray-600" />
          <p className="text-gray-600">{title}</p>
        </div>
        <p className="font-bold text-center text-gray-600">{value} </p>
      </div>
    </>
  );
}
