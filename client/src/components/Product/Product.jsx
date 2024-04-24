import axios from "axios"
import { useEffect, useState } from "react";
import Header from "../Header/Header.jsx";
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
        <Header heading="PRODUCTS" des="See your list of products"/> 
        <div className="h-5/6 ml-5 mr-5 flex gap-5 flex-wrap overflow-y-auto no-scrollbar">
            <div className="bg-blue-950 h-44 w-72 flex-col pl-3 pt-3">
                <div className=" text-gray-500 text-xs font-medium mb-1.5">accessories</div>
                <div className="text-sm font-medium mb-0.5">Cordilie Packe</div>
                <div className="text-sm text-yellow-300 mb-2">$249.45</div>
                <div className=""> 3 stars to be placed</div>
                <div className="text-xs mb-4">this is a short description of one line</div>
                <div className="text-xs">SEE MORE</div>
            </div>
            <div className="bg-blue-950 h-44 w-72 flex-col pl-3 pt-3">
                <div className=" text-gray-500 text-xs font-medium mb-1.5">accessories</div>
                <div className="text-sm font-medium mb-0.5">Cordilie Packe</div>
                <div className="text-sm text-yellow-300 mb-2">$249.45</div>
                <div className=""> 3 stars to be placed</div>
                <div className="text-xs mb-4">this is a short description of one line</div>
                <div className="text-xs">SEE MORE</div>
            </div>
            <div className="bg-blue-950 h-44 w-72 flex-col pl-3 pt-3">
                <div className=" text-gray-500 text-xs font-medium mb-1.5">accessories</div>
                <div className="text-sm font-medium mb-0.5">Cordilie Packe</div>
                <div className="text-sm text-yellow-300 mb-2">$249.45</div>
                <div className=""> 3 stars to be placed</div>
                <div className="text-xs mb-4">this is a short description of one line</div>
                <div className="text-xs">SEE MORE</div>
            </div>
            <div className="bg-blue-950 h-44 w-72 flex-col pl-3 pt-3">
                <div className=" text-gray-500 text-xs font-medium mb-1.5">accessories</div>
                <div className="text-sm font-medium mb-0.5">Cordilie Packe</div>
                <div className="text-sm text-yellow-300 mb-2">$249.45</div>
                <div className=""> 3 stars to be placed</div>
                <div className="text-xs mb-4">this is a short description of one line</div>
                <div className="text-xs">SEE MORE</div>
            </div>
            <div className="bg-blue-950 h-44 w-72 flex-col pl-3 pt-3">
                <div className=" text-gray-500 text-xs font-medium mb-1.5">accessories</div>
                <div className="text-sm font-medium mb-0.5">Cordilie Packe</div>
                <div className="text-sm text-yellow-300 mb-2">$249.45</div>
                <div className=""> 3 stars to be placed</div>
                <div className="text-xs mb-4">this is a short description of one line</div>
                <div className="text-xs">SEE MORE</div>
            </div>
            <div className="bg-blue-950 h-44 w-72 flex-col pl-3 pt-3">
                <div className=" text-gray-500 text-xs font-medium mb-1.5">accessories</div>
                <div className="text-sm font-medium mb-0.5">Cordilie Packe</div>
                <div className="text-sm text-yellow-300 mb-2">$249.45</div>
                <div className=""> 3 stars to be placed</div>
                <div className="text-xs mb-4">this is a short description of one line</div>
                <div className="text-xs">SEE MORE</div>
            </div>
            <div className="bg-blue-950 h-44 w-72 flex-col pl-3 pt-3">
                <div className=" text-gray-500 text-xs font-medium mb-1.5">accessories</div>
                <div className="text-sm font-medium mb-0.5">Cordilie Packe</div>
                <div className="text-sm text-yellow-300 mb-2">$249.45</div>
                <div className=""> 3 stars to be placed</div>
                <div className="text-xs mb-4">this is a short description of one line</div>
                <div className="text-xs">SEE MORE</div>
            </div>
            <div className="bg-blue-950 h-44 w-72 flex-col pl-3 pt-3">
                <div className=" text-gray-500 text-xs font-medium mb-1.5">accessories</div>
                <div className="text-sm font-medium mb-0.5">Cordilie Packe</div>
                <div className="text-sm text-yellow-300 mb-2">$249.45</div>
                <div className=""> 3 stars to be placed</div>
                <div className="text-xs mb-4">this is a short description of one line</div>
                <div className="text-xs">SEE MORE</div>
            </div>
            <div className="bg-blue-950 h-44 w-72 flex-col pl-3 pt-3">
                <div className=" text-gray-500 text-xs font-medium mb-1.5">accessories</div>
                <div className="text-sm font-medium mb-0.5">Cordilie Packe</div>
                <div className="text-sm text-yellow-300 mb-2">$249.45</div>
                <div className=""> 3 stars to be placed</div>
                <div className="text-xs mb-4">this is a short description of one line</div>
                <div className="text-xs">SEE MORE</div>
            </div>
            <div className="bg-blue-950 h-44 w-72 flex-col pl-3 pt-3">
                <div className=" text-gray-500 text-xs font-medium mb-1.5">accessories</div>
                <div className="text-sm font-medium mb-0.5">Cordilie Packe</div>
                <div className="text-sm text-yellow-300 mb-2">$249.45</div>
                <div className=""> 3 stars to be placed</div>
                <div className="text-xs mb-4">this is a short description of one line</div>
                <div className="text-xs">SEE MORE</div>
            </div>
            <div className="bg-blue-950 h-44 w-72 flex-col pl-3 pt-3">
                <div className=" text-gray-500 text-xs font-medium mb-1.5">accessories</div>
                <div className="text-sm font-medium mb-0.5">Cordilie Packe</div>
                <div className="text-sm text-yellow-300 mb-2">$249.45</div>
                <div className=""> 3 stars to be placed</div>
                <div className="text-xs mb-4">this is a short description of one line</div>
                <div className="text-xs">SEE MORE</div>
            </div>
        </div>
        </>
    )
}

export default Product