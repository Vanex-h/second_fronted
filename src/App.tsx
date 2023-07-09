// import { useState } from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css'
import Welcome from './components/welcome/welcome'
import Login from './components/Login/login'
import Signup from './components/Signup/signup'
import Home from './components/Home/Home'
import Employee from './components/Employees/Employee'

function App() {

  return (
   
    <BrowserRouter>
    <Routes>
    <Route path='' element={<Welcome />} />
    <Route path='/home' element={<Home />}>
    </Route>
    <Route path='/employees' element={<Employee />} />
    <Route path='/login' element={<Login />} />
    <Route path='/signup' element={<Signup />} />
    </Routes>
    </BrowserRouter>
   
    
  )
}

export default App
