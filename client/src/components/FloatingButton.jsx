/* eslint-disable react/prop-types */
import  { useState } from 'react'
import { Modal } from 'antd';
import AddNoteForm from './AddNoteForm';

const FloatingButton = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
      setIsModalOpen(true);
    };

    const onCancel = ()=>{
      setIsModalOpen(false)
    }
 
  return (
    <div>
      <Modal title = "Add New Note" open={isModalOpen} footer = {null} closeIcon = {!isModalOpen}>
        <AddNoteForm onCancelClicked = {onCancel}/>
      </Modal>
      
    <div className="circle" onClick={showModal}></div>
    </div>
  )
}

export default FloatingButton
