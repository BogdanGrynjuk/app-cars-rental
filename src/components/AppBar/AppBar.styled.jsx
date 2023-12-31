import styled from "@emotion/styled";
import { NavLink } from 'react-router-dom';
import { IoMenuSharp } from "react-icons/io5";

export const Header = styled.header`
  position: fixed;
  z-index: 100;
  top: 0;
  right: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;  
  background-color: ${p => p.theme.colors.white};
  border-bottom: ${p => p.theme.borders.normal} ${p => p.theme.colors.black};
  box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 8px 5px, 
    rgba(0, 0, 0, 0.1) 0px 4px 5px 0px, 
    rgba(0, 0, 0, 0.12) 0px 1px 5px 0px;
  `;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 320px;
  padding: 8px;

  @media screen and (${ p => p.theme.mq.tablet}) {
    width: 768px;
    padding: 12px 20px;
  }

  @media screen and (${ p => p.theme.mq.desktop}) {
    width: 1280px;
    padding: 16px 24px;      
  }
`;

export const BtnMenuNavigation = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;  
  padding: 0;
  background-color: transparent;
  border: none;
  border-radius: 50%;
  outline: none;
  box-shadow:  rgb(138, 138, 137, 1) 2px 3px 5px;   
  cursor: pointer; 
  
  &:hover {
    box-shadow:  rgb(138, 138, 137, 1) 2px 8px 5px;
  }

  @media screen and (${p => p.theme.mq.tablet}) {
      display: none;      
   }  
`;

export const IconMenu = styled(IoMenuSharp)`
  fill: ${p => p.theme.colors.black}; 
`;

export const Link = styled(NavLink)`
  color: ${p => p.theme.colors.black};
  font-family: ${p => p.theme.fontFamily.manrope};
  font-size: ${p => p.theme.fontSizes.xl};
  font-weight: ${p => p.theme.fontWeights.bold};
  text-decoration: none;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
  text-shadow: ${p => p.theme.colors.grey} 2px 3px 5px;

  &:hover{
    text-shadow: ${p => p.theme.colors.grey} 2px 8px 5px;
  };
`;