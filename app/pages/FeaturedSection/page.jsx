"use client";
import { GoArrowRight } from "react-icons/go";
import Image from "next/image";
// import star icon from react-icons
import { FaCommentDots, FaDollarSign, FaLanguage, FaMapMarkerAlt, FaStar } from "react-icons/fa";
import Link from "next/link";
import { useState, useEffect } from "react";
import axios from "axios";


const FeaturedSection = () => {
  const [talz, setTalz] = useState([]);
  useEffect(() => {
    // get all travel talz
    axios
      .get("http://localhost:3001/tourguides")
      .then((res) => {
        console.log(res.data);
        setTalz(res.data.tourguides);
      })
      .catch((err) => {
        console.log(err);
      });
  }
    , []);
  return (
    <section className="flex flex-col w-full h-full bg-gray-100 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-4 md:py-12">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div>
          <span
            className="flex items-center gap-4
                bg-white p-2 rounded-full w-max
                mt-12 mb-4
            "
          >
            <GoArrowRight className="text-xl bg-blue-500 text-white rounded-full w-8 h-8 p-1 " />
            <p className="text-xl font-semibold text-blue-700">
              Featured Travel Talz
            </p>
          </span>

          <span className="text-2xl sm:text-3xl md:text-4xl font-bold mt-12 text-gray-700 py-4 md:py-8 tracking-wide md:tracking-wider leading-tight">
            Our Best Travel Talz
          </span>
        </div>

        <div>
          <button
            className="text-blue-500 px-4 py-2 rounded-full mt-4 border border-blue-500
            font-semibold hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out
          "
          >
            See All Travel Talz
          </button>
        </div>
      </div>

      {/* Cards Section */}
      <ul
        className='mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-6 bg-white'
      >
        {
          talz.slice(0, 9).map(guide => (
            <li
              key={guide.id}
              className='flex flex-col items-center gap-2 p-2 bg-gray-50 rounded-lg shadow-xl'
            >
              <Image
                src={guide.profilePicture}
                alt={guide.name}
                width={200}
                height={200}
                className='rounded-md'
              />
              <hr
                className="w-1/2 bg-gray-300 h-0.5 my-1"
              />
              <h2
                className='text-2xl font-bold'
              >
                {guide.username}
              </h2>
              <hr
                className="w-1/2 bg-gray-300 h-0.5 my-1"
              />
              <p
                className='text-lg flex gap-2 justify-center items-center'
              >
                <FaMapMarkerAlt />
                {guide.location}
              </p>
              <hr
                className="w-1/2 bg-gray-300 h-0.5 my-1"
              />
              <p
                className='text-lg flex gap-2 justify-center items-center'
              >
                <FaLanguage />
                {guide.language}
              </p>
              <hr
                className="w-1/2 bg-gray-300 h-0.5 my-1"
              />
              <p
                className='text-lg flex gap-2 justify-center items-center'
              >
                {/* print stars of size rating */}
                {
                  Array(guide.rating).fill().map((_, i) => (
                    <FaStar key={i} />
                  ))
                }
              </p>
              <hr
                className="w-1/2 bg-gray-300 h-0.5 my-1"
              />
              <p
                className='text-lg flex gap-2 justify-center items-center'
              >
                <FaDollarSign />
                {guide.price}
              </p>
              <hr
                className="w-1/2 bg-gray-300 h-0.5 my-1"
              />
              <Link
                href={{
                  pathname: '/TravelerProfile',
                  query: { guideName: guide.username }
                }}
                className='flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg'
              >

                <FaCommentDots />
                Contact with {guide.username}

              </Link>
            </li>
          ))
        }
      </ul>
    </section>
  );
};

export default FeaturedSection;
