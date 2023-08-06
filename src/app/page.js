'use client'
import "./page.css"

export default function Home() {
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
          <div className="absolute text-white left-[15%] top-[30%] flex flex-col max-w-[40%] gap-2">
            <h1 className="font-bold text-4xl">Easy Time Management with Timefy</h1>
            <p>Try for free! We've built a wonderful and useful platform to manage your time and schedules.</p>
            <img src="./twinkle.png" className="absolute right-[-10px] top-[-10px] translate-x-1/2 -translate-y-1/2 scale-50"></img>
          </div>
          <img src="./transition1.svg" className="z-0 absolute bottom-0 fill-black w-full"></img>
          <img src="./person.png" className="absolute top-[50%] -translate-y-1/2 right-[15%] max-h-[60%]"></img>
        </section>
        <section className="z-10 relative h-screen w-screen">
          <img src="./transition1.svg" className="absolute bottom-0"></img>
        </section>
      </main>
    </>
  )
}