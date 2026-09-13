import { Router } from "express";
import authMiddilare from "../middilware/authMiddilware.js";
import { createNote,getNote, updateNote } from "../controller/noteControoler.js";

const router = Router();

router.post("/create", authMiddilare, createNote);
router.get("/", authMiddilare, getNote);
router.put('/update',authMiddilare,updateNote)

export default router;