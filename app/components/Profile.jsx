import React from "react";
import Image from "next/image";
// import icon for my account, bookings and wishlist from react-icons
import { FaRegUser } from "react-icons/fa6";
import { BsCalendar2Check } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa6";
import { BiHelpCircle } from "react-icons/bi";
import { IoIosLogOut } from "react-icons/io";

const Profile = () => {
  return (
    <div
      className="flex flex-col gap-4
    bg-white rounded-md p-4 fixed top-[4.5rem] right-32 z-10
    w-60
    h-80
    border border-gray-200
    "
    >
      {/* div for imageand name & location */}
      <div className="flex justify-around items-center gap-4">
        <div>
          <Image
            src="/user-1.jpg"
            alt="profile"
            width={50}
            height={50}
            className="rounded-full"
          />
        </div>
        <div className="text-left text-md">
          <h1 className="text-gray-700 font-semibold text-lg">Peter Parker</h1>
          <p className="text-gray-700 font-normal text-sm">Los Angeles, CA</p>
        </div>
      </div>
      <div className="border-b border-dotted border-gray-700 w-full h-0.5"></div>

      {/* div for my account, bookings and wishlist */}
      <div className="flex flex-col justify-around items-start gap-2">
        <span
          className="flex justify-around items-center gap-4 cursor-pointer
                    hover:text-gray-500 transition duration-200 ease-in-out
                    hover:bg-gray-100 rounded-full px-4 py-1
                  "
        >
          <FaRegUser className="text-center text-xl text-gray-500" />
          <h2 className="text-gray-700 font-normal text-sm">My Account</h2>
        </span>
        <span
          className="flex justify-around items-center gap-4 cursor-pointer
                    hover:text-gray-500 transition duration-200 ease-in-out
                    hover:bg-gray-100 rounded-full px-4 py-1
                  "
        >
          <BsCalendar2Check className="text-center text-xl text-gray-500 cursor-pointer" />
          <h2 className="text-left text-gray-700 font-normal text-sm">
            My Bookings
          </h2>
        </span>
        <span
          className="flex justify-around items-center gap-4 cursor-pointer
                    hover:text-gray-500 transition duration-200 ease-in-out
                    hover:bg-gray-100 rounded-full px-4 py-1
                  "
        >
          <FaRegHeart className="text-left text-xl text-gray-500 cursor-pointer" />
          <h2 className="text-gray-700 font-normal text-sm">My Wishlist</h2>
        </span>
      </div>
      <div className="border-b border-dotted border-gray-700 w-full h-0.5"></div>

      {/* div for help and logout */}
      <div className="flex flex-col justify-center items-start gap-2">
        <span
          className="flex justify-around items-center gap-4 cursor-pointer
                    hover:text-gray-500 transition duration-200 ease-in-out
                    hover:bg-gray-100 rounded-full px-4 py-1
                  "
        >
          <BiHelpCircle className="text-center text-xl text-gray-500" />
          <h2 className="text-gray-700 font-normal text-sm">Help</h2>
        </span>

        <span
          className="flex justify-around items-center gap-4 cursor-pointer
                    hover:text-gray-500 transition duration-200 ease-in-out
                    hover:bg-gray-100 rounded-full px-4 py-1
                  "
        >
          <IoIosLogOut className="text-center text-xl text-gray-500" />
          <h2 className="text-gray-700 font-normal text-sm">Log out</h2>
        </span>
      </div>
    </div>
  );
};

export default Profile;
