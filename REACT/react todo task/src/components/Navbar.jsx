import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
    <nav className="flex justify-around bg-indigo-900 text-white py-2">
        <div className="logo cursor-pointer ">
            <span className='font-bold text-xl mx-8'>iTask</span>
        </div>
        <ul className="flex justify-around ">
            <li className="mx-4 hover:font-bold transition-all duration-100 hover:text-xl cursor-pointer hover:underline">Home</li>
            <li className="mx-4 hover:font-bold transition-all duration-100 hover:text-xl cursor-pointer hover:underline">About</li>
            <li className="mx-4 hover:font-bold transition-all duration-100 hover:text-xl cursor-pointer hover:underline">Contact</li>
        </ul>
      
    </nav>
  )
}

export default Navbar
