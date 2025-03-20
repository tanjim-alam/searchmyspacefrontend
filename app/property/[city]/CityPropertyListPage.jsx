"use client"
import ProjectCard2 from '@/app/components/ProjectCard2';
import Spinner from '@/app/components/Spinner';
import { getProjectByCityName } from '@/app/redux/slices/projectSlice';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

function CityPropertyListPage({slug}) {
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false);

    const {projectListByCity} = useSelector((state)=>state.project);

    async function fetchProjectByCity() {
        try {
            setIsLoading(true)
            const res = await dispatch(getProjectByCityName(slug));
            setIsLoading(false)
        } catch (error) {
            setIsLoading(false)
            throw new Error(error.message);
        }
    }

    useEffect(()=>{
        fetchProjectByCity()
      },[slug]);
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
          Your Dream Property in {slug}
        </h3>
        <div>
          {projectListByCity?.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {projectListByCity?.map((project, i) => (
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
  )
}

export default CityPropertyListPage