import styled from "@emotion/styled";
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
  z-index: 1000;

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





