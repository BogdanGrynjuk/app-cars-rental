import styled from "@emotion/styled";

export const Wrapper = styled.div`
  
  display: flex;
  flex-direction: column;
  row-gap: 24px;
  max-width: 320px;
  min-width: 320px;
  overflow: hidden;
  padding: 8px;
  padding-left: 2px;
  font-family: ${p => p.theme.fontFamily.manrope};
  color: ${p => p.theme.colors.black};

  @media screen and (${p => p.theme.mq.tablet}) {
    border-right: ${p => p.theme.borders.normal} ${p => p.theme.colors.black};    
  }
`;

export const TitleList = styled.h2`
  font-family: ${p => p.theme.fontFamily.manrope};
  font-size: ${p => p.theme.fontSizes.xl};
  color: ${p => p.theme.colors.blue};
  text-align: center;
`;

export const List = styled.ul`
  height: 900px;
  display: flex;
  flex-direction: column;  
  gap: 30px;
  margin: -10px;
  padding: 10px;  
  max-width: 320px;

   @media screen and (${p => p.theme.mq.tablet}) {
    overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 7px;   
  };

  &::-webkit-scrollbar-thumb {
    background-color: ${p => p.theme.colors.secondaryGrey};
    border-radius: ${ p => p.theme.radii.normal};
    border: ${ p => p.theme.borders.normal}  ${p => p.theme.colors.white};
  };
  }

  

 
`;