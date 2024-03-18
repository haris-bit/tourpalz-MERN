import Image from "next/image";
import { FaCalendarAlt, FaUsers, FaMapMarkerAlt } from "react-icons/fa";

const BookedTours = () => {
  // Sample data for booked tour details
  const bookedTour = {
    destination: "Paris, France",
    date: "2024-03-10",
    numberOfPeople: 2,
    startPosition: "Eiffel Tower",
    tourGuide: {
      name: "Jane Doe",
      location: "Paris, France",
      languages: ["English", "French"],
      rating: 4.9,
      profileImage: "/user-1.jpg",
    },
  };

  return (
    <div className="flex flex-col w-full h-full">
      <div className="flex flex-col items-center justify-center mt-10 w-full">
        <div className="bg-white p-8 rounded-md shadow-lg">
          <div className="flex items-center mb-4">
            <FaMapMarkerAlt className="text-gray-500 mr-2" />
            <p className="text-lg">{bookedTour.destination}</p>
          </div>
          <div className="flex items-center mb-4">
            <FaCalendarAlt className="text-gray-500 mr-2" />
            <p className="text-lg">{bookedTour.date}</p>
          </div>
          <div className="flex items-center mb-4">
            <FaUsers className="text-gray-500 mr-2" />
            <p className="text-lg">{bookedTour.numberOfPeople} people</p>
          </div>
          <div className="flex items-center mb-4">
            <p className="text-lg">
              Start Position: {bookedTour.startPosition}
            </p>
          </div>
          <div className="flex items-center">
            <Image
              src={bookedTour.tourGuide.profileImage}
              alt={bookedTour.tourGuide.name}
              width={48}
              height={48}
              className="w-12 h-12 rounded-full mr-4"
            />
            <div>
              <p className="text-lg">{bookedTour.tourGuide.name}</p>
              <p className="text-gray-500 text-sm">
                Location: {bookedTour.tourGuide.location}
              </p>
              <p className="text-gray-500 text-sm">
                Languages: {bookedTour.tourGuide.languages.join(", ")}
              </p>
              <p className="text-gray-500 text-sm">
                Rating: {bookedTour.tourGuide.rating}/5
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookedTours;
