/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import {toast} from "react-toastify"
import axios from "axios"
import { useAuth } from '../../context/authContext';


const AddNoteForm = ({onCancelClicked, fetchAllNotes, selectedNoteTitle, selectedNoteDesc}) => {
  const {auth} = useAuth();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
console.log(selectedNoteTitle)
  const handleNoteCreation = async (e)=>{
    try {
        e.preventDefault();
        let res = await axios.post("/api/note/add-note", {
          title, description
        }, {
          headers: {
            "Authorization": auth.token
          }
        })
        if(res.data.success){
          toast.success(res.data.message || "Note Added")
          fetchAllNotes();
          onCancelClicked();
          setTitle("")
          setDescription("")
        }
    } catch (error) {
      toast.error(error)
    }
  }
  return (
    <div>
    <form >
       <div className="mb-3">
          <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Title' value={selectedNoteTitle != null ? selectedNoteTitle : title} onChange={(e)=>{setTitle(e.target.value)}} />
        </div>
        <div className="mb-3">
          <textarea type="text" className="form-control" placeholder='Take a note...' value={selectedNoteDesc != null ? selectedNoteDesc : description} onChange={(e)=> {setDescription(e.target.value)}}/>
        </div>
        <button className='btn btn-secondary me-3' onClick={handleNoteCreation}>SAVE</button>
        <button className='btn btn-danger' onClick={onCancelClicked}>CLOSE</button>
        </form>
    </div>
  )
}

export default AddNoteForm
