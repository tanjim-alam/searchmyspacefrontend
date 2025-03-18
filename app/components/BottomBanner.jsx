import React from 'react'

function BottomBanner() {
  return (
    <div className="w-[90%] m-auto py-10">
        <div className="bottomBannerContainer h-[40vh] md:h-[30vh] lg:h-[30vh] xl:h-[50vh] rounded-2xl flex flex-col justify-center items-center">
            <div>
                <h3 className="lg:text-5xl text-2xl md:text-4xl text-white text-center font-bold">Are you selling or
                    renting your property?
                </h3>
                <p className="text-lg text-center font-medium mt-5 text-gray-300">
                    Thousands of luxury home enthusiasts just like you visit our website.
                </p>
            </div>
            <div className="mt-5">
                <button className="bg-white py-2 px-4 font-medium text-lg rounded-md text-[#1face2] cursor-pointer">
                    Request your free appraisal
                </button>
            </div>
        </div>
    </div>
  )
}

export default BottomBanner