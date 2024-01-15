import styled from '@emotion/styled';

export const Section = styled.section`
  padding-top: 16px;
  display: flex;
  justify-content: start;
  align-items: center; 

  color: ${p => p.theme.colors.black};
  font-family: ${p => p.theme.fontFamily.manrope};  
  /* text-shadow: ${p => p.theme.colors.grey} 1px 1px 2px; */
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
  
`;