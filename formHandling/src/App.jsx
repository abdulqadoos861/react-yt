import React from 'react'

const App = () => {

  function formhandler(e){
    e.preventDefault();
    console.log(`value of username is ${e.target.username.value}`);
  }
  
  return (
    <div className='h-screen w-screen flex items-center justify-center'>
      <form onSubmit={(e)=>{
        formhandler(e)
      }} className='border-2 p-4 rounded-lg flex flex-col gap-4'>
        <input  className='border-2 p-2 m-3 ' type="text" name="username" id="username" placeholder='Enter username' />
        <button className='border-2 p-2 m-3 bg-red-500' type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App
