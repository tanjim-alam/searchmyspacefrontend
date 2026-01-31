import Link from "next/link";
import React from "react";

function ProjectMiniNavbar() {
  return (
    <ul
      className="flex md:justify-between text-black overflow-x-scroll w-full gap-3 justify-start"
      style={{
        scrollBehavior: "smooth",
        scrollbarWidth: "none",
        whiteSpace: "nowrap",
      }}
    >
      <li className="whitespace-nowrap">
        <Link className="w-full" href={"#overview"}>
          Overview
        </Link>
      </li>
      <li className="whitespace-nowrap">
        <Link className="w-full" href={"#amenities"}>
          Amenities
        </Link>
      </li>
      <li className="whitespace-nowrap">
        <Link className="w-full" href={"#paymentsplan"}>
          Payments Plan
        </Link>
      </li>
      <li className="whitespace-nowrap">
        <Link className="w-full" href={"#gallery"}>
          Gallery
        </Link>
      </li>
      <li className="whitespace-nowrap">
        <Link className="w-full" href={"#location"}>
          Location
        </Link>
      </li>
      <li className="whitespace-nowrap">
        <Link className="w-full text-center" href={"#aboutdeveloper"}>
          About Developer
        </Link>
      </li>
      <li className="whitespace-nowrap">
        <Link className="w-full" href={"#emi"}>
          EMI
        </Link>
      </li>
    </ul>
  );
}

export default ProjectMiniNavbar;
