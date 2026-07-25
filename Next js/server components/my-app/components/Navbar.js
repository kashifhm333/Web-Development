import React from 'react'
import Link from 'next/link'
const Navbar = () => {
  return (
    <div className='flex justify-between '>
        <Link href="/"> <li>Home</li></Link>
        <Link href="/about"> <li>About</li></Link>
        <Link href="/contact"> <li>Contact</li></Link>
      
    </div>
  )
}

export default Navbar

