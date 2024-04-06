import express from "express"
import { addNoteController } from "../controller/NoteController.js";

const router = express.Router();

router.post("/add-note", addNoteController)

export default router