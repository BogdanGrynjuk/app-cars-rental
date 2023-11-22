import styled from "@emotion/styled";

export const Logo = styled.span`
  color: ${p => p.theme.colors.black};
  
  & > span {
    text-transform: uppercase;
    color: ${p => p.theme.colors.blue};
  };
`;