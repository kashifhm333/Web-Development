import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const handleClick = ()=>{
    setCount(count + 1)
  }


  return (
    <>
  <button onClick={handleClick}>CLICK ME {count}</button>

    </>
  )
}

export default App
