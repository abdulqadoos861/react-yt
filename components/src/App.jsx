import React from 'react'
import card from './components/card.jsx'
import Navbar from './components/navbar.jsx'

const App = () => {
  return (
    <div>
      <div className="card">
        <h1>Introducation</h1>
        <p>Hi ! I am Abdul Qadoos Bhatti. I have completed bechlors in computer Science from Government College University Faisalbad.I achieved 3.89 CGPA.</p>
      </div>
      {card()}
      <Navbar />
    </div>
  )
}

export default App
