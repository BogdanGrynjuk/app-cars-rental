import styled from "@emotion/styled";
import { PiArrowFatLinesUpFill } from "react-icons/pi";


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

export const ButtonToTop = styled.div`
  position: fixed;
  bottom: 40px;
  right: 20px;
  display: ${p => p.showBtnToTop ? 'flex' : 'none'};
  align-items: center;
  justify-content: center;
  height: 36px;
  width: 36px;
  border: ${p => p.theme.borders.large} ${p => p.theme.colors.blue};
  border-radius: 50%;
  background-color: ${p => p.theme.colors.white};
  opacity: 0.5;
  box-shadow: ${p => p.theme.colors.black} 1px 1px 2px,
              ${p => p.theme.colors.secondaryGrey} 1px 2px 2px;
  color: ${p => p.theme.colors.blue};
  cursor: pointer;

  &:hover {
    opacity: 1;
    box-shadow: ${p => p.theme.colors.black} 1px 1px 2px,
                ${p => p.theme.colors.secondaryGrey} 1px 7px 2px; 
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 2px;
    left: 2px;
    right: 2px;
    bottom: 2px;
    border: ${p => p.theme.borders.large} ${p => p.theme.colors.blue}; 
    border-radius: 50%;
}
`;

export const IconArrowUp = styled(PiArrowFatLinesUpFill)`
  fill: ${p => p.theme.colors.blue};
  width: 20px;
  height: 20px; 
`