import styled from "@emotion/styled";

export const Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;  
`;
export const Footer = styled.footer`
  height: 150px;
  background: linear-gradient( 
    to bottom,  
    ${p=>p.theme.colors.lighteBlue}, 
    ${p => p.theme.colors.blue}); 

`