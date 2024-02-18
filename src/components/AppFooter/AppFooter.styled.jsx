import styled from "@emotion/styled";

export const Wrapper = styled.footer`

position: fixed;
bottom: -200px;
height: 200px;
width: 100%;
color: ${p => p.theme.colors.white};
font-family: ${p => p.theme.fontFamily.manrope};  
text-shadow: ${p => p.theme.colors.black} 1px 1px 2px; 
background-color: rgb(11,68,205);
background: linear-gradient(170deg, rgba(11,68,205,1) 15%, rgba(52,112,255,1) 40%, rgba(52,112,255,1) 60%, rgba(11,68,205,1) 85%);
transition: all 0.5s ease-out;  
z-index: -1;
  
`;