import axios from "axios"
import { useEffect, useState } from "react";
import Header from "../Header/Header.jsx";
import { ResponsiveLine } from '@nivo/line'
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

function Overview({dashboard=false}){
    // const [statdata,setStatdata]=useState({});
    // const [salesLine,setSalesLine]=useState([]);
    const nevigate=useNavigate();
    const[salesLinef,setSalesLine]=useState([]);
    const[unitLinef,setUnitLine]=useState([]);
    const[mode,setmode]=useState("sales")
    // console.log(mode);
    function getdata(){
        axios.get("http://localhost:8000/sales/sales",{withCredentials:true})
    .then((response)=>{
        // console.log(response.data);
        if(response.data.user===""){
            toast.error("login first");
            nevigate("/login");
          }

        const info =[{
            id:"sales",
            color:"white",
            data:[]
        }];
        const info2=[{
            id:"units",
            color:"white",
            data:[]
        }]
        let myData=[];
        let myDataunit=[]
        let total=0;
        let totalunit=0
        let recv=response.data.stat.monthlyData;
        console.log(recv)
        recv.forEach((element) => {
            total+=element.totalSales;
            totalunit+=element.totalUnits;
            myData.push({
                x:element.month,
                y:total
            })
            myDataunit.push({
                x:element.month,
                y:totalunit
            })
        });
        info[0].data=myData;
        info2[0].data=myDataunit;
        console.log(info);
        setSalesLine(info);
        setUnitLine(info2);
    }).catch((error)=>{
        console.log(error);
    })
    }
    useEffect(getdata,[]);
    return(
        <>
        {
            !dashboard?( <Header heading="OVERVIEW" des="Total units and total revenue of the year"/> ):("")
        }
        <div className={`ml-5 ${dashboard?'hidden':''}`}>
        <select className=" bg-blue-950 border-solid border-2 border-white" onChange={(e)=>setmode(e.target.value)}>
            <option value="sales">Sales</option>
            <option value="units">Units</option>
        </select>
        </div>
        <div className={`${dashboard?'h-full w-[100%]':'h-5/6  w-[80%]'} ml-5 mr-5 flex gap-5 flex-wrap overflow-y-auto no-scrollbar`}>
            {
                salesLinef?(
                    <ResponsiveLine
        data={mode==="sales"?salesLinef:unitLinef}
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
        margin={{ top: 20, right: 50, bottom: 50, left: 70 }}
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
            format:(v)=>{
                if(dashboard){
                    return v.slice(0,3);
                }else return v
            },
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: dashboard?"":'Month',
            legendOffset: 36,
            legendPosition: 'middle',
            truncateTickAt: 0
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            tickValues:5,
            legend: dashboard?"": mode==="sales"?'Total Revenue':'Total Units',
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
        enableArea={dashboard?true:false}
        areaOpacity={0.3}
        enableTouchCrosshair={true}
        useMesh={true}
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 30,
                translateY: -40,
                itemsSpacing: 0,
                itemDirection: 'left-to-right',
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity:dashboard?0:0.75,
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

export default Overview