import React from "react";
import { GoArrowRight } from "react-icons/go";
import Image from "next/image";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { MdStarHalf } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";

const Testimonial = () => {
  return (
    <section className="flex flex-col w-full h-full bg-white pt-20 pb-24 px-32">
      <span
        className="flex items-center gap-4
                bg-blue-50 p-2 rounded-full w-max
            "
      >
        <GoArrowRight className="text-xl bg-blue-500 text-white rounded-full w-8 h-8 p-1 " />
        <p className="text-xl font-semibold text-blue-600">Testimonial</p>
      </span>
      <h1 className="text-4xl font-bold mt-6 text-wrap text-gray-700">
        Our Satisfied Customers <br /> Says
      </h1>

      {/* Div for two testomonial cards */}
      <div className="flex w-full h-full mt-4 gap-8 items-start pt-4 pb-20">
        <div className="card1 flex-1 border border-gray-400 h-[22rem] rounded-xl pl-16 pr-4 pt-8">
          <span className="flex items-center gap-2">
            <MdOutlineStarPurple500 className="text-3xl text-yellow-500" />
            <MdOutlineStarPurple500 className="text-3xl text-yellow-500" />
            <MdOutlineStarPurple500 className="text-3xl text-yellow-500" />
            <MdOutlineStarPurple500 className="text-3xl text-yellow-500" />
            <MdStarHalf className="text-3xl text-yellow-500" />
          </span>
          <p className="text-xl text-gray-700 mt-4">
            I had the best experience with Travel. It was my first time to
            travel and I was a little nervous but the guide was so friendly and
            helpful. I would definitely recommend it to everyone.
          </p>
          <hr className="w-3/4 mt-8 mb-4 border border-dotted border-gray-400" />
          <div className="flex items-center gap-4">
            <Image
              src={"/testimonial-img.jpg"}
              alt={"Testimonial"}
              width={60}
              height={60}
              className="rounded-full"
            />
            <div>
              <h1 className="text-xl font-semibold text-gray-700">
                Jenny Wilson
              </h1>
              <p className="text-gray-400 flex gap-2">
                <MdLocationOn className="text-lg text-gray-600" />
                Canada
              </p>
            </div>
          </div>
        </div>
        <div className="card2 flex-1 border border-gray-400 h-[22rem] rounded-xl pl-16 pr-4 pt-8">
          <span className="flex items-center gap-2">
            <MdOutlineStarPurple500 className="text-3xl text-yellow-500" />
            <MdOutlineStarPurple500 className="text-3xl text-yellow-500" />
            <MdOutlineStarPurple500 className="text-3xl text-yellow-500" />
            <MdOutlineStarPurple500 className="text-3xl text-yellow-500" />
            <MdStarHalf className="text-3xl text-yellow-500" />
          </span>
          <p className="text-xl text-gray-700 mt-4">
            I had the best experience with Travel. It was my first time to
            travel and I was a little nervous but the guide was so friendly and
            helpful. I would definitely recommend it to everyone.
          </p>
          <hr className="w-3/4 mt-8 mb-4 border border-dotted border-gray-400" />
          <div className="flex items-center gap-4">
            <Image
              src={"/testimonial-img-2.jpg"}
              alt={"Testimonial"}
              width={60}
              height={60}
              className="rounded-full"
            />
            <div>
              <h1 className="text-xl font-semibold text-gray-700">
                Fatimah Jara
              </h1>
              <p className="text-gray-400 flex gap-2">
                <MdLocationOn className="text-lg text-gray-600" />
                Dubai
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
