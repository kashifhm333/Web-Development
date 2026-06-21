import { useState } from 'react'
import './App.css'
import { counterContext } from '../context/context'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <counterContext.Provider value={count}>
      <Navbar />
      <section id="center">
    
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>
      </counterContext.Provider>
    </>
  )
}

export default App
