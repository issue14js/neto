
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
    const isDark = theme === "dark";

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
        <div className={`  transition-colors duration-300  grid relative h-screen w-full grid-cols-7 gap-2 ${theme === 'light' ? "bg-white text-black" : "bg-black text-white"} p-2 `}>
            {showCreateNote && (
                <NoteForm
                    onClose={() => setShowCreateNote(false)}
                />
            )}

            {/* Sidebar */}
            <aside className="col-span-1 rounded-xl  p-3">

                <div className="flex h-full flex-col gap-2">

                    <button
                        onClick={handleHome}
                        className={`p-3 font-semibold text-left  ${isDark ? "text-white" : "text-violet-700"}`}>
                        Home
                    </button>

                    <button
                        onClick={handleProfile}
                        className={`p-3 font-semibold text-left  ${isDark ? "text-white" : "text-violet-700"}`}
                    >
                        Profile
                    </button>

                    <button
                        onClick={handleTheme}
                        className={`p-3 font-semibold text-left  ${isDark ? "text-white" : "text-violet-700"}`}
                    >
                        {isDark ? "Dark" : "Light"}
                    </button>
                    <button
                        onClick={handleLogout}
                        className={`p-3 font-semibold text-left  ${isDark ? "text-white" : "text-violet-700"}`}
                    >
                        Logout
                    </button>

                </div>

            </aside>


            {/* Main Content */}
            <main className="col-span-6 grid min-h-0 grid-rows-[40%_60%] gap-2">

                {/* Top Section */}
                <section className="grid min-h-0 grid-rows-[30%_70%] rounded-xl ">

                    {/* Navbar */}
                    <div className="grid grid-cols-7 items-center gap-3 px-8">

                        {/* Search */}
                        <div className="col-span-4 h-10">
                            <input
                                type="search"
                                placeholder="Search..."
                                className={`h-full w-full rounded-lg border px-4 outline-none  ${theme === "light"
                                    ? "border-zinc-500 bg-white text-zinc-900 placeholder:text-zinc-400"
                                    : "border-zinc-500 bg-zinc-900 text-white placeholder:text-zinc-500"
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

                        <div className="py-2  rounded-xl ">
                            <span className={`${isDark ? "text-white" : "text-violet-700"} text-xl font-bold`}>Template</span>
                        </div>

                        <div className="rounded-xl py-1 ">
                            <div className=" h-[17%] relative  flex justify-between ">
                                <span className={`text-xl  font-bold  ${isDark ? "text-white" : "text-violet-700"}`}>Note</span>
                                 <button
        type="button"
        onClick={() => {
            console.log("BUTTON CLICKED");
            setShowCreateNote(true);
        }}
        className={`relative z-[9999] flex h-10 w-10 cursor-pointer
        items-center justify-center rounded-full border text-3xl
        ${
            isDark
                ? "border-violet-200 bg-violet-950 text-white"
                : "border-violet-400 bg-violet-950 text-white"
        }`}
    >
        +
    </button>
                            </div>
                            <div className="h-[83%] w-216 pt-1  scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent [transform:rotateX(180deg)] overflow-x-auto flex gap-1 px-1 ">
                                {note.map((e) => {
                                    return <div key={e._id} className={`h-full rounded shrink-0 overflow-hidden p-2 break-words whitespace-normal [transform:rotateX(180deg)] w-40 bg-violet-600 
                                     ${isDark ? "border-violet-400/20 bg-gradient-to-br from-violet-950 via-indigo-950 to-slate-950 text-white"
                                            : "border-violet-200 bg-gradient-to-br  from-violet-300 via-fuchsia-100 to-amber-100 text-zinc-900"} `}>

                                        <h1 className="mb-2  text-sm font-bold">{e.title}</h1>
                                        <p className="text-[11px]  ">{e.content}</p>
                                        <span className={`absolute bottom-1 rounded  px-12 ${isDark ? "bg-white text-violet-950" : "bg-violet-700 text-white"}  `}>{e.visibility}</span>


                                    </div>
                                })}
                            </div>
                        </div>

                    </div>


                    {/* Right Panel */}
                    <div className="p-1 gap-1 flex flex-col col-span-1 rounded-xl ">
                        <span className={`text-xl font-bold  ${isDark ? "text-white" : "text-violet-700"}`}>Feed</span>
                        {allNote.map((e) => {
                            return <div key={e._id} className={`h-20  w-full  rounded shrink-0 overflow-hidden p-2  break-words whitespace-normal  bg-zinc-600 ${isDark ? "border-violet-400/20 bg-gradient-to-br from-violet-950 via-indigo-950 to-slate-950 text-white"
                                : "border-violet-200 bg-gradient-to-br from-violet-300 via-fuchsia-100 to-amber-100 text-zinc-900"} `}>
                                <h1 className=" text-sm  font-bold">{e.title}</h1>
                                <p className="text-[10px]  opacity-70">{e.content}</p>
                                {/* <span className="absolute bottom-1 rounded  bg-amber-50 px-12 ">{e.visibility}</span> */}
                            </div>
                        })}
                    </div>

                </section>

            </main>

        </div>
    );
};

export default Dashboard;

