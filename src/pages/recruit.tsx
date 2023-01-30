import React, {useState} from "react";
import Modal from 'react-modal'


const recruit = () => {
    const[modal, setModal] = useState(false)

    const openModal = () => {
        setModal(true)
    }

    const closeModal = () => {
        setModal(false)
    }
    return (
        <>
        <button onClick={openModal}>ゲームを選択</button>
        <Modal isOpen={modal}>
            <button onClick={closeModal}>やめる</button>
    
        </Modal>
        </>
    );
}

export default recruit;