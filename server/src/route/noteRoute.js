import { Router } from "express";
import authMiddilare from "../middilware/authMiddilware.js";
import { createNote,getNote } from "../controller/noteControoler.js";

const router = Router();

router.post("/create", authMiddilare, createNote);
router.get("/", authMiddilare, getNote);

export default router;