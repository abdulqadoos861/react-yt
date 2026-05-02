import React from 'react'

const App = () => {

  localStorage.removeItem('city')
  return (
    <div>
      <h1>Local Storage Example</h1>
    </div>
  )
}

export default App
