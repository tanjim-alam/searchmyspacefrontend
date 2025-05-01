import React, { useState } from "react";
import { MdAddCall } from "react-icons/md";
import { FaLaptopHouse } from "react-icons/fa";
import { FaMoneyBill1Wave } from "react-icons/fa6";
import axiosInstance from "../utils/axiosInstance";

function LeadForm({ projectName }) {
  const [isSubmiting, setIsSubmiting] = useState(false);
  const [leadData, setLeadData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });
  function handleInputOnChange(e) {
    const { name, value } = e.target;
    setLeadData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleSubmit() {
    setIsSubmiting(true);
    const { name, email, number, message } = leadData;
    const data = {
      name,
      email,
      number,
      message,
      company_email: "tanjim11alam@gmail.com",
      project_name: projectName,
    };
    try {
      const res = await axiosInstance.post("/smtp/sendlead", data);
      setIsSubmiting(false);
      if (res.data.success) {
        alert(res?.data?.message);
        setLeadData({
          name: "",
          email: "",
          number: "",
          message: "",
        });
      }
    } catch (error) {
      setIsSubmiting(false);
      alert(error.message);
    }
  }
  return (
    <div className=" flex flex-col gap-5 bg-white p-4 lg:rounded shadow-md">
      <div className="flex justify-center">
        <img className="w-[150px]" src="/logo1.png" alt="" />
      </div>
      <div>
        <p className="text-center text-xl text-gray-700 font-bold">
          Request a Callback
        </p>
      </div>
      <div className="text-black flex flex-col gap-2">
        <div className="flex flex-col gap-1">
          <label htmlFor="" className="">
            Name*
          </label>
          <input
            className="py-1 px-4 border border-gray-400 rounded-2xl outline-none"
            type="text"
            placeholder="Enter Name*..."
            name="name"
            value={leadData.name}
            onChange={handleInputOnChange}
            required
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="" className="">
            Email*
          </label>
          <input
            className="py-1 px-4 border border-gray-400 rounded-2xl outline-none"
            type="text"
            placeholder="Enter Email*..."
            name="email"
            value={leadData.email}
            onChange={handleInputOnChange}
            required
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="" className="">
            Phone*
          </label>
          <input
            className="py-1 px-4 border border-gray-400 rounded-2xl outline-none"
            type="text"
            placeholder="+9192324..."
            name="number"
            value={leadData.number}
            onChange={handleInputOnChange}
            required
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="" className="">
            Message
          </label>
          <textarea
            className="py-1 px-4 border border-gray-400 rounded-xl outline-none"
            type="text"
            placeholder="Enter Message..."
            name="message"
            value={leadData.message}
            onChange={handleInputOnChange}
          />
        </div>
        <div className="flex flex-col gap-1 mt-2">
          <button
            className="some-class text-white p-1 rounded cursor-pointer"
            onClick={handleSubmit}
          >
            {isSubmiting ? "Submiting" : "Submit"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default LeadForm;
