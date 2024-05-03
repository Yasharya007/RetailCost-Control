import React from 'react'
import MenuBar from '../components/MenuBar/MenuBar'
import TopBar from '../components/TopBar/TopBar'
import AddTransaction from '../components/AddTransaction/AddTransaction'

const AddTransactionPage = () => {
  return (
    <>
        <MenuBar/>
        <div className='w-full bg-indigo-950 text-white h-screen'>
            <TopBar/>
            <div className='w-full h-[90%]'>
                <AddTransaction/>
            </div>
        </div>
    </>
  )
}

export default AddTransactionPage