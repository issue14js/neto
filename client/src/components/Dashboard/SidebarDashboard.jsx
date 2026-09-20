import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { useTheme } from "../../hooks/useTheme";
import { RiDashboardFill, RiLogoutBoxLine,RiDrizzleFill,RiSunLine } from "@remixicon/react";

const Sidebar = (themeStyles) => {
    const navigate = useNavigate();

    const { logout, profile, user } = useAuth();
    const { theme, changeTheme } = useTheme();

    const isDark = theme === "dark";


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
        <aside className={`row-start-3 hidden  text-sm relative  w-full 
            sm:row-start-1 sm:col-start-1 sm:row-span-3 sm:block sm:h-full ${themeStyles}`}>
            <div className="flex text-xl items-center h-full   py-5  justify-between sm:flex-col gap-2">
                <button
                    type="button"
                    onClick={handleDashboard}
                    className={`cursor-pointer text-left `}
                >
                     <RiDashboardFill/> 
                </button>

                <button
                    type="button"
                    onClick={handleTheme}
                    className={`cursor-pointer text-left font-semibold `}
                >
                    {isDark ? <RiDrizzleFill /> : <RiSunLine />}
                </button>
                <button
                    type="button"
                    onClick={handleLogout}
                    className={`cursor-pointer sm:block hidden text-left font-semibold `}
                >
                    <RiLogoutBoxLine />
                </button>
                <div onClick={handleProfile} className="items-center bg-blue-500 justify-center h-8 w-8 
                                                        sm:hidden
                                     ">
                    <img
                        src={user?.avatar}
                        alt="Profile"
                        className="h-8 w-10 sm:h-8 border-2 border-yellow-700 sm:w-8 rounded-full"
                    />
                </div>
                
            </div>

        </aside>
    );
};

export default Sidebar;