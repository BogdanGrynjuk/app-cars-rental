import styled from "@emotion/styled";
import bgHero from "images/bg-hero.jpg";

export const Section = styled.section`
  display: flex;
  justify-content: start;
  align-items: center;
  background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.1),
      rgba(0, 0, 0, 0.3)
    ), url(${bgHero});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;

  color: ${p => p.theme.colors.black};
  font-family: ${p => p.theme.fontFamily.manrope};  
  text-shadow: ${p => p.theme.colors.grey} 1px 1px 2px;  
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;

  @media screen and (${p => p.theme.mq.tablet}) {
    width: 70%;
  }

  @media screen and (${p => p.theme.mq.desktop}) {
    gap: 12px;
  }
`;

export const TextMain = styled.h1`
  font-size: ${p => p.theme.fontSizes.xxl};
  
  @media screen and (${p => p.theme.mq.tablet}) {
    font-size: 40px;    
  }

  @media screen and (${p => p.theme.mq.desktop}) {
    font-size: 56px;    
  }
`;

export const DecorLine = styled.div`
  margin: 12px 0;
  width: 200px;
  border: ${p=> p.theme.borders.normal} ${p => p.theme.colors.blue};
`

export const TextSecondary = styled.h2`
  margin-bottom: 12px;  
  font-size: ${p => p.theme.fontSizes.l};
  
  @media screen and (${p => p.theme.mq.tablet}) {
    font-size: ${p => p.theme.fontSizes.xl};    
  }

  @media screen and (${p => p.theme.mq.desktop}) {
    font-size: ${p => p.theme.fontSizes.xxl};    
  }  
`;

export const Btn = styled.button`
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