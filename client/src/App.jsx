import React from 'react';

import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/Signup';
import About from './pages/About';
import Profile from './pages/Profile';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function App() {
 
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/about' element={<About />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}