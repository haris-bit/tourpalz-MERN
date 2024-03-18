"use client";
import React from "react";
import { FaUser, FaEnvelope, FaUnlockAlt, FaCamera } from "react-icons/fa";
import { useState,useEffect } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import Image from "next/image";

const TravelerProfileSection = () => {
  // get email from local storage
  const email = localStorage.getItem("email");
  console.log(email);
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

  const handleUpdateProfile = () => {
    // Logic to update profile
    toast.success("Profile updated successfully");
  };

  useEffect(() => {
    axios
      .get(`http://localhost:3001/users/${email}`)
      .then((res) => {
        console.log(res.data);
        setProfile(res.data.user);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  , []);


  return (
    <div className="flex flex-col gap-4 px-80">
      <Image
        src={profile.profilePicture}
        alt="Profile Picture"
        width={100}
        height={100}
        className="rounded-full mx-auto "
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
          className="focus:outline-none flex-grow p-3
                    hover:border-blue-500 border-b-2 border-transparent
                  "
        />
      </div>
      <div className="flex items-center mb-4">
        <FaEnvelope className="text-gray-400 mr-2" />
        <input
          type="email"
          placeholder="Email"
          value={profile.email}
          onChange={(e) => setProfile({ ...profile, email: e.target.value })}
          className="focus:outline-none flex-grow p-3
                    hover:border-blue-500 border-b-2 border-transparent
                  "
        />
      </div>
      <div className="flex items-center mb-4">
        <FaUnlockAlt className="text-gray-400 mr-2" />
        <input
          type="password"
          placeholder="Password"
          value={profile.password}
          onChange={(e) => setProfile({ ...profile, password: e.target.value })}
          className="focus:outline-none flex-grow p-3
                    hover:border-blue-500 border-b-2 border-transparent
                  "
        />
      </div>


      {/* Location */}
      <div className="flex items-center mb-4">
        <FaUser className="text-gray-400 mr-2" />
        <input
          type="text"
          placeholder="Location"
          value={profile.location}
          onChange={(e) =>
            setProfile({ ...profile, location: e.target.value })
          }
          className="focus:outline-none flex-grow p-3
                    hover:border-blue-500 border-b-2 border-transparent
                  "
        />
      </div>

      {/* Profile Type as select. By default select the profile type stored in the backend */}
      <div className="flex items-center mb-4">
        <FaUser className="text-gray-400 mr-2" />
        <select
          value={profile.profileType}
          onChange={(e) =>
            setProfile({ ...profile, profileType: e.target.value })
          }
          className="focus:outline-none flex-grow p-3
                    hover:border-blue-500 border-b-2 border-transparent
                  "
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
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline
              w-1/8 mx-auto
            "
      >
        Update Profile
      </button>
    </div>
  );
};

export default TravelerProfileSection;
