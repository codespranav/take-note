import express from "express"
import { addNoteController, deleteNoteController, editNoteController, fetchNoteController } from "../controller/NoteController.js";
import { requireSignIn } from "../middlewares/auth-middleware.js";

const router = express.Router();

router.post("/add-note", requireSignIn, addNoteController)
router.get("/view-note", requireSignIn, fetchNoteController)
router.post("/edit-note/:noteid", requireSignIn, editNoteController)
router.delete("/delete-note/:noteID", requireSignIn, deleteNoteController)

export default router