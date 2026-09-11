import { useAuth } from "../../hooks/useAuth";
import { useTheme } from "../../hooks/useTheme";

const DashboardNavbar = () => {
    const { user } = useAuth();
    const { theme } = useTheme();

    const isDark = theme === "dark";

    return (
        <div className="grid grid-cols-7 items-center gap-3 px-8">
            {/* Search */}
            <div className="col-span-4 h-10">
                <input
                    type="search"
                    placeholder="Search..."
                    className={`h-full w-full rounded-lg border px-4 outline-none ${
                        isDark
                            ? "border-zinc-500 bg-zinc-900 text-white placeholder:text-zinc-500"
                            : "border-zinc-500 bg-white text-zinc-900 placeholder:text-zinc-400"
                    }`}
                />
            </div>

            {/* User */}
            <div className="col-span-2 flex cursor-pointer items-center justify-end gap-2">
                <img
                    src={user?.avatar}
                    alt="Profile"
                    className="h-10 w-10 rounded-full"
                />

                <span className="truncate">
                    {user?.username || "Guest"}
                </span>
            </div>

            {/* Notification */}
            <button
                type="button"
                className="col-span-1 cursor-pointer"
                aria-label="Notifications"
            >
                🔔
            </button>
        </div>
    );
};

export default DashboardNavbar;