import { Router } from "express";
import authMiddilare from "../middilware/authMiddilware.js";
import { createNote,getNote, updateNote,likeUpdate,saveUpdate } from "../controller/noteControoler.js";

const router = Router();

router.post("/create", authMiddilare, createNote);
router.get("/", authMiddilare, getNote);
router.put('/update',authMiddilare,updateNote)

//Like
router.put('/:id/like',authMiddilare,likeUpdate)
//Update
router.put('/:id/save',authMiddilare,saveUpdate)

export default router;