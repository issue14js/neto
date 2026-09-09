
import React, { useEffect } from "react";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";
import { useNote } from "../hooks/useNote";
import Banner from "./Banner";
import NoteForm from "./NoteForm";
import { useState } from "react";
const Dashboard = () => {
    const { user, logout, profile } = useAuth();
    const { theme, changeTheme } = useTheme()
    const { note, allNote, getnote } = useNote()
    const [showCreateNote, setShowCreateNote] = useState(false);

    const navigate = useNavigate();
    useEffect(() => {
        getnote();
    }, []);
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
        <div className={`grid relative h-screen w-full grid-cols-7 gap-2 ${theme === 'light' ? "bg-white text-black" : "bg-black text-white"} p-2 `}>
            {showCreateNote && (
                <NoteForm
                    onClose={() => setShowCreateNote(false)}
                />
            )}

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
                        className=" rounded-lg p-3 text-left"
                    >
                        Logout
                    </button>

                </div>

            </aside>


            {/* Main Content */}
            <main className="col-span-6 grid min-h-0 grid-rows-[40%_60%] gap-2">

                {/* Top Section */}
                <section className="grid min-h-0 grid-rows-[30%_70%] rounded-xl border border-zinc-800">

                    {/* Navbar */}
                    <div className="grid grid-cols-7 items-center gap-3 px-8">

                        {/* Search */}
                        <div className="col-span-4 h-10">
                            <input
                                type="search"
                                placeholder="Search..."
                                className={`h-full w-full rounded-lg border px-4 outline-none transition-colors duration-300 ${theme === "light"
                                    ? "border-zinc-300 bg-white text-zinc-900 placeholder:text-zinc-400"
                                    : "border-zinc-700 bg-zinc-900 text-white placeholder:text-zinc-500"
                                    }`}
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
                            <Banner />
                        </div>

                    </div>

                </section>


                {/* Bottom Section */}
                <section className="grid min-h-0 grid-cols-4 gap-2">

                    {/* Main Cards */}
                    <div className="col-span-3 grid min-h-0 grid-rows-2 gap-2">

                        <div className="py-2 px-4 rounded-xl border">
                            <span>Template</span>
                        </div>

                        <div className="rounded-xl border">
                            <div className="py-1 h-[17%] px-4 flex justify-between ">
                                <span>Note</span>
                                <button onClick={() => setShowCreateNote(true)} className=" bg-amber-400 cursor-pointer  border h-6 rounded-2xl px-2 text-sm items-center">Create +</button>
                            </div>
                            {/* {console.log("Note",note)} */}
                            <div className="h-[83%] w-216  scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent [transform:rotateX(180deg)] overflow-x-auto flex gap-1 px-1 ">
                                {note.map((e) => {
                                    return <div key={e._id} className="h-full rounded shrink-0 overflow-hidden p-2 break-words whitespace-normal [transform:rotateX(180deg)] w-40 bg-zinc-600">
                                        <h1 className="mb-2 text-white font-bold">{e.title}</h1>
                                        <p className="text-sm text-gray-200 opacity-70">{e.content}</p>
                                        <span className="absolute bottom-1 rounded  bg-amber-50 px-12 ">{e.visibility}</span>
                                    </div>
                                })}
                            </div>
                        </div>

                    </div>


                    {/* Right Panel */}
                    <div className="py-2 px-4 col-span-1  rounded-xl border">
                        Feed    
                        {allNote?.map((e) => {
                            return (
                                <div key={e._id} className="h-10 bg-red-400 w-full">
                                    <h1 className="text-white">{e.title}</h1>
                                    <p className="text-white">{e.content}</p>
                                    console.log("allNote:", allNote);
                                </div>
                            );
                        })}
                    </div>

                </section>

            </main>

        </div>
    );
};

export default Dashboard;

