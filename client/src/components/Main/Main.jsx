import React from 'react'
import TopBar from "../TopBar/TopBar";
import Product from '../Product/Product';
import Customer from '../Customers/Customer';

const Main = () => {
  return (
    <div className='w-full bg-indigo-950 text-white h-screen'>

        <TopBar/>
        <div className="w-full h-5/6">
        <Product/>
        </div>

    </div>
  )
}

export default Main