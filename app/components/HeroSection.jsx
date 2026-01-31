"use client"
import { useRouter } from "next/navigation";
import React, { useState, useEffect, useRef } from "react";
import { IoSearch } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { getSearchProject } from "../redux/slices/projectSlice";

function HeroSection() {
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [error, setError] = useState(null);
  const router = useRouter();
  const suggestionBoxRef = useRef();

  // Debounced fetchSuggestions
  useEffect(() => {
    const timer = setTimeout(() => {
      if (query.length > 1) {
        fetchSuggestions(query);
      } else {
        setSuggestions([]);
      }
    }, 300);
    return () => clearTimeout(timer);
  }, [query]);

  // Close suggestions on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (suggestionBoxRef.current && !suggestionBoxRef.current.contains(e.target)) {
        setSuggestions([]);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  // Fetch search suggestions
  const fetchSuggestions = async (searchQuery) => {
    try {
      const response = await fetch(
        `https://searchmyspacebackend-production.up.railway.app/api/v1/project/suggestions?query=${searchQuery}`
      );
      const data = await response.json();
      if (response.ok) {
        setSuggestions(data.suggestions || []);
      } else {
        setSuggestions([]);
      }
    } catch (error) {
      console.error("Error fetching suggestions:", error);
      setSuggestions([]);
    }
  };

  // Handle Search Button / Enter
  const handleSearch = async () => {
    if (!query) return;

    try {
      setError(null);
      const response = await dispatch(getSearchProject(query));

      if (response?.payload?.success) {
        if (response.payload.project) {
          router.push(`/${response.payload.project.slug}`);
        } else if (response.payload.projects) {
          const formattedQuery = query.toLowerCase().replace(/\s+/g, "-");
          router.push(`/projects/${formattedQuery}`);
        } else {
          setError("No matching projects found");
        }
      } else {
        setError(response.payload?.message || "No results found");
      }
    } catch (err) {
      setError("Failed to fetch results");
    }
  };

  return (
    <div className="heroContainer w-full h-[40vh] sm:h-[40vh] md:h-[30vh] lg:h-[30vh] xl:h-[70vh] relative">
      <div className="flex justify-center h-full w-full items-center">
        <h3 className="text-center mt-5 lg:mt-0 text-shadow text-3xl lg:text-5xl font-extrabold text-white">
          ACQUIRE HOMES DIRECTLY <br />
          <span className="text-3xl py-1 px-5 rounded lg:bg-[var(--primary)]">
            FROM DEVELOPERS
          </span>
        </h3>
      </div>

      <div className="w-[100%] absolute bottom-[-33px] sm:bottom-[-60px] md:bottom-[-30px] lg:bottom-[-65px]">
        <div className="lg:w-[80%] xl:w-[58%] w-[90%] m-auto bg-white shadow-md rounded-md z-50">
          <div ref={suggestionBoxRef}>
            <div className="relative">
              <div className="flex justify-center gap-2 px-3 lg:px-5 lg:pt-5 py-4 lg:py-0">
                <input
                  type="text"
                  aria-label="Search projects"
                  className="w-full p-2 lg:border-b-3 text-black border-thirdry rounded-sm outline-none"
                  placeholder="Search Dream..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                />
                <button
                  className="hidden md:block some-class px-6 text-white rounded-4xl cursor-pointer"
                  onClick={handleSearch}
                >
                  Search
                </button>
                <button
                  className="block md:hidden some-class px-6 text-white rounded-4xl cursor-pointer"
                  onClick={handleSearch}
                  aria-label="Search"
                >
                  <IoSearch />
                </button>
              </div>

              {/* Suggestions Dropdown */}
              {suggestions.length > 0 && (
                <ul className="absolute w-full bg-white shadow-md mt-2 overflow-y-auto max-h-60 z-50" role="listbox">
                  {suggestions.map((item) => (
                    <li
                      key={item._id}
                      className="p-2 hover:bg-gray-200 cursor-pointer text-black"
                      role="option"
                      onClick={async () => {
                        setQuery(item.name);
                        setSuggestions([]);
                        try {
                          const response = await dispatch(getSearchProject(item.name));
                          if (response?.payload?.success) {
                            if (response.payload.project) {
                              router.push(`/${response.payload.project.slug}`);
                            } else if (response.payload.projects) {
                              const formatted = item.name.toLowerCase().replace(/\s+/g, "-");
                              router.push(`/projects/${formatted}`);
                            } else {
                              setError("No matching result");
                            }
                          } else {
                            setError("No result found");
                          }
                        } catch (err) {
                          setError("Failed to fetch result");
                        }
                      }}
                    >
                      {item.name}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="lg:flex justify-between mt-4 text-sm text-gray-600 cursor-pointer hidden px-5 pb-5">
              <span className="border py-1 px-3 rounded-full">Apartments</span>
              <span className="border py-1 px-3 rounded-full">Villas</span>
              <span className="border py-1 px-3 rounded-full">Plots</span>
              <span className="border py-1 px-3 rounded-full">Ready To Move</span>
              <span className="border py-1 px-3 rounded-full">Under Construction</span>
              <span className="border py-1 px-3 rounded-full">New Launch</span>
              <span className="border py-1 px-3 rounded-full">Upcoming</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
