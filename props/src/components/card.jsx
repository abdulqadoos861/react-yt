import React from 'react'

const Card = (props) => {
  return (
    <div>
      <div className="card">
        <img src="testimage.png" alt="" srcset="" />
        <h1>{props.user}</h1>
        <p>{props.age}</p>
        <button>View Profile </button>
      </div>
    </div>
  )
}

export default Card;
