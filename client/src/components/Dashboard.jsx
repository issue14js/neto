
import React from "react";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
// import { useTheme } from "../hooks/useTheme";
const Dashboard = () => {
    const { user, logout, profile } = useAuth();
    // const {changeTheme} = useTheme()
    
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/");
    };

    const handleProfile = () => {
        profile();
    };

    const handleHome = () => {
        navigate("/");
    };

    return (
        <div className="grid h-screen w-full grid-cols-7 gap-2  bg-black p-2 text-white">

            {/* Sidebar */}
            <aside className="col-span-1 rounded-xl border border-zinc-800 p-3">

                <div className="flex h-full flex-col gap-2">

                    <button
                        onClick={handleHome}
                        className="rounded-lg p-3 text-left hover:bg-zinc-800"
                    >
                        Home
                    </button>

                    <button
                        onClick={handleProfile}
                        className="rounded-lg p-3 text-left hover:bg-zinc-800"
                    >
                        Profile
                    </button>

                    <button
                        onClick={handleLogout}
                        className="mt-auto rounded-lg p-3 text-left hover:bg-zinc-800"
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
                                className="h-full w-full rounded-lg border border-zinc-700 bg-zinc-900 px-4 outline-none placeholder:text-zinc-500"
                            />
                        </div>

                        {/* User */}
                        <div className="col-span-2 flex items-center justify-end gap-2">

                            <img
                                className="h-10 w-10 rounded-full bg-red-500"
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

                        <div className="h-full w-full rounded-xl border border-zinc-800">
                            {/* Hero Content */}
                        </div>

                    </div>

                </section>


                {/* Bottom Section */}
                <section className="grid min-h-0 grid-cols-4 gap-2">

                    {/* Main Cards */}
                    <div className="col-span-3 grid min-h-0 grid-rows-2 gap-2">

                        <div  className="py-2 px-4 rounded-xl border border-zinc-800">
                            Templates
                        </div>

                        <div className="py-2 px-4 rounded-xl border border-zinc-800">
                           Notes
                        </div>

                    </div>


                    {/* Right Panel */}
                    <div className=" py-2 px-4 col-span-1 rounded-xl border border-zinc-800">
                        Feed
                    </div>

                </section>

            </main>

        </div>
    );
};

export default Dashboard;

