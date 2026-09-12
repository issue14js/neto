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
    <form className="h-100  p-5 rounded-2xl w-70 bg-zinc-800" onSubmit={handelSubmit} >
            <h1 className="text-2xl relative left-[35%]  mb-5 text-white transform-">Login</h1>
            <span className="block text-white">Username</span>
            <input required="true" className="border-white mb-2 border rounded p-2 w-full text-white outline-none" type="text" placeholder="Enter Username" name="username" onChange={handelChange}  />
            <span className="block text-white">Password</span>
            <input required="true"  className="border-white mb-2 block w-full border rounded p-2 text-white outline-none" type="password" placeholder="Enter Password" name="password"  onChange={handelChange} />
            <button type="submit" className=" w-full mt-2  border py-2 px-4 rounded text-white bg-zinc-500">Login</button>
            {/* <h1 className=" text-red-500 mt-1 text-[12px]">Error440</h1> */}
            <span className="text-white">Create a new Account <a className="text-blue-700 " href="/register">Register</a></span>
        </form>
  )
}

export default Login