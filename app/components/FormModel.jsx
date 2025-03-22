"use client"
import React, { useEffect, useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import LeadForm from "./LeadForm";
import { IoCall } from "react-icons/io5";
import { PiWhatsappLogoBold } from "react-icons/pi";
import Link from "next/link";
import { ImCross } from "react-icons/im";


function FormModel({projectName, heading}) {
  console.log("projectName",projectName, heading);
  const [currentHeading, setCurrentHeading] = useState(heading);

  useEffect(() => {
    setCurrentHeading(heading); // Update when `heading` prop changes
  }, [heading]);
  return (
    <dialog id="formModel" className="modal rounded-none">
      <div className="modal-box p-0 rounded-none">
        <form method="dialog" className="p-0">
          <button className="btn ml-2 text-white font-semibold hover:text-black btn-sm btn-circle btn-ghost absolute right-0 top-0">
            <ImCross/>
          </button>
        </form>
        {/* <div> */}
          <div className=" rounded-none">
            <div className="bg-[var(--primary)] p-2 rounded-none">
              <h4
                className="text-center lg:text-2xl text-xl font-semibold text-white text-shadow"
                id="formHeading"
              >
                {currentHeading || "Enquire Now For More Details"}
              </h4>
            </div>
            <div className="flex">
              <div className="w-[25%] hidden md:flex flex-col gap-4 bg-[#f9f9f9] p-4">
                <div className="flex flex-col justify-center items-center gap-1">
                  <img
                    className="w-[50px]"
                    src="/telephone-call.webp"
                    alt="telephone-call"
                  />
                  <span className="text-xs">Instant Call Back</span>
                </div>
                <div className="flex flex-col justify-center items-center gap-2">
                  <img className="w-[50px]" src="/house.webp" alt="house" />
                  <span className="text-xs">Free visit</span>
                </div>
                <div className="flex flex-col justify-center items-center gap-2">
                  <img className="w-[50px]" src="/rupees.webp" alt="rupees" />
                  <span className="text-xs">Unmatched Price</span>
                </div>
              </div>
              <form
                action=""
                className="lg:w-[75%] w-[100%] flex flex-col p-5 gap-4"
              >
                <input
                  required
                  name="name"
                  className="p-2 border-b border-black outline-none"
                  type="text"
                  placeholder="Name"
                  id="name_1"
                />
                <div className="flex w-full">
                  <select
                    name="country_code"
                    className="outline-none border-b border-black"
                    id="country_code_1"
                  >
                    <option value="+91">+91(IND)</option>
                    <option value="+971">+971(UAE)</option>
                    <option value="+44">+44(UK)</option>
                    <option value="+1">+1(USA)</option>
                  </select>
                  <input
                    required
                    name="number"
                    className="p-2 border-b border-black outline-none"
                    type="text"
                    placeholder="Mobile No"
                    id="number_1"
                  />
                </div>
                <input
                  required
                  name="email"
                  className="p-2 border-b border-black outline-none"
                  type="email"
                  placeholder="E-Mail Address"
                  id="email_1"
                />
                <button
                  className="bg-[var(--primary)] shadow-[0_4px_10px_rgba(0,0,0,0.25)] cursor-pointer px-6 py-1 text-white rounded-sm w-fit m-auto"
                  id="submitBtn_1"
                >
                  Submit Now
                </button>
                <div className="flex justify-between items-center">
                  <div className="bg-[var(--primary)] py-1 lg:px-4 px-3 rounded-md shadow-[0_4px_10px_rgba(0,0,0,0.25)]">
                    <Link
                      className="text-white flex items-center gap-1 text-sm"
                      href={`https://wa.me/+919380660766?text=Hi!%20I%27m%20Interested%20In%20${projectName}%20Please%20Share%20Details.`}
                      target="_blank"
                    >
                      <PiWhatsappLogoBold/>
                      WhatsApp
                    </Link>
                  </div>
                  <div className="bg-[var(--primary)] py-1 lg:px-4 px-3 rounded-md shadow-[0_4px_10px_rgba(0,0,0,0.25)]">
                    <Link className="text-white flex items-center gap-1 text-sm" href="tel:+919380660766">
                    <IoCall/>
                      Call Now
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        {/* </div> */}
      </div>
    </dialog>
  );
}

export default FormModel;
