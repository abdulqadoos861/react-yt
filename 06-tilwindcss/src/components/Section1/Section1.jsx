import React from 'react'
import Navbar from './Navbar'
import Center from './Center'

const Section1 = (props) => {
  return (
    <div className='h-screen max-w-full'>
        <Navbar />
        <Center data={props.data} />
    </div>
  )
}

export default Section1
