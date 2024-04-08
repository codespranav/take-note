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