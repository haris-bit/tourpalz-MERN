import React from "react";
import Navbar from "../components/Navbar";
import Image from "next/image";
import { FaUser, FaEnvelope, FaRegCommentDots } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className="flex flex-col w-full h-full">
      <Navbar />
      {/* Contact Us Div */}
      <div className="contact flex flex-col sm:flex-row w-full h-screen items-center bg-gray-100 pt-8 px-4 sm:px-8 md:px-16 gap-8">
        {/* div for image */}
        <div className="w-full sm:w-1/2 flex flex-col items-center justify-center gap-4">
          <h1 className="text-4xl font-bold text-blue-400 text-center">Contact Us</h1>
          <p className="text-gray-500 text-center">We are here to help you</p>
          <div className="w-full max-w-sm mx-auto">
            <Image
              src="/contact1.jpg"
              alt="Contact"
              width={600}
              height={400}
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>
        {/* div for form */}
        <div className="w-full sm:w-1/2 flex flex-col items-center justify-center bg-white shadow-lg rounded-xl p-6 mt-8 sm:mt-0">
          <h1 className="text-2xl font-bold text-blue-400 mt-4 text-center">
            Get in touch
          </h1>
          <form className="w-full max-w-sm">
            <div className="mb-4">
              <div className="relative">
                <FaUser className="absolute top-3 left-3 text-blue-500" />
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:border-blue-400"
                />
              </div>
            </div>
            <div className="mb-4">
              <div className="relative">
                <FaEnvelope className="absolute top-3 left-3 text-blue-500" />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:border-blue-400"
                />
              </div>
            </div>
            <div className="mb-4">
              <div className="relative">
                <FaRegCommentDots className="absolute top-3 left-3 text-blue-500" />
                <textarea
                  placeholder="Message"
                  className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:border-blue-400 resize-none"
                ></textarea>
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-400 text-white rounded-xl py-2 hover:bg-blue-500 transition duration-300 ease-in-out"
            >
              Send a message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
