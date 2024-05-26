import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Header from "../Header/Header.jsx";
import { Doughnut } from "react-chartjs-2";
import { Chart as Chartjs, Tooltip, Legend, ArcElement} from 'chart.js';
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

Chartjs.register(Tooltip, Legend ,ArcElement);
const BreakDown = ({dashboard=false}) => {
  const nevigate=useNavigate();
  const [categoryData,setCategoryData]=useState({
    shoes:0, 
    clothing: 0, 
    accessories: 0, 
    misc:0
  })
  const option = {};
  function getdata(){
    axios.get("http://localhost:8000/sales/sales",{withCredentials:true})
.then((response)=>{
     //console.log(response.data.salesByCategory);
     if(response.data.user===""){
      toast.error("login first");
      nevigate("/login");
    }
    setCategoryData(response.data.stat.salesByCategory);
}).catch((error)=>{
    console.log(error);
})
}
useEffect(getdata,[]);
  const data = {
    labels: [
      'shoes',
      'accessories',
      'clothing',
      'misc'
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [categoryData.shoes,categoryData.accessories,categoryData.clothing,categoryData.misc],
      backgroundColor: [
        "#8bc746",
        "#e87b7b",
        "#edcece",
        "#e8d34a"
      ],
      hoverOffset: 30
    }]
  };
  return (
    <div className="h-full">
      {
        !dashboard?(<Header heading="BREAKDOWN" des="Breakdown of Sales By category" />):("")
      }
      
      <div className={`flex justify-center ${dashboard?'h-[95%]':'h-[80%] w-full'}`}>
        <Doughnut option={option} data={data}/>
      </div>
    </div>
  );
};

export default BreakDown;