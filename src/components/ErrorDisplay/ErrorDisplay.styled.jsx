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

& > img {
  margin: 0 auto;
  object-fit: cover;
} 

  @media screen and (${p => p.theme.mq.tablet}) {
    width: 50%;
    overflow: hidden;  
  }  
`;

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

export const Btn = styled.button`
  margin: 30px auto 0;
  width: 100%;  
  padding: 12px;
  border: none;
  border-radius: 12px;
  background-color: ${p => p.theme.colors.blue};
  color: ${p => p.theme.colors.white};
  font-family: ${p => p.theme.fontFamily.manrope};
  font-size: ${p => p.theme.fontSizes.s};
  font-weight: ${p => p.theme.fontWeights.bold};
  line-height: 24px;
  box-shadow:  rgba(0, 0, 0, 0.5) 2px 3px 5px;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
  cursor: pointer;
  
  &:hover {
    background-color: ${p => p.theme.colors.lighteBlue};
    box-shadow: rgba(0, 0, 0, 0.5) 2px 8px 5px;
  };

  @media screen and (${p => p.theme.mq.tablet}) {
    width: 274px; 
  }  
`;