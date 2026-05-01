import React from 'react'
import LeftText from './LeftText'
import ImageContainer from './ImageContainer'

const Center = (props) => {
  return (
    <div className='flex flex-row px-10  py-18 h-[90vh] gap-10'>
        <LeftText />
        <ImageContainer data ={props.data}/>
    </div>
  )
}

export default Center
