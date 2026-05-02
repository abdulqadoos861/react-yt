import React from 'react'
import axios from 'axios'

const App = () => {

  const getDAta = async()=>{
    const res = await axios.get('https://jsonplaceholder.typicode.com/todos')
    console.log(res.data);
  }
  getDAta();

  return (
    <div>
      now we are calling api in react js
    </div>
  )
}

export default App
