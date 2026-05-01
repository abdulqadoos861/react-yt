import React from 'react'
import RightCard from './RightCard'

const ImageContainer = (props) => {
  return (
    <div className='w-2/3 h-full flex flex-nowrap gap-10  overflow-x-auto'>
        {props.data.map((item,index) => {
            
            return <RightCard key={index} id ={index} img={item.img} intro={item.intro} tag={item.tag}/>

        })
        }
    </div>
  )
}

export default ImageContainer
