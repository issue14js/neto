import { useAuth } from "../../hooks/useAuth";
import { useTheme } from "../../hooks/useTheme";

const DashboardNavbar = () => {
    const { user } = useAuth();
    const { theme } = useTheme();

    const isDark = theme === "dark";

    return (
        <div className="row-start-1 p-2 bg-green-400 sm:col-start-2 sm:col-span-7 h-full sm:row-start-1  gap-3 ">
            {/* Search */}
            <div className=" flex mt-2 justify-between  h-10">
                <input
                    type="search"
                    placeholder="Search..."
                    className={`h-full sm:w-[70%] w-[60%] rounded-lg border px-4 outline-none ${isDark
                        ? "border-zinc-500 bg-zinc-900 text-white placeholder:text-zinc-500"
                        : "border-zinc-500 bg-white text-zinc-900 placeholder:text-zinc-400"
                        }`}
                />
                <div className="sm:w-60 w-22 justify-between flex ">

                    {/* User */}
                    <div className=" sm:w-30 w-12 flex cursor-pointer items-center  gap-2">
                        <img
                            src={user?.avatar}
                            alt="Profile"
                            className="h-10 w-10 rounded-full"
                        />
                        {user && (
                            <span className="hidden truncate sm:block">
                                {user.username}
                            </span>
                        )}
                    </div>
                    {/* Notification */}
                    <button
                        type="button"
                        className="cursor-pointer mr-5"
                        aria-label="Notifications"
                    >
                        🔔
                    </button>
                </div>
            </div>

        </div>
    );
};

export default DashboardNavbar;