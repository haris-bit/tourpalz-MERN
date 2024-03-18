import React from "react";
// import search icon from react-icons
import { FaSearch } from "react-icons/fa";
import { AiOutlineReload } from "react-icons/ai";

const BuddiesFilter = () => {
  return (
    <div
      className="w-[32rem] h-[32rem] bg-white shadow-lg flex flex-col mt-8 rounded-xl
    px-4
    "
    >
      <h1 className="ml-4 text-2xl font-bold text-gray-800 self-left mt-4">
        Filter
      </h1>
      <hr className="border-b-1 border-gray-200 w-11/12 self-center my-4" />
      <span className="rounded-full mx-4 p-4 flex items-center justify-between border-2 border-gray-200 p-2 mt-4">
        <input
          type="text"
          placeholder="Keyword..."
          className="w-11/12 outline-none"
        />
        <FaSearch className="text-gray-700" />
      </span>
      <hr className="border-b-1 border-gray-200 w-11/12 self-center my-4" />
      {/* span for location dropdown */}
      <span className="rounded-full mx-4 p-4 flex items-center justify-between border-2 border-gray-200 p-2 mt-4">
        <select
          name="location"
          id="location"
          className="w-11/12 outline-none
        bg-transparent text-gray-700
        cursor-pointer
        "
        >
          <option value="location">Location</option>
          <option value="location">New York</option>
          <option value="location">Chicago</option>
          <option value="location">Atlanta</option>
        </select>
      </span>
      <hr className="border-b-1 border-gray-200 w-11/12 self-center my-8" />
      <h1 className="ml-4 text-2xl font-bold text-gray-800 self-left mt-4">
        Pricing scale
      </h1>
      {/* input for price which is a range from 0 1000$ */}
      <input
        type="range"
        min="0"
        max="1000"
        className="w-11/12 self-center
      mt-2
      "
      />
      <div className="flex justify-between w-11/12 self-center">
        <span className="text-gray-700">$0</span>
        <span className="text-gray-700">$1000</span>
      </div>

      {/* search */}
      <button className="flex justify-center items-center gap-2 border border-blue-500 text-blue-500 rounded-full p-2 mt-4">
        <AiOutlineReload className="text-blue-500" />
        Search
      </button>
    </div>
  );
};

export default BuddiesFilter;
