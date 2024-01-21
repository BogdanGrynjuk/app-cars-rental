import styled from '@emotion/styled';

export const Section = styled.section`
  flex: 1;
  padding-top: 16px;
  display: flex; 
  color: ${p => p.theme.colors.black};
  font-family: ${p => p.theme.fontFamily.manrope};
`;

export const SectionTitle = styled.h2`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
`;
        
export const SectionContent = styled.div` 
  height: 100%;
  display: flex;
  flex-direction: row;
  column-gap: 30px;

 @media screen and (${p => p.theme.mq.desktop}) {
    column-gap: 50px;  
  }  
`;