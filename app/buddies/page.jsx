"use client";
import React from "react";
import Navbar from "../components/Navbar";
import BuddiesFilter from "../components/BuddiesFilter";
import Image from "next/image";
import { FaCommentDots, FaDollarSign, FaLanguage, FaMapMarkerAlt, FaStar } from "react-icons/fa";
import Link from "next/link";
import { useState, useEffect } from "react";
import axios from "axios";
import CustomerSupport from "../customersupport/page";


const Buddies = () => {
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
    <div>
      <div className="flex flex-col w-full h-full bg-gray-100">
        <CustomerSupport />
        <Navbar />
        {/* section */}
        <section className="py-24 px-32 w-full h-full flex gap-8">
          <BuddiesFilter />
          <ul
            className='mt-8 grid grid-cols-2 gap-8 py-2 bg-white rounded-lg shadow-xl'
          >
            {
              talz.slice(0, 6).map(guide => (
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
                    {guide.name}
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
                      query: { guideName: guide.name }
                    }}
                    className='flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg'
                  >

                    <FaCommentDots />
                    Contact with {guide.name}

                  </Link>
                </li>
              ))
            }
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Buddies;
