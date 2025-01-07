import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setcounter]=useState(1)
  //  let counter=10
   const addvalue= () => {
      
    // console.log("clicked",counter)
    counter=counter+1
    setcounter(counter)
   }

   const removevalue= () => {
    setcounter(counter-1)
  


   }

  return (
    <>
     <h1>react hooks</h1>
     <h2>counter value: {counter}</h2>


     <button onClick={addvalue}>add value</button>
     <br />

     <button onClick={removevalue}>remove value</button>      
    </>
  )
}

export default App
