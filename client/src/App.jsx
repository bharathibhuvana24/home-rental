import { BrowserRouter } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import React from 'react'
import Home from './Pages/Home'
import About from './Pages/About'
import SignIn from './pages/SignIn'
import Profile from './Pages/Profile'
import Header from './Components/Header'
import SignUp from './pages/SignUp'
import PrivateRoute from './components/PrivateRoute'


const App = () => {
  return (
<>
<BrowserRouter>
<Header/>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/sign-in' element={<SignIn/>}/>
    <Route path='/sign-up' element={<SignUp/>}/>
    <Route  element={< PrivateRoute/>}>
       <Route path='/profile' element={ <Profile/>} /> 
    </Route>
  </Routes>
</BrowserRouter>
</>
   
  )
}

export default App