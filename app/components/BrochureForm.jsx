import React, { useState } from "react";
import axiosInstance from "../utils/axiosInstance";

function BrochureForm() {
    const [isBrochureOpen, setIsBrochureOpen] = useState(false);
    const [isDownloading, setIsDownloading] = useState(false);
    const [leadData, setLeadData] = useState({
      name: "",
      email: "",
      number: "",
    });
    function handleInputOnChange(e) {
      const { name, value } = e.target;
      setLeadData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  
    async function handleSubmit(e) {
      e.preventDefault();
      setIsDownloading(true);
      const { name, email, number } = leadData;
      const data = {
        name,
        email,
        number,
        company_email: "tanjim11alam@gmail.com",
        project_name: project?.projectName,
      };
      try {
        const res = await axiosInstance.post("/smtp/sendlead", data);
        setIsDownloading(false);
        if (res.data.success) {
          alert(res?.data?.message);
          setLeadData({
            name: "",
            email: "",
            number: "",
          });
          setIsBrochureOpen(!isBrochureOpen);
        }
      } catch (error) {
        setIsDownloading(false);
        alert(error.message);
      }
    }
  return (
    <div
      className={`fixed z-50 top-1/3 transition-all duration-500 ease-in-out  ${
        isBrochureOpen ? "left-0" : "left-[-260px] "
      }`}
    >
      <div className="relative justify-center items-center w-[260px]">
        <form
          action=""
          className=" text-black flex flex-col py-7 rounded-tr-md rounded-br-md px-5 gap-4 some-class"
        >
          <h4 className="text-white text-center text-xl font-semibold">
            Download Broucher
          </h4>
          <input
            className="py-1.5 px-2 border-b bg-white border-black outline-none rounded-md"
            type="text"
            placeholder="Name"
            name="name"
            id="name"
            value={leadData.name}
            onChange={handleInputOnChange}
          />
          <input
            className="py-1.5 px-2 border-b bg-white border-black outline-none rounded-md"
            type="text"
            placeholder="Mobile No"
            id="number"
            name="number"
            value={leadData.number}
            onChange={handleInputOnChange}
          />
          <input
            className="py-1.5 px-2 border-b bg-white border-black outline-none rounded-md"
            type="email"
            id="email"
            placeholder="E-Mail Address"
            name="email"
            value={leadData.email}
            onChange={handleInputOnChange}
          />
          <button
            className="text-[#1e4191] bg-white cursor-pointer px-6 py-1 rounded-sm w-full m-auto"
            onClick={handleSubmit}
          >
            {isDownloading ? "Downloading" : "Download"}
          </button>
        </form>
        <div className="rotate-90 absolute right-[-90px] top-20">
          <button
            onClick={() => setIsBrochureOpen(!isBrochureOpen)}
            className="bg-red-600 text-white px-2 py-1 cursor-pointer"
          >
            Download Broucher
          </button>
        </div>
      </div>
    </div>
  );
}

export default BrochureForm;
