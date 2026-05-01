import React from 'react'
import Hero from './Hero';
import Arrow from './arrow';

const LeftText = () => {
  return (
    <div className=' h-full w-1/3 py-7 px-5 flex flex-col justify-between '>
        <Hero />
        <Arrow />
    </div>
  )
}

export default LeftText
