import Image from "next/image";
import { GoArrowRight } from "react-icons/go";

const MemoriesSection = () => {
  return (
    <div className="w-full h-full flex flex-col px-32">
      <div className="flex justify-center gap-6">
        <span className="relative">
          <Image
            src="/discount-img-4.jpg"
            alt="Discount"
            width={550}
            height={550}
            className="rounded-lg"
          />
          <h1 className="absolute top-12 right-32 text-3xl font-bold text-white">
            50% OFF
          </h1>
          <h2 className="absolute top-20 right-8 mt-3 text-xl text-white">
            Embark on a Journey of <br /> a Lifetime
          </h2>

          <button className="absolute bottom-2 right-12 transform -translate-x-1/2 -translate-y-1/2 bg-white text-blue-400 px-6 py-2 rounded-lg font-bold text-lg hover:bg-gray-100 transition duration-200 ease-in-out">
            Book Now
          </button>
        </span>
        <span className="relative">
          <Image
            src="/discount-img-3.jpg"
            alt="Discount"
            width={550}
            height={550}
            className="rounded-lg"
          />
          <h1 className="absolute top-12 right-32 text-3xl font-bold text-white">
            35% OFF
          </h1>
          <h2 className="absolute top-20 right-8 mt-3 text-xl text-white">
            Experience the ultimate <br /> tour adventure
          </h2>

          <button className="absolute bottom-2 right-12 transform -translate-x-1/2 -translate-y-1/2 bg-white text-green-400 px-6 py-2 rounded-lg font-bold text-lg hover:bg-gray-100 transition duration-200 ease-in-out">
            Book Now
          </button>
        </span>
      </div>

      {/* div for image and content */}
      <div className="flex w-full h-full mt-24 gap-8 items-start">
        <div className="left-div w-[50%] ">
          <Image
            src={"/memory-slider-img.jpg"}
            alt={"Memory"}
            width={550}
            height={550}
            className="rounded-xl"
          />
        </div>
        <div className="right-div w-[50%] flex flex-col">
          <span
            className="flex items-center gap-4
                bg-blue-50 p-2 rounded-full w-max
            "
          >
            <GoArrowRight className="text-xl bg-blue-500 text-white rounded-full w-8 h-8 p-1 " />
            <p className="text-xl font-semibold text-blue-600">
              Travel`s Memories{" "}
            </p>
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-700 py-4 md:py-8 tracking-wide md:tracking-wider leading-tight">
            Make Lasting Memories Around the World Tour
          </h1>
          <p className="tracking-wide text-gray-700 text-lg text-wrap">
            We also believe in providing our travelers with unique and authentic
            experiences that you won&apos;t find in guidebooks or on standard
            tours.
          </p>

          <span className="flex flex-col mt-4">
            <h2 className="text-xl font-semibold text-white bg-blue-500 p-1 rounded-md w-max">
              01
            </h2>
            <h1 className="text-lg md:text-xl font-bold text-gray-700 py-2 md:py-4 tracking-wide md:tracking-wider leading-tight">
              {" "}
              Find Trips That Fit Your Flexible Lifestyle{" "}
            </h1>
            <p className="tracking-wide text-gray-700 text-lg text-wrap">
              That&apos;s why we offer a range of tours that are designed to fit
              your flexible lifestyle.
            </p>
            <hr className="w-[34rem] mt-4 bg-gray-700 h-0.5" />
          </span>

          <span className="flex flex-col mt-4">
            <h2 className="text-xl font-semibold text-white bg-green-500 p-1 rounded-md w-max">
              02
            </h2>
            <h1 className="text-lg md:text-xl font-bold text-gray-700 py-2 md:py-4 tracking-wide md:tracking-wider leading-tight">
              {" "}
              Expert-Guided Travel with Tourpalz{" "}
            </h1>
            <p className="tracking-wide text-gray-700 text-lg text-wrap">
              we believe that travel should be a source of joy and inspiration,
              not stress & worry
            </p>
            <hr className="w-[34rem] mt-4 bg-gray-700 h-0.5" />
          </span>

          <span className="flex flex-col mt-4">
            <h2 className="text-xl font-semibold text-white bg-yellow-400 p-1 rounded-md w-max">
              03
            </h2>
            <h1 className="text-lg md:text-xl font-bold text-gray-700 py-2 md:py-4 tracking-wide md:tracking-wider leading-tight">
              {" "}
              Discover the True Cost of Your Trip{" "}
            </h1>
            <p className="tracking-wide text-gray-700 text-lg text-wrap">
              We believe that transparency is key to building trust with our
              travelers.
            </p>
          </span>
        </div>
      </div>

      {/* Div for 4 spans */}
      <div className="flex justify-center gap-24 my-12">
        <div className="span1 flex flex-col justify-center gap-2">
          <span className="w-40 h-40 rounded-full bg-blue-100 flex justify-center items-center">
            <Image
              src={"/icon-complete.png"}
              alt={"Complete"}
              width={70}
              height={70}
            />
          </span>
          <h1 className="text-2xl font-bold text-gray-700 text-center">3.6k</h1>
          <h2 className="text-md font-normal text-gray-700 text-center">
            {" "}
            Completed Property{" "}
          </h2>
        </div>
        <div className="span2 flex flex-col justify-center gap-2">
          <span className="w-40 h-40 rounded-full bg-blue-100 flex justify-center items-center">
            <Image
              src={"/icon-happy-chat.png"}
              alt={"Complete"}
              width={70}
              height={70}
            />
          </span>
          <h1 className="text-2xl font-bold text-gray-700 text-center">2.7k</h1>
          <h2 className="text-md font-normal text-gray-700 text-center">
            {" "}
            Customer Satisfaction
          </h2>
        </div>{" "}
        <div className="span3 flex flex-col justify-center gap-2">
          <span className="w-40 h-40 rounded-full bg-blue-100 flex justify-center items-center">
            <Image
              src={"/icon-agent.png"}
              alt={"Complete"}
              width={70}
              height={70}
            />
          </span>
          <h1 className="text-2xl font-bold text-gray-700 text-center">457+</h1>
          <h2 className="text-md font-normal text-gray-700 text-center">
            {" "}
            Expert Agents{" "}
          </h2>
        </div>{" "}
        <div className="span4 flex flex-col justify-center gap-2">
          <span className="w-40 h-40 rounded-full bg-blue-100 flex justify-center items-center">
            <Image
              src={"/icon-award.png"}
              alt={"Complete"}
              width={70}
              height={70}
            />
          </span>
          <h1 className="text-2xl font-bold text-gray-700 text-center">78</h1>
          <h2 className="text-md font-normal text-gray-700 text-center">
            {" "}
            Awards Won{" "}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default MemoriesSection;
