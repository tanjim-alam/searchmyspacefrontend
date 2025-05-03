import React, { useRef } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import ProjectCard from "./ProjectCard";

function SimilarProject() {
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
    <div className="w-full mt-4 xl:mt-0 bg-white xl:rounded-md shadow-md">
      <div className="border-b-2 border-gray-300 py-3">
        <p className="text-xl font-semibold text-gray-700 text-center">
          Similar Project
        </p>
      </div>
      <div className="lg:p-5">
        <div className="relative">
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10">
            <button
              className="bg-white text-black cursor-pointer shadow-lg rounded-full p-2 text-2xl font-bold"
              onClick={scrollLeft}
            >
              <IoIosArrowBack />
            </button>
          </div>

          {/* Right Arrow */}
          <div className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10">
            <button
              className="bg-white text-black cursor-pointer shadow-lg rounded-full p-2 text-2xl font-bold"
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
                <ProjectCard />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SimilarProject;
