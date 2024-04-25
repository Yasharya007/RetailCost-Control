import React from 'react'
import MenuBar from '../components/MenuBar/MenuBar'
import TopBar from '../components/TopBar/TopBar'
import Customer from '../components/Customers/Customer'

const CustomerPage = () => {
  return (
    <>
        <MenuBar/>
        <div className='w-full bg-indigo-950 text-white h-screen'>
            <TopBar/>
            <div className='w-full h-[85%]'>
                <Customer/>
            </div>
        </div>
    </>
  )
}

export default CustomerPage