import React from 'react'
import { useState } from 'react';
import { useTheme } from '../hooks/useTheme';
import { useNote } from '../hooks/useNote';

const Note = ({ onClose }) => {
    const { createNote } = useNote()
    const { theme } = useTheme()
    const [form, setForm] = useState({
        title: "",
        content: "",
        visibility: "private"
    });

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
            await createNote(form);
            onClose();
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <form onSubmit={handleSubmit} className={`z-[99]  left-1/2 top-30 bg-amber-600 -translate-x-1/2 -translate-y-1/2" absolute p-3 rounded-2xl w-80  ${theme === 'light' ? "bg-white text-black" : "bg-black text-white"} `} action="">
            <input
                className={`outline-none w-[92%] border-b h-10 text-2xl ${theme === "light"
                        ? "bg-white text-black"
                        : "bg-black text-white"
                    }`}
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
                    className="rounded-lg cursor-pointer text-blue-900 outline-none"
                >
                    <option className='text-blue-800 cursor-pointer' value="private">private</option>
                    <option className='text-blue-800 cursor-pointer' value="public">public</option>
                </select>

                <button className='py-2 px-4 rounded-4xl cursor-pointer bg-amber-400'>Create</button>
            </div>



        </form>
    )
}

export default Note