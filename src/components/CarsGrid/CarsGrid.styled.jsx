import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column; 
  width: 100%;  
  color: ${p => p.theme.colors.black};
  font-family: ${p => p.theme.fontFamily.manrope};  
`; 

export const Grid = styled.ul`
  display: flex;
  justify-content: center;  
  column-gap: 30px;
  row-gap: 30px;
  flex-wrap: wrap;
  overflow-y: auto;
  margin: -10px;
  padding: 10px;
  margin-bottom: 30px;

  @media screen and (${p => p.theme.mq.tablet}) {
    column-gap: 15px;
    row-gap: 30px;    
  }

  @media screen and (${p => p.theme.mq.desktop}) {
    margin-bottom: 50px;
    column-gap: 30px;
    row-gap: 50px;
  }
`;

export const Button = styled.button`
  display: block;
  margin: 0 auto 30px;  
  background-color: transparent;
  border: ${p => p.theme.borders.none};  
  text-decoration: underline;
  text-shadow: rgba(0, 0, 0, 0.5) 2px 3px 5px; 
  color: ${p => p.theme.colors.blue};  
  font-family: ${p => p.theme.fontFamily.manrope};
  font-size: ${p => p.theme.fontSizes.s};
  font-weight: ${p => p.theme.fontWeights.medium};
  line-height: 24px;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s; 
  cursor: pointer;
  
   &:hover {
    color: ${p => p.theme.colors.lighteBlue};
    text-shadow: rgba(0, 0, 0, 0.5) 2px 8px 5px;
  };

  @media screen and (${p => p.theme.mq.tablet}) {    
    font-size: ${p => p.theme.fontSizes.m};    
  }

  @media screen and (${p => p.theme.mq.desktop}) {
    margin-bottom: 50px;  
    font-size: ${p => p.theme.fontSizes.l};
  }
`;