import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [showbtn, setshowbtn] = useState(true)

  const [todo, settodo] = useState([
    {name: "Kashif",
    cast: "Memon"
    },
     {name: "Aftab",
    cast: "Memon"
    },
     {name: "Arsalan",
    cast: "Memon"
    }
  ])


  return(
    <>
    <button onClick={()=>{setshowbtn(!showbtn)}}> toggler</button>
    {showbtn ? <button>click me</button> : <button>i am another button</button>}

    <h1>Now list rendering</h1>
    {todo.map((item =>{
      return(
        <div key={item.name}>{item.name} - {item.cast}</div>
      )
    }))}

    </>
  )
}

export default App
