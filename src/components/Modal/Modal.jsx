import React from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    maxHeight: "80vh",
    overflowY: "auto",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const MyModal = ({ children, isOpen, onRequestClose, onAfterOpen }) => {
  return (
    <div>
      <div>
        <Modal
          isOpen={isOpen}
          style={customStyles}
          onRequestClose={onRequestClose}
          onAfterOpen={onAfterOpen}
        >
          {children}
        </Modal>
      </div>
    </div>
  );
};

export default MyModal;
