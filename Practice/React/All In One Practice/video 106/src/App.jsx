import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './components/Navbar'
import Cards from './components/Cards'

function App() {

  return(
    <>
    <Navbar/>
    <div className="cards">
      <Cards title="First Card" description="This is a first card."/>
      <Cards title="Second Card" description="This is a second card."/>
      <Cards title="Third Card" description="This is a third card."/>
    </div>
    </>
  )
}

export default App
