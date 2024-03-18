import React from "react";
import Navbar from "../components/Navbar";
import Image from "next/image";
import {
  FaUsers,
  FaMapMarkerAlt,
  FaCalendar,
  FaInfoCircle,
} from "react-icons/fa";
import MissionCard from "../pages/MissionCard/page.jsx";

const AboutUs = () => {
  return (
    <div className="flex flex-col w-full h-full">
      <Navbar />
      {/* About Us Div */}
      <div className="about flex w-full h-full items-center bg-gray-100 py-12 px-32 gap-20">
        {/* div for image */}
        <div className="flex-1 flex flex-col items-start justify-center gap-4">
          <h1 className="text-4xl font-bold text-blue-400">About Us Page</h1>
          <p className="text-gray-600 font-semibold">
            Discover the Tour Palz Story
          </p>
          <p className="text-gray-500">
            Welcome to Tour Palz, a trailblazing force in the travel and tourism
            industry. Founded by the adventurous spirit Kaydean Green, our
            mission is to redefine global travel through personalization,
            authenticity, and sustainability.
          </p>
          <Image
            src="/contact3.jpg"
            alt="About"
            width={600}
            height={500}
            className="rounded-xl shadow-lg"
          />
        </div>
        {/* div for content */}
        <div className="flex-1 flex flex-col items-start justify-center bg-white shadow-lg rounded-xl px-12 pb-12 mt-12">
          <h1 className="text-2xl font-bold text-blue-400 mt-4 ">
            Mission and Vision
          </h1>
          <p className="text-gray-500">
            At Tour Palz, we&apos;re on a mission to reshape the travel
            experience. Our vision is to create a world where every journey is
            unique, meaningful, and leaves a positive impact on communities.
          </p>
          <h1 className="text-2xl font-bold text-blue-400 mt-6">Founder</h1>
          <p className="text-gray-500">
            Meet Kaydean Green, a seasoned traveler whose passion for
            exploration inspired the creation of Tour Palz. Her vision is to
            bring travelers closer to authentic, off-the-beaten-path
            experiences.
          </p>
          <h1 className="text-2xl font-bold text-blue-400 mt-6">
            Global Connectivity
          </h1>
          <p className="text-gray-500">
            We believe in fostering connections and cultural exchanges. Tour
            Palz is not just a platform; it&apos;s a global community that
            transcends borders, connecting people from all walks of life.
          </p>
          <h1 className="text-2xl font-bold text-blue-400 mt-6">
            Commitment to Sustainable Tourism
          </h1>
          <p className="text-gray-500">
            Tour Palz is committed to ethical travel. By connecting travelers
            with local guides, we stimulate local economies, support
            communities, and promote sustainable tourism practices.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
