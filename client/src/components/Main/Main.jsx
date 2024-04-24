import React from 'react'
import TopBar from "../TopBar/TopBar";
import Product from '../Product/Product';
import Customer from '../Customers/Customer';

const Main = () => {
  return (
    <div className='w-full bg-indigo-950 text-white h-screen'>

        <TopBar/>
        <Customer/>

    </div>
  )
}

export default Main