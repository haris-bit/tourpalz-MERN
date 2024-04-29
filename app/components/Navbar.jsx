"use client";

import Image from "next/image";
import Link from "next/link";
import Profile from "./Profile";
import { MdOutlineNotificationsNone } from "react-icons/md";
import { MdMenu } from "react-icons/md";
import { useState, useEffect } from "react";
import axios from "axios";
import { FaSignOutAlt } from "react-icons/fa";
import GoogleTranslate from "./google-translator";


const Navbar = () => {
  const [showProfile, setShowProfile] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [user, setUser] = useState({});
  const [username, setUsername] = useState("");
  const [profilePicture, setProfilePicture] = useState("");
  const [profileType, setProfileType] = useState("");
  const [showTranslateDropdown, setShowTranslateDropdown] = useState(false);


  // Get the email from localStorage on the client-side
  useEffect(() => {
    const email = localStorage.getItem("email");
    const profileType = localStorage.getItem("profileType");
    setProfileType(profileType);
    if (email) {
      axios
        .get(`http://localhost:3001/users/${email}`)
        .then((res) => {
          console.log(res.data);
          setUser(res.data);
          // print username
          console.log(res.data.user.username);
          setUsername(res.data.user.username);
          // print profile picture
          console.log(res.data.user.profilePicture);
          setProfilePicture(res.data.user.profilePicture);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);
  

  return (
    <>
      {/* Navbar for large devices  */}
      <div
        className="hidden md:flex md:justify-between md:items-center p-4 shadow-md
            w-full fixed top-0 z-[100]
            py-4 px-32
            bg-white
          "
      >
        {/* div for logo and navbar links */}
        <div className="flex justify-between items-center gap-4">
          <div>
            <h1>
              <Image src="/logo.png" alt="TourPalz" width={170} height={170} />
            </h1>
          </div>
          <div className="flex justify-around items-center">
            <ul
              className="flex justify-around items-center gap-5 
            text-gray-600 text-md
          "
            >
              <li className="cursor-pointer hover:text-blue-500 transition duration-200 ease-in-out">
                <Link href={"/home"}>Home</Link>
              </li>
              <li className="cursor-pointer hover:text-blue-500 transition duration-200 ease-in-out">
                <Link href={"/buddies"}>Palz</Link>
              </li>
              <li className="cursor-pointer hover:text-blue-500 transition duration-200 ease-in-out">
                <Link href={"/services"}>Services</Link>
              </li>
              <li className="cursor-pointer hover:text-blue-500 transition duration-200 ease-in-out">
                <Link href={"/about"}>About Us</Link>
              </li>
              <li className="cursor-pointer hover:text-blue-500 transition duration-200 ease-in-out">
                <Link href={"/contact"}>Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Div for notification and profile */}
        <div className="flex justify-around items-center gap-4">
          <div
          className="flex gap-4 justify-center items-center relative"
          >
            {
              profileType === "tourGuide" ? (
                <Link href={"/TourGuideProfile"}>
                  <button
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  >
                    View Profile
                  </button>
                </Link>
              ) : (
                <Link href={"/TravelerProfile"}>
                  <button
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  >
                    View Profile
                  </button>
                </Link>
              )
            }
            <Image
              src={profilePicture}
              alt={"Profile"}
              width={40}
              height={20}
              className="rounded-full
              object-fit 
              w-12 h-12
              "
            />
            <FaSignOutAlt
              className="text-2xl cursor-pointer
                font-normal
                text-blue-500 transition duration-200 ease-in-out
                absolute top-2 right-[-56px]
              "
              onClick={() => {
                localStorage.removeItem("email");
                localStorage.removeItem("profileType");
                window.location.href = "/";
              }}
            />
          </div>
        </div>
        <div className="relative">
          <button
            onClick={() => setShowTranslateDropdown(!showTranslateDropdown)}
            className="flex items-center gap-2 cursor-pointer"
          >
            <span>Translate</span>
            {/* Add an icon or any other visual indicator */}
          </button>

          {showTranslateDropdown && (
            <div className="absolute right-0 mt-2 bg-white shadow-md rounded-md p-2">
              <GoogleTranslate />
            </div>
          )}
        </div>
      </div>

      {/* Navbar for small devices */}
      <div className="md:hidden flex justify-between items-center p-4 shadow-md">
        {/* Div for Profile and Navbar Menu */}
        <div className="flex justify-between items-center gap-4">
          <span className="flex gap-4">
            <Image
              src={profilePicture}
              alt="Profile"
              width={30}
              height={30}
              className="rounded-full cursor-pointer"
              onClick={() => setShowProfile(!showProfile)}
            />
          </span>

          <span>
            <Link href={"/TravelerProfile"}>
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                View Profile
              </button>
            </Link>
          </span>
        </div>
        <div>
          <MdMenu
            className="text-xl cursor-pointer text-blue-500
                    bg-blue-100 w-6 h-6 rounded-md 
                      "
            onClick={() => setShowMobileMenu(!showMobileMenu)}
          />
          {showMobileMenu && (
            <div
              className="md:hidden absolute top-16 left-0 w-full
                        shadow-xl z-50 border-gray-700 rounded-b-lg
                        bg-white
                    "
            >
              <div className="px-8">
                <Image
                  src={"/favicon.jpeg"}
                  alt={"TourPalz"}
                  width={40}
                  height={40}
                  className="mt-4"
                />
              </div>
              <ul className="flex flex-col items-start px-8 gap-8 py-4">
                <Link
                  href={"/home"}
                  className="text-lg cursor-pointer hover:text-blue-500 ">
                  Home
                  <hr className="w-[34rem]" />
                </Link>

                <Link
                  href={"/buddies"}
                  className="text-lg cursor-pointer hover:text-blue-500 ">
                  Buddies
                  <hr className="w-[34rem]" />
                </Link>


                <Link
                  href={"/services"}
                  className="text-lg cursor-pointer hover:text-blue-500 ">
                  Services
                  <hr className="w-[34rem]" />
                </Link>
                <Link
                  href={"/about"}
                  className="text-lg cursor-pointer hover:text-blue-500 ">
                  About Us
                  <hr className="w-[34rem]" />
                </Link>
                <Link
                  href={"/contact"}
                  className="text-lg cursor-pointer hover:text-blue-500 ">
                  Contact
                  <hr className="w-[34rem]" />
                </Link>
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
