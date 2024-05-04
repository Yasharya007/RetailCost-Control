import React from 'react'
import MenuBar from '../components/MenuBar/MenuBar'
import TopBar from '../components/TopBar/TopBar'
import DashBoard from '../components/DashBoard/DashBoard'

const DashboardPage = () => {
  return (
    <>
        <MenuBar/>
        <div className='w-full bg-indigo-950 text-white h-screen'>
            <TopBar/>
            <div className='w-full h-[85%]'>
                <DashBoard/>
            </div>
        </div>
    </>
  )
}

export default DashboardPage