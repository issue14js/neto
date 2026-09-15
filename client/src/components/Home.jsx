import Navbar from "./Navbar"
import { useAuth } from "../hooks/useAuth"
import { useEffect } from "react"
import Sidebar from "./Dashboard/SidebarDashboard"

const Home = ({themeStyles}) => {
    
    const {user,profile} = useAuth()
    useEffect(() => {
        if (user === null) {
            profile();
        }
    }, [user]);

  return (
    <div className={` h-screen  w-full bg-red-500 ${themeStyles} `}>
        
        <Navbar/>
        <h1 className="text-4xl  ">Home</h1>
        <Sidebar/>
              
    </div>
  )
}

export default Home