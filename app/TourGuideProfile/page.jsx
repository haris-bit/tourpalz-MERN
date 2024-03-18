"use client";

import React, { useState } from 'react';
import { FaUser, FaListUl, FaComments, FaStar } from 'react-icons/fa';
import { CiBookmarkCheck } from 'react-icons/ci';
import Image from 'next/image';
import TourGuideProfileSection from '../pages/TourGuideProfileSection/page';
import GuideBookedTours from '../pages/GuideBookedTours/page';
// import MessageTravelers from '../pages/MessageTravelers/page';
import TourGuideReviews from '../pages/TourGuideReviews/page';
import TourGuideChatComponent from '../pages/TourGuideChatComponent/page';

const TourGuideProfilePage = () => {
    const [activeTab, setActiveTab] = useState('profile');

    const renderContent = () => {
        switch (activeTab) {
            case 'profile':
                return (
                    <div>
                        <TourGuideProfileSection />
                    </div>
                );

            case 'bookedTours':
                return (
                    <div>
                        <GuideBookedTours />
                    </div>
                );
            case 'messageTravelers':
                return (
                    <div>
                        <TourGuideChatComponent />
                    </div>
                );
            case 'tourGuideReviews':
                return (
                    <div>
                        <TourGuideReviews />
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="flex flex-col items-center h-full bg-gray-100 py-4">
            <Image src={'/logo.png'} alt="logo" width={200} height={200} />
            <div className="p-8 rounded-lg shadow-md w-full max-w-full h-full">
                <h1 className="text-2xl font-bold mb-4">Tour Guide Profile</h1>
                <div className="flex mb-4 justify-between">
                    <div className="flex items-center space-x-12">
                        <div
                            onClick={() => setActiveTab('profile')}
                            className={`cursor-pointer ${activeTab === 'profile' ? 'text-blue-500' : 'text-gray-500'
                                } flex items-center space-x-2`}
                        >
                            <FaUser />
                            <span>Profile</span>
                        </div>
                        <div
                            onClick={() => setActiveTab('bookedTours')}
                            className={`cursor-pointer ${activeTab === 'bookedTours' ? 'text-blue-500' : 'text-gray-500'
                                } flex items-center space-x-2`}
                        >
                            <FaListUl />
                            <span>Booked Tours</span>
                        </div>
                        <div
                            onClick={() => setActiveTab('messageTravelers')}
                            className={`cursor-pointer ${activeTab === 'messageTravelers' ? 'text-blue-500' : 'text-gray-500'
                                } flex items-center space-x-2`}
                        >
                            <FaComments />
                            <span>Message Travelers</span>
                        </div>
                        <div
                            onClick={() => setActiveTab('tourGuideReviews')}
                            className={`cursor-pointer ${activeTab === 'tourGuideReviews' ? 'text-blue-500' : 'text-gray-500'
                                } flex items-center space-x-2`}
                        >
                            <FaStar />
                            <span>Tour Guide Reviews</span>
                        </div>
                    </div>
                </div>
                {renderContent()}
            </div>
        </div>
    );
};

export default TourGuideProfilePage;
