import React from 'react'
import { AppContext } from '../../context/context'
const Button = () => {
    const count = React.useContext(AppContext)
  return (
    <div>
      <p>Count: {count}</p>
    </div>
  )
}

export default Button
