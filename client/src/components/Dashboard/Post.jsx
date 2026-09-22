import React, { useEffect } from 'react'
import { useNote } from '../../hooks/useNote'

const Post = ({ themeStyles,profileowner,ownerNote, onViewNote, setnoteId}) => { 
    const {note,getnote}=useNote()
            useEffect(() => {
            getnote();
        }, []);

        const HandelViewNote = (id)=>{
            setnoteId(id)
            onViewNote()
        }

    return (
        <div className="order-2  flex flex-col justify-center items-center ">
            <div className=" border flex justify-center items-center w-[99%] rounded h-10"> <h1>Your Notes</h1></div>

        <div className=" h-110 w-full grid p-2 gap-2  overflow-y-auto grid-cols-3 scrollbar-thin scrollbar-thumb-gray-400  scrollbar-track-transparent 
                        sm:h-80  ">
            {ownerNote?.map((e) => (
                <div key={e._id} onClick={()=> HandelViewNote(e._id)} className="h-27 border overflow-hidden rounded w-27 break-words whitespace-normal p-2 
                sm:p-5  sm:w-97 sm:h-97">
                    <h1 className=" text-[12px] sm:text-xl  font-semibold">{e.title}</h1>
                    <h1 className=" text-[10px]  sm:text-sm ">{e.content}</h1>
                </div>
            ))}
        </div>
            </div>
    )
}

export default Post