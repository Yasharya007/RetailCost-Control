import React from "react";
import Header from "../Header/Header.jsx";
import { Doughnut } from "react-chartjs-2";
import { Chart as Chartjs, Tooltip, Legend, ArcElement} from 'chart.js';

Chartjs.register(Tooltip, Legend ,ArcElement);

const BreakDown = () => {
  const option = {};
  const data = {
    labels: [
      'Red',
      'Blue',
      'Yellow'
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [300, 150, 100],
      backgroundColor: [
        "#4b496f",
        "#1e1b4b",
        "#18163c"
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