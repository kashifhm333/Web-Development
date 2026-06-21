import React from 'react'
import './card.css'

const Card = (props) => {
  return (
    <div>
      <div className="card">
        <h1>{props.title}</h1>
        <p>{props.paragraph}</p>
      </div>
    </div>
  )
}

export default Card
