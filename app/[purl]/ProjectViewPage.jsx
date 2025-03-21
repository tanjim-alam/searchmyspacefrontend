"use client";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProject } from "../redux/slices/projectSlice";
import LeadForm from "../components/LeadForm";
import { FaLayerGroup, FaDownload } from "react-icons/fa";
import { FaLocationPin } from "react-icons/fa6";
import { TbBuildingCommunity } from "react-icons/tb";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import BlogCard from "../components/BlogCard";
import ProjectCard from "../components/ProjectCard";
import EmiCalculator from "../components/EmiCalculator";
import ImageModel from "../components/ImageModel";
import Link from "next/link";
import Spinner from "../components/Spinner";
import FormModel from "../components/FormModel";
import BottomBar from "../components/BottomBar";
import { IoCall, IoMail } from "react-icons/io5";
import { PiWhatsappLogoBold } from "react-icons/pi";


function ProjectViewPage({ purl }) {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { project } = useSelector((state) => state.project);
  async function fetchProjectData() {
    try {
      setIsLoading(true);
      const res = await dispatch(getProject(purl));
      if(res.error){
        setError(res.error.message);
      }
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      throw new Error(error.message);
    }
  }
  useEffect(() => {
    fetchProjectData();
  }, [purl]);

  const amenitiesData = [
    { id: 1, name: "Gymnasium", image: "/gym.svg", alt: "Gymnasium" },
    { id: 2, name: "Swimming Pool", image: "/swm.svg", alt: "Swimming Pool" },
    { id: 3, name: "Yoga Pavilion", image: "/yoga.svg", alt: "Yoga Pavilion" },
    {
      id: 4,
      name: "Video Door Phone",
      image: "/videos.svg",
      alt: "Video Door Phone",
    },
    {
      id: 5,
      name: "Kids Activity Zone",
      image: "/kids.svg",
      alt: "Kids Activity Zone",
    },
    { id: 6, name: "Mini Theater", image: "/mine.svg", alt: "Mini Theater" },
    { id: 7, name: "Aerobics Room", image: "/tennis.svg", alt: "Tennis Court" },
    {
      id: 8,
      name: "Indoor Games Room",
      image: "/chess.svg",
      alt: "Indoor Games Room",
    },
    { id: 9, name: "Club House", image: "/disco-ball.svg", alt: "Club House" },
    { id: 10, name: "Dance/Music", image: "/dance.svg", alt: "Dance/Music" },
    {
      id: 11,
      name: "24/7 CCTV Monitoring",
      image: "/cctv.svg",
      alt: "24/7 CCTV Monitoring",
    },
    { id: 12, name: "Jogging Track", image: "/jog.svg", alt: "Jogging Track" },
  ];

  const scrollRef = useRef(null);

  const blogsData = [1, 1, 2, 3, 4];
  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -320, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 320, behavior: "smooth" });
    }
  };

  const [currViewImage, setCurrViewImage] = useState(null);
  const handleImageClick = (item) => {
    setCurrViewImage(item); // Update the current image
    const modal = document.getElementById("imageModel");
    if (modal) {
      modal.showModal(); // Show the modal
    }
  };
  const [isBrochureOpen,setIsBrochureOpen] = useState(false);

  const [formModelHeading, setFormModelHeading] = useState("")
  // function handleFormModel(e){
  //   setFormModelHeading(e);
  //   document.getElementById("formModel").showModal()
  // }
  function handleFormModel(e) {
    setFormModelHeading(e);
    
    const modal = document.getElementById("formModel");
    modal.close(); // Close first to force re-render
    setTimeout(() => modal.showModal(), 50); // Reopen after state update
  }
  return (
    <>
    <div className="bg-[#dbe4e9] min-h-[60vh] lg:py-15 xl:py-20">
      {isLoading ? (
        <div className='h-[90vh] w-full flex justify-center items-center'>
          <Spinner />
        </div>
      ) : (
        <>
        {
          error ? <p
          className="text-center text-lg font-semibold"
          >{error}</p>: (
            <>
          <div className="xl:w-[85%] flex flex-col lg:flex-row justify-between gap-4 m-auto">
            <div className="xl:w-[72%] w-full flex flex-col xl:gap-4">
              <div className="w-full lg:hidden block bg-white py-5 px-3 shadow z-40 sticky top-15">
                <ul className="flex md:justify-between overflow-x-scroll w-full gap-3 justify-start"
                style={{
                  scrollBehavior: "smooth",
                  scrollbarWidth: "none",
                  whiteSpace: "nowrap",
                }}
                >
                  <li className="whitespace-nowrap">
                    <Link className="w-full" href={"#overview"}>
                      Overview
                    </Link>
                  </li>
                  <li className="whitespace-nowrap">
                    <Link className="w-full" href={"#amenities"}>
                      Amenities
                    </Link>
                  </li>
                  <li className="whitespace-nowrap">
                    <Link className="w-full" href={"#paymentsplan"}>
                      Payments Plan
                    </Link>
                  </li>
                  <li className="whitespace-nowrap">
                    <Link className="w-full" href={"#gallery"}>
                      Gallery
                    </Link>
                  </li>
                  <li className="whitespace-nowrap">
                    <Link className="w-full" href={"#location"}>
                      Location
                    </Link>
                  </li>
                  <li className="whitespace-nowrap">
                    <Link
                      className="w-full text-center"
                      href={"#aboutdeveloper"}
                    >
                      About Developer
                    </Link>
                  </li>
                  <li className="whitespace-nowrap">
                    <Link className="w-full" href={"#emi"}>
                      EMI
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="pt-14 lg:pt-0 xl:pt-0">
                <img
                  className="w-full h-[200px] md:h-[300px] lg:h-[400px] xl:rounded-md"
                  src={
                    project?.mainImage}
                  alt=""
                />
              </div>
              <span className="bg-[var(--primary)] text-white text-center block md:hidden drop-shadow-md p-1"
               style={{
                textShadow: "1px 2px 3px rgba(1, 0, 1, 1)"
              }}
              >
                Booking Open
              </span>
              <div className="w-full bg-white xl:rounded-md md:p-5 p-0 shadow-md">
                <div>
                  <h1 className="text-3xl pt-2 md:pt-0 font-bold text-center md:text-start text-gray-700"
                  style={{
                    textShadow: "1px 1px 3px rgba(0, 0, 0, 0.8)"
                  }}
                  >
                    {project?.projectName || ""}
                  </h1>
                </div>
                <div className="flex flex-col lg:flex-row justify-between lg:items-center mt-2">
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center text-shadow justify-center md:justify-start bg-[var(--primary)] md:bg-transparent gap-2 text-md py-1 md:py-0 text-white md:text-gray-700">
                      <span className="p-1 rounded-full bg-[#dbe4e9] text-black">
                        <FaLayerGroup />
                      </span>
                      <p className="">
                        By {project?.developer?.developer || ""}
                      </p>
                    </div>
                    <div className="flex items-center text-shadow justify-center md:justify-start bg-[var(--primary)] md:bg-transparent gap-2 text-md py-1 md:py-0 text-white md:text-gray-700">
                      <span className="p-1 rounded-full bg-[#dbe4e9] text-black">
                        <FaLocationPin />
                      </span>
                      <p className="">
                        {project?.location || ""}, {project?.city?.cityName}
                      </p>
                    </div>
                    <div className="mt-3 flex justify-center md:hidden">
                  <button 
                  onClick={()=>handleFormModel("Download Brochure")}
                  className="some-class py-2 px-4 text-white cursor-pointer flex justify-center items-center rounded gap-2 text-sm">
                    <FaDownload /> Download Brochure
                  </button>
                </div>
                <div className="mt-2 flex justify-center md:hidden">
                  <button 
                  onClick={()=>handleFormModel("Download Price Cost")}
                  className="some-class py-2 px-4 text-white cursor-pointer flex justify-center items-center rounded gap-2 text-sm">
                    <FaDownload /> Download Price Cost
                  </button>
                </div>
                  </div>
                  <div className="flex justify-end flex-col gap-2 mt-4 lg:mt-0">
                    <div className="flex items-center text-shadow justify-center md:justify-start bg-[var(--primary)] md:bg-transparent gap-2 text-md py-1 md:py-0 text-white md:text-gray-700">
                      <span className="p-1 rounded-full bg-[#dbe4e9] text-black">
                        <TbBuildingCommunity />
                      </span>
                      <p className="">{project?.unitVariants || ""}</p>
                    </div>
                    <div className="flex items-center text-shadow justify-center md:justify-start  gap-2 text-md py-1 md:py-0 text-white md:text-gray-700">
                      <p className="md:text-lg text-2xl text-black font-semibold">
                        ₹ {project?.price || ""}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-2 flex justify-center md:hidden">
                  <button 
                  onClick={()=>handleFormModel()}
                  className="some-class py-2 px-5 text-white cursor-pointer flex justify-center items-center gap-2 text-md">
                    Enquiry Now
                  </button>
                </div>
                <div className="mt-3 md:flex justify-between">
                  <p className="text-sm text-center md:text-start font-medium mb-2">
                        <b>Rera No:</b> {project?.reraNo || ""}
                  </p>
                  <button 
                  onClick={()=>handleFormModel("Download Brochure")}
                  className="some-class p-2 text-white hidden md:flex cursor-pointer justify-center items-center rounded gap-2 text-sm">
                    <FaDownload /> Download Brochure
                  </button>
                </div>
              </div>
              <div className="w-full lg:block hidden bg-white xl:rounded-md mt-4 xl:mt-0 p-5 shadow-md z-40 sticky top-15">
                <ul className="flex justify-between">
                  <li>
                    <Link href={"#overview"}>Overview</Link>
                  </li>
                  <li>
                    <Link href={"#amenities"}>Amenities</Link>
                  </li>
                  <li>
                    <Link href={"#paymentsplan"}>Payments Plan</Link>
                  </li>
                  <li>
                    <Link href={"#gallery"}>Gallery</Link>
                  </li>
                  <li>
                    <Link href={"#location"}>Location</Link>
                  </li>
                  <li>
                    <Link href={"#aboutdeveloper"}>About Developer</Link>
                  </li>
                  <li>
                    <Link href={"#emi"}>EMI</Link>
                  </li>
                </ul>
              </div>
              <div
                className="w-full mt-4 xl:mt-0 bg-white xl:rounded-md shadow-md"
                id="overview"
              >
                <div className="border-b-2 border-gray-300 py-3">
                  <p className="text-xl font-semibold text-gray-700 text-center">
                    Overview
                  </p>
                </div>
                <div className="p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 ">
                  <div className="border flex flex-col gap-2 justify-center items-center border-gray-400 p-3 rounded shadow">
                    <p className="text-md text-gray-600">Project Area</p>
                    <p className="font-medium">{project?.sizeRange || ""}</p>
                  </div>
                  <div className="border flex flex-col gap-2 justify-center items-center border-gray-400 p-3 rounded shadow">
                    <p className="text-md text-gray-600">Project Type</p>
                    <p className="font-medium">{project?.projectType || ""}</p>
                  </div>
                  <div className="border flex flex-col gap-2 justify-center items-center border-gray-400 p-3 rounded shadow">
                    <p className="text-md text-gray-600">Project Status</p>
                    <p className="font-medium">
                      {project?.projectStatus || ""}
                    </p>
                  </div>
                  <div className="border flex flex-col gap-2 justify-center items-center border-gray-400 p-3 rounded shadow">
                    <p className="text-md text-gray-600">Possession on</p>
                    <p className="font-medium">
                      {project?.possessionTime || ""}
                    </p>
                  </div>
                  <div className="border flex flex-col gap-2 justify-center items-center border-gray-400 p-3 rounded shadow">
                    <p className="text-md text-gray-600">Unit Variants</p>
                    <p className="font-medium">{project?.unitVariants || ""}</p>
                  </div>
                  <div className="border flex flex-col gap-2 justify-center items-center border-gray-400 p-3 rounded shadow">
                    <p className="text-md text-gray-600">Total Land Area</p>
                    <p className="font-medium">
                      {project?.totalLandArea || ""}
                    </p>
                  </div>
                  <div className="border flex flex-col gap-2 justify-center items-center border-gray-400 p-3 rounded shadow">
                    <p className="text-md text-gray-600">No. Of Units</p>
                    <p className="font-medium">{project?.noOfUnits || ""}</p>
                  </div>
                  <div className="border flex flex-col gap-2 justify-center items-center border-gray-400 p-3 rounded shadow">
                    <p className="text-md text-gray-600">No. Of Floors</p>
                    <p className="font-medium">{project?.noOfFloors || ""}</p>
                  </div>
                  <div className="border flex flex-col gap-2 justify-center items-center border-gray-400 p-3 rounded shadow">
                    <p className="text-md text-gray-600">Towers and Blocks</p>
                    <p className="font-medium">
                      {project?.towersAndBlocks || ""}
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="w-full mt-4 xl:mt-0 bg-white xl:rounded-md shadow-md"
                id="amenities"
              >
                <div className="border-b-2 border-gray-300 py-3">
                  <p className="text-xl font-semibold text-gray-700 text-center">
                    Amenities
                  </p>
                </div>
                <div className="p-5 w-full flex justify-center items-center">
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 justify-center items-center w-full gap-3">
                    {amenitiesData.map((item, i) => (
                      <div
                        key={i}
                        className="flex flex-col items-center  h-[110px] shadow-[0_4px_10px_rgba(0,0,0,0.25)] p-2 rounded-lg hover:border border-black hover:transition-all hover:duration-300"
                      >
                        <img
                          className="h-[60%] w-full pt-1"
                          src={item.image}
                          alt=""
                        />
                        <span className="text-center h-[40%] pt-1 text-sm">
                          {item.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div
                className="w-full hidden md:block mt-4 xl:mt-0 bg-white xl:rounded-md shadow-md"
                id="paymentsplan"
              >
                <div className="border-b-2 border-gray-300 py-3">
                  <p className="text-xl font-semibold text-gray-700 text-center">
                    Payments Plan
                  </p>
                </div>
                <div className="lg:p-5">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-black border-b">
                        <th className="py-3 px-4 text-left text-white">
                          Unit Type
                        </th>
                        <th className="py-3 px-4 text-center text-white">
                          Size
                        </th>
                        <th className="py-3 px-4 text-right text-white">
                          Price
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {project?.pricePlan?.map((item, index) => (
                        <tr
                          key={index}
                          className={` ${
                            index % 2 === 0 ? "bg-gray-200" : "bg-white"
                          }`}
                        >
                          <td className="py-3 px-4 text-left text-gray-700">
                            {item?.unitType}
                          </td>
                          <td className="py-3 px-4 text-center text-gray-700">
                            {item?.area}
                          </td>
                          <td className="py-3 px-4 text-right text-gray-700">
                            {item.price}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  
                </div>
              </div>
              <div
                className="w-full block md:hidden mt-4 xl:mt-0 bg-white xl:rounded-md shadow-md"
                id="paymentsplan"
              >
                <div className="border-b-2 border-gray-300 py-3">
                  <p className="text-xl font-semibold text-gray-700 text-center">
                    Payments Plan
                  </p>
                </div>
                <div className="lg:p-5">
                <div className="p-4 grid grid-cols-1 gap-2 md:hidden">
                    {
                      project?.pricePlan?.map((item,i)=>(
                        <div key={i} className="bg-[#eaeff1] border border-gray-600 flex flex-col p-3 gap-2 justify-between items-center">
                      <p className="text-2xl font-semibold">{item?.unitType}</p>
                      <p className="text-lg font-medium">{item?.area}</p>
                      <p className="text-xl font-semibold">{item.price}</p>
                      <button 
                       onClick={()=>handleFormModel("Download Brochure")}
                       className="some-class py-2 px-4 text-white flex cursor-pointer justify-center items-center gap-2 text-sm">
                       Request for Price Breakup
                      </button>
                    </div>
                      ))
                    }
                  </div>
                </div>
              </div>
              <div
                className="w-full mt-4 xl:mt-0 bg-white xl:rounded-md shadow-md"
                id="gallery"
              >
                <div className="border-b-2 border-gray-300 py-3">
                  <p className="text-xl font-semibold text-gray-700 text-center">
                    Gallery
                  </p>
                </div>
                <div className="p-5">
                  <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
                    {project &&
                      project?.gallery?.map((item, i) => (
                        <img
                        key={i}
                          onClick={() => handleImageClick(item)}
                          className=" rounded"
                          src={item}
                          alt=""
                        />
                      ))}
                  </div>
                </div>
              </div>
              <div
                className="w-full mt-4 xl:mt-0 bg-white xl:rounded-md shadow-md"
                id="location"
              >
                <div className="border-b-2 border-gray-300 py-3">
                  <p className="text-xl font-semibold text-gray-700 text-center">
                    Location
                  </p>
                </div>
                <div className="p-5">
                  <iframe
                    className="rounded-md"
                    src={ project?.mapLink || "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d63645297.53659029!2d77.667403!3d13.187559!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1d1ad12b56e9%3A0x7ff62e2150706ba!2sBirla%20Trimaya%20Devanahalli!5e0!3m2!1sen!2sus!4v1741983121755!5m2!1sen!2sus"}
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
              <div
                className="w-full mt-4 xl:mt-0 bg-white xl:rounded-md shadow-md"
                id="aboutdeveloper"
              >
                <div className="border-b-2 border-gray-300 py-3">
                  <p className="text-xl font-semibold text-gray-700 text-center">
                    About Developer
                  </p>
                </div>
                <div className="p-5">
                  <div dangerouslySetInnerHTML={{ __html: project?.about }} />
                </div>
              </div>
              <div
                className="w-full mt-4 xl:mt-0 bg-white xl:rounded-md shadow-md"
                id="emi"
              >
                <div className="border-b-2 border-gray-300 py-3">
                  <p className="text-xl font-semibold text-gray-700 text-center">
                    Real Estate EMI Calculator
                  </p>
                </div>
                <div className="p-5">
                  <EmiCalculator />
                </div>
              </div>
              <div className="w-full mt-4 xl:mt-0 bg-white xl:rounded-md shadow-md">
                <div className="border-b-2 border-gray-300 py-3">
                  <p className="text-xl font-semibold text-gray-700 text-center">
                    Similar Project
                  </p>
                </div>
                <div className="lg:p-5">
                  <div className="relative">
                    <div className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10">
                      <button
                        className="bg-white shadow-lg rounded-full p-2 text-2xl font-bold"
                        onClick={scrollLeft}
                      >
                        <IoIosArrowBack />
                      </button>
                    </div>

                    {/* Right Arrow */}
                    <div className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10">
                      <button
                        className="bg-white shadow-lg rounded-full p-2 text-2xl font-bold"
                        onClick={scrollRight}
                      >
                        <IoIosArrowForward />
                      </button>
                    </div>

                    {/* Scrollable Container */}
                    <div
                      ref={scrollRef}
                      className="flex overflow-x-auto space-x-4 py-4 px-2 scroll-smooth"
                      style={{
                        scrollbarWidth: "none", // Firefox
                        msOverflowStyle: "none", // Internet Explorer and Edge
                      }}
                    >
                      {blogsData.map((project, i) => (
                        <div key={i} className="flex-shrink-0 w-[300px]">
                          <ProjectCard />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="xl:w-[28%] w-full">
              <div className=" lg:sticky lg:top-20">
                <LeadForm />
              </div>
            </div>
          </div>
          <ImageModel currViewImage={currViewImage} />
         <FormModel key={formModelHeading} projectName={project.projectName} heading={formModelHeading}/> 
          {/* <button className=" some-class text-white px-4 py-2 rotate-90 fixed top-1/2 left-[-66px]">
            Download Brochure
          </button> */}
          <div className={`fixed z-50 top-1/3 transition-all duration-500 ease-in-out  ${isBrochureOpen ? "left-0" : "left-[-260px] "}`}>
        <div className="relative justify-center items-center w-[260px]">
            <form action="" className=" flex flex-col py-7 rounded-tr-md rounded-br-md px-5 gap-4 some-class">
                <h4 className="text-white text-center text-xl font-semibold">Fill Form to Download Broucher</h4>
                <input className="p-2 border-b bg-white border-black outline-none rounded-md" type="text" placeholder="Name"
                    name="name" id="name_3"/>
                <input className="p-2 border-b bg-white border-black outline-none rounded-md" type="text" placeholder="Mobile No"
                    name="number" id="number_3"/>
                <input className="p-2 border-b bg-white border-black outline-none rounded-md" type="email"
                    placeholder="E-Mail Address" name="email" id="email_3"/>
                <button id="submitBtn_3" className="text-[#1e4191] bg-white px-6 py-1 rounded-sm w-full m-auto">
                    Download
                </button>
            </form>
            <div className="rotate-90 absolute right-[-90px] top-20">
                <button  
                onClick={()=>setIsBrochureOpen(!isBrochureOpen)}
                className="bg-red-700 text-white px-2 py-1">
                    Download Broucher
                </button>
            </div>
        </div>
    </div>
        </>
          )
        }
        </>
      )}
    </div>
    <div className="fixed bottom-0 w-full">
        <div className="lg:hidden md:hidden flex justify-between bg-[var(--primary)] p-1.5">
            <Link href="tel:+918317452005" className="bg-[var(--primary)] text-white flex items-center gap-1 py-0.5 px-3 rounded-md border-l border-r">
                <IoCall/>
                <span className="text-white">Call</span>
            </Link>
            <button  
            onClick={()=>handleFormModel()}
            className="bg-[var(--primary)] text-white flex items-center gap-1 py-0.5 px-3 rounded-md border-l border-r">
                <IoMail/>
                <span className="text-white">Enquiry</span>
            </button>
            <Link href="https://wa.me/+919380660766?text=Hi!%20I%27m%20Interested%20In%20Adarsh%20Forest%20Glen%20Please%20Share%20Details."
                target="_blank" className="bg-[var(--primary)] text-white flex items-center gap-1 py-0.5 px-3 rounded-md  border-r border-l">
                <PiWhatsappLogoBold/>
                <span className="text-white">Whatsapp</span>
            </Link>
        </div>
    </div>
    </>
  );
}

export default ProjectViewPage;
