"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaUserEdit, FaListUl, FaComments, FaTrashAlt, FaStar } from "react-icons/fa";
import { CiBookmarkCheck } from "react-icons/ci";
import TravelerProfileSection from "../pages/TravelerProfileSection/page";
import BookTour from "../pages/BookTour/page";
import BookedTours from "../pages/BookedTours/page";
import CancelBookings from "../pages/CancelBookings/page";
import LeaveReviews from "../pages/LeaveReview/page";
import TravelerChatComponent from "../pages/TravelerChatComponent/page";
import { useSearchParams } from 'next/navigation';
import { Suspense } from "react";

const GuideNameComponent = () => {
  const searchParams = useSearchParams();
  const guideName = searchParams.get('guideName');
  return guideName;
}

const TravelerProfilePage = () => {
  const [activeTab, setActiveTab] = useState("profile");
  const searchParams = useSearchParams();
  const guideName = searchParams.get('guideName');

  useEffect(() => {
    if (guideName) {
      setActiveTab("messageTourGuides");
    }
  }, [guideName]);

  const renderContent = () => {
    switch (activeTab) {
      case "profile":
        return <TravelerProfileSection />;
      case "bookTour":
        return <BookTour />;
      case "bookedTours":
        return <BookedTours />;
      case "messageTourGuides":
        return <TravelerChatComponent guideName={guideName} />;
      case "cancelBookings":
        return <CancelBookings />;
      case "leaveReviews":
        return <LeaveReviews />;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 py-4">
      <div className="p-4 w-full max-w-screen-lg">
        <div className="mb-4">
          <Link href={"/home"}>
            <Image src={"/logo.png"} alt="logo" width={200} height={200} />
          </Link>
        </div>
        <div className="rounded-lg shadow-md w-full">
          <h1 className="text-2xl font-bold mb-4 text-center">Traveler Profile</h1>
          <div className="flex mb-4 flex-wrap justify-center">
            <div className="flex flex-wrap gap-4">
              <ProfileTab
                label="Profile"
                icon={<FaUserEdit />}
                active={activeTab === "profile"}
                onClick={() => setActiveTab("profile")}
              />
              <ProfileTab
                label="Customize Your Visit"
                icon={<CiBookmarkCheck />}
                active={activeTab === "bookTour"}
                onClick={() => setActiveTab("bookTour")}
              />
              <ProfileTab
                label="Booked Tours"
                icon={<FaListUl />}
                active={activeTab === "bookedTours"}
                onClick={() => setActiveTab("bookedTours")}
              />
              <ProfileTab
                label="Message Tour Guides"
                icon={<FaComments />}
                active={activeTab === "messageTourGuides"}
                onClick={() => setActiveTab("messageTourGuides")}
              />
              <ProfileTab
                label="Cancel Bookings"
                icon={<FaTrashAlt />}
                active={activeTab === "cancelBookings"}
                onClick={() => setActiveTab("cancelBookings")}
              />
              <ProfileTab
                label="Leave Reviews"
                icon={<FaStar />}
                active={activeTab === "leaveReviews"}
                onClick={() => setActiveTab("leaveReviews")}
              />
            </div>
          </div>
          <div className="p-4">
            {renderContent()}
            <Suspense fallback={<div>Loading...</div>}>
              <GuideNameComponent />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProfileTab = ({ label, icon, active, onClick }) => {
  return (
    <div
      className={`cursor-pointer ${active ? "text-blue-500" : "text-gray-500"
        } flex items-center space-x-2`}
      onClick={onClick}
    >
      {icon}
      <span>{label}</span>
    </div>
  );
};

export default TravelerProfilePage;
