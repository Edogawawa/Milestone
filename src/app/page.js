'use client'
import { useEffect, useState } from "react"
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
const rawToDos = [
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
  const [toDos, setToDo] = useState(rawToDos)

  const [editedId, setEditedId] = useState(undefined)
  useEffect(() => {
    if(editedId === undefined) return
    const toDo = toDos.find(v => v.id === editedId)
    if(!toDo) return
    setDescription(toDo.description)
  }, [editedId])

  const clearInput = () => {
    setDescription("")
  }

  const createToDo = () => {
    if(description === ""){
      alert("Description can't be empty")
      return
    }

    setToDo([...toDos, {
      id: uid(),
      description: description
    }])
    clearInput()
  }

  const updateToDo = () => {
    setToDo(toDos.map(v => {
      if(v.id === editedId){
        return {
          id: editedId,
          description
        }
      } else return v
    }))
    setEditedId(undefined)
    clearInput()
  }

  const cancelUpdateToDo = () => {
    setEditedId(undefined)
    clearInput()
  }

  const deleteToDo = (id) => {
    setToDo(toDos.filter(v => v.id !== id))
  }

  return (
    <main className="p-3">
      <div className="flex flex-row gap-1">
        <input
          type="text"
          value={description}
          className="w-full text-black outline-none p-2"
          onChange={e => setDescription(e.target.value) }
        ></input>

        {/* <input
          type="date"
          className="text-black"
          onChange={e => setDate(e.target.value)}
        ></input>
        <input
          type="time"
          className="text-black"
          onChange={e => setTime(e.target.value)}
        ></input>*/}

        {
          editedId ? 
          <div className="flex flex-row">
            <button
              onClick={updateToDo}
            >Update</button>
            <button
              onClick={cancelUpdateToDo}
            >Cancel</button>
          </div> 
          : 
          <button
            onClick={createToDo}
          >Add</button>
        }
      </div>
      <div className="flex flex-col">
        {toDos.map(v => <div key={v.id} className="flex flex-row">
          <div
            className="flex items-center"
          >{v.description}</div>
          <div className="ml-auto">
            <button onClick={() => setEditedId(v.id)}>Edit</button>
            <button onClick={deleteToDo.bind(null, v.id)}>Delete</button>
          </div>
        </div>)}
      </div>
    </main>
  )
}