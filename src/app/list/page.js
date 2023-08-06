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
    description: "wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww",
    checked: true,
    date: "", time: ""
  }
]

export default function Home() {
  const compareFn = (a, b) => {
    if(a.date === "") return 1
    if(b.date === "") return -1

    if (a.date > b.date) return 1
    else if (a.date < b.date) return -1
    else {
      if(a.time === "") return 1
      else if(b.time === "") return -1

      if(a.time > b.time) return 1
      else if (a.time < b.time) return -1
      else return 0
    }
  }

  const [description, setDescription] = useState("")
  const [date, setDate] = useState("")
  const [time, setTime] = useState("")
  const [toDos, setToDo] = useState(rawToDos.sort(compareFn))

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

    setToDo([...toDos, newToDo].sort(compareFn))
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
    }).sort(compareFn))
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
    }).sort(compareFn))
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
    <>
      <nav
        className="bg-blue-900 flex flex-row p-4"
      >
        <div
          className="text-white text-2xl font-bold tracking-widest my-auto"
        >
          TIMEFY
        </div>
        <input
          type="text"
          className="m-auto rounded-full px-4 p-1 w-1/2"
          placeholder="🔎"
        ></input>
        <div className="bg-white rounded-full aspect-square w-10 flex items-center justify-center">
          <div>PP</div>
        </div>

      </nav>
      <main className="flex flex-col gap-5 p-3">
        <div className="flex flex-col">
          <input
            type="text"
            value={description}
            className="w-full text-black outline-none p-2"
            onChange={e => setDescription(e.target.value)}
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
        <table className="w-full border-collapse">
          <thead>
            <tr className="w-full">
              <th className="w-10"></th>
              <th>Description</th>
              <th className="w-40">Date and Time</th>
              <th className="w-5"></th>
            </tr>
          </thead>
          <tbody>
            {toDos.map(v => <tr key={v.id}>
              <td className="text-center">
                <input
                  type="checkbox"
                  value={v.checked}
                  onChange={checkToDo.bind(null, v.id)}
                ></input>
              </td>

              <td>
                <div
                  className="flex items-center break-all"
                >{v.description}</div>
              </td>

              <td>
                <div className="flex items-center">{v.time + " " + v.date}</div>
              </td>

              <td>
                {
                  editedId !== v.id ?
                    <div className="ml-auto flex flex-row gap-1">
                      <button onClick={() => setEditedId(v.id)}>✎</button>
                      <button onClick={deleteToDo.bind(null, v.id)}>✖</button>
                    </div>
                    : null
                }
              </td>
            </tr>)}
          </tbody>
        </table>
      </main>
    </>
  )
}