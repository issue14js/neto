import { useContext } from "react";
import axios from "axios";
import { useState } from "react";
import { rooturl } from "../config/api.js";

export const NoteContext = useContext()

export function NoteProvider({children}){
    const [note, setnote] = useState([])

    const createNote = async (formData)=>{
        try{
            const res = await axios.post(`${rooturl}/api/note/create`,formData)
            setnote(res.data.note)
            return res.data
        }catch(err){
            console.log("Error",err);
            throw err
            
        }

    }
    

    


    return (
        <NoteContext.Provider
        value={{createNote}}>
        {children}
        </NoteContext.Provider>
    )
}