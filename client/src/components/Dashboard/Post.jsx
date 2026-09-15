import React, { useEffect } from 'react'
import { useNote } from '../../hooks/useNote'

const Post = () => { 
    const {note,getnote}=useNote()
            useEffect(() => {
            getnote();
        }, []);
    return (
        <div className=" h-120 w-full grid p-2 gap-2 overflow-y-auto grid-cols-3">
            {note?.map((e) => (
                <div key={e._id} className="h-27 w-27 break-words whitespace-normal p-2 bg-zinc-500">
                    <h1 className="text-sm text-white font-semibold">{e.title}</h1>
                    <h1 className="text-sm text-gray-400">{e.content}</h1>
                </div>
            ))}
        </div>
    )
}

export default Post