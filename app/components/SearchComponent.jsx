"use client";
import { TfiLocationPin } from "react-icons/tfi";
import { MdAddCard } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import { FaLanguage } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";
import { useRouter } from "next/navigation";


const SearchComponent = () => {

  const tourGuidesData = [
    {
      "id": 1,
      "name": "John Doe",
      "location": "New York",
      "language": "English",
      "rating": 5,
      "price": 200
    },
    {
      "id": 2,
      "name": "Jane Smith",
      "location": "Chicago",
      "language": "Spanish",
      "rating": 4,
      "price": 150
    },
    {
      "id": 3,
      "name": "Bob Johnson",
      "location": "Atlanta",
      "language": "French",
      "rating": 5,
      "price": 300
    },
    {
      "id": 4,
      "name": "Alice Williams",
      "location": "San Francisco",
      "language": "German",
      "rating": 2,
      "price": 400
    },
    {
      "id": 5,
      "name": "David Brown",
      "location": "Los Angeles",
      "language": "Italian",
      "rating": 3,
      "price": 150
    },
    {
      "id": 6,
      "name": "Charlie Miller",
      "location": "Seattle",
      "language": "Portuguese",
      "rating": 5,
      "price": 331
    },
    {
      "id": 7,
      "name": "Eva Davis",
      "location": "Austin",
      "language": "Dutch",
      "rating": 4,
      "price": 275
    },
    {
      "id": 8,
      "name": "Frank Wilson",
      "location": "Boston",
      "language": "Russian",
      "rating": 1,
      "price": 120
    },
    {
      "id": 9,
      "name": "Grace Taylor",
      "location": "Denver",
      "language": "Arabic",
      "rating": 5,
      "price": 350
    },
    {
      "id": 10,
      "name": "Harry Thomas",
      "location": "Miami",
      "language": "Japanese",
      "rating": 3,
      "price": 200
    },
    {
      "id": 11,
      "name": "Ivy Jackson",
      "location": "Philadelphia",
      "language": "Korean",
      "rating": 4,
      "price": 225
    },
    {
      "id": 12,
      "name": "Jack White",
      "location": "Phoenix",
      "language": "Chinese",
      "rating": 2,
      "price": 100
    },
    {
      "id": 13,
      "name": "Katie Harris",
      "location": "Washington",
      "language": "Hindi",
      "rating": 5,
      "price": 500
    }


  ]


  const [location, setLocation] = useState("");
  const [rating, setRating] = useState("");
  const [language, setLanguage] = useState("");
  const [sliderValue, setSliderValue] = useState(0);
  const filteredGuides = [];
  const [uniqueGuidesByFilter, setUniqueGuidesByFilter] = useState([]);
  const [showResults, setShowResults] = useState(false);


  const handleSliderChange = (event) => {
    setSliderValue(event.target.value);
  };

  const handleSearch = () => {
    setShowResults(true);
    console.log(location, rating, language, sliderValue);
    if (location !== "location") {
      filteredGuides.push(...tourGuidesData.filter(guide => guide.location === location));
    }

    if (rating !== "rating") {
      filteredGuides.push(...tourGuidesData.filter(guide => guide.rating === parseInt(rating)));
    }

    if (language !== "language") {
      filteredGuides.push(...tourGuidesData.filter(guide => guide.language === language));
    }

    if (sliderValue !== 0) {
      filteredGuides.push(...tourGuidesData.filter(guide => guide.price <= parseInt(sliderValue)));
    }

    // remove duplicates
    const uniqueGuides = Array.from(new Set(filteredGuides.map(a => a.id)))
      .map(id => {
        return filteredGuides.find(a => a.id === id)
      });

    console.log(uniqueGuides);
    setUniqueGuidesByFilter(uniqueGuides);

    // console.log(filteredGuides);
    setLanguage("language");
    setLocation("location");
    setRating("rating");
    setSliderValue(0);
  };

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
      <span
        className="flex items-center gap-4 border border-gray-300 px-4 py-2
      bg-blue-500 rounded-full cursor-pointer hover:bg-blue-600 transition duration-200 ease-in-out
      "
        onClick={handleSearch}
      >
        <FaSearch className="text-lg text-white" />
      </span>
    </div>
  );
};

export default SearchComponent;
