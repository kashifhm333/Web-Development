import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import NavBar from '../documents/NavBar'
import Footer from '../documents/Footer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavBar />
    <div className="container">
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>

    </div>




    </>
  )
}

export default App
