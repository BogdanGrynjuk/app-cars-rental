import styled from "@emotion/styled";

export const Container = styled.li`  
 display: flex;
 width: 100%;
 flex-direction: column;
 flex-grow: 1;
 
  @media screen and (${p => p.theme.mq.tablet}) {
    max-width: calc((100% - 15px) / 2);
  }

  @media screen and (${p => p.theme.mq.desktop}) {
    max-width: calc((100% - (30px * 3)) / 4);
  } 
`;

export const Content = styled.div`
  flex-grow: 1;  
  margin-bottom: 10px;

   @media screen and (${p => p.theme.mq.tablet}) {
    margin-bottom: 20px;
  }

  @media screen and (${p => p.theme.mq.desktop}) {
    margin-bottom: 30px;
  } 
`;

export const ThumbImg = styled.div`
  margin-bottom: 14px;
  width: 100%;
  height: 268px;
  overflow: hidden;
  border-radius: ${p => p.theme.radii.large};
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; 
`;

export const BlockInfo = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px; 
`;

export const BasicInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const BasicInfoText = styled.p`
  color: ${p => p.theme.colors.black};
  font-family: ${p => p.theme.fontFamily.manrope};
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.medium};
  line-height: 24px;
  letter-spacing: 0em;

  & > span {
    color: ${p => p.theme.colors.lighteBlue};
  };
`;

export const DescriptionList = styled.ul`  
  display: flex;  
  flex-direction: row;
  row-gap: 4px;
  flex-wrap: wrap;
  /* color:  ${p => p.theme.colors.secondaryGray}; */
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.xs};
  line-height: 18px;
`;

export const DescriptionItem = styled.li`
  &:not(:last-child)::after {
    content: "";
    border-right: 1px solid rgba(18, 20, 23, 0.1);
    margin: 0 6px;
  };  
`;

export const Button = styled.button`
  width: 100%;  
  padding: 12px;
  border: ${p => p.theme.borders.none};
  border-radius: ${p => p.theme.radii.normal};
  background-color: ${p => p.theme.colors.blue};
  color: ${p => p.theme.colors.white};
  font-family: ${p => p.theme.fontFamily.manrope};
  font-size: ${p => p.theme.fontSizes.s};
  font-weight: ${p => p.theme.fontWeights.bold};
  line-height: 24px;
  box-shadow:  rgba(0, 0, 0, 0.5) 2px 3px 5px; 
  cursor: pointer;
  
  &:hover {
    background-color: ${p => p.theme.colors.lighteBlue};
    box-shadow: rgba(0, 0, 0, 0.5) 2px 8px 5px;
  };
`;

