import React from 'react'

function Header({heading,des}) {
  return (
    <>
            <div className="text-white text-4xl font-medium ml-5">{heading}</div>
            <div className=" text-gray-300 font-medium mt-1 ml-5 mb-7">{des}</div>
    </>
  )
}

export default Header