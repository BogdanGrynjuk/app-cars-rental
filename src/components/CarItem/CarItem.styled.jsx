import styled from "@emotion/styled";
import defaultImageCar from 'images/image_not_available.svg';

export const Container = styled.li`
  display: flex;
  width: 100%;
  flex-direction: column;
  flex-grow: 1;
  border: ${p => p.theme.borders.normal} transparent;  

  ${(p) =>
    p.isActive && 
    ` border: ${p.theme.borders.normal} ${p.theme.colors.blue}; `
  };



  ${(p) =>
    p.isItemList && 
    ` padding: 8px;
      border-radius: ${p.theme.radii.large};
      box-shadow:  rgba(0, 0, 0, 0.5) 2px 3px 5px;
      transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
      cursor: pointer;

      &:hover {        
        box-shadow: rgba(0, 0, 0, 0.5) 2px 8px 5px;
      };      
    `
  };

  ${(p) =>
    p.isItemGrid &&
    `
      @media screen and (${p.theme.mq.tablet}) {     
        max-width: calc((100% - 15px) / 2);
      }

      @media screen and (${p.theme.mq.desktop}) {
        max-width: calc((100% - (30px * 3)) / 4); 
      }
    `
  };  
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
  position: relative;
  margin-bottom: 14px;
  width: 100%;
  height: 268px;
  overflow: hidden;
  border-radius: ${p => p.theme.radii.large};
  background-color: ${p => p.theme.colors.grey};
  background-image: url(${defaultImageCar});
  background-repeat: no-repeat;
  background-position: center;
`;

export const BtnToggleFavorite = styled.div`
  position: absolute;
  top: 14px;
  right: 14px;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;  
  cursor: pointer;

  ${p => p.isFavorite
    ? `color: ${p.theme.colors.blue};`
    : `color: ${p.theme.colors.white};`
  }

  & > svg {
    width: 18px;
    height: 18px;
  }

  &:hover > svg {
    color:  ${p => p.theme.colors.blue};
  }
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
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
  cursor: pointer;
  
  &:hover {
    background-color: ${p => p.theme.colors.lighteBlue};
    box-shadow: rgba(0, 0, 0, 0.5) 2px 8px 5px;
  };
`;

