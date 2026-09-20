import React from 'react'
import { useAuth } from '../hooks/useAuth';
import { useTheme } from '../hooks/useTheme';
import { useNavigate } from 'react-router-dom';
import {RiAddLine, RiDashboardFill} from '@remixicon/react'
const Mobileavbar = ({onCreateNote, themeStyles }) => {
       const navigate = useNavigate();

    const { logout, profile, user } = useAuth();
    const { theme, changeTheme } = useTheme();

    const isDark = theme === "dark";

    const textStyle = isDark
        ? "text-white"
        : "text-violet-700";

    const handleLogout = async () => {
        console.log("click")
        await logout();
        navigate("/");
    };

    const handleProfile = () => {
        navigate('/profile')
    };

    const handleDashboard = () => {
        navigate("/dashboard");
    };

    const handleTheme = () => {
        changeTheme();
    };
  return (
    <div className={`w-full h-12 px-2  ${themeStyles} bottom-0 absolute
                     sm:hidden`}
    >
         <div className="flex text-xl items-center h-full   py-5  justify-between sm:flex-col gap-2">
                <button
                    type="button"
                    onClick={handleDashboard}
                    className={`cursor-pointer text-left font-semibold `}
                >
                 <RiDashboardFill/>
                </button>
                <button
                    type="button"
                   onClick={() => { onCreateNote() }}
                    className={`cursor-pointer text-left font-semibold `}
                >
                 <RiAddLine/>
                </button>
                
                <button
                    type="button"
                    onClick={handleLogout}
                    className={`cursor-pointer sm:block hidden text-left font-semibold ${textStyle}`}
                >
                    Logout
                </button>
                <div onClick={handleProfile} className="items-center  justify-center h-8 w-8 
                                                        sm:hidden
                                     ">
                    <img
                        src={user?.avatar}
                        alt="Profile"
                        className="h-8 w-10 sm:h-8 border-2 border-yellow-700 sm:w-8 rounded-full"
                    />
                </div>
                
            </div>

     </div>
  )
}

export default Mobileavbar