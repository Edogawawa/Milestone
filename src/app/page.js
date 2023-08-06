'use client'
import "./page.css"

export default function Home() {
  return (
    <>
      <nav className="flex flex-row p-5 gap-3 text-white items-center">
        <img src="./hourglass.svg" className="w-3"></img>
        <div className="text-2xl font-bold">TIMEFY</div>
        <a href="./list" className="ml-auto cursor-pointer">
          <div className="border-2 p-1 rounded-lg text-sm transition-all hover:bg-white hover:text-black">Open</div>
        </a>
      </nav>
      <main className="p-3">Test</main>
    </>
  )
}