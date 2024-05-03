import React from 'react'
import MenuBar from '../components/MenuBar/MenuBar'
import TopBar from '../components/TopBar/TopBar'
import AddProduct from '../components/AddProduct/AddProduct'

const AddProductPage = () => {
  return (
    <>
        <MenuBar/>
        <div className='w-full bg-indigo-950 text-white h-screen'>
            <TopBar/>
            <div className='w-full h-[90%]'>
                <AddProduct/>
            </div>
        </div>
    </>
  )
}

export default AddProductPage