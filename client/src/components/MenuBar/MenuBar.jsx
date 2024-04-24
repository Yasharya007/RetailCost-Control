import React from 'react'
import { IoHome,IoNewspaperOutline } from "react-icons/io5";
import { IoIosArrowForward,IoIosPeople,IoMdCalendar } from "react-icons/io";
import { FaShoppingCart,FaRegCalendarAlt,FaChartPie } from "react-icons/fa";
import { BiWorld } from "react-icons/bi";
import { GrView } from "react-icons/gr";
import { RiAdminFill } from "react-icons/ri";
import { BsGraphUpArrow } from "react-icons/bs";




const menuBar = () => {


  return (
    <div className={`h-screen w-60 bg-blue-950  pt-10 z-10`}>
      <div className="inline-flex bg-yellow-400 p-3 w-full align-middle" >
        <IoHome className='mr-4 ml-6 mt-0.5'/> 
        <h1 className="text-sm font-medium">Dashboard</h1>
        <IoIosArrowForward className='text-2xl ml-20'/>
      </div>
 
{/* --------------------- client ----------------------------- */}

      <div className="client  text-white mt-9">
        <h2 className='mb-3 pl-10 text-sm'>Client Facing</h2>

        <div className="product flex cursor-pointer p-2 pl-10 hover:bg-yellow-400 hover:text-black">
          <FaShoppingCart className=' mr-10 mt-0.5'/>
          <h3 className="text-sm"> Product</h3>
        </div>

        <div className="product flex cursor-pointer p-2 pl-10 hover:bg-yellow-400 hover:text-black">
          <IoIosPeople className=' mt-0.5 mr-10'/>
          <h3 className='text-sm'> Customers</h3>
        </div>

        <div className="product flex cursor-pointer p-2 pl-10 hover:bg-yellow-400 hover:text-black">
          <IoNewspaperOutline className=' mt-0.5 mr-10'/>
          <h3 className='text-sm'> Transactions</h3>
        </div>

        <div className="product flex cursor-pointer p-2 pl-10 hover:bg-yellow-400 hover:text-black">
          <BiWorld className=' mt-0.5 mr-10'/>
          <h3 className='text-sm'> Geography</h3>
        </div>
      </div>


{/* --------------------- sales ----------------------------- */}

      <div className="sales text-white mt-9">
        <h2 className='mb-3 pl-10 text-sm'>sales</h2>

        <div className="product flex cursor-pointer p-2 pl-10 hover:bg-yellow-400 hover:text-black">
          <GrView className=' mt-0.5 mr-10'/>
          <h3 className='text-sm'> Overview</h3>
        </div>

        <div className="product flex cursor-pointer p-2 pl-10 hover:bg-yellow-400 hover:text-black">
          <IoMdCalendar className=' mt-0.5 mr-10'/>
          <h3 className='text-sm'> Daily</h3>
        </div>

        <div className="product flex cursor-pointer p-2 pl-10 hover:bg-yellow-400 hover:text-black">
          <FaRegCalendarAlt className='mt-0.5 mr-10'/>
          <h3 className='text-sm'> Monthly</h3>
        </div>

        <div className="product flex cursor-pointer p-2 pl-10 hover:bg-yellow-400 hover:text-black">
          <FaChartPie className=' mt-0.5 mr-10'/>
          <h3 className='text-sm'> Breakdown</h3>
        </div>
      </div>

{/* --------------------- Admin ----------------------------- */}

      <div className="Admin text-white mt-9">
        <h2 className='mb-3 pl-10 text-sm'>Management</h2>

        <div className="product flex cursor-pointer p-2 pl-10 hover:bg-yellow-400 hover:text-black">
          <RiAdminFill className=' mt-0.5 mr-10'/>
          <h3 className='text-sm'> Admin</h3>
        </div>

        <div className="product flex cursor-pointer p-2 pl-10 hover:bg-yellow-400 hover:text-black">
          <BsGraphUpArrow className='mt-0.5 mr-10'/>
          <h3 className='text-sm'> Performance</h3>
        </div>
      </div>
    </div>
  )
}

export default menuBar

