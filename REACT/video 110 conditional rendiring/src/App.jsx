import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [showbtn, setShowbtn] = useState(true)
  const [todo, settodo] = useState([
    {
      title: "first todo",
      desc: "this is the first todo"
    },
    {
      title: "second todo",
      desc: "this is the second todo"
    },
    {
      title: "third todo",
      desc: "this is the third todo"
    }
  ])

  // const Todo = ({todo}) => {
  //   return (<>
    
  //   <div className="todo">I am todo:{todo.title}</div>
  //   <div className="todo">I am todo:{todo.desc}</div>
    
  //   </>)

  // }

  return (
    <>
      <section id="center">
       
         {/* hee i button you will see me when i am true */}
        {/* {showbtn?<button>i an the button you are looking for</button>: "Kesa lgaa"} */}


      {/* i am an other verion of doing the same thing as above */}
      {showbtn &&<button>i am the second way for toggling me</button>}



      {todo.map(todo =>{
        // return <Todo key={todo.title}  todo={todo}/>
        return ( <div key={todo.title}>   <div className="todo">I am todo:{todo.title}</div>
    <div className="todo">I am todo:{todo.desc}</div></div>)
    
      })}

        
        <button
          type="button"
          className="counter"
          onClick={() => setShowbtn(!showbtn)}
        >
          Count is {count}
        </button>
      </section>

     
    </>
  )
}

export default App
