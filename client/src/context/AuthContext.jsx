import {createContext, useState, } from "react"
import axios from 'axios'



export const AuthContext = createContext()

export function AuthProvider({children}){
    const [user, setUser] = useState(null)
    const [loding, setLoding] = useState(true)
    const rooturl = 'http://localhost:3000'
    const register = async (formData)=>{
        try{
           const res = await axios.post(`${rooturl}/api/auth/register`,formData)
           setUser(res.data.newUser)
           return res.data
        }catch(err){
            console.log("error",err);
            throw err
            
        }
        
    }
    const login = async (formData)=>{
        try{
            // console.log("Sending:", formData);
            const res = await axios.post(`${rooturl}/api/auth/login`,formData)
            setUser(res.data.newUser)
            return res.data
        }catch(err){
            console.log(err);
            throw err
            
        }
    }
    const logout = ()=>{
        localStorage.removeItem('token')
        setUser(null)


    }
    const profile = async ()=>{
        try{
            const res = await axios.get(`${rooturl}/api/auth/profile`)
            setUser(res.data.user)
            console.log(res.data.user)
            return res.data
        }catch(err){
            console.log(err)
            throw err
        }
    }
    return (

        <AuthContext.Provider
        value={{user,setUser,loding,register,login,logout,profile}}>
        {children}
    </AuthContext.Provider>
    )
}