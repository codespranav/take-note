import NotesModel from "../models/NotesModel.js";

export const addNoteController = async (req, res)=>{
    try {
        const {title, description} = req.body;
        if(!title && !description){
            return res.status(200).send("Check fields!")
        }
        else{
            const createdBy = req.user._id;
            const newNote = new NotesModel(title, description, createdBy);
            await newNote.save();
            res.send(newNote);
        }
    } catch (error) {
        res.json({
            error: "Error" + error
        })
    }
}