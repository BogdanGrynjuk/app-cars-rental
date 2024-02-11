import styled from '@emotion/styled';

export const Section = styled.section`
  padding: 16px 0;
  display: flex;
  justify-content: start;
  align-items: center;  
  overflow: hidden;
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
  justify-content: center;
  width: 100%;
  height: 50vh; 
`;

export const Slide = styled.div`
  position: relative;
  width: calc(100% - 20px);
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SlideProgressBar = styled.div`
  position: absolute;
  right: 0;
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

export const ActiveBreakpoint = styled.span`
  background-color: ${p => p.theme.colors.blue};
    width: 17px;
    height: 17px;
    border-radius: 50%;
    position: absolute;
    top: -8px;
    right: -8px;
    box-shadow: 0 0 10px ${p => p.theme.colors.lighteBlue}, 
                0 0 15px ${p => p.theme.colors.lighteBlue};
`;
