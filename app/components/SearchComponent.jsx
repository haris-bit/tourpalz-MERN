"use client";
import { TfiLocationPin } from "react-icons/tfi";
import { MdAddCard } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";

const SearchComponent = () => {
  const [sliderValue, setSliderValue] = useState(50);

  const handleSliderChange = (event) => {
    setSliderValue(event.target.value);
  };

  return (
    <div
      className="w-full h-[14rem] md:w-[70rem] md:h-24 bg-white flex flex-col gap-4 md:flex-row md:justify-between px-12 items-center shadow-md
        z-50 absolute top-[24rem] md:top-[30rem] left-1/2 md:transform -translate-x-1/2 rounded-lg
        "
    >
      {/* span for search */}
      <span className="flex items-center gap-4 border rounded-full border-gray-300 px-4 py-2">
        <input
          type="text"
          placeholder="Search..."
          className="outline-none border-none w-full bg-transparent text-gray-800 font-normal"
        />
      </span>
      {/* span for location */}
      <span className="flex items-center gap-4 border rounded-full border-gray-300 px-4 py-2">
        <TfiLocationPin className="text-xl text-gray-800" />
        <select name="location" id="location" className="bg-transparent">
          <option value="location">Location</option>
          <option value="newyork">New York</option>
          <option value="chicago">Chicago</option>
          <option value="atlanta">Atlanta</option>
        </select>
      </span>

      {/* span for add card
          this will be slider where we can move the slider left or right to select the price value
          */}
      <span className="flex items-center gap-4 border rounded-full border-gray-300 px-4 py-2">
        <MdAddCard className="text-xl text-gray-800" />
        <input
          type="range"
          name="price"
          id="price"
          className="bg-transparent cursor-pointer"
          value={sliderValue}
          onChange={handleSliderChange}
          min={0}
          max={1000} // Set your max value here
          step={1} // Set your step increment here
        />
        <span className="text-blue-400 shadow-lg rounded-full">
          ${sliderValue}
        </span>
      </span>
      {/* span for search button */}
      <span
        className="flex items-center gap-4 border rounded-full border-gray-300 px-4 py-2
      bg-blue-500 rounded-full cursor-pointer hover:bg-blue-600 transition duration-200 ease-in-out
      "
      >
        <FaSearch className="text-lg text-white" />
      </span>
    </div>
  );
};

export default SearchComponent;
