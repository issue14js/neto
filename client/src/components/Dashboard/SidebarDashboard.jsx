import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { useTheme } from "../../hooks/useTheme";

const Sidebar = () => {
    const navigate = useNavigate();

    const { logout, profile } = useAuth();
    const { theme, changeTheme } = useTheme();

    const isDark = theme === "dark";

    const textStyle = isDark
        ? "text-white"
        : "text-violet-700";

    const handleLogout = async () => {
        await logout();
        navigate("/");
    };

    const handleProfile = () => {
        profile();
    };

    const handleHome = () => {
        navigate("/");
    };

    const handleTheme = () => {
        changeTheme();
    };

    return (
        <aside className="col-span-1 rounded-xl p-3">
            <div className="flex h-full flex-col gap-2">
                <button
                    type="button"
                    onClick={handleHome}
                    className={`cursor-pointer p-3 text-left font-semibold ${textStyle}`}
                >
                    Home
                </button>

                <button
                    type="button"
                    onClick={handleProfile}
                    className={`cursor-pointer p-3 text-left font-semibold ${textStyle}`}
                >
                    Profile
                </button>

                <button
                    type="button"
                    onClick={handleTheme}
                    className={`cursor-pointer p-3 text-left font-semibold ${textStyle}`}
                >
                    {isDark ? "Dark" : "Light"}
                </button>

                <button
                    type="button"
                    onClick={handleLogout}
                    className={`cursor-pointer p-3 text-left font-semibold ${textStyle}`}
                >
                    Logout
                </button>
            </div>
        </aside>
    );
};

export default Sidebar;