'use client'
import { useEffect, useState } from "react"
/**
 * @typedef {{
 *  id: string
 *  taskName: string
 *  checked: boolean
 *  category: string[]
 *  date?: string
 * }} ToDo
 */

const uid = function(){
  return Date.now().toString(36) + Math.random().toString(36).substring(3);
}

/** @type {ToDo[]} */
const rawToDos = [
  {
    id: uid(),
    taskName: "Hello",
    checked: false,
    category: ["Test", "Test 2", "FDSF", "VREF", "FSDFSS", "VFVGEG"],
    date: "2022-01-12"
  },
  {
    id: uid(),
    taskName: "Hello 2",
    checked: false,
    category: [],
    date: ""
  },
  {
    id: uid(),
    taskName: "Hello 3",
    checked: true,
    category: [],
    date: ""
  }
]

export default function Home() {
  const compareFn = (a, b) => {
    if(a.date === "") return 1
    if(b.date === "") return -1

    if (a.date > b.date) return 1
    else if (a.date < b.date) return -1
    else  return 0
  }

  const [category, setCategory] = useState([])
  const [categoryInput, setCategoryInput] = useState("")
  const [taskName, setTaskName] = useState("")
  const [date, setDate] = useState("")
  const [toDos, setToDo] = useState(rawToDos)

  const [editedId, setEditedId] = useState(undefined)
  useEffect(() => {
    if(editedId === undefined) return
    const toDo = toDos.find(v => v.id === editedId)
    if(!toDo) return
    setTaskName(toDo.taskName)
    setDate(toDo.date)
    setCategory(toDo.category)
  }, [editedId])

  const addCategory = () => {
    if(category.includes(categoryInput)){
      alert("Category can't be duplicated")
      return
    }
    setCategory([...category, categoryInput])
    setCategoryInput("")
  }

  const deleteCategory = (c) => {
    setCategory(category.filter(v => v !== c))
  }

  const clearInput = () => {
    setTaskName("")
    setDate("")
    setCategoryInput("")
    setCategory([])
  }

  const createToDo = () => {
    const newToDo = {
      id: uid(),
      checked: false,
      taskName, category, date
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
          taskName, date, category
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
      <main className="flex flex-col gap-5 p-3 m-auto max-w-[1300px]">
        <div className="flex flex-col gap-2">
          <input
            type="text"
            value={taskName}
            className="w-full text-black outline-none p-2 bg-blue-200 rounded-md text-lg"
            onChange={e => setTaskName(e.target.value)}
          ></input>

          <div className="flex flex-row bg-blue-300 rounded-md py-1 px-2 gap-2 whitespace-nowrap">
            <button 
              onClick={addCategory}
              className="bg-blue-50 rounded-sm px-2"
            >+</button>
            <input
              type="Text"
              className="grow bg-inherit"
              value={categoryInput}
              onChange={(e) => setCategoryInput(e.target.value)}
              onKeyDown={(e) => {
                if(e.code === "Enter") addCategory()
              }}
            ></input>
            <div
              className="flex flex-row gap-2 overflow-x-auto text-sm"
            >{
              category.map(c => {
                return <button
                  key={c}
                  className="border-solid border-2 border-white px-1 rounded-md transition-all hover:bg-white"
                  onClick={deleteCategory.bind(null, c)}
                >{c}</button>
              })
            }</div>
          </div>

          <div className="flex flex-row">
            <div className="flex flex-row gap-3">
              <input
                type="date"
                className="text-black"
                value={date}
                onChange={e => setDate(e.target.value)}
              ></input>

              {
                (date) ?
                  <button
                    onClick={() => setDate("")}
                  >Clear</button>
                  : null
              }
            </div>

            <div className="ml-auto flex flex-row gap-1">
              {
                taskName ?
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
              <th>Task Name</th>
              <th className="w-40">Date</th>
              <th className="w-64">Category</th>
              <th className="w-5"></th>
            </tr>
          </thead>
          <tbody>
            {toDos.sort(compareFn).map(toDo => <tr className="h-12" key={toDo.id}>
              <td className="text-center">
                <input
                  type="checkbox"
                  value={toDo.checked}
                  onChange={checkToDo.bind(null, toDo.id)}
                  className="non"
                ></input>
              </td>

              <td>
                <div
                  className="flex items-center break-all"
                >{toDo.taskName}</div>
              </td>

              <td>
                <div className="flex items-center">{toDo.date ? (new Date(toDo.date).toLocaleDateString("gregory", { dateStyle: "medium" })) : ""}</div>
              </td>

              <td>
                <div className="flex flex-row gap-2 text-sm whitespace-nowrap max-w-xs overflow-auto">
                  {toDo.category.map(c => <p 
                    key={c}
                    className="px-2 py-1 bg-blue-200 rounded-md"
                    >{c}</p>)}
                </div>
              </td>

              <td>
                {
                  editedId !== toDo.id ?
                    <div className="ml-auto flex flex-row gap-1">
                      <button onClick={() => setEditedId(toDo.id)}>✎</button>
                      <button onClick={deleteToDo.bind(null, toDo.id)}>✖</button>
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