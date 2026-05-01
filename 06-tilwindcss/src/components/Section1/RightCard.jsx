import React from 'react'
import { ArrowRight } from 'lucide-react'

const RightCard = (props) => {
  return (
    <div className='h-full  overflow-hidden relative shrink-0 w-80 rounded-4xl'>
        <img className='h-full w-full object-cover' src={props.img} />
        <div className='absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between'>
        <h1 className='bg-white h-8 w-8 text-center rounded-3xl'>{props.id + 1}</h1>
        <div>
            <p className='leading-normal font-bold text-lg text-white'>{props.intro}</p>
            <div className='flex justify-items-center gap-3  '>
                <button className='bg-blue-700 px-7 py-3 rounded-4xl text-white font-bold'>{props.tag}</button>
                <button  className='bg-blue-700 px-7 py-3 rounded-4xl text-white font-bold'><ArrowRight /></button>
            
            </div>
        </div>

        </div>
      
    </div>
  )
}

export default RightCard
