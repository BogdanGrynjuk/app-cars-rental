import styled from "@emotion/styled";
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 8px 5px, 
    rgba(0, 0, 0, 0.1) 0px 4px 5px 0px, 
    rgba(0, 0, 0, 0.12) 0px 1px 5px 0px;
    
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 16px;
  border-bottom: ${p => p.theme.borders.normal} ${p => p.theme.colors.black};
`;

export const Navigation = styled.nav`
  display: flex;
  gap: 16px; 
`;

export const Link = styled(NavLink)`
  color: ${p => p.theme.colors.black};
  font-family: ${p => p.theme.fontFamily.manrope};
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.bold};
  text-decoration: none;

  &:hover,
  &:focus {    
    color: ${p => p.theme.colors.liteBlue};
  };

  &.active{
    color: ${p => p.theme.colors.blue};
  };
`;