import Link from "next/link";
import React from "react";

function CityCard({city}) {
  return (
    <Link 
    href={`/property/${city?.slug}`}
    className="rounded-md boxShadow2 min-w-[300px]">
      <div className="relative">
        <img
          className="h-[200px] rounded-md"
          src={city.image || ""}
          alt=""
        />
        <div className="absolute flex justify-center items-center bottom-0 p-4 w-full">
          <p className="text-white text-lg bg-[#ffffff3d] py-2 px-4 rounded-md font-semibold">{city?.cityName || ""}</p>
        </div>
      </div>
    </Link>
  );
}

export default CityCard;
