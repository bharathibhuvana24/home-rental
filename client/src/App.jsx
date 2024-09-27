import { BrowserRouter } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import React from 'react'
import Home from './Pages/Home'
import About from './pages/About'
import SignIn from './pages/SignIn'
import Profile from './Pages/Profile'
import Header from './components/Header'
import SignUp from './pages/SignUp'
import UpdateListing from './pages/UpdateListing';
import CreateListing from './pages/CreateListing'
import Listing from './pages/Listing'
import Search from './pages/Search'
import PrivateRoute from './components/PrivateRoute'


const App = () => {
  return (
<>
<BrowserRouter>
<Header/>
  <Routes>
  <Route path='/create-listing' element={<CreateListing />} />
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/sign-in' element={<SignIn/>}/>
    <Route path='/search' element={<Search/>}/>
    <Route path='/sign-up' element={<SignUp/>}/>
    <Route path='/listing/:listingId' element={<Listing />} />
    <Route
            path='/update-listing/:listingId'
            element={<UpdateListing />}
          />
    <Route element={<PrivateRoute />}>
       <Route path='/profile' element={ <Profile/>} /> 
    </Route>
  </Routes>
</BrowserRouter>
</>
   
  )
}

export default App