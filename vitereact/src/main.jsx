import React from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'



// function  my()
// {
//   return(
//     <div><h2>bhavishya</h2></div>
//   )
// }


// const reactelement =
// {
//     type:'a',
//     props:
//     {
//         href:'https://google.com',
//         target:'_blank'
//     },

//     children:'click me to visit google'


// }

const newelement=(
  <a href="https://google.com" target='_blank'>visit to google</a>
)


const user="chai or code"

const reactElement=React.createElement(
  'a',
  {href:'https://google.com', target: '_blank' },
  'click me to visit google',
  user // this is like variable injection  //its like a evaluted  here not use if else 
)

createRoot(document.getElementById('root')).render(

 
    // my()
    // reactelement  nahi chlega 
    // newelement
    // reactElement


      //  <App /> 
  
)
