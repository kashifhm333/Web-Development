import React from 'react'
import { useEffect } from 'react'

const NavBar = ({ color }) => {
    
      useEffect(() => {
        alert('nav bar use effect')
      }, [color])
  return (
    <div>
    i am navbar of {color} this.
      
    </div>
  )
}

export default NavBar
