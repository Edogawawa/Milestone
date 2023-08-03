'use client'
import { useState } from "react"
/**
 * @typedef {{
 *  id: string
 *  description: string
 * }} ToDo
 */

const uid = function(){
  return Date.now().toString(36) + Math.random().toString(36).substring(3);
}

/** @type {ToDo[]} */
const ToDos = [
  {
    id: uid(),
    description: "Hello"
  },
  {
    id: uid(),
    description: "Hello 2"
  },
  {
    id: uid(),
    description: "Hello 3"
  }
]

export default function Home() {
  const [description, setDescription] = useState("")
  const [date, setDate] = useState("")
  const [time, setTime] = useState("")
  const [toDos, setToDo] = useState(ToDos)

  const createToDo = () => {
    if(description === ""){
      alert("Description can't be empty")
      return
    }

    setDescription("")
    setToDo([...toDos, {
      id: uid(),
      description: description
    }])
  }

  const deleteToDo = (id) => {
    setToDo(toDos.filter(v => v.id !== id))
  }

  return (
    <main>
      <div className="flex flex-row gap-1 text-black">
        <input
          type="text"
          value={description}
          className="w-full"
          onChange={e => setDescription(e.target.value) }
        ></input>
        <input
          type="date"
          onChange={e => setDate(e.target.value)}
        ></input>
        <input
          type="time"
          onChange={e => setTime(e.target.value)}
        ></input>
        <button 
          onClick={createToDo}
          className="text-white"
        >Add</button>
      </div>
      <div className="flex flex-col">
        {toDos.map(v => <div key={v.id} className="flex flex-row">
          <div>{v.description}</div>
          <div className="ml-auto">
            {/* <button>Edit</button> */}
            <button onClick={deleteToDo.bind(null, v.id)}>Delete</button>
          </div>
        </div>)}
      </div>
    </main>
  )
}