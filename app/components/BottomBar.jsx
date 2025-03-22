import React from 'react'

function BottomBar() {
  return (
    <div className="fixed bottom-0 w-full">
        <div className="lg:hidden md:hidden flex justify-between bg-[var(--primary)] p-1.5">
            <a href="tel:+918317452005" className="bg-[#1e4191] py-0.5 px-3 rounded-md border-l border-r">
                <i className='fa fa-phone-square text-white text-lg'></i>
                <span className="text-white">Call</span>
            </a>
            <button  className="bg-[#1e4191] py-0.5 px-3 rounded-md border-l border-r">
                <i className="fa fa-envelope text-white text-md"></i>
                <span className="text-white">Enquiry</span>
            </button>
            <a href="https://wa.me/+919380660766?text=Hi!%20I%27m%20Interested%20In%20Adarsh%20Forest%20Glen%20Please%20Share%20Details."
                target="_blank" className="bg-[#1e4191] py-0.5 px-3 rounded-md  border-r border-l">
                <i className="fa fa-whatsapp text-[#1e4191] bg-white p-0.5 rounded-sm"></i>
                <span className="text-white">Whatsapp</span>
            </a>
        </div>
    </div>
  )
}

export default BottomBar