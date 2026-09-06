import React, { useState } from 'react'
import { useAuth } from '../hooks/useAuth'

const Dashboard = () => {
    const {user,logout,profile} = useAuth()
    const handelSubmit = (e) =>{

        logout()

    }
    const profileHandelSubmit = (e) =>{
        profile()

    }
    
  return (
    <div className='bg-black h-screen w-full text-white'>
        <h1>{user.username}</h1>
        <button onClick={handelSubmit}>logout</button>
        <button onClick={profileHandelSubmit}>Profile</button>
        <h1>{user.username}</h1>
        
    </div>
  )
}

export default Dashboard