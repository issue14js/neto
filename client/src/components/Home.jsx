import Navbar from "./Navbar"
import { useAuth } from "../hooks/useAuth"
import { useEffect } from "react"

const Home = () => {
    
    const {user,profile} = useAuth()
    useEffect(() => {
        if (user === null) {
            profile();
        }
    }, [user]);

  return (
    <div className="h-screen w-full bg-zinc-900">
        
        <Navbar/>
        <div className="w-full  h-147 flex justify-center items-center">

        <h1 className="text-4xl text-white">Home</h1>
        </div>
    </div>
  )
}

export default Home