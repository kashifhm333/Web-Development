import React from 'react'
import './Cards.css'
const Cards = (props) => {
  return (
    <div key={props.userId}>
        <h1>{props.id}</h1>
        <p>{props.title}</p>
        <p>{props.body}</p>
      
    </div>
  )
}

export default Cards
