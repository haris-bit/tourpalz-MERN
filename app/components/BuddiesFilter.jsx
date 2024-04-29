"use client";
import React from "react";
// import search icon from react-icons
import { FaSearch } from "react-icons/fa";
import { AiOutlineReload } from "react-icons/ai";
import { useState } from "react";
import Link from "next/link";

const BuddiesFilter = () => {
  const [location, setLocation] = useState("");
  const [language, setLanguage] = useState("");
  const [rating, setRating] = useState("");
  const [sliderValue, setSliderValue] = useState(0);

  return (
    <div
      className="w-fit h-fit bg-white shadow-lg flex flex-col mt-8 rounded-xl
      px-10 py-2
      md:px-20 md:py-4 mx-auto
    "
    >
      <h1 className="ml-4 text-2xl font-bold text-gray-800 self-left mt-4">
        Filter
      </h1>

      <hr className="border-b-1 border-gray-200 w-11/12 self-center my-4" />
      {/* span for location dropdown */}
      <span className="rounded-full mx-4 p-4 flex items-center justify-between border-2 border-gray-200">
        <select
          name="location"
          id="location"
          className="w-11/12 outline-none
        bg-transparent text-gray-700
        cursor-pointer
        "
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        >
          <option value="location">Location</option>
          <option value="New York">New York</option>
          <option value="Chicago">Chicago</option>
          <option value="Atlanta">Atlanta</option>
        </select>
      </span>
      <hr className="border-b-1 border-gray-200 w-11/12 self-center my-6" />

      {/* span for language dropdown */}
      <span className="rounded-full mx-4 p-4 flex items-center justify-between border-2 border-gray-200">
        <select
          name="language"
          id="language"
          className="w-11/12 outline-none
        bg-transparent text-gray-700
        cursor-pointer
        "
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
        >
          <option value="language">Select Language</option>
          <option value="Eglish">English</option>
          <option value="Spanish">Spanish</option>
          <option value="French">French</option>
          <option value="German">German</option>
          <option value="Hindi">Hindi</option>
          <option value="Urdu">Urdu</option>
        </select>
      </span>

      <hr className="border-b-1 border-gray-200 w-11/12 self-center my-6" />
      {/* span for rating dropdown */}
      <span className="rounded-full mx-4 p-4 flex items-center justify-between border-2 border-gray-200">
        <select
          name="rating"
          id="rating"
          className="w-11/12 outline-none
        bg-transparent text-gray-700
        cursor-pointer
        "
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        >
          <option value="rating">Rating</option>
          <option value="5">5 Stars</option>
          <option value="4">4 Stars</option>
          <option value="3">3 Stars</option>
          <option value="2">2 Stars</option>
          <option value="1">1 Star</option>
        </select>
      </span>

      <h1 className="ml-4 text-2xl font-bold text-gray-800 self-left mt-6 mx-12">
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
        value={sliderValue}
        onChange={(e) => setSliderValue(e.target.value)}
      />
      <div className="flex justify-between w-11/12 self-center">
        <span className="text-gray-700">$0</span>
        <span className="text-gray-700">$1000</span>
      </div>

      {/* search */}
      <Link
        href={{
          pathname: "/search",
          query: {
            location: location,
            language: language,
            rating: rating,
            price: sliderValue,
          },
        }}
      >
        <button className="flex justify-center items-center gap-2 border border-blue-500 text-blue-500 rounded-full p-2 mt-4
      hover:bg-blue-500 hover:text-white transition duration-200 ease-in-out
      ">
          <AiOutlineReload className="text-blue-500
        hover:text-white
        " />
        Search
      </button>
      </Link>
    </div>
  );
};

export default BuddiesFilter;
