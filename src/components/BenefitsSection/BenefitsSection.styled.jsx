import styled from '@emotion/styled';
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

export const Section = styled.section`
  padding-top: 16px;
  display: flex;
  justify-content: start;
  align-items: center; 

  color: ${p => p.theme.colors.black};
  font-family: ${p => p.theme.fontFamily.manrope};  
  text-shadow: ${p => p.theme.colors.grey} 1px 1px 2px;
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  
  @media screen and (${p => p.theme.mq.tablet}) {
    flex-direction: row;
  }

  @media screen and (${p => p.theme.mq.desktop}) {
    gap: 12px;
  }

`;

export const ThumbImg = styled.div`
  width: 100%;

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
`