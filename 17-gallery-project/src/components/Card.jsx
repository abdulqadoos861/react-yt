import React from 'react'

const Card = (props) => {
    const user= props.user
  return (
    <div>
        <a href={user.url}>
          <div className="h-40 w-44 overflow-hidden bg-white" >
        <img className='h-full rounded-10 object-cover' src={user.download_url} alt={user.author} />
      </div>
      <h2>{user.author}</h2>
        </a>
    </div>
  )
}

export default Card
