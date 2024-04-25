import React from 'react'
import TopBar from '../components/TopBar/TopBar'
import Product from '../components/Product/Product'
import MenuBar from '../components/MenuBar/MenuBar'

const ProductPage = () => {
  return (
    <>
      <MenuBar/>
        <div className='w-full bg-indigo-950 text-white h-screen'>
            <TopBar/>
            <div className='w-full h-[90%]'>
                <Product/>
            </div>
        </div>
    </>
  )
}

export default ProductPage