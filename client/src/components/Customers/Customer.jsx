import axios from "axios"
import { useEffect, useState } from "react";
function Customer(){
    const [data,setdata]=useState([]);
    function getdata(){
        axios.get("http://localhost:8000/client/customers")
    .then((resoponse)=>{
        console.log(resoponse.data);
        setdata(resoponse.data);
    }).catch((error)=>{
        console.log(error);
    })
    }
    useEffect(getdata,[]);
    return(
        <>
        <div className="w-full bg-indigo-950 h-5/6">
            <div className="text-white text-4xl font-medium ml-5">CUSTOMERS</div>
            <div className=" text-gray-300 font-medium mt-1 ml-5 mb-7">List of Customers</div>
            {/* Table Div */}
            {/* <div className="ml-5 mr-5 bg-blue-950 text-xs h-4/5"> */}
                <div className="flex font-normal pl-2 text-white pt-4 h-12 ml-5 mr-5 bg-blue-950 text-xs">
                            <div className="w-60 text-left">ID</div>
                            <div className="w-40 text-left">Name</div>
                            <div className=" w-56 text-left">Email</div>
                            <div className="w-40 text-left">Phone Number</div>
                            <div className="w-28 text-left">Country</div>
                            <div className="w-52 text-left">Occupation</div>
                            <div className="w-28 text-left">Role</div>
                </div>
            <div className="overflow-y-auto no-scrollbar h-4/5 ml-5 mr-5 bg-blue-950 text-xs">
            <table className="text-white bg-indigo-500">
                    {/* <thead className="flex font-normal pl-2 text-white pt-4 h-12 bg-blue-950">
                    <div className="w-60 text-left">ID</div>
                        <div className="w-40 text-left">Name</div>
                        <div className=" w-56 text-left">Email</div>
                        <div className="w-40 text-left">Phone Number</div>
                        <div className="w-28 text-left">Country</div>
                        <div className="w-52 text-left">Occupation</div>
                        <div className="w-28 text-left">Role</div>
                    </thead> */}
                    <tbody className="">
                    {
                        data.map((obj,index)=>(
                            <tr className="flex font-normal pl-2 pt-2 pb-2 hover:bg-slate-400" key={index}>
                        <td className="w-60 text-left">{obj._id}</td>
                        <td className="w-40 text-left">{obj.name}</td>
                        <td className="w-56 text-left">{obj.email}</td>
                        <td className="w-40 text-left">{obj.phoneNumber}</td>
                        <td className="w-28 text-left">{obj.country}</td>
                        <td className="w-52 text-left">{obj.occupation}</td>
                        <td className="w-28 text-left">{obj.role}</td>
                            </tr>
                        ))
                    }
                    </tbody>
                    
                </table>
            </div>
               
        </div>
        </>
    )
}

export default Customer