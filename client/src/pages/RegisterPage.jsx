import React from 'react'
import MainForm from '../components/MainForm/MainForm'
import logo from "../public/HomeImage.png"
const RegisterPage = () => {
  return (
    <div className='w-full flex '>
      <div className='flex items-center justify-center w-2/5'>
          <MainForm/>
          <img src="" alt="" />
      </div>
      <div className='w-full bg-red-600'>
        <img src={logo} alt="img" className=' h-screen'/>
      </div>
    </div>
  )
}

export default RegisterPage