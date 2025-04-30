import React from 'react'
import Head from './components/Head/Head'

import { Outlet } from 'react-router-dom'
import Footer from './components/footer/footer'
import Home from './components/Home/home'


// this works ->use asa base upr and niche ka smae rkhege and outlet bale m changes honge 











 



function Layout()   {

   
 return ( 
    
 
<>

<Head/>
{/* heder same rhega jo bhi outlet m doge bo cahnge ho jyega  */}

<Home/>

<Outlet/>

<Footer/>





</>
    
    
    )
    
    }
    export default Layout