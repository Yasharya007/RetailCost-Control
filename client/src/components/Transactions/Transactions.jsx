import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../Header/Header.jsx";
import { FaArrowLeftLong } from "react-icons/fa6";
import { MdKeyboardArrowDown } from "react-icons/md";
import { RiDownload2Fill } from "react-icons/ri";
import { CSVLink } from "react-csv";
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const Transactions = () => {
  const [data, setdata] = useState([]);
  const nevigate=useNavigate();
  const [queries, setQueries] = useState({
    page: 0,
    sort: {
      field: "cost",
      sort: "asc",
    },
    search: "",
  });

  function getdata() {
    axios
      .post("http://localhost:8000/client/transactions", queries,{withCredentials:true})
      .then((resoponse) => {
        console.log(resoponse.data.transactions);
        if(resoponse.data.user===""){
          toast.error("login first");
          nevigate("/login");
        }
        setdata(resoponse.data.transactions);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  useEffect(getdata, [queries]);

  const handle_prev = () => {
    setQueries((prevData) => {
      let newData = { ...prevData };
      let temp = prevData.page;
      newData.page = (temp-1 > 0) ? temp-1 : 1;
      return newData;
    });
    // console.log(queries);
  };
  const handle_next = () => {
    setQueries((prevData) => {
      let newData = { ...prevData };
      newData.page = prevData.page + 1;
      return newData;
    });

    // console.log(queries);
  };

  const handle_cost = () => {
    setQueries((prevData) => {
      let newData = { ...prevData };

      if(newData.sort.sort === "asc"){
        newData.sort = {
          field: "cost",
          sort: "desc",
        }
      }
      else{
        newData.sort = {
          field: "cost",
          sort: "asc",
        }
      }

      console.log(newData);
      return newData;
    });
  }

  return (
    <div className="ml-10 h-[100%]">
      <Header heading="Transactions" des="Entire list of transactions" />
      {data.length > 0 ? (
        <>
          <div className=" pl-5 flex font-normal text-white pt-4 h-12 ml-5 mr-5  text-xs">
            <div className="w-56 text-left">ID</div>
            <div className="w-56 text-left">User ID</div>
            <div className="w-56 text-left">Created At</div>
            <div className="w-32 text-left">No of Product</div>
            <div className="w-20 text-left flex cursor-pointer" onClick={handle_cost}>Cost <MdKeyboardArrowDown className="text-lg ml-2"/></div>
            <CSVLink data={data}><div className="flex gap-1 text-base"><RiDownload2Fill /><div className=" -mt-1">export</div></div></CSVLink>
          </div>

          <div className="overflow-y-auto no-scrollbar h-[70%] ml-5 mr-5  text-xs ">
            <table className="text-white bg-indigo-500 ">
              <tbody className="">
                {data.map((obj, index) => (
                  <tr
                    className="flex font-normal pl-2 pt-2 pb-2 hover:bg-slate-400"
                    key={index}
                  >
                    <td className="w-56 text-left pl-3">{obj._id}</td>
                    <td className="w-56 text-left pl-3">{obj.userId}</td>
                    <td className="w-56 text-left pl-3">{obj.createdAt}</td>
                    <td className="w-32 text-left pl-3">
                      {obj.products.length}
                    </td>
                    <td className="w-40 text-left pl-3">{obj.cost}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      ) : (
        <>
          <div className="w-full h-[50%] text-3xl flex items-center justify-center">
            There is nothing to show
          </div>
        </>
      )}

      <div className="w-3/4 h-10 ml-5 pt-5 flex space-x-">
        <button
          className="flex items-center w-20 justify-evenly bg-indigo-950 "
          onClick={handle_prev}
        >
          <FaArrowLeftLong />
          Prev
        </button>
        <button
          className="flex items-center w-20 justify-evenly bg-indigo-950 "
          onClick={handle_next}
        >
          Next
          <FaArrowLeftLong className="rotate-180" />
        </button>
      </div>
    </div>
  );
};

export default Transactions;
