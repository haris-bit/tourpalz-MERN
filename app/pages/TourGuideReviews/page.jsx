"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaSignOutAlt, FaStar } from 'react-icons/fa';

const TourGuideReviews = () => {
    const [reviews, setReviews] = useState([
        {
            id: 1,
            reviewerName: 'John Doe',
            reviewerProfile: '/user-1.jpg',
            reviewerLocation: 'New York, USA',
            review: 'Great tour guide, very knowledgeable!',
            rating: 5,
        },
        {
            id: 2,
            reviewerName: 'Alice Smith',
            reviewerProfile: '/user-2.jpg',
            reviewerLocation: 'London, UK',
            review: 'Excellent experience, highly recommend!',
            rating: 4,
        },
    ]);

    const calculateOverallRating = () => {
        const totalRating = reviews.reduce((acc, curr) => acc + curr.rating, 0);
        return totalRating / reviews.length;
    };

    return (
        <div className='px-4 md:px-8 pt-4 pb-20'>
            <FaSignOutAlt
                className="text-blue-500 text-2xl cursor-pointer absolute top-6 right-8 hover:text-blue-600"
                onClick={() => {
                    localStorage.removeItem("email");
                    window.location.href = "/";
                }}
            />

            <h2 className="text-2xl font-bold mb-4">Tour Guide Reviews</h2>
            <div className="mb-4">
                <p className="font-bold">Overall Rating: {calculateOverallRating().toFixed(1)}</p>
            </div>
            <div>
                {reviews.map((review) => (
                    <div key={review.id} className="border-b pb-4 mb-4">
                        <div className="flex items-center mb-2">
                            <Image
                                src={review.reviewerProfile}
                                alt={review.reviewerName}
                                width={32}
                                height={32}
                                className="w-8 h-8 rounded-full mr-2"
                            />
                            <div>
                                <p className="font-bold">{review.reviewerName}</p>
                                <p>{review.reviewerLocation}</p>
                            </div>
                        </div>
                        <p className="mb-2">{review.review}</p>
                        <div className="flex">
                            {Array.from({ length: review.rating }, (_, index) => (
                                <FaStar key={index} className="text-yellow-400" />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TourGuideReviews;
