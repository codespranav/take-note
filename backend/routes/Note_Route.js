import express from "express"
import { addNoteController, fetchNoteController } from "../controller/NoteController.js";
import { requireSignIn } from "../middlewares/auth-middleware.js";

const router = express.Router();

router.post("/add-note", requireSignIn, addNoteController)
router.post("/view-note", requireSignIn, fetchNoteController)

export default router