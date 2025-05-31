
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/ UserContextProvider'

function App() {
 

  return (
    // bascially context api is use for state mangement 
/* purely use js 

  other methods are like redux 

// bascially context api is use for state mangement 
//* purely use js 

  other methods are like redux 

  */
 
 
 
  
    <UserContextProvider>

      <Login/>
      <Profile/>
    </UserContextProvider>

  
  )
}

export default App
