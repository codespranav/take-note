import express from "express"
import { addNoteController, editNoteController, fetchNoteController } from "../controller/NoteController.js";
import { requireSignIn } from "../middlewares/auth-middleware.js";

const router = express.Router();

router.post("/add-note", requireSignIn, addNoteController)
router.get("/view-note", requireSignIn, fetchNoteController)
router.post("/edit-note/:noteid", requireSignIn, editNoteController)

export default router