import React from "react";

export default function Button({ value = "Search", type = "button" }) {
  return (
    <>
      <button
        className="cursor-pointer border-gray-200 border  sm:w-auto text-sm sm:text-base md:text-lg   shadow-2xl rounded-2xl p-4 hover:bg-gray-200"
        type={type}
      >
        {value}
      </button>
    </>
  );
}
