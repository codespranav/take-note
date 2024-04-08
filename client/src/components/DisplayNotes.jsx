import { Link } from "react-router-dom";
import { useAuth } from "../../context/authContext"
import { toast } from "react-toastify";
import { Modal } from 'antd';
import AddNoteForm from './AddNoteForm';
import axios from "axios"
import { useEffect, useState } from "react";

const DisplayNotes = () => {
    const {auth} = useAuth();
    const [notes, setNotes] = useState([]);
    const cardStyle = {
        width: '18rem',
        backgroundColor: "#07072D",
        color: "white"
    }

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalTitle, setModalTitle] = useState("");
    const [selected, setSelected] = useState(null);

    const handleAddNewNote = () => {
        setIsModalOpen(true);
        setModalTitle("Add New Note");
        setSelected(null);
    };

    const handleEditNote = (note) => {
        setIsModalOpen(true);
        setModalTitle("Edit");
        setSelected(note);
    };

    const handleEditNoteOnClick = async ()=> {
        try {
            let {data} = await axios.post("")
        } catch (error) {
            toast.error(error)
        }
    }

    const onCancel = (e) => {
        e.preventDefault();
        setIsModalOpen(false);
    };

    // fetch notes
    const fetchNotes = async () => {
        try {
            let {data} = await axios.get("api/note/view-note", {
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
                {notes?.map((item) => (
                    <div role="button" key={item._id} className="card mx-4 my-4 border border-white" style={cardStyle}>
                        <div className="card-body" onClick={() => handleEditNote(item)}>
                            <h5 className="card-title">{item.title}</h5>
                            <p className="card-text">{item.description}</p>
                            <a href="#" className="btn btn-primary view-button">View Note</a>
                        </div>
                    </div>
                ))}
            </div>

            {/* add note model  */}
            <Modal title={modalTitle} open={isModalOpen} footer={null} closeIcon={!isModalOpen}>
                <AddNoteForm onCancelClicked={onCancel} fetchAllNotes={fetchNotes} selectedNoteTitle = {selected ? selected.title : null} selectedNoteDesc = {selected ? selected.description : null}/>
            </Modal>
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