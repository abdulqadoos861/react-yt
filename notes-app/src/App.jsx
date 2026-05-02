import React from 'react'
import { useState } from 'react';


const App = () => {

  const[title , setTitle] = useState('');
  const[content, setContent] = useState('');
  const [notes , setNotes] = useState([]);

  const formhandler = (e) =>{
    e.preventDefault();
    const newNote = [...notes , {title , content}]
    setNotes(newNote);
    console.log(notes);
    setTitle('');
    setContent('');
  }


  return (
    <div className='min-h-screen flex flex-col wrap lg:flex-row flex gap-10 items-center justify-center bg-gray-900'>
      <form 
      onSubmit={(e)=>{
        formhandler(e)
      }}
       className='flex justify-content bg-gray-100 p-10 rounded-lg flex-col gap-5'>

          <input 
          className='px-5 py-2 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-blue-500'
          type="text"
          name='title'
          id='title'
          placeholder='Enter Notes Title '
          value={title}
          onChange={(e) => {
            setTitle(e.target.value)
            console.log(e.target.value);
            }}
          />

          <textarea 
          className='px-5 py-2 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-blue-500'
          name="content"
          id="content"
          placeholder='Enter Notes Content'
          value={content}
          onChange={(e) =>{ 
            setContent(e.target.value);
            console.log(e.target.value)}}
          >

          </textarea>

          <button
          type="submit"
          className='px-5 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none'
          >
            Submit
          </button>
      </form>

        {notes.map((note)=>{
          return (
            <div className='mt-10 w-full h-100  max-w-md bg-[url("/image.png")] bg-cover pt-30 px-10 rounded-lg'>
              <h1>Title: {note.title}</h1>
              <p>Content : {note.content}</p>
            </div>
          )
        })}

    </div>
  )
}

export default App
