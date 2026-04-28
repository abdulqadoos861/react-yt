import React from 'react'
import Card from './components/card'

const App = () => {
  const name = 'Abdul Qadoos Bhatti'
  return (
    <div className='parent'>
      <Card  user = 'Abdul Qadoos' age = {23} />
      <Card  user = 'Abdul Rehman' age = {25} />
      <Card  user = 'Abdullah' age = {24} />
    </div>
  )
}

export default App
