import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../Header/Header.jsx";
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

function Customer() {
  const nevigate=useNavigate();
  const [data, setdata] = useState([]);
  function getdata() {
    axios
      .get("http://localhost:8000/client/customers",{withCredentials:true})
      .then((resoponse) => {
        console.log(resoponse.data);
        if(resoponse.data.user===""){
          toast.error("login first");
          nevigate("/login");
        }
        setdata(resoponse.data.customers);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  useEffect(getdata, []);
  return (
    <>
      <Header heading="CUSTOMERS" des="List of Customers" />
      <div className="flex font-normal pl-2 text-white pt-4 h-12 ml-5 mr-5 bg-blue-950 text-xs">
        <div className="w-60 text-left">ID</div>
        <div className="w-40 text-left">Name</div>
        <div className=" w-56 text-left">Email</div>
        <div className="w-40 text-left">Phone Number</div>
        <div className="w-28 text-left">Country</div>
        <div className="w-52 text-left">Occupation</div>
        <div className="w-28 text-left">Role</div>
      </div>
      <div className="overflow-y-auto no-scrollbar h-5/6 ml-5 mr-5 bg-blue-950 text-xs">
        {
          data.length>0?(
            <table className="text-white bg-indigo-500">
            <tbody className="">
              {
              data.map((obj, index) => (
                <tr
                  className="flex font-normal pl-2 pt-2 pb-2 hover:bg-slate-400"
                  key={index}
                >
                  <td className="w-60 text-left">{obj._id}</td>
                  <td className="w-40 text-left">{obj.name}</td>
                  <td className="w-56 text-left">{obj.email}</td>
                  <td className="w-40 text-left">{obj.phoneNumber}</td>
                  <td className="w-28 text-left">{obj.country}</td>
                  <td className="w-52 text-left">{obj.occupation}</td>
                  <td className="w-28 text-left">{obj.role}</td>
                </tr>
              ))}
            </tbody>
          </table>
          ):(
            <div className="w-full h-[50%] text-3xl flex items-center justify-center">
              Loading ...
                 </div>
          )
        }
        
      </div>
    </>
  );
}

export default Customer;
