import axios from "axios"
import { useEffect, useState } from "react";
function Product(){
    const [data,setdata]=useState({});
    // function getdata(){
    //     axios.get("http://localhost:8000/client/products")
    // .then((resoponse)=>{
    //     console.log(resoponse);
    //     setdata(resoponse);
    // }).catch((error)=>{
    //     console.log(error);
    // })
    // }
    // useEffect(getdata,[]);
    return(
        <>
        <div className="w-full bg-indigo-950">
            <div className="text-white text-4xl font-medium">
                <h1>Product</h1>

                <div className="h-2 w-2 bg-black"></div>
            </div>
        </div>
        </>
    )
}

export default Product