"use client";

import React, { useState, useEffect } from "react";
import { FaUser, FaEnvelope, FaUnlockAlt, FaCamera } from "react-icons/fa";
import { toast } from "react-toastify";
import axios from "axios";
import Image from "next/image";

const TravelerProfileSection = () => {
  const [profile, setProfile] = useState({
    username: "John",
    email: "john.doe@example.com",
    password: "password123",
    location: "New York, USA",
    profileType: "traveler",
    profilePicture: "/default-profile-picture.jpg",
  });

  const handleProfilePictureChange = (e) => {
    // Logic to change profile picture
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
    // get email from local storage
    const email = localStorage.getItem("email");
    if (email) {
      axios
        .get(`http://localhost:3001/users/${email}`)
        .then((res) => {
          setProfile(res.data.user);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  const handleUpdateProfile = () => {
    // Logic to update profile
    const email = localStorage.getItem("email");
    axios
      .put(`http://localhost:3001/users/${email}`, profile)
      .then((res) => {
        toast.success("Profile updated successfully");
      })
      .catch((err) => {
        toast.error("Failed to update profile");
      });
  };

  return (
    <div className="flex flex-col gap-4 px-4 md:px-8 lg:px-12 xl:px-20">
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
          onChange={(e) => setProfile({ ...profile, username: e.target.value })}
          className="focus:outline-none flex-grow p-3 hover:border-blue-500 border-b-2 border-transparent"
        />
      </div>
      <div className="flex items-center mb-4">
        <FaEnvelope className="text-gray-400 mr-2" />
        <input
          type="email"
          placeholder="Email"
          value={profile.email}
          onChange={(e) => setProfile({ ...profile, email: e.target.value })}
          className="focus:outline-none flex-grow p-3 hover:border-blue-500 border-b-2 border-transparent"
        />
      </div>
      <div className="flex items-center mb-4">
        <FaUnlockAlt className="text-gray-400 mr-2" />
        <input
          type="password"
          placeholder="Password"
          value={profile.password}
          onChange={(e) => setProfile({ ...profile, password: e.target.value })}
          className="focus:outline-none flex-grow p-3 hover:border-blue-500 border-b-2 border-transparent"
        />
      </div>
      <div className="flex items-center mb-4">
        <FaUser className="text-gray-400 mr-2" />
        <input
          type="text"
          placeholder="Location"
          value={profile.location}
          onChange={(e) => setProfile({ ...profile, location: e.target.value })}
          className="focus:outline-none flex-grow p-3 hover:border-blue-500 border-b-2 border-transparent"
        />
      </div>
      <div className="flex items-center mb-4">
        <FaUser className="text-gray-400 mr-2" />
        <select
          value={profile.profileType}
          onChange={(e) => setProfile({ ...profile, profileType: e.target.value })}
          className="focus:outline-none flex-grow p-3 hover:border-blue-500 border-b-2 border-transparent"
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
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mx-auto"
      >
        Update Profile
      </button>
    </div>
  );
};

export default TravelerProfileSection;
