import React from 'react'
import { useState } from "react";
import { useTheme } from "../../hooks/useTheme";
import { useNote } from "../../hooks/useNote";

const Note = () => {
    const { theme, changeTheme } = useTheme()
    const { note, allNote, getnote } = useNote()
    const [showCreateNote, setShowCreateNote] = useState(false);
    const isDark = theme === "dark";
    return (
        <div className="rounded-xl py-1 relative ">
            <div className=" h-[17%] relative   flex justify-between ">
                <span className={`text-xl  font-bold  ${isDark ? "text-white" : "text-violet-700"}`}>Note</span>
                <span className={` text-sm relative left-100 cursor-pointer font-bold  ${isDark ? "text-white" : "text-violet-700"}`}>See all</span>
                <button
                    type="button"
                    onClick={() => {
                        setShowCreateNote(true);
                    }}
                    className={`relative z-[9999] flex h-10 w-10 cursor-pointer top-30 right-10 items-center justify-center rounded-full border text-3xl
        ${isDark
                            ? "border-violet-200 bg-violet-950 text-white"
                            : "border-violet-400 bg-violet-950 text-white"
                        }`}
                >+ </button>
            </div>
            <div className="h-[83%] w-216 pt-1  scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent [transform:rotateX(180deg)] overflow-x-auto flex gap-1 px-1 ">
                {note.map((e) => {
                    return <div key={e._id} className={`h-full cursor-pointer rounded shrink-0 overflow-hidden p-2 break-words whitespace-normal [transform:rotateX(180deg)] w-40 bg-violet-600 
                                     ${isDark ? "border-violet-400/20 bg-gradient-to-br from-violet-950 via-indigo-950 to-slate-950 text-white"
                            : "border-violet-200 bg-gradient-to-br  from-violet-300 via-fuchsia-100 to-amber-100 text-zinc-900"} `}>

                        <h1 className="mb-2  text-sm font-bold">{e.title}</h1>
                        <p className="text-[11px]  ">{e.content}</p>
                        <span className={`absolute bottom-1 rounded  px-12 ${isDark ? "bg-white text-violet-950" : "bg-violet-700 text-white"}  `}>{e.visibility}</span>


                    </div>
                })}
            </div>
        </div>
    )
}

export default Note