import PropTypes from "prop-types";
import { createPortal } from 'react-dom';
import { useEffect, useRef, useState } from "react";

import { ModalBackdrop, ModalContent, BtnClose, IconClose } from "./CardCarModal.styled";
import CardCar from "components/CardCar";

const modalRoot = document.querySelector('#modal-card-car');

const CardCarModal = ({ onClose, carId }) => {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  const modal = useRef();
  
  const handleClose = () => {
    const modalElement = modal.current;
    modalElement.classList.replace('isOpen', 'isClose');
    setTimeout(() => {
      onClose();
    }, 300);
  };

  const handleKeyDown = (event) => {
    if (event.code === "Escape") {
      handleClose();
    };
  };
  
  const handleBackdropClick = (event) => {
    if (event.currentTarget === event.target) {
      handleClose();
    };
  };

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const modalElement = modal.current;
    modalElement.classList.add('isOpen');
  }, []); 

  useEffect(() => {
    document.body.style.overflowY = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflowY = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    }
  });

  return createPortal(
    <>
      {
        (viewportWidth < 768)
          ? (
            <ModalBackdrop ref={modal}>
              <ModalContent>             
                <CardCar carId={carId} onClose={handleClose} />              
              </ModalContent>
            </ModalBackdrop>)                
          : (
            <ModalBackdrop ref={modal} onClick={handleBackdropClick}>
              <ModalContent >
                <BtnClose type="button" onClick={handleClose}>
                  <IconClose size="24px" />
                </BtnClose>
                <CardCar carId={carId} />                
              </ModalContent>
            </ModalBackdrop>
          )
      }
    </>,
    modalRoot
  );
};

CardCarModal.propTypes = {
  onClose: PropTypes.func.isRequired,
}

export default CardCarModal;