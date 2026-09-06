import React from 'react'
import './App.css'
import Register from './components/Register'
import Dashboard from './components/Dashboard'
import { Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'



const App = () => {
  return (
  <div className='bg-black h-screen w-full flex justify-center items-center'>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
    </div>
  )
}

export default App