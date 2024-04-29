"use client";
import Image from "next/image";
import { FaCalendarAlt, FaUsers, FaMapMarkerAlt, FaSignOutAlt } from "react-icons/fa";
import axios from "axios";
import { useEffect, useState } from "react";

const GuideBookedTours = () => {
    const [bookedTours, setBookedTours] = useState([]);

    useEffect(() => {
        const email = localStorage.getItem("email");
        axios
            .get(`http://localhost:3001/tours/${email}`)
            .then((res) => {
                setBookedTours(res.data.tours);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div className="flex flex-col items-center justify-center w-full h-full px-4 md:px-8">
            <FaSignOutAlt
                className="text-blue-500 text-2xl cursor-pointer absolute top-6 right-8 hover:text-blue-600"
                onClick={() => {
                    localStorage.removeItem("email");
                    window.location.href = "/";
                }}
            />
            <div className="grid grid-cols-1 gap-4 mt-10 w-full">
                {bookedTours.map((tour, index) => (
                    <div key={index} className="bg-white p-4 rounded-md shadow-lg mb-4">
                        <div className="flex flex-col gap-2 mb-4">
                            <div className="flex items-center gap-2">
                                <FaMapMarkerAlt className="text-blue-500" />
                                <label className="text-lg">Destination:</label>
                            </div>
                            <p>{tour.destination}</p>
                        </div>
                        <div className="flex flex-col gap-2 mb-4">
                            <div className="flex items-center gap-2">
                                <FaCalendarAlt className="text-blue-500" />
                                <label className="text-lg">Date:</label>
                            </div>
                            <p>{tour.date}</p>
                        </div>
                        <div className="flex flex-col gap-2 mb-4">
                            <div className="flex items-center gap-2">
                                <FaUsers className="text-blue-500" />
                                <label className="text-lg">Number of people:</label>
                            </div>
                            <p>{tour.noOfPeople}</p>
                        </div>
                        <div className="flex flex-col gap-2 mb-4">
                            <div className="flex items-center gap-2">
                                <FaUsers className="text-blue-500" />
                                <label className="text-lg">Tour guide:</label>
                            </div>
                            <div className="flex items-center gap-2">
                                <p>{tour.guide}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GuideBookedTours;
