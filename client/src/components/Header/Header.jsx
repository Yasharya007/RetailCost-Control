import React from 'react'

function Header({heading,des}) {
  return (
    <div className='flex-col'>
            <div className="text-white text-3xl font-medium ml-5">{heading}</div>
            <div className=" text-gray-300 text-sm font-medium mt-1 ml-5 mb-7">{des}</div>
    </div>
  )
}

export default Header