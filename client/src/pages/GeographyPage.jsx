import React from 'react'
import MenuBar from '../components/MenuBar/MenuBar'
import TopBar from '../components/TopBar/TopBar'
import Geography from '../components/Geography/Geography.jsx'

const GeographyPage = () => {
  return (
    <>
        <MenuBar/>
        <div className='w-full bg-indigo-950 text-white h-screen'>
            <TopBar/>
            <div className='w-full h-[90%]'>
                <Geography/>
            </div>
        </div>
    </>
  )
}

export default GeographyPage