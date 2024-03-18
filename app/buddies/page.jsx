import React from "react";
import Navbar from "../components/Navbar";
import BuddiesFilter from "../components/BuddiesFilter";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";

const Buddies = () => {
  return (
    <div>
      <div className="flex flex-col w-full h-full bg-gray-100">
        <Navbar />
        {/* section */}
        <section className="py-24 px-32 w-full h-full flex gap-8">
          <BuddiesFilter />
          {/* div for buddies */}
          {/* Cards Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
            {/* Card No.1 */}
            <div className="flex flex-col bg-white rounded-lg shadow-md p-2 relative pb-6">
              <Image
                src={"/p1.jpg"}
                alt={"Profile"}
                width={400}
                height={400}
                className="rounded-lg w-full"
              />
              {/* Button for Top Rating */}

              <button
                className="text-black bg-green-400 px-4 py-2 rounded-full mt-4
             hover:bg-green-600 transition duration-300 ease-in-out
            absolute top-2 left-4 px-6 py-2
            "
              >
                Top Rating
              </button>
              <div className="flex flex-col mt-4 gap-2 px-2">
                <span className="flex justify-between text-gray-700">
                  <span className="text-xl font-semibold">John Doe</span>
                  <span className="flex items-center gap-1 text-gray-500">
                    <FaStar className="text-yellow-500" /> 4.5
                  </span>
                </span>
                <hr />
                <span className="text-lg text-gray-500 flex items-center">
                  <MdLocationOn className="text-blue-500" /> London, UK
                </span>
                <hr />
                <span className="flex justify-between items-center text-lg text-gray-500">
                  <span>
                    <i className="text-lg text-blue-500 font-semibold">$45</i>
                    /day
                  </span>
                  <span>
                    <button
                      className="text-sm text-blue-500 bg-white border border-blue-500 px-2 py-1 rounded-full mt-4
                    hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out
                "
                    >
                      Book Now
                    </button>
                  </span>
                </span>
              </div>
            </div>

            {/* Card No.2 */}
            <div className="flex flex-col bg-white rounded-lg shadow-md p-2 relative pb-6">
              <Image
                src={"/p1.jpg"}
                alt={"Profile"}
                width={400}
                height={400}
                className="rounded-lg w-full"
              />
              {/* Button for Top Rating */}

              <button
                className="text-black bg-green-400 px-4 py-2 rounded-full mt-4
             hover:bg-green-600 transition duration-300 ease-in-out
            absolute top-2 left-4 px-6 py-2
            "
              >
                Top Rating
              </button>
              <div className="flex flex-col mt-4 gap-2 px-2">
                <span className="flex justify-between text-gray-700">
                  <span className="text-xl font-semibold">John Doe</span>
                  <span className="flex items-center gap-1 text-gray-500">
                    <FaStar className="text-yellow-500" /> 4.5
                  </span>
                </span>
                <hr />
                <span className="text-lg text-gray-500 flex items-center">
                  <MdLocationOn className="text-blue-500" /> London, UK
                </span>
                <hr />
                <span className="flex justify-between items-center text-lg text-gray-500">
                  <span>
                    <i className="text-lg text-blue-500 font-semibold">$45</i>
                    /day
                  </span>
                  <span>
                    <button
                      className="text-sm text-blue-500 bg-white border border-blue-500 px-2 py-1 rounded-full mt-4
                    hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out
                "
                    >
                      Book Now
                    </button>
                  </span>
                </span>
              </div>
            </div>

            {/* Card No.3 */}
            <div className="flex flex-col bg-white rounded-lg shadow-md p-2 relative pb-6">
              <Image
                src={"/p1.jpg"}
                alt={"Profile"}
                width={400}
                height={400}
                className="rounded-lg w-full"
              />
              {/* Button for Top Rating */}

              <button
                className="text-black bg-green-400 px-4 py-2 rounded-full mt-4
             hover:bg-green-600 transition duration-300 ease-in-out
            absolute top-2 left-4 px-6 py-2
            "
              >
                Top Rating
              </button>
              <div className="flex flex-col mt-4 gap-2 px-2">
                <span className="flex justify-between text-gray-700">
                  <span className="text-xl font-semibold">John Doe</span>
                  <span className="flex items-center gap-1 text-gray-500">
                    <FaStar className="text-yellow-500" /> 4.5
                  </span>
                </span>
                <hr />
                <span className="text-lg text-gray-500 flex items-center">
                  <MdLocationOn className="text-blue-500" /> London, UK
                </span>
                <hr />
                <span className="flex justify-between items-center text-lg text-gray-500">
                  <span>
                    <i className="text-lg text-blue-500 font-semibold">$45</i>
                    /day
                  </span>
                  <span>
                    <button
                      className="text-sm text-blue-500 bg-white border border-blue-500 px-2 py-1 rounded-full mt-4
                    hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out
                "
                    >
                      Book Now
                    </button>
                  </span>
                </span>
              </div>
            </div>

            {/* Card No.4 */}
            <div className="flex flex-col bg-white rounded-lg shadow-md p-2 relative pb-6">
              <Image
                src={"/p1.jpg"}
                alt={"Profile"}
                width={400}
                height={400}
                className="rounded-lg w-full"
              />
              {/* Button for Top Rating */}

              <button
                className="text-black bg-green-400 px-4 py-2 rounded-full mt-4
             hover:bg-green-600 transition duration-300 ease-in-out
            absolute top-2 left-4 px-6 py-2
            "
              >
                Top Rating
              </button>
              <div className="flex flex-col mt-4 gap-2 px-2">
                <span className="flex justify-between text-gray-700">
                  <span className="text-xl font-semibold">John Doe</span>
                  <span className="flex items-center gap-1 text-gray-500">
                    <FaStar className="text-yellow-500" /> 4.5
                  </span>
                </span>
                <hr />
                <span className="text-lg text-gray-500 flex items-center">
                  <MdLocationOn className="text-blue-500" /> London, UK
                </span>
                <hr />
                <span className="flex justify-between items-center text-lg text-gray-500">
                  <span>
                    <i className="text-lg text-blue-500 font-semibold">$45</i>
                    /day
                  </span>
                  <span>
                    <button
                      className="text-sm text-blue-500 bg-white border border-blue-500 px-2 py-1 rounded-full mt-4
                    hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out
                "
                    >
                      Book Now
                    </button>
                  </span>
                </span>
              </div>
            </div>

            <div className="flex flex-col bg-white rounded-lg shadow-md p-2 relative pb-6">
              <Image
                src={"/p1.jpg"}
                alt={"Profile"}
                width={400}
                height={400}
                className="rounded-lg w-full"
              />
              {/* Button for Top Rating */}

              <button
                className="text-black bg-green-400 px-4 py-2 rounded-full mt-4
             hover:bg-green-600 transition duration-300 ease-in-out
            absolute top-2 left-4 px-6 py-2
            "
              >
                Top Rating
              </button>
              <div className="flex flex-col mt-4 gap-2 px-2">
                <span className="flex justify-between text-gray-700">
                  <span className="text-xl font-semibold">John Doe</span>
                  <span className="flex items-center gap-1 text-gray-500">
                    <FaStar className="text-yellow-500" /> 4.5
                  </span>
                </span>
                <hr />
                <span className="text-lg text-gray-500 flex items-center">
                  <MdLocationOn className="text-blue-500" /> London, UK
                </span>
                <hr />
                <span className="flex justify-between items-center text-lg text-gray-500">
                  <span>
                    <i className="text-lg text-blue-500 font-semibold">$45</i>
                    /day
                  </span>
                  <span>
                    <button
                      className="text-sm text-blue-500 bg-white border border-blue-500 px-2 py-1 rounded-full mt-4
                    hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out
                "
                    >
                      Book Now
                    </button>
                  </span>
                </span>
              </div>
            </div>

            <div className="flex flex-col bg-white rounded-lg shadow-md p-2 relative pb-6">
              <Image
                src={"/p1.jpg"}
                alt={"Profile"}
                width={400}
                height={400}
                className="rounded-lg w-full"
              />
              {/* Button for Top Rating */}

              <button
                className="text-black bg-green-400 px-4 py-2 rounded-full mt-4
             hover:bg-green-600 transition duration-300 ease-in-out
            absolute top-2 left-4 px-6 py-2
            "
              >
                Top Rating
              </button>
              <div className="flex flex-col mt-4 gap-2 px-2">
                <span className="flex justify-between text-gray-700">
                  <span className="text-xl font-semibold">John Doe</span>
                  <span className="flex items-center gap-1 text-gray-500">
                    <FaStar className="text-yellow-500" /> 4.5
                  </span>
                </span>
                <hr />
                <span className="text-lg text-gray-500 flex items-center">
                  <MdLocationOn className="text-blue-500" /> London, UK
                </span>
                <hr />
                <span className="flex justify-between items-center text-lg text-gray-500">
                  <span>
                    <i className="text-lg text-blue-500 font-semibold">$45</i>
                    /day
                  </span>
                  <span>
                    <button
                      className="text-sm text-blue-500 bg-white border border-blue-500 px-2 py-1 rounded-full mt-4
                    hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out
                "
                    >
                      Book Now
                    </button>
                  </span>
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Buddies;
