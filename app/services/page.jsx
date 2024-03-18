import React from "react";
import Navbar from "../components/Navbar";
import Image from "next/image";

const Services = () => {
  return (
    <div className="flex flex-col w-full h-full">
      <Navbar />
      {/* Services Div */}
      <div className="w-full h-full services flex flex-col items-center justify-center bg-gray-100 px-32 pt-16 pb-12">
        <h1 className="text-4xl font-bold text-blue-400 py-8">Services Page</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {/* Service Card 1: Explore Personalized Journeys */}
          <div className="service-card flex flex-col items-center justify-center bg-white rounded-lg shadow-lg p-8">
            <Image
              src={"/contact4.jpg"}
              alt="About"
              width={600}
              height={500}
              className="rounded-xl shadow-lg"
            />
            <h2 className="text-blue-400 text-xl font-bold my-4">
              Explore Personalized Journeys with Tour Palz
            </h2>
            <p className="text-gray-500 text-left">
              Welcome to Tour Palz, where we&apos;re transforming your travel
              experience into a journey of personalization, authenticity, and
              connection. Our innovative platform bridges the gap between
              passionate travelers and individuals eager to share their local
              insights as &quot;Tour Palz.&quot;
            </p>
          </div>
          {/* Service Card 2: Global Connectivity */}
          <div className="service-card flex flex-col items-start justify-start bg-white rounded-lg shadow-lg p-8">
            <Image
              src={"/kyle-glenn-nXt5HtLmlgE-unsplash.jpg"}
              alt="About"
              width={800}
              height={600}
              className="rounded-xl shadow-lg"
            />

            <h2 className="text-left text-blue-400 text-xl font-bold my-4">
              Global Connectivity
            </h2>
            <p className="text-gray-500 text-left">
              Connect with local guides worldwide through our intuitive website.
              Wherever your wanderlust takes you, Tour Palz is your companion
              for unlocking authentic experiences.
            </p>
          </div>
          {/* Service Card 3: Personalization */}
          <div className="service-card flex flex-col items-start justify-start bg-white rounded-lg shadow-lg p-8">
            <Image
              src={"/jennifer-uppendahl-a9DrlXOOvH4-unsplash.jpg"}
              alt="About"
              width={600}
              height={500}
              className="rounded-xl shadow-lg"
            />
            <h2 className="text-blue-400 text-xl font-bold my-4">
              Personalization
            </h2>
            <p className="text-gray-500 text-left">
              Embark on a voyage that goes beyond the typical tourist spots.
              Immerse yourself in destinations through the eyes of locals,
              gaining deeper insights into culture, history, and traditions.
            </p>
          </div>
          {/* Service Card 4: Empowering Local Guides */}
          <div className="service-card flex flex-col bg-white rounded-lg shadow-lg p-8">
            <Image
              src={"/contact3.jpg"}
              alt="About"
              width={600}
              height={500}
              className="rounded-xl shadow-lg"
            />
            <h2 className="text-blue-400 text-xl font-bold my-4">
              Empowering Local Guides
            </h2>
            <p className="text-gray-500 text-left">
              Tour Palz is more than a platform; it&apos;s a community. We
              empower local guides, providing opportunities to share their
              knowledge, passion, and unique perspectives. It&apos;s not just a
              tour; it&apos;s a personal connection with a local expert.
            </p>
          </div>
          {/* Service Card 5: Safety and Quality */}
          <div className="service-card flex flex-col bg-white rounded-lg shadow-lg p-8">
            <Image
              src={"/umit-yildirim-9OB46apMbC4-unsplash.jpg"}
              alt="About"
              width={600}
              height={500}
              className="rounded-xl shadow-lg"
            />
            <h2 className="text-blue-400 text-xl font-bold my-4">
              Safety and Quality
            </h2>
            <p className="text-gray-500 text-left">
              Your safety and satisfaction are paramount. We meticulously vet
              and ensure that only the right individuals become Tour Palz,
              guaranteeing a seamless and memorable travel experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
