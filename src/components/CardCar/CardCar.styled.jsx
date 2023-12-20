import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;  
  color: ${p => p.theme.colors.black};
  font-family: ${p => p.theme.fontFamily.manrope};
  text-shadow: ${p => p.theme.colors.grey} 1px 1px 2px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 7px;   
  };

  &::-webkit-scrollbar-thumb {
    background-color: ${p => p.theme.colors.secondaryGrey};
    border-radius: ${ p => p.theme.radii.normal};
    border: ${ p => p.theme.borders.normal}  ${p => p.theme.colors.white};
  };
`;

export const ThumbImg = styled.div`
  margin-bottom: 14px;
  width: 100%;
  height: 248px;
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
  row-gap: 24px;
`;

export const BasicInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;  
`;

export const BasicInfoText = styled.h1`
  margin-bottom: 8px; 
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
  color:  ${p => p.theme.colors.secondaryGrey};
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

export const DescriptionText = styled.p`
  margin-top: 14px;
  font-size: ${ p => p.theme.fontSizes.s};
  font-weight: ${p => p.theme.fontWeights.normal};
  line-height: 20px;  
`;

export const SecondaryInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SecondaryInfoTitle = styled.h2`
  font-size: ${ p => p.theme.fontSizes.s};
  font-weight: ${ p => p.theme.fontWeights.medium};
  line-height: 20px;
  margin-bottom: 8px;
`;

export const RentalConditionsList = styled.ul`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  
`;

export const RentalConditionsItem = styled.li`
  font-size: ${ p => p.theme.fontSizes.xs};
  background-color: rgba(249, 249, 249, 1);
  padding: 7px 14px;
  border-radius: ${p => p.theme.radii.large};

  & > span {    
    font-weight: ${ p => p.theme.fontWeights.bold};
    color: ${ p => p.theme.colors.lighteBlue};
  };
`;

export const Button = styled.a`
  width: 168px;  
  padding: 12px;
  margin-bottom: 12px;
  text-align: center;
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
  
`


