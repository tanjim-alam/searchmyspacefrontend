import React from 'react'
import { GiSpookyHouse, GiVillage } from "react-icons/gi";
import { SiTalenthouse } from "react-icons/si";
import { PiBuildingApartmentBold ,PiFarm} from "react-icons/pi";
import { LuHotel } from "react-icons/lu";
import { AiOutlineBoxPlot } from "react-icons/ai";

function PropertyTypeSection() {
  return (
    <div className="md:w-[90%] w-[95%] m-auto py-4 mt-20">
       <div className="flex flex-col justify-center">
        <h2 className="text-center font-bold text-2xl lg:text-3xl text-black">
            Property Type
        </h2>
        <p className="text-center text-lg text-gray-700 mt-2">
            Thousands of luxury home enthusiasts just like you visit our website.
        </p>
       </div>
       <div className="mt-6 scroll-wrapper1">
                <div className="flex overflow-x-auto space-x-4 py-4 px-2" 
                style={{
                    scrollBehavior: "smooth",
                    scrollbarWidth: "none",
                    whiteSpace: "nowrap",
                  }}
                >
                    <div className="flex flex-col w-[130px] lg:min-w-[150px] shadow-md border-2 border-[var(--primary)] gap-2 items-center hover:boxShadow p-4 rounded-md cursor-pointer group"                    >
                        <span className='text-4xl p-3 border-2 border-[var(--primary)] text-[var(--primary)]  rounded-full'>
                            <GiSpookyHouse/>
                        </span>
                        <span className="text-lg font-semibold text-[var(--primary)]">
                        Penthouse
                        </span>
                    </div>
                    <div className="flex flex-col w-[130px] lg:min-w-[150px] shadow-md border-2 border-[var(--primary)] gap-2 items-center hover:boxShadow p-4 rounded-md cursor-pointer group"                    >
                        <span className='text-4xl p-3 border-2 border-[var(--primary)] text-[var(--primary)]  rounded-full'>
                            <SiTalenthouse/>
                        </span>
                        <span className="text-lg font-semibold text-[var(--primary)]">
                        Townhouse
                        </span>
                    </div>
                    <div className="flex flex-col w-[130px] lg:min-w-[150px] shadow-md border-2 border-[var(--primary)] gap-2 items-center hover:boxShadow p-4 rounded-md cursor-pointer group"                    >
                        <span className='text-4xl p-3 border-2 border-[var(--primary)] text-[var(--primary)]  rounded-full'>
                            <GiVillage/>
                        </span>
                        <span className="text-lg font-semibold text-[var(--primary)]">
                        Villa
                        </span>
                    </div>
                    <div className="flex flex-col w-[130px] lg:min-w-[150px] shadow-md border-2 border-[var(--primary)] gap-2 items-center hover:boxShadow p-4 rounded-md cursor-pointer group"                    >
                        <span className='text-4xl p-3 border-2 border-[var(--primary)] text-[var(--primary)]  rounded-full'>
                            <GiSpookyHouse/>
                        </span>
                        <span className="text-lg font-semibold text-[var(--primary)]">
                        Apartment
                        </span>
                    </div>
                    <div className="flex flex-col w-[130px] lg:min-w-[150px] shadow-md border-2 border-[var(--primary)] gap-2 items-center hover:boxShadow p-4 rounded-md cursor-pointer group"                    >
                        <span className='text-4xl p-3 border-2 border-[var(--primary)] text-[var(--primary)]  rounded-full'>
                            <PiBuildingApartmentBold/>
                        </span>
                        <span className="text-lg font-semibold text-[var(--primary)]">
                        Homestay
                        </span>
                    </div>
                    <div className="flex flex-col w-[130px] lg:min-w-[150px] shadow-md border-2 border-[var(--primary)] gap-2 items-center hover:boxShadow p-4 rounded-md cursor-pointer group"                    >
                        <span className='text-4xl p-3 border-2 border-[var(--primary)] text-[var(--primary)]  rounded-full'>
                            <AiOutlineBoxPlot/>
                        </span>
                        <span className="text-lg font-semibold text-[var(--primary)]">
                        Land/Plots
                        </span>
                    </div>
                    <div className="flex flex-col w-[130px] lg:min-w-[150px] shadow-md border-2 border-[var(--primary)] gap-2 items-center hover:boxShadow p-4 rounded-md cursor-pointer group"                    >
                        <span className='text-4xl p-3 border-2 border-[var(--primary)] text-[var(--primary)]  rounded-full'>
                            <PiFarm/>
                        </span>
                        <span className="text-lg font-semibold text-[var(--primary)]">
                        Farm
                        </span>
                    </div>
                </div>
            </div>
    
    </div>
  )
}

export default PropertyTypeSection