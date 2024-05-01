import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Header from "../Header/Header.jsx";
import { Doughnut } from "react-chartjs-2";
import { Chart as Chartjs, Tooltip, Legend, ArcElement} from 'chart.js';

Chartjs.register(Tooltip, Legend ,ArcElement);
const BreakDown = () => {
  const [categoryData,setCategoryData]=useState({
    shoes:0, 
    clothing: 0, 
    accessories: 0, 
    misc:0
  })
  const option = {};
  function getdata(){
    axios.get("http://localhost:8000/sales/sales")
.then((response)=>{
    console.log(response.data.salesByCategory);
    setCategoryData(response.data.salesByCategory);
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
      hoverOffset: 4
    }]
  };
  return (
    <div className="h-full">
      <Header heading="BREAKDOWN" des="Breakdown of Sales By category" />
      <div className="w-full h-[80%] flex justify-center">
        <Doughnut option={option} data={data}/>
      </div>
    </div>
  );
};

export default BreakDown;