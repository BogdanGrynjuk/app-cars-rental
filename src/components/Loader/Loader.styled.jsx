import styled from "@emotion/styled";
import { keyframes } from '@emotion/react';

const spin = keyframes`
  0% {
    transform: translate(2px, 1px) rotate(0deg);
  }
  10% {
    transform: translate(-1px, -3px) rotate(36deg);
  }
  20% {
    transform: translate(-2px, 0px) rotate(72deg);
  }
  30% {
    transform: translate(1px, 2px) rotate(108deg);
  }
  40% {
    transform: translate(1px, -1px) rotate(144deg);
  }
  50% {
    transform: translate(-1px, 3px) rotate(180deg);
  }
  60% {
    transform: translate(-1px, 1px) rotate(216deg);
  }
  70% {
    transform: translate(3px, 1px) rotate(252deg);
  }
  80% {
    transform: translate(-2px, -1px) rotate(288deg);
  }
  90% {
    transform: translate(2px, 1px) rotate(324deg);
  }
  100% {
    transform: translate(1px, -2px) rotate(360deg);
  }
`;
const speed = keyframes` 
  0% {
    transform: translate(2px, 1px) rotate(0deg);
  }
  10% {
    transform: translate(-1px, -3px) rotate(-1deg);
  }
  20% {
    transform: translate(-2px, 0px) rotate(1deg);
  }
  30% {
    transform: translate(1px, 2px) rotate(0deg);
  }
  40% {
    transform: translate(1px, -1px) rotate(1deg);
  }
  50% {
    transform: translate(-1px, 3px) rotate(-1deg);
  }
  60% {
    transform: translate(-1px, 1px) rotate(0deg);
  }
  70% {
    transform: translate(3px, 1px) rotate(-1deg);
  }
  80% {
    transform: translate(-2px, -1px) rotate(1deg);
  }
  90% {
    transform: translate(2px, 1px) rotate(0deg);
  }
  100% {
    transform: translate(1px, -2px) rotate(-1deg);
  }
`;

const strikes = keyframes`
  from {
    left: 25px;
  }  
  to {
    left: -80px;
    opacity: 0;
  }
`;

const dots = keyframes`
  from {
    width: 0px;
  }
  to {
    width: 15px;
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Wrapper = styled.div`
position: fixed;
z-index: 10000;
top: 0;
left: 0;
display: flex;
justify-content: center;
align-items: center;
width: 100vw;
height: 100vh;
background-color: ${p => p.theme.colors.white};
animation: ${fadeIn} 0.5s both;
`;

export const Content = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  height: 200px;
  width: 300px;
  margin-top: -100px;
  margin-left: -150px;
  border-radius: 12px;
  border: 3px solid ${p => p.theme.colors.blue};
  color: ${p => p.theme.colors.blue};
  z-index: 10001;
`;

export const TextContainer = styled.div`
  position: absolute;
  top: 75%;
  left: 38%;
  width: auto;
  margin: 0 auto;
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};
`;

export const Dots = styled.span`
  display: inline-block;
  width: 5px;
  overflow: hidden;
  vertical-align: bottom;
  animation: ${dots} 1s linear infinite;
`;

export const Car = styled.div`
  position: absolute;
  width: 117px;
  height: 42px;
  left: 92px;
  top: 70px;
  

  & .strike {
    position: absolute;
    width: 11px;
    height: 1px;
    background: ${p => p.theme.colors.blue};
    animation: ${strikes} .2s linear infinite;
  };

  & .strike2 {
    top: 11px;
    animation-delay: .05s;
  }

  & .strike3 {
    top: 22px;
    animation-delay: .1s;
  }

  & .strike4 {
    top: 33px;
    animation-delay: .15s;
  }

  & .strike5 {
    top: 44px;
    animation-delay: .2s;
  }

  & .car-detail {
    position: absolute;
    display: block;
    background-color: ${p => p.theme.colors.blue};
    animation: ${speed} .5s linear infinite;

    &.spoiler {
      width: 0;
      height: 0;
      top: 7px;
      background: none;
      border: 20px solid transparent;
      border-bottom: 8px solid ${p => p.theme.colors.blue};
      border-left: 20px solid ${p => p.theme.colors.blue};
    }

    &.back {
      height: 20px;
      width: 92px;
      top: 15px;
      left: 0px;
    }

    &.center {
      height: 35px;
      width: 75px;
      left: 12px;
      border-top-left-radius: 30px;
      border-top-right-radius: 45px 40px;
      border: 4px solid ${p => p.theme.colors.blue};
      background: none;
      box-sizing: border-box;
    }

    &.center1 {
      height: 35px;
      width: 35px;
      left: 12px;
      border-top-left-radius: 30px;
    }

    &.front {
      height: 20px;
      width: 50px;
      top: 15px;
      left: 67px;
      border-top-right-radius: 50px 40px;
      border-bottom-right-radius: 10px;

      
    }

    &.wheel {
      height: 25px;
      width: 25px;
      border-radius: 50%;
      top: 22px;
      left: 12px;
      border: 2px solid ${p => p.theme.colors.white};
      background: linear-gradient(45deg, transparent 45%, ${p => p.theme.colors.blue} 46%, ${p => p.theme.colors.blue} 54%, transparent 55%), 
                  linear-gradient(-45deg, transparent 45%, ${p => p.theme.colors.blue} 46%, ${p => p.theme.colors.blue} 54%, transparent 55%), 
                  linear-gradient(90deg, transparent 45%, ${p => p.theme.colors.blue} 46%, ${p => p.theme.colors.blue} 54%, transparent 55%), 
                  linear-gradient(0deg, transparent 45%, ${p => p.theme.colors.blue} 46%, ${p => p.theme.colors.blue} 54%, transparent 55%), 
                  radial-gradient(${p => p.theme.colors.blue} 29%, transparent 30%, transparent 50%, ${p => p.theme.colors.blue} 51%), 
                  ${p => p.theme.colors.white};
      animation: ${spin} .5s linear infinite;
    }

    &.wheel2 {
      left: 82px;
    }
  }
`;