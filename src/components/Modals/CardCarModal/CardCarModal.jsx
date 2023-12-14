import { useEffect } from "react";
import { createPortal } from 'react-dom';

import { ModalBackdrop, ModalContent } from "./CardCarModal.styled";

const modalRoot = document.querySelector('#modal-card-car');


const Modal = ({ onClose, children }) => {
  const handleKeyDown = (event) => {
    if (event.code === "Escape") {
      onClose();
    };
  };
  
  const handleBackdropClick = (event) => {
    if (event.currentTarget === event.target) {
      onClose();
    };
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  });

  return createPortal(
    <ModalBackdrop onClick={handleBackdropClick}>
      <ModalContent>
        <button type="button" onClick={onClose}>X</button>
        <div>This is Modal</div>
      </ModalContent>
    </ModalBackdrop>,
    modalRoot
  );
};

export default Modal;