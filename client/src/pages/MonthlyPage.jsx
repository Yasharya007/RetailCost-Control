import React from 'react'
import MenuBar from '../components/MenuBar/MenuBar'
import TopBar from '../components/TopBar/TopBar'
import Monthly from '../components/Monthly/Monthly'

const Monthlypage = () => {
  return (
    <>
        <MenuBar/>
        <div className='w-full bg-indigo-950 text-white h-screen'>
            <TopBar/>
            <div className='w-full h-[90%]'>
                <Monthly/>
            </div>
        </div>
    </>
  )
}

export default Monthlypage