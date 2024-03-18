import Image from "next/image";
import { GoArrowRight } from "react-icons/go";

const SecondSection = () => {
  return (
    <div className="flex flex-col w-full h-full bg-white mt-2 items-center">
      <span
        className="flex items-center gap-4
                bg-blue-50 p-2 rounded-full w-max
                mt-12
            "
      >
        <GoArrowRight className="text-xl bg-blue-500 text-white rounded-full w-8 h-8 p-1 " />
        <p className="text-xl font-semibold text-blue-600">Why choose us</p>
      </span>
      <span className="text-center text-3xl md:text-4xl font-bold mt-4 text-gray-700 py-4 md:py-8 tracking-wide md:tracking-wider leading-tight">
        Why Choose Us for Your <br /> Next Adventure
      </span>

      <span className="text-center text-gray-700 text-lg text-wrap">
        If you&apos;re looking for an unforgettable travel experience, we
        believe that <br /> our tour company is the perfect choice
      </span>

      <div className="grid grid-cols-3 gap-4 py-12">
        <span
          className="flex flex-col justify-center items-center gap-4
                w-[20rem] h-[20rem] p-2 rounded-lg mb-4
                border border-gray-200
                hover:shadow-lg hover:border-none"
        >
          <h1 className="text-xl font-semibold text-center text-gray-700">
            Global Exploration, Local Connection
          </h1>
          <p className="text-left text-gray-500 px-4">
            Uncover the heart and soul of every destination with our global
            network of local guides. Connect with passionate individuals who
            know the ins and outs of their hometowns, ensuring your journey is
            unique and memorable.
          </p>
        </span>

        <span
          className="flex flex-col justify-center items-center gap-4
                w-[20rem] h-[20rem] p-2 rounded-lg mb-4
                border border-gray-200
                hover:shadow-lg hover:border-none"
        >
          <h1 className="text-xl font-semibold text-center text-gray-700">
            Tailored Experiences Just for You
          </h1>
          <p className="text-left text-gray-500 px-4">
            Your adventure, your way. Personalize your travel experience based
            on your interests and preferences. Whether you&apos;re an avid
            history buff, a foodie seeking culinary delights, or an adrenaline
            junkie craving adventure, Tour Palz has the perfect guide and
            experience for you.
          </p>
        </span>

        <span
          className="flex flex-col justify-center items-center gap-4
                w-[20rem] h-[20rem] p-2 rounded-lg mb-4
                border border-gray-200
                hover:shadow-lg hover:border-none"
        >
          <h1 className="text-xl font-semibold text-center text-gray-700">
            Empowering Travelers and Local Guides
          </h1>
          <p className="text-left text-gray-500 px-4">
            Tour Palz is more than a platform; it&apos;s a community. We empower
            travelers to curate their dream journeys while providing local
            guides with opportunities to showcase their expertise. Together, we
            create meaningful connections that go beyond the typical tourist
            experience.
          </p>
        </span>

        <span
          className="flex flex-col justify-center items-center gap-4
                w-[20rem] h-[20rem] p-2 rounded-lg mb-4
                border border-gray-200
                hover:shadow-lg hover:border-none"
        >
          <h1 className="text-xl font-semibold text-center text-gray-700">
            Safety and Quality Assurance
          </h1>
          <p className="text-left text-gray-500 px-4">
            Your safety is our priority. Tour Palz ensures that every guide
            meets our stringent standards for safety and quality. Travel with
            confidence, knowing that you&apos;re in good hands.
          </p>
        </span>

        <span
          className="flex flex-col justify-center items-center gap-4
                w-[20rem] h-[20rem] p-2 rounded-lg mb-4
                border border-gray-200
                hover:shadow-lg hover:border-none"
        >
          <h1 className="text-xl font-semibold text-center text-gray-700">
            Start Your Journey Today
          </h1>
          <p className="text-left text-gray-500 px-4">
            Join Tour Palz and embark on a travel adventure that&apos;s uniquely
            yours. Explore destinations through the eyes of locals, connect with
            fellow travelers, and contribute to the global community of
            explorers. Your next adventure awaits – let&apos;s make it
            extraordinary together.
          </p>
        </span>
      </div>
    </div>
  );
};

export default SecondSection;
