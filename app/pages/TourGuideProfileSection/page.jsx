"use client";

import React, { useState, useEffect } from "react";
import { FaUser, FaEnvelope, FaUnlockAlt, FaCamera, FaSignOutAlt } from "react-icons/fa";
import { toast } from "react-toastify";
import axios from "axios";
import Image from "next/image";

const TourGuideProfileSection = () => {
    const [profile, setProfile] = useState({
        username: "John",
        email: "john.doe@example.com",
        password: "password123",
        location: "New York, USA",
        profileType: "traveler",
        profilePicture: "/user-1.jpg",
    });

    const handleProfilePictureChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            setProfile({
                ...profile,
                profilePicture: reader.result,
            });
        };

        reader.readAsDataURL(file);
    };

    useEffect(() => {
        const email = localStorage.getItem("email");
        axios
            .get(`http://localhost:3001/guides/${email}`)
            .then((res) => {
                setProfile(res.data.user);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const handleUpdateProfile = () => {
        const email = localStorage.getItem("email");
        axios
            .put(`http://localhost:3001/guides/${email}`, profile)
            .then((res) => {
                toast.success("Profile updated successfully");
            })
            .catch((err) => {
                toast.error("Failed to update profile");
            });
    };

    return (
        <div className="flex flex-col gap-4 px-4 md:px-8"> {/* Adjusted padding for smaller screens */}
            <FaSignOutAlt
                className="text-blue-500 text-2xl cursor-pointer absolute top-6 right-8 hover:text-blue-600"
                onClick={() => {
                    localStorage.removeItem("email");
                    window.location.href = "/";
                }}
            />
            <Image
                src={profile.profilePicture}
                alt="Profile Picture"
                width={100}
                height={100}
                className="rounded-full mx-auto"
            />
            <div className="flex items-center mb-4">
                <FaUser className="text-gray-400 mr-2" />
                <input
                    type="text"
                    placeholder="Username"
                    value={profile.username}
                    onChange={(e) =>
                        setProfile({ ...profile, username: e.target.value })
                    }
                    className="focus:outline-none flex-grow p-3 border-b-2 border-transparent"
                />
            </div>
            <div className="flex items-center mb-4">
                <FaEnvelope className="text-gray-400 mr-2" />
                <input
                    type="email"
                    placeholder="Email"
                    value={profile.email}
                    onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                    className="focus:outline-none flex-grow p-3 border-b-2 border-transparent"
                />
            </div>
            <div className="flex items-center mb-4">
                <FaUnlockAlt className="text-gray-400 mr-2" />
                <input
                    type="password"
                    placeholder="Password"
                    value={profile.password}
                    onChange={(e) => setProfile({ ...profile, password: e.target.value })}
                    className="focus:outline-none flex-grow p-3 border-b-2 border-transparent"
                />
            </div>
            <div className="flex items-center mb-4">
                <FaUser className="text-gray-400 mr-2" />
                <input
                    type="text"
                    placeholder="Location"
                    value={profile.location}
                    onChange={(e) => setProfile({ ...profile, location: e.target.value })}
                    className="focus:outline-none flex-grow p-3 border-b-2 border-transparent"
                />
            </div>
            <div className="flex items-center mb-4">
                <FaUser className="text-gray-400 mr-2" />
                <select
                    value={profile.profileType}
                    onChange={(e) => setProfile({ ...profile, profileType: e.target.value })}
                    className="focus:outline-none flex-grow p-3 border-b-2 border-transparent"
                >
                    <option value="traveler">Traveler</option>
                    <option value="tourGuide">Tour Guide</option>
                </select>
            </div>
            <div className="flex items-center mb-4">
                <FaCamera className="text-gray-400 mr-2" />
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleProfilePictureChange}
                    className="focus:outline-none"
                />
            </div>
            <button
                onClick={handleUpdateProfile}
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            >
                Update Profile
            </button>
        </div>
    );
};

export default TourGuideProfileSection;
