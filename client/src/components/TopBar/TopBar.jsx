import React, {useState} from 'react'
import { RxHamburgerMenu,RxCross2 } from "react-icons/rx";
import { IoSearch } from "react-icons/io5";
import { IoIosSettings } from "react-icons/io";
import logo from "./image.png"


const TopBar = () => {
  const [inputValue, setInputValue] = useState("");
  const handleChange = (e) => {
    setInputValue(e.target.value)
  }
  return (
    <div className='h-16 w-full pl-5 pr-10 flex items-center justify-between text-white'>
      <div id="left" className='flex items-center'>
        <RxHamburgerMenu className='text-2xl mr-5 cursor-pointer'/>
        <div id="input" className='flex relative'>
          <input type="text" className='bg-blue-900 outline-none rounded-md text-white pl-3 pr-12 h-7' placeholder='Search' value={inputValue} onChange={handleChange}/>
          {inputValue.length ? 
            <RxCross2 className='absolute right-7 top-2 cursor-pointer' onClick={() => {setInputValue("")}}/> : 
            ""}
          <IoSearch className='absolute right-2 top-2 cursor-pointer'/>
        </div>
      </div>

      <div id="right" className='h-10 w-52  flex items-center'>
            <IoIosSettings className='text-3xl mr-6'/>
            <img src={logo} alt="img" className='w-10 h-10 rounded-full'/>

            <div className='ml-5 '>
              <h4 className='text-sm font-semibold'>Shelly</h4>  
              <h5 className='text-xs'>Pharmacist</h5>            
            </div>
      </div>
    </div>
  )
}

export default TopBar