'use client'
import "./page.css"

export default function Home() {
  const css = `
    body{
      width: 93.5rem;
      height: 225rem;
      background: #273A96;
      font-family: Poppins;
      font-style: normal;
    }
  `
  return (
    <>
      <nav className="h-20 z-50 flex flex-row fixed w-full p-1 pl-32 pr-32 gap-3 text-white items-center">
        <img src="./hourglass.svg" className="w-8 h-14 mr-3"></img>
        <div className="text-white text-center text-[35px] tracking-[4.2px] font-extrabold mt-2">TIMEFY</div>
        <a href="./list" className="ml-auto cursor-pointer">
          <div className="w-[151px] h-12 shrink-0 border flex justify-center items-center
          text-black text-center text-xl font-bold tracking-[2.4px] m-0 rounded-[30px] border-solid border-[#273A96] right-[204.96px]
          bg-slate-50 hover:bg-slate-200">Open</div>
        </a>
      </nav>  
      <main className="flex flex-col items-center">
        <section className="relative min-h-[500px] max-h-[1000px] max-w-[2000px] h-screen w-screen bg-[#273A96]">
          <div className="absolute text-white left-[12%] top-[27%] flex flex-col max-w-[40%] gap-10">
            <h1 className="w-[42rem] text-white text-[3.3125rem] font-semibold tracking-[0.01656rem]">Easy Time Management with Timefy</h1>
            <p className="text-white text-[1.4375rem] font-light tracking-[0.00719rem] w-[38.125rem] h-[5.5rem]">Try for free! We've built a wonderful and useful platform to manage your time and schedules.</p>
          </div>
          <img src="./twinkle.png" className="absolute w-[6.05rem] h-[5.60888rem] left-[55rem] top-[10rem]"></img>
          <img src="./person.png" className="w-[20.37625rem] h-[41.29175rem] shrink-0 absolute z-[5] right-[16.62rem] top-[11.87rem]"></img>
        </section>
        <img src="./transition1.svg" className="absolute w-[100%] left-0 top-[36rem]"></img>
        <section className="z-10 relative mt-[14.3rem] h-[100rem] w-[103.1%] bg-white">
          <div className="flex justify-center ml-[8rem] mt-[5rem] h-[5.5rem] text-[#080F1F] text-[2.8125rem] font-semibold tracking-[0.01406rem]">Why Choose Timefy?</div>
          <div className="flex flex-row relative align-middle justify-center gap-40 mt-[4rem]">
            <div className="flex relative flex-row ml-[4rem]">
              <img src="./circle2.svg"></img>
              <img src="./circle.svg" className="absolute top-[2.7rem] left-[6.7rem]"></img>
              <img src="./star.svg" className="absolute top-[4.2rem] left-[8.2rem]"></img>
              <div className="absolute top-[9rem] left-[6.2rem] text-[18px] font-semibold">Easy to Use</div>
              <div className="absolute top-[11.5rem] text-[16px] pl-[2rem] pr-[2rem] text-center">Timefy is built to be easy to use by anyone</div>
            </div>
            <div className="flex relative flex-row ml-[4rem]">
              <img src="./circle2.svg"></img>
              <img src="./circle.svg" className="absolute top-[2.7rem] left-[6.7rem]"></img>
              <img src="./stonks.svg" className="absolute top-[3.7rem] left-[8.1rem]"></img>
              <div className="absolute top-[9rem] left-[3.2rem] text-[18px] font-semibold">Increased Productivity</div>
              <div className="absolute top-[11.5rem] text-[16px] pl-[2rem] pr-[2rem] text-center">Various tools to boost your productivity</div>
            </div>
            <div className="flex relative flex-row ml-[4rem]">
              <img src="./circle2.svg"></img>
              <img src="./circle.svg" className="absolute top-[2.7rem] left-[6.7rem]"></img>
              <img src="./calm.svg" className="absolute top-[3.7rem] left-[7.7rem]"></img>
              <div className="absolute top-[9rem] left-[5rem] text-[18px] font-semibold">Reduced Stress</div>
              <div className="absolute top-[11.5rem] text-[16px] pl-[2rem] pr-[2rem] text-center">Easily organize your life and reduce your stress level</div>
            </div>
          </div>
          <img src="./rectangle2.svg" className="absolute top-[5rem] left-[33rem]"></img>
          <img src="./rectangle1.svg" className="absolute top-[10rem] left-[47rem]"></img>
          <img src="./book.png" className="absolute top-[35.1rem] left-[1rem]"></img>
          <div className="flex flex-row mt-[12rem] justify-center">
            <img src="./people.png"></img>
            <div className="flex flex-col">
              <div className="text-[45px] font-semibold pl-[10rem] pb-[3rem]">Our Main Features</div>
              <div className="flex flex-row mb-[2rem]">
                <img src="./circle.svg" className="w-[3rem] ml-[4rem]"></img>
                <div className="flex flex-col ml-[1.5rem]">
                  <div className="text-[20px] font-semibold mb-[0.5rem]">Add and Remove Tasks</div>
                  <div className="text-[16px]">Add and remove your tasks easily with Timefy</div>
                </div>
              </div>
              <div className="flex flex-row mb-[2rem]">
                <img src="./circle.svg" className="w-[3rem] ml-[4rem]"></img>
                <div className="flex flex-col ml-[1.5rem]">
                  <div className="text-[20px] font-semibold mb-[0.5rem]">Add and Sort by Category</div>
                  <div className="text-[16px]">Display your current tasks with a specific category</div>
                </div>
              </div>
              <div className="flex flex-row mb-[2rem]">
                <img src="./circle.svg" className="w-[3rem] ml-[4rem]"></img>
                <div className="flex flex-col ml-[1.5rem]">
                  <div className="text-[20px] font-semibold mb-[0.5rem]">Edit your Tasks</div>
                  <div className="text-[16px]">Easily edit your tasks title, category, and time</div>
                </div>
              </div>
              <div className="flex flex-row mb-[2rem]">
                <img src="./circle.svg" className="w-[3rem] ml-[4rem]"></img>
                <div className="flex flex-col ml-[1.5rem] w-[24rem]">
                  <div className="text-[20px] font-semibold mb-[0.5rem]">Sort by Time</div>
                  <div className="text-[16px]">Automatically sort your current tasks by how close they are to the deadline</div>
                </div>
              </div>
            </div>
          </div>
          <img src="./calendar.png" className="absolute right-0 bottom-[1rem] z-10"></img>
        </section>
        <section className="z-10 relative h-[80rem] w-[103.1%] z-10 bg-white flex justify-center">
          <img src="./transition2.svg" className="absolute w-[100%] left-0 top-[-10rem] z-20"></img>
          <img src="./clock.png" className="absolute top-[20rem] left-0 z-20"></img>
          <img src="./rectangle2.svg" className="absolute left-[35.5rem] top-[40.5rem]"></img>
          <img src="./rectangle1.svg" className="absolute left-[48rem] top-[50rem]"></img>
          <div className="absolute top-[40rem] text-[45px] w-[40rem] font-semibold text-center pl-[7rem] pb-[3rem]">What People Are Saying About Timefy</div>
          <div className="flex flex-col w-screen relative mt-[4rem]">
            <div className="flex justify-center gap-20 absolute bottom-[5rem] w-[100%]">
              <div className="flex flex-row justify-center">
                <img src="./rectangle3.svg"></img>  
                <div className="absolute flex text-[17px] top-[4rem] italic font-normal w-[24rem] text-justify">TImefy is a great solution to us who loves
                to procrastinate and can’t keep track of what needs to be done !!!</div>
                <div className="absolute flex text-[1.2rem] bottom-[4rem] text-xl italic font-extrabold">- Rici Trisna Putra</div>
              </div>
              <div className="flex flex-row justify-center">
                <img src="./rectangle3.svg"></img>  
                <div className="absolute flex text-[17px] top-[4rem] italic font-normal w-[24rem] text-justify">Semoga Timefy mampu mendapatkan nilai bagus dalam penilaian exhibition milestone,
                sehingga tidak mengecewakan panitia yang bersangkutan.</div>
                <div className="absolute flex text-[1.2rem] bottom-[4rem] text-xl italic font-extrabold">- Kelompok 12</div>
              </div>
            </div>
          </div>
        </section>
        <footer className="p-5 bg-[#273A96] w-full flex text-white justify-center">
          Copyright @ 2023 by Milestone 12. All Rights Reserved by the Aksang Team
        </footer>
      </main>
      <style>{css}</style>
    </>
  )
}