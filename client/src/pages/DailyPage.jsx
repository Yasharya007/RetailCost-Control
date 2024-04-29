import React from 'react'
import MenuBar from '../components/MenuBar/MenuBar'
import TopBar from '../components/TopBar/TopBar'
import Daily from '../components/Daily/Daily'

const DailyPage = () => {
  return (
    <>
        <MenuBar/>
        <div className='w-full bg-indigo-950 text-white h-screen'>
            <TopBar/>
            <div className='w-full h-[85%]'>
                <Daily/>
            </div>
        </div>
    </>
  )
}

export default DailyPage