"use client";

import React from "react";
import Script from "next/script";
import FeaturedSection from "../pages/FeaturedSection/page";
import HeroSection from "../pages/HeroSection/page";
import MemoriesSection from "../pages/MemoriesSection/page";
import SecondSection from "../pages/SecondSection/page";
import Testimonial from "../pages/Testimonial/page";
import TopCategories from "../pages/TopCategories/page";
import CustomerSupport from "../customersupport/page";
import GoogleTranslate from "../components/google-translator";

const HomeSection = () => {
  return (
    <div className="flex flex-col w-full h-full">
      <HeroSection />
      <SecondSection />
      <FeaturedSection />
      <TopCategories />
      <MemoriesSection />
      <Testimonial /> 
      <CustomerSupport />
    </div>
  );

};

export default HomeSection;
