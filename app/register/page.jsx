"use client";

import React from "react";
import { FaUser, FaEnvelope, FaLock, FaMapMarkerAlt } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
// import eye and eye-slash icons from react-icons
import { HiEye, HiEyeOff } from "react-icons/hi";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");
  const [location, setLocation] = useState("");
  const [profileType, setProfileType] = useState("");
  const [profilePicture, setProfilePicture] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const router = useRouter();

  // show password when the eye icon is clicked
  useEffect(() => {
    if (showPassword) {
      document.getElementById("password").type = "text";
    } else {
      document.getElementById("password").type = "password";
    }
  }, [showPassword]);

  // show confirm password when the eye icon is clicked
  useEffect(() => {
    if (showConfirmPassword) {
      document.getElementById("cpassword").type = "text";
    } else {
      document.getElementById("cpassword").type = "password";
    }
  }, [showConfirmPassword]);

  const handleRegisterUser = () => {
    if (username === "" || email === "" || password === "" || cpassword === "" || location === "" || profileType === "" || profilePicture === null) {
      toast.error("Please fill all the fields");
      return;
    }

    if (password !== cpassword) {
      toast.error("Password and Confirm Password do not match");
      return;
    }

    const formData = new FormData();
    formData.append("username", username);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("location", location);
    formData.append("profileType", profileType);
    formData.append("profilePicture", profilePicture);
    console.log(formData);

    axios.post("http://localhost:3001/register", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      }
    })
      .then((response) => {
        console.log(response.data);
        toast.success("User registered successfully");
        router.push("/");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const handleProfilePictureChange = (e) => {
    setProfilePicture(e.target.files[0]);
  }

  return (
    <div className="flex flex-col w-full h-full">
      {/* Register Div */}
      <div className="register flex flex-col items-center justify-center bg-gray-100 py-12 px-32">
        {/* Registration Form */}
        <div className="w-full max-w-xl bg-white shadow-md rounded-lg px-8 py-6">
          <Image
            src="/logo.png"
            alt="logo"
            width={200}
            height={200}
            className="mx-auto py-4 "
          />
          {/* Traveler Registration */}
          <div className="mb-6">
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                  Username
                </label>
                <div className="flex items-center border-b border-blue-500 py-2">
                  <FaUser className="text-blue-500 mr-2" />
                  <input
                    className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                    type="text"
                    placeholder="Username"
                    id="username"
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <div className="flex items-center border-b border-blue-500 py-2">
                  <FaEnvelope className="text-blue-500 mr-2" />
                  <input
                    className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                    type="email"
                    placeholder="Email"
                    id="email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                  Password
                </label>
                <div className="flex items-center border-b border-blue-500 py-2">
                  <FaLock className="text-blue-500 mr-2" />
                  <input
                    className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                    type="password"
                    placeholder="Password"
                    id="password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  {
                    showPassword ? (
                      <HiEyeOff
                        className="text-blue-500 cursor-pointer"
                        onClick={() => setShowPassword(!showPassword)}
                      />
                    ) : (
                      <HiEye
                        className="text-blue-500 cursor-pointer"
                        onClick={() => setShowPassword(!showPassword)}
                      />
                    )
                  }
                </div>
              </div>

              {/* Confirm Password */}
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                  Confirm Password
                </label>
                <div className="flex items-center border-b border-blue-500 py-2">
                  <FaLock className="text-blue-500 mr-2" />
                  <input
                    className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                    type="password"
                    placeholder="Confirm Password"
                    id="cpassword"
                    onChange={(e) => setCPassword(e.target.value)}
                  />
                  {
                    showConfirmPassword ? (
                      <HiEyeOff
                        className="text-blue-500 cursor-pointer"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      />
                    ) : (
                      <HiEye
                        className="text-blue-500 cursor-pointer"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      />
                    )
                  }
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="location">
                  Location
                </label>
                <div className="flex items-center border-b border-blue-500 py-2">
                  <FaMapMarkerAlt className="text-blue-500 mr-2" />
                  <input
                    className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                    type="text"
                    placeholder="Location"
                    id="location"
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </div>
              </div>


              {/* create select options for both travelers profile or tour guide profile */}
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="profileType">
                  Profile Type
                </label>
                <div className="flex items-center border-b border-blue-500 py-2">
                  <select
                    className="bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                    id="profileType"
                    onChange={(e) => setProfileType(e.target.value)}
                  >

                    <option value="select">Select</option>
                    <option value="traveler">Traveler</option>
                    <option value="tourGuide">Tour Guide</option>
                  </select>
                </div>
              </div>


              {/* Upload profile picture */}
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="profilePicture">
                  Profile Picture
                </label>
                <div className="flex items-center border-b border-blue-500 py-2">
                  <input
                    className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                    type="file"
                    id="profilePicture"
                    onChange={handleProfilePictureChange}
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                  onClick={handleRegisterUser}
                >
                  Register
                </button>
                <Link href="/"
                  className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                >
                    Already have an account?
                </Link>
              </div>
              
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
