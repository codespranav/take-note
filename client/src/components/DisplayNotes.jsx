import { Link } from "react-router-dom";
import { useAuth } from "../../context/authContext"
import { toast } from "react-toastify";
import { Modal } from 'antd';
import AddNoteForm from './AddNoteForm';
import axios from "axios"
import { useEffect, useState } from "react";
import EditNoteForm from "./EditNoteForm";
import { baseURL } from "../helper/helper";



const DisplayNotes = () => {
    const {auth} = useAuth();
    const [notes, setNotes] = useState([]);
    const cardStyle = {
        width: '28rem',
        height: "20rem",
        backgroundColor: "#07072D",
        color: "white"
    }

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEditModelOpen, setIsEditModelOpen] = useState(false);
    const [isDeletePromptOpen, setIsDeletePromptOpen] = useState(false);
    const [modalTitle, setModalTitle] = useState("");
    const [selected, setSelected] = useState(null);


    const handleAddNewNote = () => {
        setIsModalOpen(true);
        setModalTitle("Add New Note");
        setSelected(null);
    };

    const handleEditNote = (note) => {
        setIsEditModelOpen(true);
        setModalTitle("Edit Note");
        setSelected(note);
    };

    const handleDeleteNote = (note)=>{
        setIsDeletePromptOpen(true)
        setSelected(note)
    }

    const deleteNote = async ()=> {
        try {
           let {data} = await axios.delete(`${baseURL}/api/note/delete-note/${selected._id}`, {
            headers: {
                Authorization: auth.token
            }
           }) 
           if(data.success){
                toast.success("Deleted")
                setSelected(false)
                setIsDeletePromptOpen(false)
                fetchNotes();
           }
           else{
            toast.info("Something went wrong")
           }
        } catch (error) {
            console.error("Error:", error);
        }
    }
    
    const onCancel = () => {
        setIsModalOpen(false);
        setIsEditModelOpen(false)
        setSelected(null)
    };

    // fetch notes
    const fetchNotes = async () => {
        try {
            let {data} = await axios.get(`${baseURL}/api/note/view-note`, {
                headers: {
                    "Authorization": auth.token
                }
            });
            setNotes(data?.note);
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong");
        }
    };

    useEffect(() => {
        fetchNotes();
    }, []);

    return (
        auth.token ? 
        <div>
            <div>
                <div className="circle" onClick={handleAddNewNote}></div>
            </div>
            <div className='d-flex justify-between p-2 justify-content-evenly flex-wrap' >
            {notes.length != 0 ?
             notes?.map((item) => (
                    <div role="button" key={item._id} className="position-relative card mx-4 my-4 border border-white" style={cardStyle}>
                        <div className="card-body" onClick={() => handleEditNote(item)}>
                            <h5 className="card-title long-text">{item.title}</h5>
                            {item.description.length > 200 ? `${item.description.substring(0, 200)}...` : item.description}
                        </div>
                            <div className="position-absolute bottom-0 py-4 ms-3">
                                <a href="#" className="btn btn-primary view-button me-2">View Note</a>
                                <a href="#" className="btn btn-primary view-button" onClick={()=> {handleDeleteNote(item); console.log("clicked")}}>Delete Note</a>
                            </div>
                    </div>
            )) : <div><h1 className="text-white">No Notes found!</h1></div>}
            </div>

            {/* add note model  */}
            <Modal title={modalTitle} open={isModalOpen} footer={null} onCancel={onCancel}>
                <AddNoteForm onCancelClicked={onCancel} fetchAllNotes={fetchNotes}  selected={selected}/>
            </Modal>
            
            {/* eidt note model */}
            <Modal title={modalTitle} open={isEditModelOpen} footer={null} onCancel={onCancel}>
                <EditNoteForm onCancelClicked={onCancel} fetchAllNotes={fetchNotes}  selected={selected}/>
            </Modal>

            {/* delete note model  */}
            <Modal title="Are you sure you want to delete this note?" open={isDeletePromptOpen} onOk={deleteNote} onCancel={()=>{setIsDeletePromptOpen(!isDeletePromptOpen)}}  footer={(_, { OkBtn, CancelBtn }) => (
          <>
            <CancelBtn />
            <OkBtn />
          </>
        )}/>
        </div>
        : (
            <>
                <h1>Login to Continue</h1>
                <Link to="/login"><button className="btn btn-danger">LOGIN</button></Link>
            </>
        ) 
    );
};

export default DisplayNotes;
