"use client"
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllDeveloper } from '../redux/slices/developerSlice';
import Link from 'next/link';

function DeveloperList() {
    const dispatch = useDispatch();
    const {developerList} = useSelector((state)=>state.developer);

    async function fetchAllDeveloper() {
        try {
            const res = await dispatch(getAllDeveloper());
        } catch (error) {
            throw new Error(error.message);
        }
      };
    
      useEffect(()=>{
        fetchAllDeveloper()
      },[]);
  return (
    <section>
        <div className="w-[90%] m-auto pt-8 pb-16">
            <div className="flex flex-col justify-center">
                <h2 className="text-center font-bold text-3xl text-black">
                    Leading Real Estate Developers
                </h2>
            </div>
            <div className="mt-6 scroll-wrapper">
                <div className="scroll-content" id="logoContainer">
                    {developerList && developerList?.map((item, i)=>(
                        <Link href={`/propertylist/${item?.slug}`} key={i}>
                        <img 
                        className="min-w-[200px] h-[86px] border rounded-md p-2" 
                        src={item.developerLogo || ""}
                        alt=""/>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    </section>
  )
}

export default DeveloperList