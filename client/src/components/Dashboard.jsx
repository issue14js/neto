import React, { useState } from 'react'
import { useAuth } from '../hooks/useAuth'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
    const {user,logout,profile} = useAuth()
    const navigate = useNavigate()
    const handelSubmit = (e) =>{

        logout()
        navigate("/")

    }
    const profileHandelSubmit = (e) =>{
        profile()

    }
    const home = ()=>{
        navigate("/")
    }
    
  return (
    <div className='bg-black h-screen w-full text-white'>
        <h1> Welcome {user?.username || "Guest"}</h1>
        <button onClick={handelSubmit}>logout</button>
        <button onClick={profileHandelSubmit}>Profile</button>
        <button onClick={home}>Home</button>
        
        
        
    </div>
  )
}

export default Dashboard