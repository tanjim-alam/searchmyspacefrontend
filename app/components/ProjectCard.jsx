import Link from "next/link";
import React, { useState } from "react";
import FormModel from "./FormModel";

function ProjectCard({ project }) {
  const [pName, setPName] = useState("");
  function handleFormModel(e){
    setPName(e);
    document.getElementById("formModel").showModal()
  }
  return (
    <div className=" border border-gray-200 rounded-md  bg-white flex-shrink-0 w-[310px]">
      <Link href={project?.slug || ""}>
        <div className=" relative">
          <img
            className=" rounded-tl-md rounded-tr-md w-full h-[200px] object-cover"
            src={
              project?.mainImage ||
              "https://protywpv5.live.vithemes.com/wp-content/uploads/2024/08/property-01-780x560.webp"
            }
            alt="Property"
          />
          <span className=" absolute top-0 px-3 some-class mt-1 ml-1 text-sm text-white rounded">
            {project?.status || "Pre Lunach"}
          </span>
        </div>
        <div className="px-3 pt-2">
          <h5 className="text-xl font-semibold text-gray-900">
            {project?.projectName.substring(0, 27)}{" "}
            {project?.projectName?.length > 27 ? "..." : null}
          </h5>
          <p className="text-sm text-gray-600 mt-1">
            By {project?.developer?.developer || ""}
          </p>
          <p className="text-sm text-gray-600">{project?.location || ""}</p>

          <div className="flex justify-between items-center bg-gray-100 p-2 rounded-md mt-3">
            <p className="text-sm font-medium text-gray-700">
              {project?.unitVariants.substring(0, 18) || ""}{" "}
              {project?.unitVariants?.length > 18 ? ".." : null}
            </p>
            <p className="text-sm font-medium text-gray-700">
              {project?.sizeRange.substring(0, 18) || ""}{" "}
              {project?.sizeRange?.length > 18 ? ".." : null}
            </p>
          </div>
        </div>
      </Link>
      <div className="flex px-3 pb-2 justify-between items-center mt-3">
        <p className="text-md font-semibold text-gray-700">
          ₹ {project?.price || ""}
        </p>
        <button 
        onClick={()=>handleFormModel(project?.projectName)}
        className="some-class transition cursor-pointer text-sm text-white px-4 py-1 rounded font-medium">
          Enquiry
        </button>
      </div>
      <FormModel projectName={pName}/>
    </div>
  );
}

export default ProjectCard;
