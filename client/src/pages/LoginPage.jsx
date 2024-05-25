import React from 'react'
import Login from '../components/Login/Login'
import logo from "../public/HomeImage.png"
const LoginPage = () => {
  return (
    <div className='w-full flex '>
      <div className='flex items-center justify-center w-2/5'>
          <Login/>
      </div>
      <div className='w-full bg-red-600'>
        <img src={logo} alt="img" className='h-screen'/>
      </div>
    </div>
  )
}

export default LoginPage