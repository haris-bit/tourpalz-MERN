import React from "react";
import Image from "next/image";
import { GoArrowRight } from "react-icons/go";

const TopCategories = () => {
  return (
    <section className="flex flex-col w-full h-screen bg-gray-100 items-center py-20">
      <span
        className="flex items-center gap-4
                bg-blue-50 p-2 rounded-full w-max
            "
      >
        <GoArrowRight className="text-xl bg-blue-500 text-white rounded-full w-8 h-8 p-1 " />
        <p className="text-xl font-semibold text-blue-600">Top Categories</p>
      </span>
      <h1 className="text-4xl font-bold text-center mt-6 text-wrap text-gray-700 text-center">
        Discover the categories of <br /> tours
      </h1>

      {/* Div for 6 spans */}
      <div className="flex flex-wrap justify-center gap-8 mt-12 w-full">
        <span className="flex flex-col items-center gap-3 mt-8">
          <Image
            src="/cat-img-1.jpg"
            alt="Category"
            width={170}
            height={170}
            className="rounded-lg"
          />
          <h1 className="text-xl font-semibold text-gray-700">Beach</h1>
          <p className="text-gray-500 text-lg">4.5k places</p>
        </span>

        <span className="flex flex-col items-center gap-3 mt-8">
          <Image
            src="/cat-img-2.jpg"
            alt="Category"
            width={170}
            height={170}
            className="rounded-lg"
          />
          <h1 className="text-xl font-semibold text-gray-700">Mountains</h1>
          <p className="text-gray-500 text-lg">4.5k places</p>
        </span>

        <span className="flex flex-col items-center gap-3 mt-8">
          <Image
            src="/cat-img-3.jpg"
            alt="Category"
            width={170}
            height={170}
            className="rounded-lg"
          />
          <h1 className="text-xl font-semibold text-gray-700">Heritage</h1>
          <p className="text-gray-500 text-lg">4.5k places</p>
        </span>

        <span className="flex flex-col items-center gap-3 mt-8">
          <Image
            src="/cat-img-4.jpg"
            alt="Category"
            width={170}
            height={170}
            className="rounded-lg"
          />
          <h1 className="text-xl font-semibold text-gray-700">Desert</h1>
          <p className="text-gray-500 text-lg">4.5k places</p>
        </span>

        <span className="flex flex-col items-center gap-3 mt-8">
          <Image
            src="/cat-img-5.jpg"
            alt="Category"
            width={170}
            height={170}
            className="rounded-lg"
          />
          <h1 className="text-xl font-semibold text-gray-700">Tower</h1>
          <p className="text-gray-500 text-lg">4.5k places</p>
        </span>

        <span className="flex flex-col items-center gap-3 mt-8">
          <Image
            src="/cat-img-6.jpg"
            alt="Category"
            width={170}
            height={170}
            className="rounded-lg"
          />
          <h1 className="text-xl font-semibold text-gray-700">Safari</h1>
          <p className="text-gray-500 text-lg">4.5k places</p>
        </span>
      </div>
    </section>
  );
};

export default TopCategories;
