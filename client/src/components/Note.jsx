import React, { useEffect } from 'react'
import { useState } from 'react';
import { useTheme } from '../hooks/useTheme';
import { useNote } from '../hooks/useNote';
import { useAuth } from '../hooks/useAuth';
import {RiDeleteBack2Line} from '@remixicon/react'
const Note = ({ onClose, noteId, themeStyles }) => {
    const { createNote, note, updateNote, allNote } = useNote()
    const { theme } = useTheme()
    const { user } = useAuth()
    const selectedNote =
        note.find((e) => String(e._id) === String(noteId)) ||
        allNote.find((e) => String(e._id) === String(noteId));
    if (!selectedNote) {
        const selectedNote = allNote.find((e) => e._id === noteId);

    }
    // console.log(selectedNote)
    const validUser = selectedNote?.owner === user?._id;
    const [form, setForm] = useState({
        title: ``,
        content: ``,
        visibility: "private",
        noteId: selectedNote?._id
    });
    useEffect(() => {
        if (selectedNote) {
            setForm({
                title: selectedNote.title,
                content: selectedNote.content,
                visibility: selectedNote.visibility,
                noteId: selectedNote?._id
            })
        }
    }, [selectedNote])
    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await updateNote(form);
            onClose();
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <form onSubmit={handleSubmit} className={`z-[99]  overflow-hidden  left-1/2 sm:top-30 top-70 -translate-x-1/2 -translate-y-1/2" absolute p-3 rounded-2xl w-80  ${themeStyles} `} action="">
            <div className=" flex items-center gap-2 h-10">
                <img className='h-full w-10 rounded-full ' src={selectedNote.owner.avatar} alt="" />
                <h1 className='text-2xl '>{selectedNote.owner.username}</h1>
                <button type='button' onClick={onClose} className=' relative left-40 cursor-pointer text-2xl mr-2'><RiDeleteBack2Line /></button>

            </div>
            <input
                className={`outline-none w-[92%] border-b h-10 text-2xl `}
                name="title"
                value={form.title}
                onChange={handleChange}
                type="text"
                placeholder="Title"
            />

            <textarea
                name="content"
                value={form.content}
                onChange={handleChange}
                className="outline-none resize-none w-full h-80"
                placeholder="Write your note..."
            ></textarea>
            <div className="flex px-2 justify-between w-full">
                {validUser ? (
                    <select
                        name="visibility"
                        value={form.visibility}
                        onChange={handleChange}
                        className="rounded-lg cursor-pointeroutline-none"
                    >
                        <option className='text-blue-800 cursor-pointer' value="private">Private</option>
                        <option className='text-blue-800 cursor-pointer' value="public">Public</option>
                    </select>

                ) : <h1>Like</h1>}

                {validUser ? (
                    <button className="py-2 px-4 rounded-4xl cursor-pointer">
                        Update
                    </button>
                ) : (
                    <h1>Conlaburate</h1>
                )}

            </div>



        </form>
    )
}

export default Note