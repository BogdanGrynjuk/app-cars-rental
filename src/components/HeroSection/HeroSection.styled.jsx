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
  width: 100%;

  @media screen and (${p => p.theme.mq.tablet}) {
    width: 70%;
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

export const TextSecondary = styled.h2`
  color: ${p => p.theme.colors.blue};
  font-size: ${p => p.theme.fontSizes.m};
  
  @media screen and (${p => p.theme.mq.tablet}) {
    font-size: ${p => p.theme.fontSizes.xl};    
  }

  @media screen and (${p => p.theme.mq.desktop}) {
    font-size: ${p => p.theme.fontSizes.xxl};    
  }  
`;