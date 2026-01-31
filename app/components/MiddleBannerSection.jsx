import React from 'react'

function MiddleBannerSection() {
  return (
    <section className="relative h-[100vh] bg-cover bg-center bg-fixed headingWithBackground">
        <div className="absolute inset-0 bg-[#020e1275] bg-opacity-50"></div>
        <div className="relative z-10 w-full mx-auto text-white px-6 py-20">
            <div className="h- flex flex-col gap-4 justify-center lg:mt-20 items-center">
                <h1 className="text-4xl text-center font-bold">Market Your Property with Realty</h1>
                <p>
                    No obligation market appraisal for your property today. Our virtual options are 
                    still available if you prefer
                </p>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-16 lg:mt-24">
                    <div className="flex justify-center flex-col">
                        <p className="text-6xl lg:text-8xl font-bold">11+</p>
                        <p className="lg:text-lg font-medium text-center">
                            Years of Business
                        </p>
                    </div>
                    <div className="flex justify-center flex-col">
                        <p className="text-6xl lg:text-8xl font-bold">4130</p>
                        <p className="lg:text-lg font-medium text-center">
                            Properties sold
                        </p>
                    </div>
                    <div className="flex justify-center flex-col">
                        <p className="text-6xl lg:text-8xl font-bold">98%</p>
                        <p className="lg:text-lg font-medium text-center">
                            Happy custormers
                        </p>
                    </div>
                    <div className="flex justify-center flex-col">
                        <p className="text-6xl lg:text-8xl font-bold">1790</p>
                        <p className="lg:text-lg font-medium text-center">
                            5-Stars reviews
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default MiddleBannerSection