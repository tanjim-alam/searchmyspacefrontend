import React from 'react'

function Footer() {
  return (
    <footer>
        <div className="bg-[#161618]">
            <div className="w-[90%] m-auto py-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-0 justify-between">
                    <div>
                        <h4 className="text-white text-xl font-medium">About Us</h4>
                        <div className="text-gray-300 flex flex-col gap-3 mt-2">
                            <a href="/contact.html">Contact</a>
                            <a href="#">Home Loan Process</a>
                            <a href="#">Customer reviews</a>
                            <a href="#">Our Team</a>
                            <a href="/career.html">Careers with Proty</a>
                            <a href="#">Work with us</a>
                        </div>
                    </div>
                    <div>
                        <h4 className="text-white text-xl font-medium">Popular House</h4>
                        <div className="text-gray-300 flex flex-col gap-3 mt-2">
                            <a href="#">#Villa</a>
                            <a href="#">#Commercial</a>
                            <a href="#">#Farm House</a>
                            <a href="#">#Homestay</a>
                            <a href="#">#apartments</a>
                            <a href="#">#Land/Plots</a>
                        </div>
                    </div>
                    <div>
                        <h4 className="text-white text-xl font-medium">Quick links</h4>
                        <div className="text-gray-300 flex flex-col gap-3 mt-2">
                            <a href="#">Terms of use</a>
                            <a href="#">Privacy policy</a>
                            <a href="#">Our services</a>
                            <a href="/contact.html">Contact support</a>
                            <a href="#">Pricing Plans</a>
                            <a href="#">FAQs</a>
                        </div>
                    </div>
                    <div>
                        <img
                        className="w-[200px]" 
                        src="/logo1.png" alt=""/>
                        <div className="text-gray-300 flex flex-col gap-5 mt-5">
                            <div className="flex items-center gap-1">
                                <i className='fa fa-map-marker text-white bg-[#1face2] text-3xl px-3 py-2 rounded-full'></i>
                                <p>
                                    No-11, 2nd Floor, Arya Hub Mall, Whitefield, Bengaluru, Karnataka 560066
                                </p>
                            </div>
                            <div className="text-"> 
                                <i className='fa fa-phone text-white bg-[#1face2] text-3xl px-2.5 py-2 rounded-full'></i>
                                <a href="">+91 80509 33931</a>
                            </div>
                            <div className="text-"> 
                                <i className='fa fa-envelope text-white bg-[#1face2] text-3xl px-2.5 py-2.5 rounded-full'></i>
                                <a href="">info@livexcellence.com</a>
                            </div>
                        </div>
                        <div className="mt-5 flex gap-4">
                            <div className=""> 
                                <a href="https://www.facebook.com/livexcellence.in/">
                                    <i className='fa fa-facebook-f text-white bg-[#1face2] text-3xl px-3 py-2 rounded-full'></i>
                                </a>
                            </div>
                            <div className=""> 
                                <a href="">
                                    <i className='fa fa-instagram text-white bg-[#1face2] text-3xl px-2.5 py-2 rounded-full'></i>
                                </a>
                            </div>
                            <div className=""> 
                                <a href="https://www.linkedin.com/company/liv-excellence">
                                    <i className='fa fa-linkedin text-white bg-[#1face2] text-3xl px-2.5 py-2 rounded-full'></i>
                                </a>
                            </div>
                            <div className=""> 
                                <a href="">
                                    <i className='fa fa-twitter-square text-white bg-[#1face2] text-3xl px-2.5 py-2 rounded-full'></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     </footer>
  )
}

export default Footer