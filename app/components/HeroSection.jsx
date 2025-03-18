"use client"
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import { IoSearch } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { getSearchProject } from "../redux/slices/projectSlice";

function HeroSection() {
  const dispatch = useDispatch()
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [error, setError] = useState(null);
  const router = useRouter();

  useEffect(() => {
    if (query.length > 1) {
      fetchSuggestions(query);
    } else {
      setSuggestions([]);
    }
  }, [query]);

  // Fetch search suggestions
  const fetchSuggestions = async (searchQuery) => {
    try {
      const response = await fetch(`http://localhost:8082/api/v1/project/suggestions?query=${searchQuery}`);
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

  // Handle search function
  const handleSearch = async () => {
    if (!query) return;

    try {
      setError(null);
      // const response = await fetch(`http://localhost:8082/api/v1/project/searchs?query=${query}`);
      // const data = await response.json();

      const response = await dispatch(getSearchProject(query));

      if (response?.payload?.success) {
        if (response?.payload?.project) {
          router.push(`/${response?.payload?.project.slug}`);
        } 
        else if(response?.payload?.projects){
          const formattedQuery = query.toLowerCase().replace(/\s+/g, "-");
          router.push(`/projects/${formattedQuery}`);
        }
        
        else {
          setSuggestions(data.projects || []);
        }
      } else {
        setSuggestions([]);
        setError(data.message || "No results found");
      }
    } catch (error) {
      setError("Failed to fetch results");
    }
  };

  return (
    <div className="heroContainer w-full h-[30vh] sm:h-[40vh] md:h-[30vh] lg:h-[30vh] xl:h-[70vh] relative">
        <div className="flex justify-center h-full w-full items-center">
        <h3 className="text-center text-shadow text-5xl font-extrabold text-white">
            ACQUIRE HOMES DIRECTLY  <br /> <span className=" text-3xl py-1 px-5 rounded bg-[var(--primary)]">FROM DEVELOPERS</span>
        </h3>
        </div>
      <div className="w-[100%] absolute bottom-[-45px] sm:bottom-[-60px]">
        <div className="lg:w-[80%] xl:w-[58%] w-[90%] m-auto bg-white shadow-md rounded-md z-50">
          <div className="">
            <div className="relative">
              <div className="flex justify-center gap-2 px-5 pt-5">
                <input
                  type="text"
                  className="w-full p-2 border-b-3 border-thirdry rounded-sm outline-none"
                  placeholder="Search Dream..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
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
                >
                  <IoSearch />
                </button>
              </div>

              {/* Search Suggestions */}
              {suggestions.length > 0 && (
                <ul className="absolute w-full bg-white shadow-md mt-2 overflow-y-auto">
                  {suggestions.map((item) => (
                    <li
                      key={item._id}
                      className="p-2 hover:bg-gray-200 cursor-pointer"
                      onClick={() => {
                        setQuery(item.name);
                        setSuggestions([]);
                      }}
                    >
                      {item.name}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Search Results Error */}
            {error && <p className="text-red-500 mt-4">{error}</p>}

            {/* Categories */}
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
