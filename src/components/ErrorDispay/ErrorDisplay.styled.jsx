import styled from "@emotion/styled";

export const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1; 
`;

export const ThumbImg = styled.div`
margin: 0 auto 30px;
width: 100%;

  @media screen and (${p => p.theme.mq.tablet}) {
    width: 50%;
    overflow: hidden;  
  }  
` 

export const ErrorMessage = styled.h1` 
  text-align: center;
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.bold};
  
  @media screen and (${p => p.theme.mq.tablet}) {
    font-size: ${p => p.theme.fontSizes.xl};    
  }

  @media screen and (${p => p.theme.mq.desktop}) {
    font-size: ${p => p.theme.fontSizes.xxl};    
  }   

`;