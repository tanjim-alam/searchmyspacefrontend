"use client"
import React, { useEffect, useRef } from 'react'
import CityCard from './CityCard';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import { getAllCity } from '../redux/slices/citySlice';

function CitySection() {
    const dispatch = useDispatch();
    const scrollRef = useRef(null);
    const {cityList} = useSelector((state)=>state.city);
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

      async function fetchAllCity() {
          try {
              const res = await dispatch(getAllCity());
          } catch (error) {
              throw new Error(error.message);
          }
        };
      
        useEffect(()=>{
          fetchAllCity()
        },[]);

  return (
    <div className="md:w-[90%] w-[95%] m-auto pt-8 pb-16">
        <div className="flex flex-col justify-center">
          <h5 className="text-center font-bold text-2xl lg:text-3xl text-black">
          Popular Choices
          </h5>
          <p className="text-center text-lg text-gray-700 mt-2">
          Where your Dream Homes take shape!
        </p>
        </div>

        <div className="mt-5 relative">
          {/* Left Arrow */}
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10">
            <button
              className="bg-white text-black shadow-lg rounded-full p-2 text-2xl font-bold cursor-pointer"
              onClick={scrollLeft}
            >
              <IoIosArrowBack />
            </button>
          </div>

          {/* Right Arrow */}
          <div className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10">
            <button
              className="bg-white text-black shadow-lg rounded-full p-2 text-2xl font-bold cursor-pointer"
              onClick={scrollRight}
            >
              <IoIosArrowForward />
            </button>
          </div>

          {/* Scrollable Container */}
          <div
            ref={scrollRef}
            className="flex overflow-x-auto space-x-4 py-4 px-2"
            style={{
              scrollBehavior: "smooth",
              scrollbarWidth: "none",
              whiteSpace: "nowrap",
            }}
          >
            {cityList.map((city, i) => (
                <CityCard key={i} city={city} />
            ))}
          </div>
        </div>
      </div>
  )
}

export default CitySection