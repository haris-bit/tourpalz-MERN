import React from "react";
import Image from "next/image";
// import social icons for facebook, twitter, instagram, linkedin and dribble
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
// import icons for contact, email and location
import { MdContactPhone } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
import { GoArrowRight } from "react-icons/go";
import { BiRightArrow } from "react-icons/bi";

const Footer = () => {
  return (
    <div
      className="w-full h-[32rem] bg-gray-50 flex flex-col justify-center items-center
      px-32
      "
    >
      <div className="flex">
        <div className="flex-1 left-div flex gap-4">
          <div className="flex flex-col div-for-social-links">
            <Image src="/logo.png" alt="facebook" width={300} height={300} />
            <p className="text-lg text-gray-700 mt-4">
              Welcome to Tourpalz, your one- <br /> stop-shop for adventure,
              culture,
              <br /> and unforgettable experiences!
            </p>
            {/* Social links icons */}
            <div className="flex gap-3 mt-4">
              <FaFacebookF className="text-3xl text-blue-500 cursor-pointer border border-blue-500 p-1 rounded-full hover:text-white hover:bg-blue-600 " />
              <FaTwitter className="text-3xl text-blue-500 cursor-pointer border border-blue-500 p-1 rounded-full hover:text-white hover:bg-blue-600 " />
              <FaInstagram className="text-3xl text-blue-500 cursor-pointer border border-blue-500 p-1 rounded-full hover:text-white hover:bg-blue-600 " />
              <FaLinkedinIn className="text-3xl text-blue-500 cursor-pointer border border-blue-500 p-1 rounded-full hover:text-white hover:bg-blue-600 " />
              <FaDribbble className="text-3xl text-blue-500 cursor-pointer border border-blue-500 p-1 rounded-full hover:text-white hover:bg-blue-600 " />
            </div>
          </div>
          <div className="flex-1 flex flex-col div-for-quick-links">
            <h1 className="text-2xl font-semibold text-gray-700 mt-4">
              Quick Links
            </h1>
            <ul className="flex flex-col gap-2 text-blue-500 mt-4">
              <li>About Us</li>
              <li>Properties</li>
              <li>Agents</li>
              <li>FAQs</li>
              <li>Blog</li>
            </ul>
          </div>
        </div>

        <div className="right-div flex-1 flex gap-12">
          <div className="div-for-contact flex-1 flex flex-col gap-6">
            <h1 className="text-2xl font-semibold text-gray-700">Contact</h1>
            <div className="flex gap-4 items-center text-gray-500">
              <MdContactPhone className="text-2xl text-blue-500" />
              <p>+1 123 456 7890</p>
            </div>
            <div className="flex gap-4 items-center text-gray-500">
              <MdEmail className="text-2xl text-green-600" />
              <p>example@gmail.com</p>
            </div>
            <div className="flex gap-4 items-center text-gray-500">
              <MdLocationOn className="text-2xl text-yellow-600" />
              <p>123, Main Street, New York</p>
            </div>
          </div>
          <div className="div-for-newsletter">
            <h1 className="text-2xl font-semibold text-gray-700">Newsletter</h1>
            <p className="text-gray-500 mt-4">
              Subscribe our newsletter to get our latest update & news
            </p>
            <div
              className="flex gap-2 mt-4
            bg-gray-200 rounded-full p-4 w-80 items-center
          "
            >
              <input
                type="text"
                placeholder="Email address"
                className="border border-yellow-600 p-4 w-60 rounded-full 
                focus:outline-none focus:border-yellow-500 transition duration-200 ease-in-out    
                          "
              />
              <button className="bg-white border border-yellow-600 text-yellow-600 p-4 rounded-md">
                <GoArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
      <hr className="w-full mt-32 border border-gray-700 px-32" />
      <div className="flex w-full h-20 justify-between items-center">
        <div className="left">
          Copyright © 2023{" "}
          <span className="text-blue-500 cursor-pointer hover:text-blue-700 transition duration-200 ease-in-out">
            Tourpalz
          </span>{" "}
          .
        </div>
        <div className="right">
          <ul className="flex gap-4 text-blue-500 cursor-pointer hover:text-gray-700 transition duration-200 ease-in-out">
            <li className="border-b-2 border-transparent hover:border-blue-500 transition duration-200 ease-in-out">
              Sign In
            </li>
            <li className="border-b-2 border-transparent hover:border-blue-500 transition duration-200 ease-in-out">
              Sign Up
            </li>
            <li className="border-b-2 border-transparent hover:border-blue-500 transition duration-200 ease-in-out">
              FAQ
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
