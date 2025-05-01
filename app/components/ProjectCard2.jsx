import React from "react";
import { FaLayerGroup, FaDownload } from "react-icons/fa";
import { FaLocationPin } from "react-icons/fa6";
import { TbBuildingCommunity } from "react-icons/tb";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Link from "next/link";
import { useRouter } from "next/navigation";

function ProjectCard2({project}) {
    const router = useRouter();
  return (
    <div onClick={()=>router.push(`/${project?.slug}`)}
    className=" shadow rounded flex gap-5 p-3 bg-white cursor-pointer">
      <div className="h-full md:block hidden w-[40%]">
        <img
          className="h-full w-full rounded"
          src={project?.mainImage || "https://protywpv5.live.vithemes.com/wp-content/uploads/2024/08/property-01-780x560.webp"}
          alt=""
        />
      </div>
      <div className="h-full lg:w-[60%] w-full flex flex-col gap-2">
        <div className="flex gap-3">
          <div className="h-full block md:hidden w-[40%]">
            <img
              className="h-full w-full rounded"
              src={project?.mainImage || "https://protywpv5.live.vithemes.com/wp-content/uploads/2024/08/property-01-780x560.webp"}
              alt=""
            />
          </div>
          <div className="w-[60%] md:w-full md:flex md:flex-col md:gap-2">
            <div>
              <h4 className="font-semibold text-black">
              {project?.projectName.substring(0,32)} {project?.projectName?.length > 32 ? "..." : null}
              </h4>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-700">
              <span className="p-1 rounded-full bg-[#dbe4e9]">
                <FaLayerGroup />
              </span>
              <p className="">By {project?.developer?.developer || ""}</p>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-700">
              <span className="p-1 rounded-full bg-[#dbe4e9]">
                <FaLocationPin />
              </span>
              <p className="">{project?.location || ""}</p>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-700">
              <span className="p-1 rounded-full bg-[#dbe4e9]">
                <TbBuildingCommunity />
              </span>
              <p className="">{project?.unitVariants || ""}</p>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-700">
              <p className="text-md font-semibold">₹ {project?.price || ""}</p>
            </div>
          </div>
        </div>
        <button className="some-class transition cursor-pointer text-sm text-white px-4 py-1 font-medium">
          View Details
        </button>
      </div>
    </div>
  );
}

export default ProjectCard2;
