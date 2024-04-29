import React from "react";
import Image from "next/image";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaDribbble } from "react-icons/fa";
import { MdContactPhone, MdEmail, MdLocationOn } from "react-icons/md";
import { GoArrowRight } from "react-icons/go";

const Footer = () => {
  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center">
        {/* Left Section */}
        <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-8 sm:flex-1 mb-8 sm:mb-0">
          {/* Logo and Description */}
          <div className="text-center sm:text-left">
            <Image src="/logo.png" alt="Logo" width={150} height={150} />
            <p className="text-lg text-gray-700 mt-4">
              Welcome to Tourpalz, your one-stop-shop for adventure, culture, and unforgettable experiences!
            </p>
          </div>
          {/* Social Links */}
          <div className="flex gap-3">
            <FaFacebookF className="text-3xl text-blue-500 cursor-pointer hover:text-white hover:bg-blue-600 rounded-full p-1" />
            <FaTwitter className="text-3xl text-blue-500 cursor-pointer hover:text-white hover:bg-blue-600 rounded-full p-1" />
            <FaInstagram className="text-3xl text-blue-500 cursor-pointer hover:text-white hover:bg-blue-600 rounded-full p-1" />
            <FaLinkedinIn className="text-3xl text-blue-500 cursor-pointer hover:text-white hover:bg-blue-600 rounded-full p-1" />
            <FaDribbble className="text-3xl text-blue-500 cursor-pointer hover:text-white hover:bg-blue-600 rounded-full p-1" />
          </div>
        </div>
        {/* Right Section */}
        <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-end gap-8 sm:flex-1">
          {/* Contact Info */}
          <div className="flex flex-col gap-6">
            <h1 className="text-2xl font-semibold text-gray-700">Contact</h1>
            <div className="flex items-center gap-4 text-gray-500">
              <MdContactPhone className="text-2xl text-blue-500" />
              <p>+1 123 456 7890</p>
            </div>
            <div className="flex items-center gap-4 text-gray-500">
              <MdEmail className="text-2xl text-green-600" />
              <p>example@gmail.com</p>
            </div>
            <div className="flex items-center gap-4 text-gray-500">
              <MdLocationOn className="text-2xl text-yellow-600" />
              <p>123, Main Street, New York</p>
            </div>
          </div>
          {/* Newsletter */}
          <div className="flex flex-col gap-4">
            <h1 className="text-2xl font-semibold text-gray-700">Newsletter</h1>
            <p className="text-gray-500">Subscribe our newsletter to get our latest updates & news</p>
            <div className="flex gap-2 bg-gray-200 rounded-full p-2 items-center">
              <input
                type="text"
                placeholder="Email address"
                className="border border-yellow-600 p-2 w-60 rounded-full focus:outline-none focus:border-yellow-500 transition duration-200 ease-in-out"
              />
              <button className="bg-white border border-yellow-600 text-yellow-600 p-2 rounded-full">
                <GoArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Footer Bottom */}
      <hr className="my-8 border border-gray-700" />
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="text-sm text-gray-700">
          &copy; 2023 <span className="text-blue-500 cursor-pointer hover:text-blue-700 transition duration-200 ease-in-out">Tourpalz</span> . All rights reserved.
        </div>
        <div className="text-sm text-blue-500 cursor-pointer hover:text-gray-700 transition duration-200 ease-in-out">
          <ul className="flex gap-4">
            <li className="border-b-2 border-transparent hover:border-blue-500 transition duration-200 ease-in-out">Sign In</li>
            <li className="border-b-2 border-transparent hover:border-blue-500 transition duration-200 ease-in-out">Sign Up</li>
            <li className="border-b-2 border-transparent hover:border-blue-500 transition duration-200 ease-in-out">FAQ</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
