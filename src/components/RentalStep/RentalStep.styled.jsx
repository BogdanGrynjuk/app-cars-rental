import styled from "@emotion/styled";
import { fadeIn, rotate360} from 'helpers/animationStyles';

export const Wrapper = styled.div`
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 18px;
  padding: 0 27px;
  width: 100%;

  ${p =>
    p.isActive &&
    `display: flex;`
  };
  
  @media screen and (${p => p.theme.mq.tablet}) {
    flex-direction: row;
    width: 90%;
  }

  @media screen and (${p => p.theme.mq.desktop}) {
    width: 70%;
  }  
`;

export const AnimatedBorder = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${p => p.theme.radii.normal};
  width: 100px;
  height: 100px;
  overflow: hidden;
  
  &::after{
    content: '';
    position: absolute;
    width: 200px;
    height: 200px;
    background-image: conic-gradient(transparent, transparent, transparent, ${p => p.theme.colors.blue});
    animation: ${rotate360}  5s linear infinite;
    animation-delay: -2.5s;
  }

  &::before{
    content: '';
    position: absolute;
    width: 200px;
    height: 200px;
    background-image: conic-gradient(transparent, transparent, transparent, ${p => p.theme.colors.blue});
    animation:  ${rotate360} 5s linear infinite;
  }
`;

export const ThumbIcon = styled.div`
  position: absolute;
  inset: 2px;
  justify-content: center;
  align-items: center;
  display: flex;
  background-color: ${p => p.theme.colors.white};
  border-radius: calc(${p => p.theme.radii.normal} - 2px);
  z-index: 1;  
`;

export const Icon = styled.img`
  object-fit: cover;
  z-index: 2;
  opacity: 0;
  animation: ${fadeIn} 0.5s linear forwards; 
`;

export const TextBlock = styled.div`  
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  opacity: 0;
  animation: ${fadeIn} 0.5s linear forwards;  

  @media screen and (${p => p.theme.mq.tablet}) {
    width: calc(100% - 118px);
  }  
`;

export const Title = styled.h3`
  text-align: center;
  text-transform: uppercase;
  font-size: ${p => p.theme.fontSizes.s};
  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.colors.blue};
  
  @media screen and (${p => p.theme.mq.tablet}) {
    text-align: right;
    font-size: ${p => p.theme.fontSizes.l};
  }

  @media screen and (${p => p.theme.mq.desktop}) {
    font-size: ${p => p.theme.fontSizes.xl}; 
  } 
`;

export const Description = styled.p`
  text-align: center;
  font-size: ${p => p.theme.fontSizes.xs};
  
  @media screen and (${p => p.theme.mq.tablet}) {
    text-align: left;
    font-size: ${p => p.theme.fontSizes.s};
  }

  @media screen and (${p => p.theme.mq.desktop}) {
    font-size: ${p => p.theme.fontSizes.m}; 
  } 
`;

export const NumberStep = styled.span`
  font-size: ${p => p.theme.fontSizes.xs};
  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.colors.blue};
  
  @media screen and (${p => p.theme.mq.tablet}) {
    font-size: ${p => p.theme.fontSizes.s};
  }

  @media screen and (${p => p.theme.mq.desktop}) {
    font-size: ${p => p.theme.fontSizes.m}; 
  } 
`;