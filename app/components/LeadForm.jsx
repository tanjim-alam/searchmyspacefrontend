import React from 'react';
import { MdAddCall } from "react-icons/md";
import { FaLaptopHouse } from "react-icons/fa";
import { FaMoneyBill1Wave } from "react-icons/fa6";
function LeadForm() {
  return (
    <div className=' flex flex-col gap-5 bg-white p-4 lg:rounded shadow-md'>
        <div className='flex justify-center'>
            <img 
            className='w-[150px]'
            src="/logo1.png" alt="" />
        </div>
        {/* <div className='flex justify-between items-center'>
            <div className='flex flex-col justify-between items-center gap-1'>
                <span className='text-lg some-class text-white rounded-full p-2'><MdAddCall/></span>
                <p className='text-xs'>Instant Call</p>
            </div>
            <div className='flex flex-col justify-between items-center gap-1'>
                <span className='text-lg some-class text-white rounded-full p-2'><FaLaptopHouse/></span>
                <p className='text-xs'>Free Visit</p>
            </div>
            <div className='flex flex-col justify-between items-center gap-1'>
                <span className='text-lg some-class text-white rounded-full p-2'><FaMoneyBill1Wave/></span>
                <p className='text-xs'>Unmatched Price</p>
            </div>
        </div> */}
        <div>
            <p className='text-center text-xl text-gray-700 font-bold'>
            Request a Callback
            </p>
        </div>
        <div className='flex flex-col gap-2'>
            <div className='flex flex-col gap-1'>
                <label htmlFor="" className=''>
                    Name*
                </label>
                <input 
                className='py-1 px-4 border border-gray-400 rounded-2xl outline-none'
                type="text" 
                placeholder='Enter Name*...' />
            </div>
            <div className='flex flex-col gap-1'>
                <label htmlFor="" className=''>
                    Email*
                </label>
                <input 
                className='py-1 px-4 border border-gray-400 rounded-2xl outline-none'
                type="text" 
                placeholder='Enter Name*...' />
            </div>
            <div className='flex flex-col gap-1'>
                <label htmlFor="" className=''>
                    Phone*
                </label>
                <input 
                className='py-1 px-4 border border-gray-400 rounded-2xl outline-none'
                type="text" 
                placeholder='+9192324...' />
            </div>
            <div className='flex flex-col gap-1'>
                <label htmlFor="" className=''>
                    Message
                </label>
                <textarea 
                className='py-1 px-4 border border-gray-400 rounded-xl outline-none'
                type="text" 
                placeholder='Enter Name*...' />
            </div>
            <div className='flex flex-col gap-1 mt-2'>
                <button className='some-class text-white p-1 rounded'>Submit</button>
            </div>
        </div>
    </div>
  )
}

export default LeadForm