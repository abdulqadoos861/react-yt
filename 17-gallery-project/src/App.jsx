import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import Card from './components/Card';

const App = () => {

  const [userData , setUserData] = useState([]);
  const [page , setPage] = useState(1)

  useEffect(function(){
    getData()
  },[page])
  const getData = async ()=>{
    const res = await axios.get(`https://picsum.photos/v2/list?page=${page}&limit=10`)
    const users = res.data
    setUserData(users);
    console.log(userData)
  }

  let printUsersData = "Loading....";
  if (userData.length>0){
    printUsersData = userData.map((user , idx)=>{

      return <div key={user.id} className='ml-10'>
        <Card user={user} />
      </div>
    })
  }

  return (
    <div className='bg-black h-full   text-white'>
      <div className='flex h-[50] gap-10  flex-wrap'>
      {printUsersData}
      </div>
      <div className='flex justify-center gap-5 m-20'>
        <button 
        onClick={()=>{
          if( page>1)
          {setPage(page-1)
            setUserData([])
          }
        }} 
        className='bg-amber-700 px-6 py-3'>
          Prev</button>

        <h1>Page {page}</h1>

        <button
        onClick={()=>{
          setPage(page+1)
          setUserData([])
        }} 
        className='bg-amber-700 px-6 py-3'>
        Next</button>
      </div>
      </div>
  )
}

export default App
