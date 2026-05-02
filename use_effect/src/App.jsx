import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react'

const App = () => {

  const [count, setCount] = useState(0);
  const [num , setNum] = useState(0);


  useEffect(() => {
    console.log('useEffect called');
  } , [count,num] );

  return (
    <div>
      <h1>useEffect</h1>
      <h2>{count}</h2>

      <button onClick={
        () => setCount(count + 1)
      }>Click</button>
      <h2>{num}</h2>
      <button onClick={()=>{
        setNum(num + 10)
      }}>Num</button>
    </div>
  )
}

export default App
