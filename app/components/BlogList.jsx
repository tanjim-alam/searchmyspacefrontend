"use client";
import React, { useEffect, useRef } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import BlogCard from "./BlogCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllBlogs } from "../redux/slices/blogSlice";

function BlogList() {
  const scrollRef = useRef(null);
  const dispatch =  useDispatch();
  const {blogList} = useSelector((state)=>state.blog);
  async function fetchBlogList() {
    try {
      await dispatch(getAllBlogs())
    } catch (error) {
      throw new Error(error.message)
    }
  }

  useEffect(()=>{
    fetchBlogList()
  },[dispatch]);

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
        News & Articles
        </h5>
        <p className="text-lg text-gray-700 mt-2">
        Stay updated on fresh insights into real estate trends!
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
            scrollbarWidth: "none", 
            msOverflowStyle: "none",
          }}
        >
          {blogList.map((blog, i) => (
            <div key={i} className="flex-shrink-0 w-[300px]">
              <BlogCard blog={blog} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BlogList;
