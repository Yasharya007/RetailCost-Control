import React from 'react'
import { IoHome,IoNewspaperOutline } from "react-icons/io5";
import { IoIosArrowForward,IoIosPeople,IoMdCalendar } from "react-icons/io";
import { FaShoppingCart,FaRegCalendarAlt,FaChartPie } from "react-icons/fa";
import { BiWorld } from "react-icons/bi";
import { GrView } from "react-icons/gr";
import { useNavigate,useLocation } from 'react-router-dom';
import { BiSolidCartAdd } from "react-icons/bi";
import { GrMoney } from "react-icons/gr";



const menuBar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const currentPath = location.pathname;
    // console.log(currentPath);
  

  return (
    <div className={`h-screen w-60 bg-blue-950 text-white pt-10 z-10`}>
      <div className={`inline-flex p-3 w-full  cursor-pointer font-medium align-middle ${currentPath === '/' || currentPath==='/dashboard'  ? ' bg-yellow-400 text-black' :''}`} onClick={() => navigate("/dashboard")} >
        <IoHome className='mr-4 ml-6 mt-0.5'/> 
        <h1 className="text-sm font-medium">Dashboard</h1>
        <IoIosArrowForward className='text-2xl ml-20'/>
      </div>
 
{/* --------------------- client ----------------------------- */}

      <div className="client  text-white mt-9">
        <h2 className='mb-3 pl-10 text-sm'>Client Facing</h2>

        <div className={`product flex cursor-pointer p-2 pl-10   ${currentPath==='/product'  ? ' bg-yellow-400 text-black' :''}`} onClick={() => navigate("/product")}>
          <FaShoppingCart className=' mr-10 mt-0.5'/>
          <h3 className="text-sm"> Product</h3>
        </div>

        <div className={`customer flex cursor-pointer p-2 pl-10 ${currentPath === '/customer' ? ' bg-yellow-400 text-black' : ''}`} onClick={() => navigate("/customer")}>
          <IoIosPeople className=' mt-0.5 mr-10'/>
          <h3 className='text-sm'> Customers</h3>
        </div>

        <div className={`transaction flex cursor-pointer p-2 pl-10 ${currentPath === '/transaction' ? ' bg-yellow-400 text-black' : ''}`} onClick={() => navigate("/transaction")}>
          <IoNewspaperOutline className=' mt-0.5 mr-10' />
          <h3 className='text-sm'> Transactions</h3>
        </div>

        <div className={`customer flex cursor-pointer p-2 pl-10   ${currentPath === '/geography' ? ' bg-yellow-400 text-black' : ''}`} onClick={() => navigate("/geography")}>
          <BiWorld className=' mt-0.5 mr-10'/>
          <h3 className='text-sm'> Geography</h3>
        </div>
      </div>


{/* --------------------- sales ----------------------------- */}

      <div className="sales text-white mt-9">
        <h2 className='mb-3 pl-10 text-sm'>sales</h2>

        <div className={`overview flex cursor-pointer p-2 pl-10   ${currentPath === '/overview' ? ' bg-yellow-400 text-black' : ''}`} onClick={() => navigate("/overview")}>
          <GrView className=' mt-0.5 mr-10'/>
          <h3 className='text-sm'> Overview</h3>
        </div>

        <div className={`daily flex cursor-pointer p-2 pl-10   ${currentPath === '/daily' ? ' bg-yellow-400 text-black' : ''}`} onClick={() => navigate("/daily")}>
          <IoMdCalendar className=' mt-0.5 mr-10'/>
          <h3 className='text-sm'> Daily</h3>
        </div>

        <div className={`daily flex cursor-pointer p-2 pl-10   ${currentPath === '/monthly' ? ' bg-yellow-400 text-black' : ''}`} onClick={() => navigate("/monthly")}>
          <FaRegCalendarAlt className='mt-0.5 mr-10'/>
          <h3 className='text-sm'> Monthly</h3>
        </div>

        <div className= {`breakdown flex cursor-pointer p-2 pl-10 ${currentPath === '/breakdown' ? ' bg-yellow-400 text-black' : ''} `} onClick={() => navigate("/breakdown")}>
          <FaChartPie className=' mt-0.5 mr-10'/>
          <h3 className='text-sm'> Breakdown</h3>
        </div>
      </div>

{/* --------------------- Admin ----------------------------- */}

      <div className="Admin text-white mt-9">
        <h2 className='mb-3 pl-10 text-sm'>Management</h2>

        <div className={`admin flex cursor-pointer p-2 pl-10 ${currentPath === '/addproduct' ? ' bg-yellow-400 text-black' : ''} flex items-center`} onClick={() => navigate("/addproduct")}>
          <BiSolidCartAdd className='text-2xl mt-0.5 mr-8'/>
          <h3 className='text-sm'> Add Product</h3>
        </div>

        <div className={`performance flex cursor-pointer p-2 pl-10 ${currentPath === '/addtransaction' ? ' bg-yellow-400 text-black' : ''}`} onClick={() => navigate("/addtransaction")}>
          <GrMoney className='mt-0.5 mr-10'/>
          <h3 className='text-sm'> Add Transaction</h3>
        </div>
      </div>
    </div>
  )
}

export default menuBar

