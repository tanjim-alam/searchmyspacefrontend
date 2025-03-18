import React from 'react'
import { MdRealEstateAgent } from "react-icons/md";

function TrustedSection() {
  return (
    <div className="some-class">
    <div className="w-[90%] m-auto flex justify-between">
        <div className="xl:w-[50%] w-[100%] pb-5">
            <h3 className="text-4xl text-white font-bold mt-10">
                Trusted by 100+ Million buyers
            </h3>
            <p className="text-white mt-2 font-medium">
                We connect you directly to the person that knows the most about a property for sale, the listing agent
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
                <div className="bg-white flex flex-col gap-4 p-6 rounded-xl h-fit">
                    <div className="flex gap-2 items-center">
                        <div>
                        <p className=' text-white some-class text-3xl p-3 rounded-full'>
                            <MdRealEstateAgent/>
                            </p>
                        </div>
                        <div>
                            <p className="text-xl font-bold">
                                Explore Great Neighborhoods
                            </p>
                        </div>
                    </div>
                    <div>
                        <p className="font-medium text-gray-600">
                            Discover exceptional properties in prime locations with expert real estate guidance.
                        </p>
                    </div>
                    <div>
                        <button className="text-[#1face2] cursor-pointer hover:border-b-2 hover:border-[#8f3569] font-medium">Learn more</button>
                    </div>
                </div>
                <div className="bg-white flex flex-col gap-4 p-6 rounded-xl h-fit">
                    <div className="flex gap-2 items-center">
                        <div>
                        <p className=' text-white some-class text-3xl p-3 rounded-full'>
                            <MdRealEstateAgent/>
                            </p>
                        </div>
                        <div>
                            <p className="text-xl font-bold">
                                Find the Best Agent for You
                            </p>
                        </div>
                    </div>
                    <div>
                        <p className="font-medium text-gray-600">
                            Connect with top real estate agents for a seamless buying or selling experience.
                        </p>
                    </div>
                    <div>
                        <button className="text-[#1face2] cursor-pointer hover:border-b-2 hover:border-[#8f3569] font-medium">Learn more</button>
                    </div>
                </div>
                <div className="bg-white flex flex-col gap-4 p-6 rounded-xl h-fit">
                    <div className="flex gap-2 items-center">
                        <div>
                        <p className=' text-white some-class text-3xl p-3 rounded-full'>
                            <MdRealEstateAgent/>
                            </p>
                        </div>
                        <div>
                            <p className="text-xl font-bold">
                                Find highly rated apartments
                            </p>
                        </div>
                    </div>
                    <div>
                        <p className="font-medium text-gray-600">
                            Explore top-rated apartments with premium amenities in the best locations.
                        </p>
                    </div>
                    <div>
                        <button className="text-[#1face2] cursor-pointer hover:border-b-2 hover:border-[#8f3569] font-medium">Learn more</button>
                    </div>
                </div>
                <div className="bg-white flex flex-col gap-4 p-6 rounded-xl h-fit">
                    <div className="flex gap-2 items-center">
                        <div>
                        <p className=' text-white some-class text-3xl p-3 rounded-full'>
                            <MdRealEstateAgent/>
                            </p>
                        </div>
                        <div>
                            <p className="text-xl font-bold">
                                Search Recent Property Sales
                            </p>
                        </div>
                    </div>
                    <div>
                        <p className="font-medium text-gray-600">
                            Browse recent property sales to stay updated on market trends and prices.
                        </p>
                    </div>
                    <div>
                        <button className="text-[#1face2] cursor-pointer hover:border-b-2 hover:border-[#8f3569] font-medium">Learn more</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="trustedBox2 w-[50%] hidden xl:block">
            <img className="mt-32" src="https://livexcellence.com/Assist/Trusted.webp" alt=""/>
        </div>
    </div>
 </div>
  )
}

export default TrustedSection