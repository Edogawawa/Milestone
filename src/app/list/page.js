'use client'
import { useEffect, useState } from "react"
/**
 * @typedef {{
 *  id: string
 *  description: string
 *  checked: boolean
 *  date?: string
 *  time?: string
 * }} ToDo
 */

const uid = function(){
  return Date.now().toString(36) + Math.random().toString(36).substring(3);
}

/** @type {ToDo[]} */
const rawToDos = [
  {
    id: uid(),
    description: "Hello",
    checked: false,
    date: "", time: ""
  },
  {
    id: uid(),
    description: "Hello 2",
    checked: false,
    date: "", time: ""
  },
  {
    id: uid(),
    description: "Hello 3",
    checked: true,
    date: "", time: ""
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
    setDate(toDo.date)
    setTime(toDo.time)
  }, [editedId])

  const clearInput = () => {
    setDescription("")
    setDate("")
    setTime("")
  }

  const createToDo = () => {
    const newToDo = {
      id: uid(),
      description: description,
      checked: false,
      date, time
    }

    setToDo([...toDos, newToDo])
    clearInput()
  }

  const updateToDo = () => {
    setToDo(toDos.map(v => {
      if(v.id === editedId){
        return {
          id: editedId,
          checked: v.checked,
          description, date, time
        }
      } else return v
    }))
    setEditedId(undefined)
    clearInput()
  }

  const checkToDo = (id) => {
    setToDo(toDos.map(v => {
      if(v.id === id){
        return {
          ...v,
          checked: !v.checked
        }
      } else return v
    }))
  }

  const cancelUpdateToDo = () => {
    setEditedId(undefined)
    clearInput()
  }

  const deleteToDo = (id) => {
    const c = confirm("Are you sure want to delete?")
    if(c) setToDo(toDos.filter(v => v.id !== id))
  }

  return (
    <main className="p-3">
      <div className="flex flex-col">
        <input
          type="text"
          value={description}
          className="w-full text-black outline-none p-2"
          onChange={e => setDescription(e.target.value) }
        ></input>

        <div className="flex flex-row">
          {/* Create clear button later */}
          <div className="flex flex-row gap-3">
            <input
              type="date"
              className="text-black"
              value={date}
              onChange={e => setDate(e.target.value)}
            ></input>

            {
              (date) ?
                <input
                  type="time"
                  className="text-black"
                  value={time}
                  onChange={e => setTime(e.target.value)}
                ></input> : null
            }

            {
              (time || date) ?
                <button
                  onClick={() => { setTime(""); setDate("") }}
                >Clear</button>
                : null
            }
          </div>

          <div className="ml-auto flex flex-row gap-1">
            {
              description ?
                (editedId ?
                  <button
                    onClick={updateToDo}
                  >Update</button>
                  :
                  <button
                    onClick={createToDo}
                  >Add</button>) : null
            }
            {
              editedId ?
                <button
                  onClick={cancelUpdateToDo}
                >Cancel</button> : null
            }
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        {toDos.map(v => <div key={v.id} className="flex flex-row gap-2 p-2">
          <input 
            type="checkbox"
            value={v.checked}
            onChange={checkToDo.bind(null, v.id)}
          ></input>
          <div
            className="flex items-center"
          >{v.description}</div>
          <div className="flex items-center">{v.time+ " " + v.date}</div>
          {
            editedId !== v.id ?
              <div className="ml-auto flex flex-row gap-1">
                <button onClick={() => setEditedId(v.id)}>Edit</button>
                <button onClick={deleteToDo.bind(null, v.id)}>Delete</button>
              </div>
              : null
          }
        </div>)}
      </div>
    </main>
  )
}