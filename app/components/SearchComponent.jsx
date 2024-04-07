"use client";
import { TfiLocationPin } from "react-icons/tfi";
import { MdAddCard } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import { FaLanguage } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";
import Link from "next/link";


const SearchComponent = () => {
  const [location, setLocation] = useState("");
  const [language, setLanguage] = useState("");
  const [rating, setRating] = useState(0);
  const [sliderValue, setSliderValue] = useState(0);

  const handleSliderChange = (e) => {
    setSliderValue(e.target.value);
  }



  return (
    <div
      className="w-full h-full md:w-[70rem] md:h-24 bg-white flex flex-col gap-4 md:flex-row md:justify-between px-12 items-center shadow-md
        z-50 absolute top-[24rem] md:top-[30rem] left-1/2 md:transform -translate-x-1/2 rounded-lg
        "
    >
      {/* span for search */}
      {/* <span className="flex items-center gap-4 border rounded-full border-gray-300 px-4 py-2">
        <input
          type="text"
          placeholder="Search..."
          className="outline-none border-none w-full bg-transparent text-gray-800 font-normal"
        />
      </span> */}
      {/* span for location */}
      <span className="flex items-center gap-4 border rounded-full border-gray-300 px-4 py-2">
        <TfiLocationPin className="text-xl text-gray-800" />
        <select name="location" id="location" className="bg-transparent"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        >
          <option value="location">Location</option>
          <option value="New York">New York</option>
          <option value="Chicago">Chicago</option>
          <option value="Atlanta">Atlanta</option>
        </select>
      </span>

      {/* languages spoken */}
      <span className="flex items-center gap-4 border rounded-full border-gray-300 px-4 py-2">
        <FaLanguage className="text-xl text-gray-800" />
        <select name="language" id="language" className="bg-transparent"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        >
          <option value="language">Select Language</option>
          <option value="Eglish">English</option>
          <option value="Spanish">Spanish</option>
          <option value="French">French</option>
          <option value="German">German</option>
          <option value="Hindi">Hindi</option>
        </select>
      </span>

      {/* Rating Filter */}
      <span className="flex items-center gap-4 border rounded-full border-gray-300 px-4 py-2">
        <FaStar className="text-xl text-gray-800" />
        <select name="rating" id="rating" className="bg-transparent" value={rating} onChange={(e) => setRating(e.target.value)}>
          <option value="rating">Rating</option>
          <option value="5">5 Stars</option>
          <option value="4">4 Stars</option>
        </select>
      </span>

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
          max={1000}
          step={1}
        />
        <span className="text-blue-400 shadow-lg rounded-full">
          ${sliderValue}
        </span>
      </span>
      {/* span for search button */}

      <Link
        href={{
          pathname: "/search",
          query: {
            location: location,
            language: language,
            rating: rating,
            price: sliderValue,
          }
        }}
      >
      <span
        className="flex items-center gap-4 border border-gray-300 px-4 py-2
        bg-blue-500 rounded-full cursor-pointer hover:bg-blue-600 transition duration-200 ease-in-out
        "
        // onClick={handleSearch}
        >
        <FaSearch className="text-lg text-white" />
      </span>
      </Link>
    </div>
  );
};

export default SearchComponent;
