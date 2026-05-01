import React from 'react'

const Navbar = () => {
  return (
    <div className='flex flex-row justify-between m-3 uppercase'> 
        <div className="font-bold bg-black text-white px-7 py-3  rounded-full">
            <h1>Targeted Audiance</h1>
        </div>
        <div className="items flex gap-8 text-black text-sm bg-gray-200 px-6 py-4 rounded-full">
            <a href="#">Digital</a>
            <a href="#">Banking</a>
            <a href="#">platform</a>
        </div>
    </div>
  )
}

export default Navbar
