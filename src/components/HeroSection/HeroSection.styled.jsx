import styled from "@emotion/styled";

export const Section = styled.section`
  display: flex;
  justify-content: start;
  align-items: start;
  background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.1),
      rgba(0, 0, 0, 0.3)
    ), url(${p => p.bgImages[0]});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
  color: ${p => p.theme.colors.white};
  font-family: ${p => p.theme.fontFamily.manrope};  
  text-shadow: ${p => p.theme.colors.black} 1px 1px 2px;
  animation: backgroundChange 15s linear infinite;

  @keyframes backgroundChange {
  0%, 26.67% {
    background-image: url(${p => p.bgImages[0]});
  }
  33.33%, 60% {
    background-image: url(${p => p.bgImages[1]});
  }    
  66.67%, 93.33% {
    background-image: url(${p => p.bgImages[2]});
  }
  100% {
    background-image: url(${p => p.bgImages[0]});
  }    
}
`;

export const Content = styled.div`
  padding: 24px 0 64px;  
  display: flex;
  flex-direction: column;
  justify-content: space-between;  
  height: 100%;
  width: 100%;

  @media screen and (${p => p.theme.mq.tablet}) {
   padding: 48px 0 88px;
  }
`;

export const Slogan = styled.h1`
  align-self: self-start;
  color: ${p => p.theme.colors.white};
  font-size: ${p => p.theme.fontSizes.xxl};
  
  @media screen and (${p => p.theme.mq.tablet}) {    
    font-size: 40px;       
  }

  @media screen and (${p => p.theme.mq.desktop}) {
    font-size: 56px;    
  }
`;

export const Positioner = styled.div`  
  display: flex;
  flex-direction: column;
  align-items: start;
  row-gap: 12px;
`;

export const DecorLine = styled.div`  
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg, transparent 0%, ${p => p.theme.colors.blue} 50%, transparent 100%);

  @media screen and (${p => p.theme.mq.tablet}) {
    width: 274px;          
  }
`;

export const AnimatedText = styled.h2`
  margin-bottom: 12px;  
  font-size: ${p => p.theme.fontSizes.l};
  animation: textAnimation 5s linear infinite;
  
  
  @media screen and (${p => p.theme.mq.tablet}) {
    font-size: ${p => p.theme.fontSizes.xl};    
  }

  @media screen and (${p => p.theme.mq.desktop}) {
    font-size: ${p => p.theme.fontSizes.xxl};    
  }  

  @keyframes textAnimation {
    0% {
      opacity: 0;
    }  
    10%, 90% {
      opacity: 1;
    }  
    100% {
      opacity: 0;
    }
  }    
`;

export const Btn = styled.button`
  align-self: self-end;
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
`