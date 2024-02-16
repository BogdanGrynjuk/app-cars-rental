import styled from "@emotion/styled";

export const Container = styled.div`
  width: 320px;
  height: 100%;
  padding: 0 8px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  @media screen and (${p => p.theme.mq.tablet}) {
    width: 768px;
    padding: 0 20px;
  }

  @media screen and (${p => p.theme.mq.desktop}) {
    width: 1280px;
    padding: 0 24px;      
  }
`;