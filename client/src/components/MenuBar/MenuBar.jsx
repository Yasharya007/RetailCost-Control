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
    <div className={`h-screen w-72 bg-blue-950  pt-10`}>
      <div className="inline-flex bg-yellow-500 p-3 w-full align-middle" >
        <IoHome className='text-2xl mr-4 ml-6'/> 
        <h1 className=" text-lg">Dashboard</h1>
        <IoIosArrowForward className='text-2xl ml-20'/>
      </div>
 
{/* --------------------- client ----------------------------- */}

      <div className="client  text-white mt-5">
        <h2 className='mb-7 pl-10'>client Facing</h2>

        <div className="product flex cursor-pointer p-2 pl-10 hover:bg-yellow-500">
          <FaShoppingCart className='text-white text-2xl mr-10'/>
          <h3 className=''> Product</h3>
        </div>

        <div className="product flex cursor-pointer p-2 pl-10 hover:bg-yellow-500">
          <IoIosPeople className='text-white text-2xl mr-10'/>
          <h3 className=''> Customers</h3>
        </div>

        <div className="product flex cursor-pointer p-2 pl-10 hover:bg-yellow-500">
          <IoNewspaperOutline className='text-white text-2xl mr-10'/>
          <h3 className=''> Transactions</h3>
        </div>

        <div className="product flex cursor-pointer p-2 pl-10 hover:bg-yellow-500">
          <BiWorld className='text-white text-2xl mr-10'/>
          <h3 className=''> Geography</h3>
        </div>
      </div>


{/* --------------------- sales ----------------------------- */}

      <div className="sales text-white mt-5">
        <h2 className='mb-7 pl-10'>sales</h2>

        <div className="product flex cursor-pointer p-2 pl-10 hover:bg-yellow-500">
          <GrView className='text-white text-2xl mr-10'/>
          <h3 className=''> Overviwe</h3>
        </div>

        <div className="product flex cursor-pointer p-2 pl-10 hover:bg-yellow-500">
          <IoMdCalendar className='text-white text-2xl mr-10'/>
          <h3 className=''> Daily</h3>
        </div>

        <div className="product flex cursor-pointer p-2 pl-10 hover:bg-yellow-500">
          <FaRegCalendarAlt className='text-white text-2xl mr-10'/>
          <h3 className=''> Monthly</h3>
        </div>

        <div className="product flex cursor-pointer p-2 pl-10 hover:bg-yellow-500">
          <FaChartPie className='text-white text-2xl mr-10'/>
          <h3 className=''> Breakdown</h3>
        </div>
      </div>

{/* --------------------- Admin ----------------------------- */}

      <div className="Admin text-white mt-5">
        <h2 className='mb-7 pl-10'>Management</h2>

        <div className="product flex cursor-pointer p-2 pl-10 hover:bg-yellow-500">
          <RiAdminFill className='text-white text-2xl mr-10'/>
          <h3 className=''> Admin</h3>
        </div>

        <div className="product flex cursor-pointer p-2 pl-10 hover:bg-yellow-500">
          <BsGraphUpArrow className='text-white text-2xl mr-10'/>
          <h3 className=''> Performance</h3>
        </div>
      </div>
    </div>
  )
}

export default menuBar

