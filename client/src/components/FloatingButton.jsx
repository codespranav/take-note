import  { useState } from 'react'
import { Modal } from 'antd';
import AddNoteForm from './AddNoteForm';

const FloatingButton = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
      setIsModalOpen(true);
    };
    const handleOk = () => {
      setIsModalOpen(false);
    };
    const handleCancel = () => {
      setIsModalOpen(false);
    };
  return (
    <div>
      <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
       <AddNoteForm/>
      </Modal>
      
    <div className="circle" onClick={showModal}></div>
    </div>
  )
}

export default FloatingButton
