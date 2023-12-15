import styled from "@emotion/styled";
import { IoCloseSharp } from "react-icons/io5";
import { openingModal, closingModal } from "helpers/animationStyles";

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${p => p.theme.colors.white};
  border-bottom: ${p => p.theme.borders.normal} ${p => p.theme.colors.black};
  box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 8px 5px, 
    rgba(0, 0, 0, 0.1) 0px 4px 5px 0px, 
    rgba(0, 0, 0, 0.12) 0px 1px 5px 0px;  

  &.isOpen {
    animation: ${openingModal} 1500ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  &.isClose {
    animation: ${closingModal} 500ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

export const Content = styled.div`
  text-align: center;
`;


///////////////////////////

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(18, 20, 23, 0.5);
  backdrop-filter: blur(3px);

  &.isOpen {
    animation: ${openingModal} 1500ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  &.isClose {
    animation: ${closingModal} 500ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

export const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  padding: 40px;  
  width: 541px;
  max-height: 90vh;
  border-radius: ${p => p.theme.radii.large};
  background-color: ${p => p.theme.colors.white};  
`;

export const BtnClose = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  width: 24px;
  height: 24px;   
  padding: 0;
  background-color: transparent;
  border: none;
  outline: none;  
  cursor: pointer;  
`;

export const IconClose = styled(IoCloseSharp)`  
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
  filter: drop-shadow(rgba(0, 0, 0, 0.8) 2px 3px 5px);

  &:hover {      
    filter: drop-shadow(rgba(0, 0, 0, 0.8) 2px 8px 5px);
  };  
  
`

