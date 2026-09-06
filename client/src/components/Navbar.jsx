import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

const Navbar = () => {
    const {user} = useAuth()

    const navigate = useNavigate()
    const gotoDashboard = ()=>{
        if(user==null){
            navigate("/login")
        }else{
            navigate("/dashboard")
        }
        
    }
  return (
    <div className="w-full border text-white px-4 h-15   flex justify-between items-center">
        <h1 className=' text-2xl '>neto</h1>
        <div className="flex justify-between items-center  gap-4">
            <button onClick={gotoDashboard} className='py-2 px-4  border rounded-3xl '>{user ? "Dashboard" : "Login"}</button>
            
        </div>
    </div>
  )
}

export default Navbar