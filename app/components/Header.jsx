"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { getAllCity } from "../redux/slices/citySlice"; // Correct import

function Header() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { cityList } = useSelector((state) => state.city); // Access cityList from Redux

  // Handle scrolling for sticky header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fetch city data only once on component mount
  useEffect(() => {
    dispatch(getAllCity()); // Only dispatch once when the component is mounted
  }, [dispatch]);

  // Handle change in the city select dropdown
  const handleChange = (e) => {
    const selectedValue = e.target.value;
    router.push(`/property/${selectedValue}`);
  };

  return (
    <div className={`w-full bg-gradient-to-r some-class lg:px-6 shadow-lg fixed top-0 left-0 z-50`}>
      <div className="py-2 flex justify-between items-center">
        <div className="flex items-center pl-3 lg:pl-10 gap-6">
          <div>
            <Link href="/">
              <img
                src="/logo1.png"
                alt="Logo"
                className="w-[150px] transition-transform duration-300 hover:scale-105"
              />
            </Link>
          </div>
          <div>
            <select
              onChange={handleChange}
              className="border-b-2 border-white rounded-b-xl bg-transparent px-4 py-1 focus:ring-black text-white focus:text-black text-lg focus:outline-none"
            >
              <option>India</option>
              {cityList &&
                cityList?.map((item, i) => (
                  <option key={i} value={item?.slug}>
                    {item?.cityName}
                  </option>
                ))}
            </select>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div className="lg:flex gap-4 text-white font-medium hidden">
            <Link href={"/about"} className="hover:text-yellow-300 transition-colors duration-200">
              About Us
            </Link>
            <Link href={"/contact"} className="hover:text-yellow-300 transition-colors duration-200">
              Contact Us
            </Link>
            <Link href={"/career"} className="hover:text-yellow-300 transition-colors duration-200">
              Career
            </Link>
          </div>
          <div>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white p-2 transition-colors duration-300"
            >
              <FaBarsStaggered size={24} />
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <div
        className={`bg-black fixed top-0 right-0 z-50 w-[300px] h-screen p-3 mobileNavlinkContainer transition-all duration-500 ease-in-out 
                    ${isMenuOpen ? "transform translate-x-0 opacity-100" : "transform translate-x-full opacity-0"}`}
      >
        <div className="flex items-center justify-between border-b-3 border-gray-400 pb-3">
          <img
            src="/logo1.png"
            alt="Logo"
            className="w-[150px] transition-transform duration-300 hover:scale-105"
          />
          <button
            onClick={() => setIsMenuOpen(false)}
            className="text-white text-3xl font-semibold cursor-pointer"
          >
            <IoCloseSharp />
          </button>
        </div>
        <div>
          <ul className="text-white flex flex-col gap-2 mt-4">
            <li>
              <Link href={"/about"} className="hover:text-yellow-300 transition-colors duration-200">
                About Us
              </Link>
            </li>
            <li>
              <Link href={"/contact"} className="hover:text-yellow-300 transition-colors duration-200">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href={"/career"} className="hover:text-yellow-300 transition-colors duration-200">
                Career
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
