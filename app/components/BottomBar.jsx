import Link from 'next/link'
import React from 'react'
import { IoCall, IoMail } from 'react-icons/io5'
import { PiWhatsappLogoBold } from 'react-icons/pi'

function BottomBar() {
  return (
    <div className="fixed bottom-0 w-full">
        <div className="lg:hidden md:hidden flex justify-between bg-[var(--primary)] p-1.5">
          <Link
            href="tel:+918317452005"
            className="bg-[var(--primary)] text-white flex items-center gap-1 py-0.5 px-3 rounded-md border-l border-r"
          >
            <IoCall />
            <span className="text-white">Call</span>
          </Link>
          <button
            className="bg-[var(--primary)] text-white flex items-center gap-1 py-0.5 px-3 rounded-md border-l border-r"
          >
            <IoMail />
            <span className="text-white">Enquiry</span>
          </button>
          <Link
            href="https://wa.me/+919380660766?text=Hi!%20I%27m%20Interested%20In%20Adarsh%20Forest%20Glen%20Please%20Share%20Details."
            target="_blank"
            className="bg-[var(--primary)] text-white flex items-center gap-1 py-0.5 px-3 rounded-md  border-r border-l"
          >
            <PiWhatsappLogoBold />
            <span className="text-white">Whatsapp</span>
          </Link>
        </div>
      </div>
  )
}

export default BottomBar