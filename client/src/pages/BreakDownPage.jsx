import React from 'react'
import MenuBar from '../components/MenuBar/MenuBar'
import TopBar from '../components/TopBar/TopBar'
import BreakDown from '../components/BreakDown/BreakDown'

const BreakDownPage = () => {
  return (
    <>
        <MenuBar/>
        <div className='w-full bg-indigo-950 text-white h-screen'>
            <TopBar/>
            <div className='w-full h-[90%]'>
                <BreakDown/>
            </div>
        </div>
    </>
  )
}

export default BreakDownPage