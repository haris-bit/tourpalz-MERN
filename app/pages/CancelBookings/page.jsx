"use client";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CancelBookings = () => {
  const [bookingId, setBookingId] = useState("");

  const handleCancelBooking = () => {
    if (bookingId.trim() !== "") {
      // Logic to cancel booking
      // Example: Send a request to the server to cancel booking with bookingId
      console.log("Booking cancelled for ID:", bookingId);
      toast.success("Booking cancelled successfully");
      // Clear input after successful cancellation
      setBookingId("");
    } else {
      toast.error("Please enter a valid booking ID");
    }
  };

  return (
    <div className="flex flex-col w-full h-full">
      <div className="flex flex-col items-center justify-center mt-10">
        <div className="bg-white p-8 rounded-md shadow-lg">
          <input
            type="text"
            placeholder="Enter Booking ID"
            value={bookingId}
            onChange={(e) => setBookingId(e.target.value)}
            className="w-full px-4 py-2 mb-4 rounded-md border focus:outline-none focus:border-blue-500"
          />
          <button
            onClick={handleCancelBooking}
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-md focus:outline-none"
          >
            Cancel Booking
          </button>
        </div>
      </div>
    </div>
  );
};

export default CancelBookings;
