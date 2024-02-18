import styled from "@emotion/styled";

import { NavLink } from "react-router-dom";
import { IoCallSharp, IoMailSharp  } from "react-icons/io5";

export const Wrapper = styled.footer`
position: fixed;
display: flex;
justify-content: center;
align-items: center;
bottom: -200px;
height: 200px;
width: 100%;
color: ${p => p.theme.colors.white};
font-family: ${p => p.theme.fontFamily.manrope};  
text-shadow: ${p => p.theme.colors.black} 1px 1px 2px; 
background-color: ${ p => p.theme.colors.lighteBlue};
background: linear-gradient(180deg, 
  ${p => p.theme.colors.lighteBlue} 0%, 
  ${p => p.theme.colors.blue} 100%);
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;

  @media screen and (${p => p.theme.mq.tablet}) {
    flex-direction: row;
    justify-content: space-between;
  }

`;

export const Link = styled(NavLink)`
  color: ${p => p.theme.colors.black};
  font-family: ${p => p.theme.fontFamily.manrope};
  font-size: ${p => p.theme.fontSizes.xl};
  font-weight: ${p => p.theme.fontWeights.bold};
  text-decoration: none;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
  text-shadow:${p => p.theme.colors.black} 1px 1px 2px,
              ${p => p.theme.colors.secondaryGrey} 1px 2px 2px;  

  &:hover {    
    text-shadow: ${p => p.theme.colors.black} 1px 1px 2px,
                 ${p => p.theme.colors.secondaryGrey} 1px 7px 2px;
  };
`;

export const ContactSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const ContactInfo = styled.div`
display: flex;
flex-direction: column;
align-items: start;
justify-content: center;
gap: 8px;  
`;


export const ThumbIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;  
  padding: 8px;
  border: ${p => p.theme.borders.normal} ${p => p.theme.colors.white};
  border-radius: ${p => p.theme.radii.normal};
  background-color: transparent;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
  box-shadow:${p => p.theme.colors.black} 1px 1px 2px,
              ${p => p.theme.colors.secondaryGrey} 1px 2px 2px;
`;

export const ContactMethod = styled.a`
  display: flex;
  align-items: center;
  column-gap: 8px;
  color: ${p => p.theme.colors.white};
  font-family: ${p => p.theme.fontFamily.manrope};
  font-size: ${p => p.theme.fontSizes.s};
  font-weight: ${p => p.theme.fontWeights.bold};  
  text-decoration: none;
  text-shadow: ${p => p.theme.colors.black} 1px 1px 2px;

  @media screen and (${p => p.theme.mq.tablet}) {
    font-size: ${p => p.theme.fontSizes.xl};
  }

  &:hover{
    .thumb-icon {
      box-shadow: ${p => p.theme.colors.black} 1px 1px 2px,
                 ${p => p.theme.colors.secondaryGrey} 1px 7px 2px;
    }
  }
`;

export const IconCall = styled(IoCallSharp)`
  fill: ${p => p.theme.colors.white};
  
`;
export const IconMail = styled(IoMailSharp)`
  fill: ${p => p.theme.colors.white};
`;

export const ContactMethodText = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
`