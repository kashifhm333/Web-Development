import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { v4 as uuidv4 } from "uuid";

 // ⇨ 'ab16e731-6cee-424d-81a0-5929e9bdb0cc'
function App() {
  
  const [todo, settodo] = useState("")
  const [todos, settodos] = useState([])

  const handleAdd = () =>{
    settodos([...todos, {id: uuidv4(), todo, isComplete: false }])
    settodo("")

  }
  const handleEdit = () =>{

  }
  const handleDelete = () =>{

  }
  const handleChange = (e) => {
    settodo(e.target.value)
    console.log(todo)
  }

  const handleCheckbox =(e)=>{
    const id = e.target.name
    console.log(id)

    const index = todos.findIndex(item =>{
      return item.id === id
    })
    let newTodos =[...todos];
    newTodos[index] = {...newTodos[index], isComplete: !newTodos[index].isComplete}
    settodos(newTodos)
  }

  return (
    <>
      <Navbar />
      <div className="mx-3 md:container md:mx-auto my-5 rounded-xl p-5 bg-violet-100 min-h-[80vh] md:w-[35%]">
        <div className="addtodos my-5">
          <h2 className="text-2xl font-bold my-2">Add Todo</h2>
          <input onChange={handleChange} value={todo} type="text" className="bg-white  px-5 rounded-lg w-1/2" />
          <button onClick={handleAdd} className="bg-violet-950 px-2 mx-3 text-white p-1 rounded-lg hover:bg-violet-500">Add</button>
        </div>
        <h2 className="text-xl font-bold my-2">Todo List</h2>
        {todos.map(item =>{

        
          return (
        <div className="todo flex w-1/2 justify-between my-3">
          <input onChange={handleCheckbox} name={item.id} checked={item.isComplete} type="checkbox" id="" />
          <div className={item.isComplete ? "line-through" :""}>{item.todo}</div>
          <div className="button ">
            <button onClick={handleEdit} className="bg-violet-950 px-2 mx-3 text-white p-1 rounded-lg hover:bg-violet-500">Edit</button>
            <button onClick={handleDelete} className="bg-violet-950 px-2 mx-1 text-white p-1 rounded-lg hover:bg-violet-500">Delete</button>
          </div>
        </div>
          )
        })} 



      </div>
    </>
  )
}

export default App
