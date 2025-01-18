import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from  './coponents/Card'


function App() {
  const [count, setCount] = useState(0)

  let myobj = {
    username: "bhavishya",
    age: 21

  }

  return (
    <>
        <h1 className= 'bg-green-700 text-black rounded-xl p-4'>talwind</h1>
        <br />
        {/* <Card channe="chai aur code " someobj={myobj}/> */}

        <Card username="bhavishya katariya"/>
        <Card username="gangapur city"  btntext="visit me"/>
      


    </>
  )
}

export default App
