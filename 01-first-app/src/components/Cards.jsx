import React from 'react'
import "./Cards.css"

const Cards = (props) => {
  return (
    <div className='cards'>
       <h3>{props.title}</h3>
       <p>{props.desc}</p>
    </div>
  )
}

export default Cards