"use client";

import React, { useEffect, useState } from "react";
import { FaCalendarAlt, FaUsers, FaMapMarkerAlt } from "react-icons/fa";
import { toast } from "react-toastify";
import Modal from "react-modal";
import axios from "axios";

const BookTour = () => {
  const [tourGuides, setTourGuides] = useState([]);
  const [tourDetails, setTourDetails] = useState({
    destination: "",
    date: "",
    noOfPeople: 1,
    specialRequest: "",
    travelerEmail: "",
    selectedTourGuide: "",
    filters: {
      topRated: false,
      nearby: false,
    },
  });

  useEffect(() => {
    const travelerEmail = localStorage.getItem("email");
    setTourDetails({ ...tourDetails, travelerEmail });
  }, []);

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTourDetails({ ...tourDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/tour", tourDetails)
      .then((res) => {
        toast.success("Tour booked successfully");
      })
      .catch((err) => {
        toast.error("Failed to book tour");
      });
    setTourDetails({
      destination: "",
      date: "",
      noOfPeople: 1,
      specialRequest: "",
      travelerEmail: "",
      selectedTourGuide: "",
      filters: {
        topRated: false,
        nearby: false,
      },
    });
  };

  const [showTourGuideModal, setShowTourGuideModal] = useState(false);
  const [selectedGuideDetails, setSelectedGuideDetails] = useState(null);

  const handleGuideHover = (guide) => {
    setSelectedGuideDetails(guide);
    setShowTourGuideModal(true);
  };

  return (
    <div className="flex flex-col justify-center items-center w-full px-4">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-full max-w-lg p-4 bg-white shadow-md rounded-lg"
      >
        <div className="mb-4">
          <label htmlFor="destination" className="block mb-2">
            Destination
          </label>
          <input
            type="text"
            id="destination"
            name="destination"
            value={tourDetails.destination}
            onChange={handleInputChange}
            className="w-full px-4 py-2 rounded-md border focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="date" className="block mb-2">
            Date
          </label>
          <div className="flex items-center">
            <FaCalendarAlt className="text-gray-500 mr-2" />
            <input
              type="date"
              id="date"
              name="date"
              value={tourDetails.date}
              onChange={handleInputChange}
              className="w-full px-4 py-2 rounded-md border focus:outline-none focus:border-blue-500"
              required
            />
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="specialRequest" className="block mb-2">
            Special Request
          </label>
          <textarea
            id="specialRequest"
            name="specialRequest"
            value={tourDetails.specialRequest}
            onChange={handleInputChange}
            className="w-full px-4 py-2 rounded-md border focus:outline-none focus:border-blue-500"
            rows={8}
            cols={50}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="noOfPeople" className="block mb-2">
            No of People
          </label>
          <div className="flex items-center">
            <FaUsers className="text-gray-500 mr-2" />
            <input
              type="number"
              id="noOfPeople"
              name="noOfPeople"
              value={tourDetails.noOfPeople}
              onChange={handleInputChange}
              className="w-full px-4 py-2 rounded-md border focus:outline-none focus:border-blue-500"
              required
            />
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="selectedTourGuide" className="block mb-2">
            Select Tour Guide
          </label>
          <select
            id="selectedTourGuide"
            name="selectedTourGuide"
            value={tourDetails.selectedTourGuide}
            onChange={handleInputChange}
            className="w-full px-4 py-2 rounded-md border focus:outline-none focus:border-blue-500"
            required
          >
            <option value="">Select a Tour Guide</option>
            {tourGuides.map((guide) => (
              <option key={guide.id} value={guide.id}>
                {guide.username}
              </option>
            ))}
          </select>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-md focus:outline-none"
          >
            Book Now
          </button>
        </div>
      </form>
      <Modal
        isOpen={showTourGuideModal}
        onRequestClose={() => setShowTourGuideModal(false)}
        contentLabel="Tour Guide Details"
      >
        {/* Modal content */}
        {selectedGuideDetails && (
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2">
              {selectedGuideDetails.name}
            </h2>
            <p>
              Location: <span>{selectedGuideDetails.location}</span>
            </p>
            <p>
              Languages:{" "}
              <span>{selectedGuideDetails.languages.join(", ")}</span>
            </p>
            <p>
              Rating: <span>{selectedGuideDetails.rating}/5</span>
            </p>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default BookTour;
