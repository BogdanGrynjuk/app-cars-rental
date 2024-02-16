import styled from '@emotion/styled';
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const classShow = `
  &.show {
    opacity: 1;
    transform: translateX( 0 ) ;
    transition: all 1000ms ease-out ;   
  }
`; 

export const Section = styled.section`
  padding: 16px 0;
  display: flex;
  justify-content: start;
  align-items: center;
  overflow: hidden;
  color: ${p => p.theme.colors.black};
  font-family: ${p => p.theme.fontFamily.manrope};
   
`;

export const SectionTitle = styled.h2`
  margin-bottom: 16px;
  text-transform: uppercase;
  text-align: center;
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.bold};
  overflow: hidden;
  
  @media screen and (${p => p.theme.mq.tablet}) {
    text-align: right;
    font-size: ${p => p.theme.fontSizes.xl};    
  }

  @media screen and (${p => p.theme.mq.desktop}) {
    font-size: ${p => p.theme.fontSizes.xxl};    
  }
  
  &::after {
    content: "";
    display: block;
    position: absolute;
    width: 0%;
    height: 2px;
    left: 0;
    right: 0;    
    background: linear-gradient(90deg, transparent 0%, ${p => p.theme.colors.blue} 50%, transparent 100%);
    margin: 12px auto 0;
    transition: width 2s linear;   
  }

  &.show::after{
    width: 100%;
    max-width: calc(320px - (8px * 2));    

    @media screen and (${p => p.theme.mq.tablet}) {
      max-width: calc(768px - (20px * 2));    
    }

    @media screen and (${p => p.theme.mq.desktop}) {
      max-width: calc(1280px - (24px * 2));    
    }
  }
`;

export const SectionContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  /* overflow: hidden; */
  
  @media screen and (${p => p.theme.mq.tablet}) {
    flex-direction: row;
  }

  @media screen and (${p => p.theme.mq.desktop}) {
    gap: 12px;
  }
`;

export const ThumbImg = styled.div`
  width: 100%;
  transform: translateX( -100% );
  opacity: 0;

  ${classShow};  

  @media screen and (${p => p.theme.mq.desktop}) {
    width: calc((100% - 12px) / 2);
    overflow: hidden;    
  }  
`;

export const BenefitsList = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  width: 100%;  
  transform: translateX( 100% );
  opacity: 0;

  ${classShow};

  @media screen and (${p => p.theme.mq.desktop}) {
    width: calc((100% - 12px) / 2);
    row-gap: 12px;    
  }
`;

export const BenefitsItem = styled.li`
  display: flex;
  align-items: center;
  column-gap: 4px;

  font-size: ${p => p.theme.fontSizes.s};

  @media screen and (${p => p.theme.mq.tablet}) {    
    font-size: ${p => p.theme.fontSizes.m};
  }

  @media screen and (${p => p.theme.mq.desktop}) {    
    font-size: ${p => p.theme.fontSizes.xl};
  }
`;

export const Marker = styled(IoMdCheckmarkCircleOutline)`
  color: ${p => p.theme.colors.blue}
`;

