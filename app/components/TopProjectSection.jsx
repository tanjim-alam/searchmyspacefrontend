"use client"
import React, { useRef, useEffect, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import ProjectCard from "./ProjectCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllProjects } from "../redux/slices/projectSlice";

function TopProjectSection() {
  const scrollRef = useRef(null);
  const dispatch = useDispatch()
  const autoScrollInterval = useRef(null);

  const propertiesData = [
    {
      id: 1,
      name: "Adarsh Lumina",
      developer: "Adarsh Group",
      location: "Sarjapur Bangalore",
      UnitVariants: "3 BHK",
      area: "1860",
      price: "2.06Cr",
      image: "./Assist/Lumina.jpg",
    },
    {
      id: 2,
      name: "Prestige Park Grove",
      developer: "Prestige Group",
      location: "Whitefield Bangalore",
      UnitVariants: "3, 3.5 & 4 BHK",
      area: "1067 - 3677 SQ. FT.",
      price: "1.30 Cr. - 4.04 Cr.*",
      image: "./Assist/prestigeparkgrove.jpg",
    },
    {
      id: 3,
      name: "Sobha Crystal Meadows",
      developer: "Sobh Group",
      location: "Sarjapur Bangalore",
      UnitVariants: "4BHK Triplex",
      area: "3335",
      price: "7.5 Cr*",
      image: "./Assist/meadows.jpg",
    },
    {
      id: 4,
      name: "Lodha Eden Garden",
      developer: "Lodha Group",
      location: "Hosa Road Bangalore",
      UnitVariants: "3, 3.5, 4 & 4.5",
      area: "",
      price: "2.30 Cr*",
      image: "./Assist/lodhaeden.png",
    },
    {
      id: 5,
      name: "Birla Evara",
      developer: "Birla Group",
      location: "Sarjapur Road Bangalore",
      UnitVariants: "1, 2, 3 and 4 BHK",
      area: "27–30 acres",
      price: "0.77 Cr. - 0.82 Cr*",
      image: "./Assist/Birla.jpg",
    },
  ];

  const {projectList} = useSelector((state)=>state.project);

  async function fetchProjectData() {
    try {
      const res = await dispatch(getAllProjects());
    } catch (error) {
      throw new Error(error.message)
    }
  }

  useEffect(()=>{
    fetchProjectData()
  },[]);

  // Duplicate data to create an infinite loop effect
  const duplicatedData = [...propertiesData, ...propertiesData];

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

  const startAutoScroll = () => {
    autoScrollInterval.current = setInterval(() => {
      if (scrollRef.current) {
        const container = scrollRef.current;

        if (container.scrollLeft >= container.scrollWidth / 2) {
          // Reset scroll to start smoothly when it reaches the middle
          container.scrollTo({ left: 0, behavior: "instant" });
        } else {
          container.scrollBy({ left: 320, behavior: "smooth" });
        }
      }
    }, 1000);
  };

  useEffect(() => {

    // startAutoScroll();

    return () => clearInterval(autoScrollInterval.current);
  }, []);

  const stopAutoScroll = () => {
    clearInterval(autoScrollInterval.current);
  };

  const resumeAutoScroll = () => {
    startAutoScroll();
  };

  return (
    <div>
      <div className="md:w-[90%] w-[95%] m-auto pt-8 pb-16">
        <div className="flex flex-col justify-center">
          <h5 className="text-center font-bold text-2xl lg:text-3xl text-black">
          Most Demanding Projects
          </h5>
          <p className="text-center text-lg text-gray-700 mt-2">
          Explore prime properties and picks for you!
          </p>
        </div>
        <div className="mt-5 relative">
          {/* Left Arrow */}
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10">
            <button
              className="bg-white shadow-lg rounded-full p-2 text-2xl font-bold cursor-pointer"
              onClick={scrollLeft}
            >
              <IoIosArrowBack />
            </button>
          </div>

          {/* Right Arrow */}
          <div className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10">
            <button
              className="bg-white shadow-lg rounded-full p-2 text-2xl font-bold cursor-pointer"
              onClick={scrollRight}
            >
              <IoIosArrowForward />
            </button>
          </div>

          {/* Scrollable Container */}
          <div
            ref={scrollRef}
            className="flex overflow-x-auto space-x-4 py-4 px-2"
            // onMouseEnter={stopAutoScroll}
            // onMouseLeave={resumeAutoScroll}
            style={{
              scrollBehavior: "smooth",
              scrollbarWidth: "none",
              whiteSpace: "nowrap",
            }}
          >
            {projectList?.map((project, i) => (
            //   <div key={i} className="flex-shrink-0 w-[300px]">
                <ProjectCard key={i} project={project} />
            //   </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopProjectSection;
