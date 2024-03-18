"use client";

import React, { useState } from "react";
import {
  FaUser,
  FaEnvelope,
  FaUnlockAlt,
  FaUserEdit,
  FaCamera,
  FaRegEdit,
  FaListUl,
  FaComments,
  FaTrashAlt,
  FaStar,
} from "react-icons/fa";
import { CiBookmarkCheck } from "react-icons/ci";
import TravelerProfileSection from "../pages/TravelerProfileSection/page";
import Image from "next/image";
import BookTour from "../pages/BookTour/page";
import BookedTourDetails from "../pages/BookedTours/page";
import BookedTours from "../pages/BookedTours/page";
import CancelBookings from "../pages/CancelBookings/page";
import LeaveReviews from "../pages/LeaveReview/page";
import TravelerChatComponent from "../pages/TravelerChatComponent/page";
import Link from "next/link";

const TravelerProfilePage = () => {
  const [activeTab, setActiveTab] = useState("profile");

  const renderContent = () => {
    switch (activeTab) {
      case "profile":
        return (
          <div>
            <TravelerProfileSection />
          </div>
        );

      case "bookTour":
        return (
          <div>
            <BookTour />
          </div>
        );

      case "bookedTours":
        return (
          <div>
            <BookedTours />
          </div>
        );
      case "messageTourGuides":
        return (
          <div>
            <TravelerChatComponent />
          </div>
        );
      case "cancelBookings":
        return (
          <div>
            <CancelBookings />
          </div>
        );
      case "leaveReviews":
        return (
          <div>
            <LeaveReviews />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col items-center h-full bg-gray-100 py-4">
      <Link
      href={"/home"}
      >
          <Image src={"/logo.png"} alt="logo" width={200} height={200} />
      </Link>
      <div className="p-8 rounded-lg shadow-md w-full max-w-full h-full">
        <h1 className="text-2xl font-bold mb-4">Traveler Profile</h1>
        <div className="flex mb-4 justify-between">
          <div className="flex items-center space-x-12">
            <div
              onClick={() => setActiveTab("profile")}
              className={`cursor-pointer ${
                activeTab === "profile" ? "text-blue-500" : "text-gray-500"
              } flex items-center space-x-2`}
            >
              <FaUserEdit />
              <span>Profile</span>
            </div>
            <div
              onClick={() => setActiveTab("bookTour")}
              className={`cursor-pointer ${
                activeTab === "bookTour" ? "text-blue-500" : "text-gray-500"
              } flex items-center space-x-2`}
            >
              <CiBookmarkCheck />
              <span>Customize Your Visit</span>
            </div>
            <div
              onClick={() => setActiveTab("bookedTours")}
              className={`cursor-pointer ${
                activeTab === "bookedTours" ? "text-blue-500" : "text-gray-500"
              } flex items-center space-x-2`}
            >
              <FaListUl />
              <span>Booked Tours</span>
            </div>
            <div
              onClick={() => setActiveTab("messageTourGuides")}
              className={`cursor-pointer ${
                activeTab === "messageTourGuides"
                  ? "text-blue-500"
                  : "text-gray-500"
              } flex items-center space-x-2`}
            >
              <FaComments />
              <span>Message Tour Guides</span>
            </div>
            <div
              onClick={() => setActiveTab("cancelBookings")}
              className={`cursor-pointer ${
                activeTab === "cancelBookings"
                  ? "text-blue-500"
                  : "text-gray-500"
              } flex items-center space-x-2`}
            >
              <FaTrashAlt />
              <span>Cancel Bookings</span>
            </div>
            <div
              onClick={() => setActiveTab("leaveReviews")}
              className={`cursor-pointer ${
                activeTab === "leaveReviews" ? "text-blue-500" : "text-gray-500"
              } flex items-center space-x-2`}
            >
              <FaStar />
              <span>Leave Reviews</span>
            </div>
          </div>
        </div>
        {renderContent()}
      </div>
    </div>
  );
};

export default TravelerProfilePage;
