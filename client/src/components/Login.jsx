import { useState } from "react"
import { useAuth } from "../hooks/useAuth"
import { useNavigate } from "react-router-dom"




const Login = () => {
    const navigate = useNavigate()
    const { login } = useAuth()
    const [form, setform] = useState({
        username:"",
        password:""
    })
    const handelChange = (e)=>{
        const {name,value}=e.target
        setform({
            ...form,
            [name]:value
        })
    }
    const handelSubmit = async (e)=>{
        e.preventDefault()
        
        try{
            await login(form)
            navigate('/dashboard')
            
            
        }catch(err){
            console.log(err);
            
        }

    }
      return (
    <form className="h-70  p-5 rounded-2xl w-100 bg-zinc-800" onSubmit={handelSubmit} >
            <h1 className="text-2xl text-white transform-">Login</h1>
            <span className="block text-white">Username</span>
            <input className="border-white mb-2 border rounded p-2 text-white outline-none" type="text" placeholder="Enter Username" name="username" onChange={handelChange}  />
            <span className="block text-white">Password</span>
            <input className="border-white mb-2 block border rounded p-2 text-white outline-none" type="password" placeholder="Enter Password" name="password"  onChange={handelChange} />
            <button type="submit" className="  mt-2  border py-2 px-4 rounded text-white bg-zinc-500">Login</button>
            <a className="text-blue-700 ml-4 " href="/register">Register</a>
        </form>
  )
}

export default Login