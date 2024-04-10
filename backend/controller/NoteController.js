import mongoose from "mongoose";
import NotesModel from "../models/NotesModel.js";

export const addNoteController = async (req, res)=>{
    try {
        const {title, description} = req.body;
        if(!title && !description){
            return res.status(200).send("Check fields!")
        }
        else{
            const createdBy = req.user._id;
            const newNote = new NotesModel({
                title: title,
                description: description,
                createdBy: createdBy
            });
            await newNote.save();
            res.status(200).json({
                success: true,
                message: "Note Added", 
                newNote,
            });
        }
    } catch (error) {
        res.json({
            error: "Error" + error
        })
    }
}

// fetch notes
export const fetchNoteController = async (req, res) => {
    try {
        const userID = req.user._id;
        const note = await NotesModel.find({createdBy: userID});
        res.status(200).send({
            success: true,
            message: "Notes fetched",
            note
        })
    } catch (error) {
        res.json({
            error: "Error" + error
        })
    }
}

// edit note

export const editNoteController = async (req, res) =>{
    try {   
        const { noteid } = req.params;
        const { editedTitle, editedDesc } = req.body;

        // Validate if noteid exists
        if (!noteid) {
            return res.status(400).json({ error: "noteid is required" });
        }

        // Validate editedTitle and editedDesc
        if (!editedTitle || !editedDesc) {
            return res.status(400).json({ error: "editedTitle and editedDesc are required" });
        }

        // Validate if noteid is a valid ObjectId
        if (!mongoose.Types.ObjectId.isValid(noteid)) {
            return res.status(400).json({ error: "Invalid noteid" });
        }

        const updatedNote = await NotesModel.findByIdAndUpdate(
            noteid,
            { title: editedTitle, description: editedDesc },
            { new: true }
        );

        if (!updatedNote) {
            return res.status(404).json({ error: "Note not found" });
        }

        res.status(200).json({
            success: true,
            updatedNote,
            noteid
        });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

// delete note controller

export const deleteNoteController = async(req, res) =>{
    try {
        const {noteID} = req.params;
           // Validate if noteid exists
        if (!noteID) {
            return res.status(400).json({ error: "noteid is required" });
        }
        await NotesModel.findByIdAndDelete(noteID).then(res.status(200).send({
            message: "Note Deleted",
            success: true
        }))

    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
}