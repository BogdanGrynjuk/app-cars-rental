import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

const openingModal = keyframes`
  0% {
    transform: translate(0,-100%);
  }
  30%, 50%, 80% {
    transform: translate(0, 0);
  }
  40%, 43% {
    transform: translate(0, -50px);
  }
  70% {
    transform: translate(0, -15px);
  }
  90% {
    transform: translate(0, -5px);
  }
`;

const closingModal = keyframes`
  0% {
  transform: translate(0, 0);
  }
  100% {
  transform: translate(0, -100%);
  }
`;

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





