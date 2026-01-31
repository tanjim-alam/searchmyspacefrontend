import Link from 'next/link';
import React from 'react';
import { FaLocationDot,FaFacebookF,FaInstagram,FaXTwitter,FaLinkedinIn, FaRegCopyright } from "react-icons/fa6";
import { IoCall,IoMail } from "react-icons/io5";


function Footer() {
    const date = new Date();
    const year = date.getFullYear();
  return (
    <>
    <footer>
        <div className="bg-[#161618]">
            <div className="w-[90%] m-auto py-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-3 justify-between">
                    <div>
                        <h4 className="text-white text-xl font-medium">About Us</h4>
                        <div className="text-gray-300 flex flex-col gap-3 mt-2">
                           <p>
                           At Livexcellence, we prioritize building reliable relationships and understanding each customer's needs to streamline buying or selling property. We are committed to excellence and dedicated to ensuring a seamless and impactful experience for every transaction.
                           </p>
                        </div>
                    </div>
                    <div>
                        <h4 className="text-white text-xl font-medium">Popular House</h4>
                        <div className="text-gray-300 flex flex-col gap-3 mt-2">
                        <Link href="#">#Apartments</Link>
                        <Link href="#">#Land/Plots</Link>
                            <Link href="#">#Villa</Link>
                            <Link href="#">#Commercial</Link>
                            <Link href="#">#Farm House</Link>
                            <Link href="#">#Homestay</Link>
                        </div>
                    </div>
                    <div>
                        <h4 className="text-white text-xl font-medium">Quick links</h4>
                        <div className="text-gray-300 flex flex-col gap-3 mt-2">
                            <Link href="#">About Us</Link>
                            <Link href="/contact.html">Contact Us</Link>
                            <Link href="#">Career</Link>
                            <Link href="#">Terms of use</Link>
                            <Link href="/privacy-policy">Privacy policy</Link>
                            <Link href="/terms-and-conditions">Terms & Conditions</Link>
                        </div>
                    </div>
                    <div>
                        <img
                        className="w-[180px] cursor-pointer" 
                        src="/logo.png" alt=""/>
                        <div className="text-gray-300 flex flex-col gap-5 mt-5">
                            <div className="flex items-center gap-1">
                                <span className='p-2 bg-[var(--primary)] rounded-full '>
                                    <FaLocationDot />
                                </span>
                                <p>
                                    No-11, 2nd Floor, Arya Hub, Whitefield, Bengaluru, Karnataka 560066
                                </p>
                            </div>
                            <div className="flex items-center gap-1"> 
                                <span className='p-2 bg-[var(--primary)] rounded-full '>
                                    <IoCall />
                                </span>
                                <a href="">+91 931101119</a>
                            </div>
                            <div className="flex items-center gap-1"> 
                            <span className='p-2 bg-[var(--primary)] rounded-full '>
                                    <IoMail />
                                </span>
                                <a href="">info@livexcellence.in</a>
                            </div>
                        </div>
                        <div className="mt-5 flex gap-4">
                            <div className="flex items-center gap-1"> 
                                <Link href="#" className='p-2 bg-[#1877F2] text-white rounded-full'>
                                    <FaFacebookF/>
                                </Link>
                            </div>
                            <div className="flex items-center gap-1"> 
                                <Link href="" className='p-2 bg-[#e53d6f] text-white rounded-full'>
                                <FaInstagram/>
                                </Link>
                            </div>
                            <div className="flex items-center gap-1"> 
                                <Link href="#" className='p-2 bg-[#0077B5] text-white rounded-full'>
                                <FaLinkedinIn/>
                                </Link>
                            </div>
                            <div className="flex items-center gap-1"> 
                                <Link href="" className='p-2 bg-[#1DA1F2] text-white rounded-full'>
                                <FaXTwitter/>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
     <section>
     <div className="bg-[#161618] border-t-2 border-gray-600">
         <p className="py-4 text-white font-medium text-center flex justify-center items-center gap-2">
            <span className='flex items-center gap-1'>
                Copyright 
                <FaRegCopyright/> {year}
            </span>
            Livexcellence Realty | All Rights Resevered
            
        </p>
     </div>
  </section>
    </>
  )
}

export default Footer
