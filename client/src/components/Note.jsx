import React, { useEffect } from 'react'
import { useState } from 'react';
import { useTheme } from '../hooks/useTheme';
import { useNote } from '../hooks/useNote';

const Note = ({ onClose,noteId,themeStyles }) => {
    const { createNote,note,updateNote } = useNote()
    const { theme } = useTheme()
    const selectedNote = note.find((e) => e._id === noteId);
    // console.log(selectedNote._id)
    const [form, setForm] = useState({
        title:``,
        content: ``,
        visibility: "private",
        noteId:selectedNote?._id
    });
    // console.log(form)
    useEffect(()=>{
        if(selectedNote){
            setForm({
                title:selectedNote.title,
                content:selectedNote.content,
                visibility:selectedNote.visibility,
                noteId:selectedNote?._id
            })
        }
    },[selectedNote])
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
        <form onSubmit={handleSubmit} className={`z-[99]  left-1/2 top-30  -translate-x-1/2 -translate-y-1/2" absolute p-3 rounded-2xl w-80  ${themeStyles} `} action="">
            <input
                className={`outline-none w-[92%] border-b h-10 text-2xl `}
                name="title"
                value={form.title}
                onChange={handleChange}
                type="text"
                placeholder="Title"
            />
            <button type='button' onClick={onClose} className=' cursor-pointer text-2xl mr-2'>X</button>

            <textarea
                name="content"
                value={form.content}
                onChange={handleChange}
                className="outline-none resize-none w-full h-80"
                placeholder="Write your note..."
            ></textarea>
            <div className="flex px-2 justify-between w-full">

                <select
                    name="visibility"
                    value={form.visibility}
                    onChange={handleChange}
                    className="rounded-lg cursor-pointeroutline-none"
                >
                    <option className='text-blue-800 cursor-pointer' value="private">Private</option>
                    <option className='text-blue-800 cursor-pointer' value="public">Public</option>
                </select>

                <button className='py-2 px-4 rounded-4xl cursor-pointer '>Update</button>
            </div>



        </form>
    )
}

export default Note