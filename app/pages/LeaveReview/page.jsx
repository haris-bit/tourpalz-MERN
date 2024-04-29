"use client";

import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";
import axios from "axios";
import { useEffect } from "react";

const LeaveReviews = () => {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");
  const [guide, setGuide] = useState("");
  const [selectedTourGuide, setSelectedTourGuide] = useState(null);

  const handleRatingChange = (value) => {
    setRating(value);
  };

  const handleCommentChange = (e) => {
    setReview(e.target.value);
  };

  const handleTourGuideChange = (e) => {
    const inputName = e.target.value;
    setGuide(inputName);

    // Find the tour guide from the array
    const guide = tourGuides.find(
      (guide) => guide.username.toLowerCase() === inputName.toLowerCase()
    );

    setSelectedTourGuide(guide);
  };

  const handleSubmitReview = () => {
    // Logic to submit review
    if (rating === 0) {
      toast.error("Please select a rating");
    } else if (review.trim() === "") {
      toast.error("Please enter a comment");
    } else if (!selectedTourGuide) {
      toast.error("Tour guide not found");
    } else {
      // Example: Send review data to the server
      console.log("Tour Guide:", selectedTourGuide.name);
      console.log("Rating:", rating);

      axios
        .post("http://localhost:3001/review", {
          guide,
          rating,
          review,
        })
        .then((res) => {
          console.log(res.data);
        })

      toast.success("Review submitted successfully");
      // Clear input fields after successful submission
      setRating(0);
      setReview("");
      setGuide("");
      setSelectedTourGuide(null);
    }
  };

  const [tourGuides, setTourGuides] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/tourguides")
      .then((res) => {
        setTourGuides(res.data.tourguides);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);





  return (
    <div className="flex flex-col w-full h-full">
      <div className="flex flex-col items-center justify-center mt-10">
        <div className="bg-white p-8 rounded-md shadow-lg w-4xl">
          <div className="flex flex-col gap-2 mb-4">
            <label className="text-lg mr-2">Tour Guide:</label>
            <input
              type="text"
              value={guide}
              onChange={handleTourGuideChange}
              placeholder="Enter tour guide's name"
              className="w-full px-4 py-2 mb-4 rounded-md border focus:outline-none focus:border-blue-500"
            />
          </div>
          {/* Display tour guide details */}
          {selectedTourGuide ? (
            <div className="mb-4">
              <Image
                src={selectedTourGuide.profilePicture}
                alt={selectedTourGuide.name}
                width={48}
                height={48}
                className="w-12 h-12 rounded-full mr-4"
              />
              <p>Name: {selectedTourGuide.username}</p>
              <p>Location: {selectedTourGuide.location}</p>
              <p>Language: {selectedTourGuide.language}</p>
            </div>
          ) : (
            <div className="text-red-500">No tour guide found</div>
          )}
          <div className="flex items-center mb-4">
            <label className="text-lg mr-2">Rating:</label>
            {[...Array(5)].map((_, index) => (
              <FaStar
                key={index}
                className={`cursor-pointer ${
                  index < rating ? "text-yellow-500" : "text-gray-300"
                }`}
                onClick={() => handleRatingChange(index + 1)}
              />
            ))}
          </div>
          <textarea
            placeholder="Write your review here..."
            value={review}
            onChange={handleCommentChange}
            className="w-full h-32 px-4 py-2 mb-4 rounded-md border focus:outline-none focus:border-blue-500"
          ></textarea>
          <button
            onClick={handleSubmitReview}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-md focus:outline-none"
          >
            Submit Review
          </button>
        </div>
      </div>
    </div>
  );
};

export default LeaveReviews;
