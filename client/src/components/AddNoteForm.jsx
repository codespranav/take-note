/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useAuth } from '../../context/authContext';
import { baseURL } from '../helper/helper';


const AddNoteForm = ({fetchAllNotes, onCancelClicked}) => {
  const { auth } = useAuth();
  
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      let res = await axios.post(`${baseURL}/api/note/add-note`, {
        title, description
      }, {
        headers: {
          "Authorization": auth.token
        }
      })
      if (res.data.success) {
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
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div className="mb-3">
          <textarea type="text" className="form-control" placeholder="Take a note..." value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>
        <button type="submit" className="btn btn-secondary me-3">SAVE</button>
        <button type="button" className="btn btn-danger" onClick={onCancelClicked}>CLOSE</button>
      </form>
    </div>
  );
};

export default AddNoteForm;
