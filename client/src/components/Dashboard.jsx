
import React from "react";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";
const Dashboard = () => {
    const { user, logout, profile } = useAuth();
    const {theme,changeTheme} = useTheme()
    
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/");
    };

    const handleProfile = () => {
        profile();
        // navigate("/profile")
    };

    const handleHome = () => {
        navigate("/");
    };
    const handleTheme = () => {
        changeTheme()
    }

    return (
        <div className={`grid h-screen w-full grid-cols-7 gap-2 ${theme==='light'?"bg-white text-black":"bg-black text-white"} p-2 `}>

            {/* Sidebar */}
            <aside className="col-span-1 rounded-xl border p-3">

                <div className="flex h-full flex-col gap-2">

                    <button
                        onClick={handleHome}
                        className="rounded-lg p-3 text-left "
                    >
                        Home
                    </button>

                    <button
                        onClick={handleProfile}
                        className="rounded-lg p-3 text-left"
                    >
                        Profile
                    </button>

                    <button
                        onClick={handleTheme}
                        className="mt-auto rounded-lg p-3 text-left"
                    >
                        {theme}
                    </button>
                    <button
                        onClick={handleLogout}
                        className="mt-auto rounded-lg p-3 text-left"
                    >
                        Logout
                    </button>

                </div>

            </aside>


            {/* Main Content */}
            <main className="col-span-6 grid min-h-0 grid-rows-[30%_70%] gap-2">

                {/* Top Section */}
                <section className="grid min-h-0 grid-rows-[30%_70%] rounded-xl border border-zinc-800">

                    {/* Navbar */}
                    <div className="grid grid-cols-7 items-center gap-3 px-8">

                        {/* Search */}
                        <div className="col-span-4 h-10">
                            <input
                                type="search"
                                placeholder="Search..."
                                className="h-full w-full rounded-lg border border-zinc-700 bg-zinc-900 px-4 outline-none "
                            />
                        </div>

                        {/* User */}
                        <div className="col-span-2 flex items-center justify-end gap-2">

                            <img
                                className="h-10 w-10 rounded-full"
                                src={user?.avatar}
                                alt="profile"
                            />

                            <span className="truncate">
                                {user?.username || "Guest"}
                            </span>

                        </div>

                        {/* Notification */}
                        <button className="col-span-1">
                            🔔
                        </button>

                    </div>


                    {/* Hero */}
                    <div className="p-4">

                        <div className="h-full w-full rounded-xl border ">
                            {/* Hero Content */}
                        </div>

                    </div>

                </section>


                {/* Bottom Section */}
                <section className="grid min-h-0 grid-cols-4 gap-2">

                    {/* Main Cards */}
                    <div className="col-span-3 grid min-h-0 grid-rows-2 gap-2">

                        <div  className="py-2 px-4 rounded-xl border">
                            Templates
                        </div>

                        <div className="py-2 px-4 rounded-xl border">
                           Notes
                        </div>

                    </div>


                    {/* Right Panel */}
                    <div className=" py-2 px-4 col-span-1 rounded-xl border">
                        Feed
                    </div>

                </section>

            </main>

        </div>
    );
};

export default Dashboard;

