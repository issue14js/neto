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

    const getnote = async () => {
        try {
            const res = await axios.get(
                `${rooturl}/api/note/`,
                { withCredentials: true }
            );

            // console.log("API DATA:", res.data);

            setnote(res.data.note);
            setallNote(res.data.allNote);

            return res.data;
        } catch (err) {
            console.log("Error", err);
            throw err;
        }
    };
    const updateNote = async (formData) => {
        try {
            const res = await axios.put(`${rooturl}/api/note/update`, formData, {
                withCredentials: true
            })
            await getnote()
        } catch (err) {
            console.log("Error", err)
            throw err
        }
    }

    const likeUpdate = async (data) => {
        try {
            console.log("1. data:", data);
            const response = await axios.put(
                `${rooturl}/api/note/${data}/like`,
                {},
                { withCredentials: true }
            )
            // console.log("2. response:", response);
            // console.log("3. response data:", response.data);
            return response.data
        } catch (err) {
            console.log(" ERROR:", err);
            console.log(" SERVER:", err.response?.data);
        }
    }

    const saveUpdate = async (data) => {
        try {
            const response = await axios.put(
                `${rooturl}/api/note/${data}/save`,
                {},
                { withCredentials: true }
            )
            return response.data
        } catch (err) {
            console.log(" ERROR:", err);
            console.log(" SERVER:", err.response?.data);

        }
    }





    return (
        <NoteContext.Provider
            value={{ note, allNote, createNote, getnote, updateNote, likeUpdate,saveUpdate }}>
            {children}
        </NoteContext.Provider>
    )
}