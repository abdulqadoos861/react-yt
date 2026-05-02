import React, { useState } from 'react'

const App = () => {

  const [username, setUsername] = useState('');

  const formhandler = (e) => {
    e.preventDefault();
    console.log(`Form Submitted by ${username || 'Unknown User'}`);
    setUsername('');
  }

  return (
    <div>
      <form action="" onSubmit={(e)=>{
        formhandler(e)
      }}>
          <input type="text"
           id='username' 
           placeholder='Enter Your Name: '
           value={username}
           onChange={(e)=>{
            setUsername(e.target.value)
           }}
           />
          <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App
