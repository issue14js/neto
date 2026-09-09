import { createContext, useState } from "react";
import axios from "axios";
import { rooturl } from "../config/api.js";

export const NoteContext = createContext()

export function NoteProvider({ children }) {
    const [note, setnote] = useState([])
    const [allNote, setallNote] = useState([])

    const createNote = async (formData) => {
        try {
            const res = await axios.post(`${rooturl}/api/note/create`, formData, {
                withCredentials: true
            })
            setnote(prev => [...prev, res.data.note]);
            return res.data
        } catch (err) {
            console.log("Error", err);
            throw err

        }

    }

    const getnote = async (formData) => {
        try {
            const res = await axios.get(`${rooturl}/api/note/`, { withCredentials: true })
            setnote(res.data.note);
            setallNote(res.data.allnote);
            return res.data
        } catch (err) {
            console.log("Error", err)
            throw err
        }
    }





    return (
        <NoteContext.Provider
            value={{ note,allNote, createNote,getnote }}>
            {children}
        </NoteContext.Provider>
    )
}