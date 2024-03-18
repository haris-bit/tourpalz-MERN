"use client";
import React, { useState } from "react";
import { FaCalendarAlt, FaUsers, FaMapMarkerAlt } from "react-icons/fa";
import { toast } from "react-toastify";
import Modal from "react-modal";

const BookTour = () => {
  const [tourDetails, setTourDetails] = useState({
    destination: "",
    date: "",
    numberOfPeople: 1,
    specialRequest: "",
    selectedTourGuide: "",
    filters: {
      topRated: false,
      nearby: false,
    },
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTourDetails({ ...tourDetails, [name]: value });
  };

  const handleFilterChange = (e) => {
    const { name, checked } = e.target;
    setTourDetails({
      ...tourDetails,
      filters: {
        ...tourDetails.filters,
        [name]: checked,
      },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to submit tour details
    console.log("Tour details submitted:", tourDetails);
    toast.success(
      `Your Trip to ${tourDetails.destination} booked successfully`
    );
  };

  const topRated = [
    {
      id: 1,
      name: "John Doe",
      rating: 5,
      location: "New York, USA",
      languages: ["English", "Spanish"],
      profileImage: "/images/tour-guide-1.jpg",
    },
    {
      id: 2,
      name: "Jane Doe",
      rating: 4.9,
      location: "Paris, France",
      languages: ["French", "English"],
      profileImage: "/images/tour-guide-2.jpg",
    },
  ];

  const nearby = [
    {
      id: 3,
      name: "John Smith",
      rating: 4,
      location: "London, UK",
      languages: ["English", "German"],
      profileImage: "/images/tour-guide-3.jpg",
    },
    {
      id: 4.5,
      name: "Jane Smith",
      rating: 4,
      location: "Berlin, Germany",
      languages: ["German", "English"],
      profileImage: "/images/tour-guide-4.jpg",
    },
  ];

  const [showTourGuideModal, setShowTourGuideModal] = useState(false);
  const [selectedGuideDetails, setSelectedGuideDetails] = useState(null);

  const handleGuideHover = (guide) => {
    setSelectedGuideDetails(guide);
    setShowTourGuideModal(true);
  };

  return (
    <div className="flex flex-col w-full h-full px-80">
      <form onSubmit={handleSubmit} className="flex flex-col w-full h-full">
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
          <label htmlFor="selectedTourGuide" className="block mb-2">
            Select Tour Guide
          </label>
          <div className="mb-4">
            <label className="block mb-2">Filters:</label>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="topRated"
                name="topRated"
                checked={tourDetails.filters.topRated}
                onChange={handleFilterChange}
                className="mr-2"
              />
              <label htmlFor="topRated" className="mr-4">
                Top Rated
              </label>
              <input
                type="checkbox"
                id="nearby"
                name="nearby"
                checked={tourDetails.filters.nearby}
                onChange={handleFilterChange}
                className="mr-2"
              />
              <label htmlFor="nearby">Nearby</label>
            </div>
          </div>
          <select
            id="selectedTourGuide"
            name="selectedTourGuide"
            value={tourDetails.selectedTourGuide}
            onChange={handleInputChange}
            className="w-full px-4 py-2 rounded-md border focus:outline-none focus:border-blue-500"
            required
          >
            <option value="">Select a Tour Guide</option>
            {tourDetails.filters.topRated &&
              topRated.map((guide) => (
                <option
                  key={guide.id}
                  value={guide.name}
                  onMouseEnter={() => handleGuideHover(guide)}
                >
                  {guide.name} - {guide.location}- ({guide.rating}/5 stars)
                </option>
              ))}
            {tourDetails.filters.nearby &&
              nearby.map((guide) => (
                <option
                  key={guide.id}
                  value={guide.name}
                  onMouseEnter={() => handleGuideHover(guide)}
                >
                  {guide.name} - {guide.location}- ({guide.rating}/5 stars)
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
          <div>
            <h2>{selectedGuideDetails.name}</h2>
            <p>Location: {selectedGuideDetails.location}</p>
            <p>Languages: {selectedGuideDetails.languages.join(", ")}</p>
            <p>Rating: {selectedGuideDetails.rating}/5</p>
            {/* Add more details as needed */}
          </div>
        )}
      </Modal>
    </div>
  );
};

export default BookTour;
