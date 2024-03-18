import { GoArrowRight } from "react-icons/go";
import Image from "next/image";
// import star icon from react-icons
import { FaStar } from "react-icons/fa";
// import location icon from react-icons
import { MdLocationOn } from "react-icons/md";

const FeaturedSection = () => {
  return (
    <section className="flex flex-col w-full h-full bg-gray-100 px-12 md:px-32 py-4 md:py-12">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div>
          <span
            className="flex items-center gap-4
                bg-white p-2 rounded-full w-max
                mt-12 mb-4
            "
          >
            <GoArrowRight className="text-xl bg-blue-500 text-white rounded-full w-8 h-8 p-1 " />
            <p className="text-xl font-semibold text-blue-700">
              Featured Travel Talz
            </p>
          </span>

          <span className="text-3xl md:text-4xl font-bold mt-12 text-gray-700 py-4 md:py-8 tracking-wide md:tracking-wider leading-tight">
            Our Best Travel Talz
          </span>
        </div>

        <div>
          <button
            className="text-blue-500 px-4 py-2 rounded-full mt-4 border border-blue-500
            font-semibold hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out
          "
          >
            See All Travel Talz
          </button>
        </div>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
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
  );
};

export default FeaturedSection;
