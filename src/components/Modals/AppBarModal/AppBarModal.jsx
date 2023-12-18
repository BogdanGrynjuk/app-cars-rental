import PropTypes from "prop-types";
import { createPortal } from 'react-dom';
import Navigation from 'components/Navigation';
import { Backdrop, Content } from './AppBarModal.styled';
import { useEffect, useRef } from 'react';

const modalRoot = document.querySelector('#modal-navigate');

const AppBarModal = ({ onClose }) => {
  const modal = useRef(); 
 
  useEffect(() => {
    const modalElement = modal.current;
    modalElement.classList.add('isOpen');
  }, []);  

  const handleClose = () => {
    const modalElement = modal.current;
    modalElement.classList.replace('isOpen', 'isClose');
    setTimeout(() => {
      onClose();
    }, 500);
  };  
  
  return createPortal(
    <Backdrop ref={ modal }>
      <Content>
      <Navigation onClose={handleClose} />
      </Content>
    </Backdrop>,
    modalRoot
  );
};

AppBarModal.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default AppBarModal;