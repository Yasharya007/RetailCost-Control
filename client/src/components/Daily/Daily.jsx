import axios from "axios"
import { useEffect, useState } from "react";
import Header from "../Header/Header.jsx";
import { ResponsiveLine } from '@nivo/line'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

function Daily(){
    const [statdata,setStatdata]=useState([]);
    const nevigate=useNavigate();
    // const [salesLine,setSalesLine]=useState([]);
    const[line,setLine]=useState([]);
    const[startDate,setStartDate]=useState(new Date("2024-05-01"));
    const[endDate,setEndDate]=useState(new Date("2024-06-01"));
    function getdata(){
        axios.get("http://localhost:8000/sales/sales",{withCredentials:true})
    .then((response)=>{
        console.log(response.data);
        if(response.data.user===""){
            toast.error("login first");
            nevigate("/login");
          }
        setStatdata(response.data.stat.dailyData);
    }).catch((error) => {
        console.log(error);
    })
    }
    function printGraph(){
        const info = {
            id:"sales",
            color:"white",
            data:[]
        };
        const info2={
            id:"units",
            color:"white",
            data:[]
        }
        let myData=[];
        let myDataunit=[]
        let recv=statdata;
        console.log(recv)
        // let sday=startDate.slice(8,10);
        // let smonth=startDate.slice(5,7);
        // let eday=endDate.slice(8,10);
        // let emonth=endDate.slice(5,7);
        // console.log(sday);
        // console.log(smonth);
        recv.forEach((element) => {
            let currdate=new Date(element.date)
            // console.log(startDate)
            // let dt=element.date;
            // let dtday=dt.slice(8,10);
            // let dtmonth=dt.slice(5,7);
            // (dtmonth>smonth && dtmonth<emonth)|| (dtmonth===smonth && dtday>=sday) || (dtmonth==emonth && dtday<=eday)
            if( currdate>=startDate && currdate<=endDate){
                 myData.push({
                x:element.date,
                // x:"",
                y:element.totalSales
            })
            myDataunit.push({
                x:element.date,
                // x:"",
                y:element.totalUnits
            })
            }
           
        });
        info.data=myData;
        info2.data=myDataunit;
        // console.log("info is",info);
        setLine([info,info2]);
    }
    useEffect(getdata,[]);
    useEffect(printGraph,[startDate,endDate,statdata])
    return(
        <>
        <Header heading="DAILY SALES" des="Get your daily sales data"/>    
        <div className="ml-5 flex gap-3 text-black">
            <div className="text-white">Start Date : </div>
        <DatePicker
        selected={startDate}
        onChange={(date) => {setStartDate(date);console.log(date)}}
        selectsStart
        startDate={startDate}
        endDate={endDate}
      />
      <div className="text-white">End Date :</div>
      <DatePicker
        selected={endDate}
        onChange={(date) => setEndDate(date)}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
      />
        </div>
        <div className='h-5/6  w-[78%] ml-5 mr-5 flex gap-5 flex-wrap overflow-y-auto no-scrollbar'>
            {
                line?(
                    <ResponsiveLine
        data={line}
        theme={{
            axis:{
                domain:{
                    line:{
                        stroke:"white"
                    }
                },
                legend:{
                    text:{
                        fill:"white"
                    }
                },
                ticks:{
                    line:{
                        stroke:"white",
                        strokeWidth:1,
                    },
                    text:{
                        fill:"white"
                    }
                }
            },
            legends:{
                text:{
                    fill:"white"
                }
            },
            tooltip:{
                container:{
                    color:"black",
                }
            }
        }}
        margin={{ top: 60, right: 50, bottom: 50, left: 90 }}
        xScale={{ type: 'point' }}
        yScale={{
            type: 'linear',
            min: 'auto',
            max: 'auto',
            stacked: false,
            reverse: false
        }}
        yFormat=" >-.2f"
        curve="catmullRom"
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 90,
            legend: '',
            legendOffset: 36,
            legendPosition: 'middle',
            truncateTickAt: 0
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "",
            legendOffset: -60,
            legendPosition: 'middle',
            truncateTickAt: 0
        }}
        enableGridX={false}
        enableGridY={false}
        pointSize={5}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={3}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-12}
        enableTouchCrosshair={true}
        useMesh={true}
        legends={[
            {
                anchor: 'top-right',
                direction: 'column',
                justify: false,
                translateX: 30,
                translateY: -40,
                itemsSpacing: 0,
                itemDirection: 'left-to-right',
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: 'circle',
                symbolBorderColor: 'rgba(0, 0, 0, .5)',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemBackground: 'rgba(0, 0, 0, .03)',
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
    />
                ):"Loading..."
            }
        </div>
        </>
    )
}

export default Daily