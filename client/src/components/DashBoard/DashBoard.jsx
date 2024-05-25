import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../Header/Header.jsx";
import Overview from "../Overview/Overview.jsx";
import BreakDown from "../BreakDown/BreakDown.jsx";
import { RiDownload2Fill } from "react-icons/ri";
import { CSVLink } from "react-csv";
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

function DashBoard() {
  const nevigate=useNavigate();
  const [data, setdata] = useState({
    todaystat:{
      totalSales:0
    },
    thismonthstat:{
      totalSales:0,
    },
    transactions:[],
    monthlyData:[],
    salesByCategory:{}
  });
  // const [todaysale,settoday]=useState(0);
  function getdata() {
    axios
      .get("http://localhost:8000/general/dashboard",{withCredentials:true})
      .then((resoponse) => {
        console.log(resoponse.data);
        if(resoponse.data.user===""){
          toast.error("login first");
          nevigate("/login");
        }
        // settoday(resoponse.data.todaystat.totalSales);
        setdata(resoponse.data);
      })
      .catch((error) => {
        console.log(error);
        toast.error("Please login again")
        nevigate("/login")
      });
  }
  useEffect(getdata, []);
  return (
    <>
      <div className="flex justify-between items-end">
      <Header heading="DASHBOARD" des="Insight" />
      <div className="mr-10 mb-5 pl-4 pr-4 pb-2 pt-2 bg-yellow-300 text-black rounded-md hover:bg-orange-400">
      <CSVLink data={[...data.transactions,...data.monthlyData,data.salesByCategory,data.thismonthstat,data.todaystat]}><div className="flex gap-1 text-base"><RiDownload2Fill /><div className=" -mt-1 font-medium">Download Report</div></div></CSVLink>
      </div>
      </div>

      {
        data?(
          <div className="-mt-3  h-[94%] flex-col ml-5 mr-5">
        <div className="uppersection w-full h-[40%]  flex  mb-3">
            <div className="upperleft h-full w-[40%]  mr-3 flex-col text-xs font-medium">
                <div className="flex mb-3 h-[47%]">
                    <div className="w-[49%] mr-3 bg-blue-950 rounded-lg flex-col p-3">
                        <div>Total Customers</div>
                        <div className=" text-base mt-3 mb-4 text-yellow-100">{data.totalCustomers}</div>
                        <div className="flex justify-between italic text-yellow-100">
                          <div>+14%</div>
                          <div>since last month</div>
                        </div>
                    </div>
                    <div className="w-[49%] bg-blue-950 rounded-lg flex-col p-3">
                        <div>Sales Today</div>
                        <div className=" text-base mt-3 mb-4 text-yellow-100">{data.todaystat.totalSales}</div>
                        <div className="flex justify-between italic text-yellow-100">
                          <div>+20%</div>
                          <div>since last month</div>
                        </div>
                    </div>
                </div>
                <div className="flex h-[47%]">
                <div className="w-[49%] mr-3 bg-blue-950 rounded-lg flex-col p-3">
                        <div>Monthly Sales</div>
                        <div className=" text-base mt-3 mb-4 text-yellow-100">{data.thismonthstat.totalSales}</div>
                        <div className="flex justify-between italic text-yellow-100">
                          <div>+7%</div>
                          <div>since last month</div>
                        </div>
                    </div>
                    <div className="w-[49%] bg-blue-950 rounded-lg flex-col p-3">
                        <div>Yearly Sales</div>
                        <div className=" text-base mt-3 mb-4 text-yellow-100">{data.yearlySalesTotal}</div>
                        <div className="flex justify-between italic text-yellow-100">
                          <div>+54%</div>
                          <div>since last year</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="upperright h-full w-[60%] bg-blue-950 rounded-lg">
                <Overview dashboard={true}/>
            </div>
        </div>
        <div className="lowersection w-full h-[58%] flex">
            <div className="leftLower mr-3 h-full w-[65%] bg-blue-950 rounded-lg">
            <div className=" pl-5 flex font-normal text-white pt-4 h-12 ml-5 mr-5  text-xs">
            <div className="w-52 text-left">ID</div>
            <div className="w-52 text-left">User ID</div>
            <div className="w-52 text-left">Created At</div>
            <div className="w-32 text-left">No of Product</div>
            <div className="w-20 text-left flex cursor-pointer">Cost</div>
          </div>

          <div className="overflow-y-auto no-scrollbar h-[83%]  text-xs ">
            <table className="text-white">
              <tbody className="">
                {data.transactions.map((obj, index) => (
                  <tr
                    className="flex font-normal pl-2 pt-2 pb-2 hover:bg-slate-400"
                    key={index}
                  >
                    <td className="w-52 text-left pl-3">{obj._id}</td>
                    <td className=" w-52 text-left pl-3">{obj.userId}</td>
                    <td className="w-52 text-left pl-3">{obj.createdAt}</td>
                    <td className="w-20 text-left pl-3">
                      {obj.products.length}
                    </td>
                    <td className="w-20 text-left pl-3">${obj.cost}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
            </div>
            <div className="rightLower h-full w-[35%] bg-blue-950 rounded-lg flex justify-center">
              <BreakDown dashboard={true}/>
            </div>
        </div>
      </div>
        ):""
      }
      
    </>
  );
}

export default DashBoard;
