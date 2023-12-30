import styled from "@emotion/styled";
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 16px;
  text-align: center;

  @media screen and (${ p => p.theme.mq.tablet}) {
    flex-direction: row;      
  }  
`;

export const Link = styled(NavLink)`
  display: flex;
  column-gap: 4px;  
  color: ${p => p.theme.colors.black};
  font-family: ${p => p.theme.fontFamily.manrope};
  font-size: ${p => p.theme.fontSizes.xl};
  font-weight: ${p => p.theme.fontWeights.bold};
  text-decoration: none;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
  text-shadow: rgba(0, 0, 0, 0.5) 2px 3px 5px;

  &:hover{    
    color: ${p => p.theme.colors.liteBlue};
    text-shadow: rgba(0, 0, 0, 0.5) 2px 8px 5px;
  };

  &.active{
    color: ${p => p.theme.colors.blue};
  };

  
`;

export const Counter = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateY(-25%);
  height: 18px;
  width: 18px;
  min-height: 18px;
  min-width: 18px;
  font-size: ${p => p.theme.fontSizes.xs};
  text-align: center;
  color: ${p => p.theme.colors.white};
  border-radius: 50%;
  background-color: ${p => p.theme.colors.blue};  
`;