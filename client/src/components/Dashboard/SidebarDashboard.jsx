import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { useTheme } from "../../hooks/useTheme";

const Sidebar = (themeStyles) => {
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

    const handleHome = () => {
        navigate("/");
    };

    const handleTheme = () => {
        changeTheme();
    };

    return (
        <aside className={`row-start-3   text-sm relative  w-full 
            sm:row-start-1 sm:col-start-1 sm:row-span-3 sm:h-full ${themeStyles}`}>
            <div className="flex text-xl items-center h-full   py-5  justify-between sm:flex-col gap-2">
                <button
                    type="button"
                    onClick={handleHome}
                    className={`cursor-pointer text-left font-semibold ${textStyle}`}
                >
                    Home
                </button>

                <button
                    type="button"
                    onClick={handleProfile}
                    className={`cursor-pointer text-left font-semibold ${textStyle}`}
                >
                    Profile
                </button>

                <button
                    type="button"
                    onClick={handleTheme}
                    className={`cursor-pointer text-left font-semibold ${textStyle}`}
                >
                    {isDark ? "Dark" : "Light"}
                </button>
                <button
                    type="button"
                    onClick={handleLogout}
                    className={`cursor-pointer sm:block hidden text-left font-semibold ${textStyle}`}
                >
                    Logout
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