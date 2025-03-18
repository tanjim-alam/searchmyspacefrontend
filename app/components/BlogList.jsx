"use client";
import React, { useRef } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import BlogCard from "./BlogCard";

function BlogList() {
  const scrollRef = useRef(null);

  const blogsData = [1, 1, 2, 3, 4];
  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -320, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 320, behavior: "smooth" });
    }
  };
  return (
    <div className="md:w-[90%] w-[95%] m-auto pt-8 pb-16">
      <div className="flex flex-col justify-center text-center">
        <h5 className="font-bold text-2xl lg:text-3xl text-black">
          Popular Choices
        </h5>
        <p className="text-lg text-gray-700 mt-2">
          Where your Dream Homes take shape!
        </p>
      </div>

      <div className="mt-5 relative">
        <div className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10">
          <button
            className="bg-white shadow-lg rounded-full p-2 text-2xl font-bold"
            onClick={scrollLeft}
          >
            <IoIosArrowBack />
          </button>
        </div>

        {/* Right Arrow */}
        <div className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10">
          <button
            className="bg-white shadow-lg rounded-full p-2 text-2xl font-bold"
            onClick={scrollRight}
          >
            <IoIosArrowForward />
          </button>
        </div>

        {/* Scrollable Container */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto space-x-4 py-4 px-2 scroll-smooth"
          style={{
            scrollbarWidth: "none", // Firefox
            msOverflowStyle: "none", // Internet Explorer and Edge
          }}
        >
          {blogsData.map((project, i) => (
            <div key={i} className="flex-shrink-0 w-[300px]">
              <BlogCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BlogList;
