import React, { useState } from "react";

export default function SearchBar({ city, setCity }) {
  const handleCity = (e) => {
    setCity(e.target.value);
  };
  return (
    <>
      <input
        type="text"
        value={city}
        placeholder="Enter the name of the city"
        onChange={handleCity}
        className="p-4 shadow-2xl rounded-2xl w-full sm-w-80 md:w-90 lg:w-[450px]    outline-0 border-gray-200 border "
      />
    </>
  );
}
