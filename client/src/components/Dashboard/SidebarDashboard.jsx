import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { useTheme } from "../../hooks/useTheme";

const Sidebar = (themeStyles) => {
    const navigate = useNavigate();

    const { logout, profile,user } = useAuth();
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
        <aside className={`row-start-3 sm:hidden   sm:col-start-1 sm:row-start-1  justify-between items-center sm:row-span-3 w-full sm:h-full  flex h-10 items-center absolute bottom-0 sm:h-[43%] rounded-xl p-3 ${themeStyles}`}>
                <button
                    type="button"
                    onClick={handleHome}
                    className={`cursor-pointer p-3 text-left font-semibold `}
                >
                    Home
                </button>

                <button
                    type="button"
                    onClick={handleTheme}
                    className={`cursor-pointer p-3 text-left font-semibold `}
                >
                    {isDark ? "Dark" : "Light"}
                </button>

                <button
                    type="button"
                    onClick={handleLogout}
                    className={`cursor-pointer p-3 text-left font-semibold `}
                >
                    Logout
                </button>

                 <div onClick={handleProfile} className="  border-2 border-yellow-500 rounded-full items-center justify-center sm:w-30  h-8 w-8 flex cursor-pointer items-center  gap-2">
                        <img
                            src={user?.avatar}
                            alt="Profile"
                            className="h-[100%] w-[100%] rounded-full"
                        />
                        {user && (
                            <span className="hidden truncate sm:block">
                                {user.username}
                            </span>
                        )}
                    </div>
        </aside>
    );
};

export default Sidebar;