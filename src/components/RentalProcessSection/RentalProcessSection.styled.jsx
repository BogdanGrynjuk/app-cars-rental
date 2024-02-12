import styled from '@emotion/styled';
import { IoArrowUp, IoArrowDown  } from "react-icons/io5";

export const Section = styled.section`
  padding: 16px 0;
  display: flex;
  justify-content: start;
  align-items: center;  
  
  background: linear-gradient( 
    to bottom,  
    ${p=>p.theme.colors.white}, 
    ${p => p.theme.colors.greyForBgInput});
  color: ${p => p.theme.colors.black};
  font-family: ${p => p.theme.fontFamily.manrope};

`;

export const SectionTitle = styled.h2`
  margin-bottom: 16px;
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

export const SectionContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  width: 100%;
  height: 50vh; 
`;

export const Slide = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ButtonsWrapper = styled.div`
  position: absolute;  
  bottom: 0;
  display: flex;  
  column-gap: 18px;
`;

export const BtnStepChange = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;  
  padding: 0;
  background-color: transparent;
  border: none;
  border-radius: 50%;
  outline: none;
  box-shadow:  rgb(138, 138, 137, 1) 2px 3px 5px;   
  cursor: pointer; 
  
  &:hover {
    box-shadow:  rgb(138, 138, 137, 1) 2px 8px 5px;
  }
`;

export const IconArrowUp = styled(IoArrowUp)`
  fill: ${p => p.theme.colors.black}; 
`;

export const IconArrowDown = styled(IoArrowDown)`
  fill: ${p => p.theme.colors.black}; 
`;

export const ActiveBreakpoint = styled.span`
  background-color: ${p => p.theme.colors.blue};
  width: 25px;
  height: 25px;
  border-radius: 50%;
  position: absolute;
  top: -12px;
  right: -12px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 10px ${p => p.theme.colors.lighteBlue}, 
              0 0 15px ${p => p.theme.colors.lighteBlue};
  color: ${p => p.theme.colors.white};
  transition: 0.5s;
`;

export const SlideContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 300px;
  overflow: hidden;
`;

export const SlideProgressBar = styled.div`
  position: absolute;
  right: 10px;
  background-color: ${p => p.theme.colors.black};
  width: 1px;
  height: 100%;  
`;

export const Breakpoint = styled.div`
  position: absolute;
  right: -5px;
  background-color: ${p => p.theme.colors.black};
  width: 11px;
  height: 11px;
  border-radius: 50%;
  
  &:nth-child( 1 ) { top: -5px; }
  &:nth-child( 2 ) { top: calc(  (100% / 3) - 5px ); }
  &:nth-child( 3 ) { top: calc(  (100% / 3) * 2 - 5px ); }
  &:nth-child( 4 ) { top: calc(  (100% / 3) * 3 - 5px ); }
`;