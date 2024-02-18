import styled from "@emotion/styled";

export const Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: ${p => p.theme.colors.white};
  border-bottom: ${p => p.theme.borders.normal} ${p => p.theme.colors.black};
  box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 8px 5px, 
              rgba(0, 0, 0, 0.1) 0px 4px 5px 0px, 
              rgba(0, 0, 0, 0.12) 0px 1px 5px 0px;
  z-index: 1;
`;