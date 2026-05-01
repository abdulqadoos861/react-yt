import React from 'react'
import { useState } from 'react'

const Counter = () => {

    const [num, setNum] = useState(0)
    function increaseNum() {
        setNum(num + 1)
    }
    function decreaseNum() {
        setNum(num - 1)
    }
    function jum5Num() {
        setNum(num + 5)
    }


  return (
    <div className=''>
        <div className="w-50 border-2 m-5 rounded-2xl">
            <h1 className=' p-20 text-6xl font-serif'>{num}</h1>
        </div>
        
        <button className='p-7 m-5 rounded-2xl text-white font-bold bg-black' onClick={increaseNum}>Increase</button>
        <button className='p-7 m-5 rounded-2xl text-white font-bold bg-black' onClick={decreaseNum}>Decrease</button>
        <button className='p-7 m-5 rounded-2xl text-white font-bold bg-black' onClick={jum5Num}>Increase by 5</button>
    </div>
  )
}

export default Counter
