import { useCallback, useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length,setLength] = useState(8)
  const [number,setNumber] = useState(false)
  const [charactor,setChar] = useState(false)
  const [password,setPasword] = useState("")

  //useref hook--> when we want to take refernce of any thrn use refernce hook 
// to use it make a varibale 

const passwordref=useRef(null)



  //FOR GENERATE RANDOM PASSWORD WE USE USE CALLBACK FUNCTIONALITY  
  //USE CALLBACK IS  REACT HOOK THATS LETS YOU CACHE A FUNCTION DEFINITION  BETWEEN RENDERS
  const passwordgenerator= useCallback(() => {
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(number) str +="0123456789"
    if(charactor) str +="~!@#$%^&*"

    for(let i=1;i<=length;i++)
    {
      //(math.random()*str.length+1) this is how random no. generate 
      let char =Math.floor(Math.random() * str.length+1)

      pass+=str.charAt(char)
    }
    setPasword(pass)

  },[length,number,charactor])  //<--use callback dependicies are for optimization
  //basically for memorize and cache m rkhta h ,no m change and char change m then optimize 

//use usecallback()

const copypasswordtoClipboard = useCallback(()=>{

  //use of useref to give better optimization like select the text and all by usning useref
  passwordref.current?.select();

  window.navigator.clipboard.writeText(password)

},[password])





//useeffect is a hook which is lets you synvhronize a component with external system
//depemdicies m kuch bhi change dubara se run kr do 

  useEffect(() => 
  {
    passwordgenerator()
  } 
  ,[length,number,charactor,passwordgenerator])







  return (
   <>
   <div className='w-full max-w-md shadow-md mx-auto text-orange-500 bg-slate-700 py-3 px-4 my-8 rounded-lg'>
    <h1 className='text-center text-blue-500'>PasswodGnerator</h1>

    <div className= "flex shadow rounded-lg overflow-hidden mb-4 ">
      

      <input type="text"
      value={password} 
      className='outline-none w-full py-1 px-3'
      placeholder='password'
      readOnly
      ref={passwordref}
      />
      <button onClick={copypasswordtoClipboard} className='rounded-xl text-white bg-blue-700 px-1 py-1 shrink-0'>copy</button>
    </div>


    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input type="range" 
        min={4}
        max={12}
        value={length}
        className='cursor-pointer'
        //to change value 4 to 12  use on cahnge by use event e e.target.value 
        onChange={(e) => {setLength(e.target.value)}}
        />
        <label >length:{length}</label>
      </div>

       <div className="flex items-center gap-x-1">
        <input type="checkbox" 
        defaultChecked={number}
        id="numberinput"
        onChange={()=>{setNumber((prev)=>!prev);}}/>
        <label htmlFor='numberinput'>number:{Number}</label>
       </div>

       <div className="flex items-center gap-x-1">
        <input type="checkbox" 
        defaultChecked={charactor}
        id="charactorinput"
        //onchange la k setchar(true ) y krene se bo true hi rhta esliye prev value ko change kr denge 
        onChange={()=>{setChar((prev)=>!prev);}}/>
        <label htmlFor='charactorinput'>charactor:{Number}</label>
       </div>

    </div>




    
    </div>

   
   </>
  )
}

export default App
