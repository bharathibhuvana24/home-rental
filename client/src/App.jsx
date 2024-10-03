// import { BrowserRouter } from 'react-router-dom'
// import { Route } from 'react-router-dom'
// import { Routes } from 'react-router-dom'
// import React from 'react'
// import Home from './Pages/Home'
// import About from './pages/About'
// import SignIn from './pages/SignIn'
// import Profile from './Pages/Profile'
// import Header from './components/Header'
// import SignUp from './pages/SignUp'
// import UpdateListing from './pages/UpdateListing';
// import CreateListing from './pages/CreateListing'
// import Listing from './pages/Listing'
// import Search from './pages/Search'
// import PrivateRoute from './components/PrivateRoute'


// const App = () => {
//   return (
// <>
// <BrowserRouter>
// <Header/>
//   <Routes>
//   <Route path='/create-listing' element={<CreateListing />} />
//     <Route path='/' element={<Home/>}/>
//     <Route path='/about' element={<About/>}/>
//     <Route path='/sign-in' element={<SignIn/>}/>
//     <Route path='/search' element={<Search/>}/>
//     <Route path='/sign-up' element={<SignUp/>}/>
//     <Route path='/listing/:listingId' element={<Listing />} />
//     <Route
//             path='/update-listing/:listingId'
//             element={<UpdateListing />}
//           />
//     <Route element={<PrivateRoute />}>
//        <Route path='/profile' element={ <Profile/>} /> 
//     </Route>
//   </Routes>
// </BrowserRouter>
// </>
   
//   )
// }

// export default App

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import About from './pages/About';
import Profile from './pages/Profile';
import Header from './components/Header';
import PrivateRoute from './components/PrivateRoute';
import CreateListing from './pages/CreateListing';
import UpdateListing from './pages/UpdateListing';
import Listing from './pages/Listing';
import Search from './pages/Search';
import Cart from './components/Cart';
import HowItWorks from './pages/HowItWorks';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/about' element={<About />} />
        <Route path ='/cart' element={<Cart/>}/>
        <Route path='/search' element={<Search />} />
        <Route path='/howitworks' element={<HowItWorks/>}/>
        <Route path='/listing/:listingId' element={<Listing />} />

        <Route element={<PrivateRoute />}>
          <Route path='/profile' element={<Profile />} />
          <Route path='/create-listing' element={<CreateListing />} />
          <Route
            path='/update-listing/:listingId'
            element={<UpdateListing />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}