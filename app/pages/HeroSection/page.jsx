import Navbar from "@/app/components/Navbar";
import SearchComponent from "@/app/components/SearchComponent";
import Image from "next/image";
import { GoArrowRight } from "react-icons/go";

const HeroSection = () => {
  return (
    <div className="flex flex-col w-full h-full">
      <Navbar />

      {/* Div for Hero Section */}
      <section className="flex flex-col h-full w-full bg-gray-50">
        <div className="px-8 md:mt-8 md:flex md:justify-center md:items-center md:px-32">
          {/* Div for Left Content */}
          <div className="flex flex-col justify-start w-full md:w-1/2 h-screen mt-2 md:mt-20">
            <span
              className="flex items-center gap-4
                bg-blue-50 p-2 rounded-full w-max
                mt-12
            "
            >
              <GoArrowRight className="text-xl bg-blue-500 text-white rounded-full w-8 h-8 p-1 " />
              <p className="text-xl font-semibold text-blue-600">
                It&apos;s time to go
              </p>
            </span>
            <span
              className="text-xl md:text-xl font-bold mt-4 text-gray-700 py-4 md:py-4 tracking-wide md:tracking-wider leading-tight
            md:leading-relaxed
            "
            >
              Welcome to{" "}
              <span className="text-xl md:text-xl font-bold text-blue-500">
                Tour Palz
              </span>{" "}
              <br />
              Your Gateway to Personalized Travel Adventures
            </span>
            <span className="tracking-wider text-gray-500 text-md text-wrap">
              At Tour Palz, we don&apos;t just offer travel; we provide a portal
              to a world of personalized, authentic experiences. Explore
              destinations like never before, guided by locals who are
              passionate about sharing their insights. Your journey begins here
            </span>
            <SearchComponent />
            <span className="mt-[18rem] md:mt-[13rem] ml-[3rem] flex items-center gap-4">
              <div className="flex gap-1 items-center justify-center relative">
                <Image
                  src={"/user-3.jpg"}
                  alt={"TourPalz"}
                  width={40}
                  height={40}
                  className="absolute -left-4 rounded-full"
                />
                <Image
                  src={"/user-2.jpg"}
                  alt={"TourPalz"}
                  width={40}
                  height={40}
                  className="absolute -left-7 rounded-full"
                />
                <Image
                  src={"/user-1.jpg"}
                  alt={"TourPalz"}
                  width={40}
                  height={40}
                  className="absolute -left-12 rounded-full"
                />
                <Image
                  src={"/user-4.jpg"}
                  alt={"TourPalz"}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              </div>
              <p className="text-gray-800 text-lg font-normal">
                16 people
                <span className="text-blue-500 text-lg mx-1 font-semibold">
                  booked
                </span>
                a visit in the last 24 hours
              </p>
            </span>
          </div>
          {/* Div for Right Content */}
          <div className="hidden md:flex flex-col justify-start w-1/2 h-screen rounded-lg">
            {/* Div for Image */}
            <div>
              <Image
                src={"/tour-hero-bg.png"}
                alt={"Hero Image"}
                width={900}
                height={900}
                className="rounded-lg w-full h-full object-cover object-center z-10"
              />
              <Image
                src={"/tour-hero-el.png"}
                alt={"Hero Image"}
                width={600}
                height={600}
                className="absolute top-40 right-32 z-20"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
