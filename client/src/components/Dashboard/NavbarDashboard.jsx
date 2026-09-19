import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { useTheme } from "../../hooks/useTheme";
import { useNote } from "../../hooks/useNote";
import BannerDashboard from "./BannerDashboard";
import { useState } from "react";
const DashboardNavbar = ({ themeStyles, onViewNote, setnoteId}) => {
    const { user } = useAuth();
    const { theme } = useTheme();
    const { allNote } = useNote()
    const [searchNoteInput, setSearchNoteInput] = useState('')
    const isDark = theme === "dark";
    const Navigate = useNavigate()

    const handelProfile = (() => {
        Navigate('/profile')

    })
    const filterNote = allNote.filter((note) =>
        note.title.toLowerCase().includes(searchNoteInput.toLowerCase()) ||
        note.content.toLowerCase().includes(searchNoteInput.toLowerCase())
    )
    const HandelviewNote = ((id)=>{
        setnoteId(id)
        onViewNote()
    })

    // console.log(searchNoteInput)
    return (
        <div className={`row-start-1 p-2  sm:col-start-2 sm:col-span-7 h-full sm:row-start-1   gap-3 ${themeStyles}`}>
            {/* Search */}
            <div className=" flex mt-2 justify-between  h-10">
                <input
                    type="search"
                    value={searchNoteInput}
                    onChange={(e) => { setSearchNoteInput(e.target.value) }}
                    placeholder="Search..."
                    className={`h-full sm:w-[70%] w-[60%] rounded-lg border px-4 outline-none ${isDark
                        ? "border-zinc-500 bg-white text-zinc-900 placeholder:text-zinc-500"
                        : "border-zinc-500 bg-zinc-100 text-zinc-900 placeholder:text-zinc-400"
                        }`}
                />
                {searchNoteInput && (
                        <div className={`  h-41 overflow-auto "overflow-y-auto [&::-webkit-scrollbar]:hidden  gap-2 flex flex-col items-center  w-51 sm:w-206 z-99 absolute top-14  `}>
                            {filterNote.map((e) => (
                                <div key={e._id} onClick={()=> HandelviewNote(e._id)} className={`h-12 rounded p-2 ${themeStyles} border w-[98%] `}>
                                    <h1 className="text-sm font-semibold ">{e.title}</h1>
                                    <h1 className="text-[10px]">{e.content}</h1>
                                </div>
                            ))}
                        </div>
                    )}
                <div className="sm:w-60 w-22 justify-between flex ">

                    {/* User */}
                    <div onClick={handelProfile} className=" sm:w-30 w-12 flex cursor-pointer items-center  gap-2">
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
            <BannerDashboard />

        </div>
    );
};

export default DashboardNavbar;