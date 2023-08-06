'use client'
import { useCallback, useEffect, useState } from "react"
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

export default function Home() {

  const setData = useCallback((data) => {
    localStorage.setItem("todo", JSON.stringify(data) || "[]")
  }, [])

  const getData = useCallback(() => {
    return JSON.parse(localStorage.getItem("todo") || "[]")
  }, [])

  const [toDos, setToDo] = useState(getData())
  const [search, setSearch] = useState("")

  const [category, setCategory] = useState([])
  const [categoryInput, setCategoryInput] = useState("")
  const [categoryFilter, setCategoryFilter] = useState(new Set())

  const [taskName, setTaskName] = useState("")
  const [date, setDate] = useState("")

  const [editedId, setEditedId] = useState(undefined)

  useEffect(() => {
    setData(toDos)
  }, [toDos])

  const compareFn = useCallback((a, b) => {
    if (a.date === "") return 1
    if (b.date === "") return -1

    if (a.date > b.date) return 1
    else if (a.date < b.date) return -1
    else return 0
  }, [])

  const filterFn = useCallback((v) => {
    const s = (v.taskName.toLowerCase()).includes(search)
    let c = true

    const cs = new Set(v.category)
    categoryFilter.forEach(v => {
      if(!cs.has(v)) c = false
    })

    return s && c
  }, [categoryFilter, search])
  
  useEffect(() => {
    if(editedId === undefined) return
    const toDo = toDos.find(v => v.id === editedId)
    if(!toDo) return
    setTaskName(toDo.taskName)
    setDate(toDo.date)
    setCategory(toDo.category)
  }, [editedId])

  const addCategory = useCallback(() => {
    if(categoryInput === ""){
      alert("Category can't be empty")
      return
    }
    if(category.includes(categoryInput)){
      deleteCategory(category)
    } else {
      setCategory([...category, categoryInput])
    }
    setCategoryInput("")
  }, [category, categoryInput])

  const toggleCategoryFilter = useCallback((c) => {
    const newSet = new Set(categoryFilter)
    if(newSet.has(c)) newSet.delete(c)
    else newSet.add(c)
    setCategoryFilter(newSet)
  }, [categoryFilter])

  const deleteCategory = useCallback(() => {
    setCategory(category.filter(v => v !== categoryInput))
  }, [category, categoryInput])

  const clearInput = useCallback(() => {
    setTaskName("")
    setDate("")
    setCategoryInput("")
    setCategory([])
  }, [])

  const createToDo = () => {
    if(categoryInput){
      alert("Category not added, make sure to add before create")
      return
    }

    const newToDo = {
      id: uid(),
      checked: false,
      taskName, category, date
    }

    setToDo([...toDos, newToDo])
    clearInput()
  }

  const updateToDo = () => {
    if (categoryInput) {
      alert("Category not added, make sure to add before update")
      return
    }


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

  const checkToDo = useCallback((id) => {
    setToDo(toDos.map(v => {
      if(v.id === id){
        return {
          ...v,
          checked: !v.checked
        }
      } else return v
    }))
  }, [toDos])

  const cancelUpdateToDo = useCallback(() => {
    setEditedId(undefined)
    clearInput()
  }, [])

  const deleteToDo = useCallback((id) => {
    const c = confirm("Are you sure want to delete?")
    if(c) setToDo(toDos.filter(v => v.id !== id))
  }, [toDos])

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
          value={search}
          onChange={(e) => setSearch(e.target.value)}
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
            className="w-full text-black outline-none py-2 px-3 bg-blue-200 rounded-md text-lg placeholder:text-white"
            onChange={e => setTaskName(e.target.value)}
            placeholder="New Task"
          ></input>

          <div className="flex flex-row bg-blue-300 rounded-md py-1 px-2 gap-2 whitespace-nowrap">
            <button 
              onClick={addCategory}
              className="bg-blue-50 rounded-sm px-2"
              tabIndex={-1}
            >+</button>
            <input
              type="Text"
              className="grow bg-inherit placeholder:text-gray-100"
              value={categoryInput}
              onChange={(e) => setCategoryInput(e.target.value)}
              placeholder="Category"
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
                  onClick={deleteCategory}
                  tabIndex={-1}
                >{c}</button>
              })
            }</div>
          </div>

          <div className="flex flex-row">
            <div className="flex flex-row gap-3">
              <input
                type="date"
                className="text-black cursor-pointer m-1"
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
                      className="btn-wrapped"
                      onClick={updateToDo}
                    >Update</button>
                    :
                    <button
                      className="btn-wrapped"
                      onClick={createToDo}
                    >Create</button>) : null
              }
              {
                editedId ?
                  <button
                    className="btn-wrapped"
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
              <th className="w-60">
                <div className={`flex flex-row gap-1 ${categoryFilter.size === 0 ? "justify-center" : ""}`}>
                  <div>Category{categoryFilter.size === 0 ? null : ": "}</div>
                  {
                    categoryFilter.size === 0 ? null :
                      <div className="flex align-middle justify-center">
                      <div className="overflow-x-scroll flex flex-row gap-1 font-normal whitespace-nowrap text-[9px]">
                        {Array.from(categoryFilter).map(c => <button
                          key={c}
                          className="bg-blue-200 p-[5px] rounded-[5px]"
                          onClick={toggleCategoryFilter.bind(null, c)}
                        >{c}</button>)}
                      </div>
                    </div>
                  }
                </div>
              </th>
              <th className="w-10"></th>
            </tr>
          </thead>
          <tbody>
            {toDos.filter(filterFn).sort(compareFn).map(toDo => <tr className="h-12" key={toDo.id}>
              <td className="text-center">
                <input
                  type="checkbox"
                  value={toDo.checked}
                  onChange={checkToDo.bind(null, toDo.id)}
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
                <div className="flex flex-row gap-2 text-sm whitespace-nowrap overflow-auto w-60">
                  {toDo.category.map(c => categoryFilter.has(c) ? null : <button 
                    key={c}
                    className="px-2 py-1 bg-blue-200 rounded-md"
                    onClick={toggleCategoryFilter.bind(null, c)}
                    >{c}</button>)}
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