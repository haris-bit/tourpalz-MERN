"use client";

import axios from "axios";
import Image from "next/image";
import { useEffect } from "react";
import { FaCalendarAlt, FaUsers, FaMapMarkerAlt } from "react-icons/fa";
import { useState } from "react";

const BookedTours = () => {
  // Sample data for booked tour details
  const bookedTour = {
    destination: "Paris, France",
    date: "2024-03-10",
    numberOfPeople: 2,
    startPosition: "Eiffel Tower",
    tourGuide: {
      name: "Jane Doe",
      location: "Paris, France",
      languages: ["English", "French"],
      rating: 4.9,
      profileImage: "/user-1.jpg",
    },
  };

  const [bookedTours, setBookedTours] = useState([]);

  useEffect(() => {
    const email = localStorage.getItem("email");
    axios
      .get(`http://localhost:3001/tours/${email}`)
      .then((res) => {
        setBookedTours(res.data.tours);
        console.log(res.data.tours);
      })
      .catch((err) => {
        console.log(err);
      }
      );
  }, []);

  return (
    <div className="flex flex-col w-full h-full">
      <h1 className="text-2xl font-bold text-center mb-4">Booked Tours</h1>
      <div className="flex flex-col items-center">
        {bookedTours.length === 0 ? (
          <p className="text-center">No tours booked yet</p>
        ) : (
          bookedTours.map((tour) => (
            <div
              key={tour.id}
              className="grid grid-cols-4 items-center w-full p-4 border border-gray-300 rounded-lg shadow-md mb-4
              bg-white
              "
            >
              <div className="flex items-center w-full">
                <div className="ml-2">
                  <p className="font-bold">
                    Tour Guide:
                    {tour.guide}
                  </p>
                  <p>
                    Destination:
                    {tour.destination}
                  </p>
                </div>
              </div>
              <div className="flex items-center w-full mt-4">
                <FaCalendarAlt className="mr-1" />
                <p>{tour.date}</p>
              </div>
              <div className="flex items-center w-full mt-2">
                <FaUsers className="mr-1" />
                <p>{tour.noOfPeople} people</p>
              </div>

              {/* special request */}
              <div className="flex items-center w-full mt-2">
                <p>Special Request: {tour.specialRequest}</p>
              </div>

            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default BookedTours;
