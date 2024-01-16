import styled from "@emotion/styled";

export const List = styled.ul`
  display: flex;
  flex-direction: column;  
  gap: 30px;
  margin: -10px;
  padding: 10px;
  max-width: 320px;
  height: 100vh;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 7px;   
  };

  &::-webkit-scrollbar-thumb {
    background-color: ${p => p.theme.colors.secondaryGrey};
    border-radius: ${ p => p.theme.radii.normal};
    border: ${ p => p.theme.borders.normal}  ${p => p.theme.colors.white};
  };

  @media screen and (${p => p.theme.mq.tablet}) {
    border-right: ${p => p.theme.borders.normal} ${p => p.theme.colors.black};    
  }
`;