import React from 'react'
import axios from "axios"
import { useEffect, useState } from "react";
import Header from "../Header/Header.jsx";
import { ResponsiveChoropleth } from '@nivo/geo'
import { geoData } from '../../Data/geoData.js';
function Geography() {

    const [data,setdata]=useState([])
    function getdata(){
        axios.get("http://localhost:8000/client/geography")
    .then((resoponse)=>{
        console.log(resoponse.data);
        setdata(resoponse.data);
    }).catch((error)=>{
        console.log(error);
    })
    }
    useEffect(getdata,[]);

  return (
    <>
    <Header heading="GEOGRAPHY" des="Find where your customers are located"/>
    <div className='h-5/6  w-[80%] ml-5 mr-5 flex gap-5 flex-wrap overflow-y-auto no-scrollbar border-solid border-2 border-white'>
        {data.length>0?(
            <ResponsiveChoropleth
            data={data}
            theme={{
                axis:{
                    domain:{
                        line:{
                            stroke:"black"
                        }
                    },
                    legend:{
                        text:{
                            fill:"black"
                        }
                    },
                    ticks:{
                        line:{
                            stroke:"black",
                            strokeWidth:1,
                        },
                        text:{
                            fill:"black"
                        }
                    }
                },
                legends:{
                    text:{
                        fill:"black"
                    }
                },
                tooltip:{
                    container:{
                        color:"black",
                    }
                }
            }}
            features={geoData.features}
            margin={{ top:0, right: 0, bottom:0, left:-50 }}
            domain={[ 0, 60]}
            unknownColor="#666"
            label="properties.name"
            valueFormat=".2s"
            projectionType="mercator"
            projectionScale={110}
            projectionTranslation={[ 0.45, 0.6 ]}
            projectionRotation={[ 0, 0, 0 ]}
            borderWidth={1.3}
            borderColor="#fff"
            legends={[
                {
                    anchor: 'bottom-right',
                    direction: 'column',
                    justify: true,
                    translateX: 0,
                    translateY: -125,
                    itemsSpacing: 0,
                    itemWidth: 94,
                    itemHeight: 18,
                    itemDirection: 'left-to-right',
                    itemTextColor: 'white',
                    itemOpacity: 0.85,
                    symbolSize: 18,
                    effects: [
                        {
                            on: 'hover',
                            style: {
                                itemTextColor: 'blue',
                                itemOpacity: 1
                            }
                        }
                    ]
                }
            ]}
        />
        ):(
            <div className="w-full h-[50%] text-3xl flex items-center justify-center">
            Map is Loading ...
          </div>
        )}
    </div>
    </>
  )
}

export default Geography