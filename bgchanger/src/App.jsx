import { useState } from "react";

function App() {
  const [color, setColor] = useState("white");

  return (
    <div
      className=" h-screen duration-200 w-full"
      style={{backgroundColor: color}}>
      <div className="fixed flex flex-wrap  justify-center inset-x-0 bottom-12 px-4 ">
        
        <div className="fixed flex flex-wrap  justify-center gap-4 shadow-xl bg-zinc-600 px-3 py-1 rounded-3xl">

          <button  onClick={() => setColor("black")} className="outline-neutral-50 px-3 py-1 rounded-full text-white shadow-lg">black</button>
         

          <button onClick={() => setColor("red")} className="outline-neutral-50 px-3 py-1 rounded-full text-white shadow-lg">red</button>
         

          <button onClick={() => setColor("blue")}  className="outline-neutral-50 px-3 py-1 rounded-full text-white shadow-lg">blue</button>
          <button  onClick={() => setColor("green")}  className="outline-neutral-50 px-3 py-1 rounded-full text-white shadow-lg">green</button>

          </div>
          </div>

          </div>

        
       

       
  
  )
}

export default App
