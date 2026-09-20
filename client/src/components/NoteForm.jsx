import React from 'react'
import { useState } from 'react';
import { useTheme } from '../hooks/useTheme';
import { useNote } from '../hooks/useNote';
import { useAuth } from '../hooks/useAuth';
import {RiDeleteBack2Line} from '@remixicon/react'

const NoteForm = ({ onClose  }) => {
    const {createNote} = useNote()
    const {theme}=useTheme()
    const {user} = useAuth()
      const isDark = theme === "dark";
    const themeStyles = isDark
        ? "border-violet-400/20 bg-gradient-to-br from-violet-900 via-indigo-950 to-slate-900 text-white"
        : "border-violet-200 bg-gradient-to-br from-violet-100 via-fuchsia-50 to-amber-50 text-zinc-900";
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
    <form onSubmit={handleSubmit} className={`z-[99]   left-1/2 sm:top-30 top-70  bg-amber-600 -translate-x-1/2 -translate-y-1/2" absolute p-3 rounded-2xl w-80  ${themeStyles} ` } action="">
         <div className=" flex items-center gap-2 h-10">
                        <img className='h-full w-10 rounded-full ' src={user.avatar} alt="" />
                        <h1 className='text-2xl '>{user.username}</h1>
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

       <select
         name="visibility"
         value={form.visibility}
         onChange={handleChange}
         className={`rounded-lg cursor-pointer  outline-none`}
         >
            <option className='text-blue-800 cursor-pointer' value="private">Private</option>
             <option className='text-blue-800 cursor-pointer' value="public">Public</option>
       </select>

       <button className='py-2 px-4 rounded-4xl cursor-pointer '>Create</button>
             </div>
             
        

    </form>
  )
}

export default NoteForm