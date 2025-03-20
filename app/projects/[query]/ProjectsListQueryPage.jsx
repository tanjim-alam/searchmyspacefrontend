"use client";
import ProjectCard2 from "@/app/components/ProjectCard2";
import Spinner from "@/app/components/Spinner";
import { getSearchProject } from "@/app/redux/slices/projectSlice";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function ProjectsListQueryPage({ query }) {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const formattedQuery = query
    .replace(/-/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());


  const { searchProjectList } = useSelector((state) => state.project);

  async function fetchSearchProjects() {
    try {
      setIsLoading(true)
      await dispatch(getSearchProject(formattedQuery));
      setIsLoading(false)
    } catch (error) {
      setIsLoading(false)
      throw new Error(error.message);
    }
  }

  useEffect(() => {
    fetchSearchProjects()
  }, [formattedQuery]);
  return (
    <div className="bg-[#ecf7f3] min-h-[60vh] py-15 xl:py-20">
      {isLoading ? (
        <div className='h-[90vh] w-full flex justify-center items-center'>
        <Spinner />
      </div>
      ): 
      (
        <div className="xl:w-[85%] flex flex-col justify-between gap-4 m-auto">
        <h3 className="text-center font-bold text-2xl lg:text-3xl text-black">
          Your Dream Property in {formattedQuery}
        </h3>
        <div>
          {searchProjectList?.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {searchProjectList?.map((project, i) => (
                <ProjectCard2 key={i} project={project} />
              ))}
            </div>
          ) : (
            <div className="flex justify-center items-center h-full mt-10">
              <p className="text-lg text-center">Properties not found</p>
            </div>
          )}
        </div>
      </div>
      )
      }
    </div>
  );
}

export default ProjectsListQueryPage;
