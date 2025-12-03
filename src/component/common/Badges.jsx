import React from "react";
import { FaCloudversify } from "react-icons/fa6";
export default function Badges({
  title = "Air Quality",

  value,
}) {
  return (
    <>
      <div className="inline-flex flex-col  gap-2 rounded-2xl min-w-fit w-full lg:max-w-[400px]     bg-white shadow-2xl px-6 py-2 text-md font-medium text-gray-400 inset-ring inset-ring-gray-400/20">
        <div className="grid grid-cols-3 ">
          <div className="row-span-2 flex justify-center items-center">
            <FaCloudversify className="text-gray-600" size={50} />
          </div>
          <div className=" col-span-2 flex flex-col justify-center">
            <p className="text-gray-600 text-center capitalize">{title}</p>{" "}
            <p className="font-bold text-center text-gray-600">{value} </p>
          </div>
        </div>
      </div>
    </>
  );
}
