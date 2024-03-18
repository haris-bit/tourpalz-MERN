import React from "react";
import Navbar from "../components/Navbar";
import Image from "next/image";
// import icons for name, email and message from react-icons
import { FaUser, FaEnvelope, FaRegCommentDots } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className="flex flex-col w-full h-full">
      <Navbar />
      {/* Contact Us Div */}
      <div
        className="contact flex w-full h-screen items-center bg-gray-100 pt-12 px-32 gap-20
      "
      >
        {/* div for image */}
        <div className="flex-1 flex flex-col items-start justify-center gap-2 ">
          <h1 className="text-4xl font-bold text-blue-400">Contact Us</h1>
          <p className="text-gray-500">We are here to help you</p>
          <Image
            src="/contact1.jpg"
            alt="Contact"
            width={600}
            height={400}
            className="rounded-xl shadow-lg"
          />
        </div>
        {/* div for form */}
        <div className="flex-2 flex flex-col items-center justify-center bg-white shadow-lg rounded-xl px-12 pb-12 mt-12">
          <h1 className="text-2xl font-bold text-blue-400 mt-4 ">
            Get in touch
          </h1>
          <span className="rounded-md mx-4 p-4 flex items-center justify-between border-2 border-gray-200 p-2 mt-4">
            <FaUser className="text-blue-500" />
            <input
              type="text"
              placeholder="Name"
              className="w-11/12 outline-none border-b-2 border-gray-200 p-2
              focus:border-blue-300 bg-transparent
                          "
            />
          </span>
          <span className="rounded-md mx-4 p-4 flex items-center justify-between border-2 border-gray-200 p-2 mt-4">
            <FaEnvelope className="text-blue-500" />
            <input
              type="email"
              placeholder="Email"
              className="w-11/12 outline-none border-b-2 border-gray-200 p-2
              focus:border-blue-300 bg-transparent
                          "
            />
          </span>
          <span className="rounded-md mx-4 p-4 flex items-center justify-between border-2 border-gray-200 p-2 mt-4">
            <FaRegCommentDots className="text-blue-500" />
            <textarea
              type="text"
              placeholder="Message"
              className="w-11/12 outline-none border-b-2 border-gray-200 p-2
                      focus:border-blue-300 bg-transparent
                          "
            />
          </span>
          <button
            className="w-11/12 border-2 border-blue-400 text-blue-400 rounded-xl p-2 mt-4
                    hover:bg-blue-400 hover:text-white transition duration-300 ease-in-out
          "
          >
            Send a message
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
