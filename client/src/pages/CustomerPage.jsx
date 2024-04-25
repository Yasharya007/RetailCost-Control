import React from 'react'
import MenuBar from '../components/MenuBar/MenuBar'
import TopBar from '../components/TopBar/TopBar'
import Customer from '../components/Customers/Customer'

const CustomerPage = () => {
  return (
    <>
        <MenuBar/>
        <div className='flex-row bg-indigo-950'>
            <TopBar/>
            <Customer/>
        </div>
    </>
  )
}

export default CustomerPage