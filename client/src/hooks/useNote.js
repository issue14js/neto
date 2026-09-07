import { useContext } from "react";
import { NoteContext } from "../context/NoteContext";


export const useNote = ()=>{
    return useContext(NoteContext)
}