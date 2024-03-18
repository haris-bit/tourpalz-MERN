import React from "react";
import FeaturedSection from "../pages/FeaturedSection/page";
import HeroSection from "../pages/HeroSection/page";
import MemoriesSection from "../pages/MemoriesSection/page";
import SecondSection from "../pages/SecondSection/page";
import Testimonial from "../pages/Testimonial/page";
import TopCategories from "../pages/TopCategories/page";

const HomeSection = () => {
  return (
    <div className="flex flex-col w-full h-full">
      <HeroSection />
      <SecondSection />
      <FeaturedSection />
      <MemoriesSection />
      <TopCategories />
      <Testimonial />
    </div>
  );
};

export default HomeSection;
