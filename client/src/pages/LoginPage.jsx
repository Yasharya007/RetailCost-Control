import React from 'react'
import Login from '../components/Login/Login'

const LoginPage = () => {
  return (
    <div className='w-full flex '>
      <div className='flex items-center justify-center w-1/3'>
          <Login/>
      </div>
      <div className='w-full bg-red-600'>
        <img src="" alt="img" className=''/>
      </div>
    </div>
  )
}

export default LoginPage