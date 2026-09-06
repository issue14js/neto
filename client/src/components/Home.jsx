import Navbar from "./Navbar"
import { useAuth } from "../hooks/useAuth"

const Home = () => {
    const {profile} = useAuth()
    profile()

  return (
    <div className="h-screen w-full bg-zinc-900">
        
        <Navbar/>
        <h1 className="text-4xl text-white">home</h1>
    </div>
  )
}

export default Home