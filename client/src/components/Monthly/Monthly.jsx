import axios from "axios"
import { useEffect, useState } from "react";
import Header from "../Header/Header.jsx";
import { ResponsiveLine } from '@nivo/line'
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

function Monthly(){
    // const [statdata,setStatdata]=useState({});
    // const [salesLine,setSalesLine]=useState([]);
    const nevigate=useNavigate();
    const[Line,setSalesLine]=useState([]);
    function getdata(){
        axios.get("http://localhost:8000/sales/sales",{withCredentials:true})
    .then((response)=>{
        console.log(response.data);
        if(response.data.user===""){
            toast.error("login first");
            nevigate("/login");
          }
        const info ={
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
        let recv=response.data.stat.monthlyData;
        console.log(recv)
        recv.forEach((element) => {
            myData.push({
                x:element.month,
                y:element.totalSales
            })
            myDataunit.push({
                x:element.month,
                y:element.totalUnits
            })
        });
        info.data=myData;
        info2.data=myDataunit;
        console.log(info);
        setSalesLine([info,info2]);
    }).catch((error)=>{
        console.log(error);
    })
    }
    useEffect(getdata,[]);
    return(
        <>
        <Header heading="MONTHLY SALES" des="Monthly sales chart"/>    
        <div className="ml-5">
        </div>
        <div className='h-5/6  w-[80%] ml-5 mr-5 flex gap-5 flex-wrap overflow-y-auto no-scrollbar'>
            {
                Line?(
                    <ResponsiveLine
        data={Line}
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
        margin={{ top: 40, right: 50, bottom: 50, left: 70 }}
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
            tickRotation: 0,
            legend: 'Month',
            legendOffset: 36,
            legendPosition: 'middle',
            truncateTickAt: 0
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "Total",
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

export default Monthly