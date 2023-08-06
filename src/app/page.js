'use client'
import "./page.css"

export default function Home() {
  const css = `
    body{
      background-color: #273A96
    }
  `
  return (
    <>
      <nav className="h-20 z-50 flex flex-row fixed w-full p-5 gap-3 text-white items-center">
        <img src="./hourglass.svg" className="w-3"></img>
        <div className="text-2xl font-bold">TIMEFY</div>
        <a href="./list" className="ml-auto cursor-pointer">
          <div className="border-2 py-1 px-2 rounded-lg text-sm transition-all hover:bg-white hover:text-black">Open</div>
        </a>
      </nav>
      <main className="flex flex-col items-center">
        <section className="relative min-h-[500px] max-h-[1000px] max-w-[2000px] h-screen w-screen bg-[#273A96]">
          <div className="absolute text-white left-[15%] top-[50%] -translate-y-1/2 flex flex-col max-w-[40%] gap-2">
            <h1 className="font-bold text-4xl">Easy Time Management with Timefy</h1>
            <p>Try for free! We've built a wonderful and useful platform to manage your time and schedules.</p>
            <img src="./twinkle.png" className="absolute right-[-10px] top-[-10px] translate-x-1/2 -translate-y-1/2 scale-50"></img>
          </div>
          <img src="./person.png" className="absolute top-[50%] -translate-y-1/2 right-[15%] max-h-[60%]"></img>
        </section>
        <div className="bg-[#273A96] w-full">
          <img src="./transition1.svg" className="w-full"></img>
        </div>
        <section className="z-10 relative h-screen w-screen bg-white">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="text-3xl">Why use Timefy?</div>
            <div className="text-xl flex flex-col align-middle">
              <div className="text-center">Easy to Use</div>
              <div className="text-center">Increase Productivity</div>
              <div className="text-center">Reduced Stress</div>
              <div className="text-center">Local Save</div>
            </div>
          </div>
          <img src="./clock.png" className="absolute scale-50 left-0 -translate-x-1/4 -translate-y-1/4"></img>
          <img src="./calendar.png" className="absolute scale-50 right-0 translate-x-1/4 bottom-0 translate-y-1/4"></img>
        </section>
        <footer className="p-5 bg-[#273A96] w-full flex text-white justify-center">
          Created by Milestone 12
        </footer>
      </main>
      <style>{css}</style>
    </>
  )
}