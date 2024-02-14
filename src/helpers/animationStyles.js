import { keyframes } from '@emotion/react';

export const openingModal = keyframes`
  0% {
    transform: translate(0,-100%);
  }
  30%, 50%, 80% {
    transform: translate(0, 0);
  }
  40%, 43% {
    transform: translate(0, -50px);
  }
  70% {
    transform: translate(0, -15px);
  }
  90% {
    transform: translate(0, -5px);
  }
`;

export const closingModal = keyframes`
  0% {
  transform: translate(0, 0);
  }
  100% {
  transform: translate(0, -100%);
  }
`;

export const fadeIn = keyframes`
  100% {
    opacity: 1;      
  }
`;

export const rotate360 = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg); 
  }
`;

export const fadeInFadeOut = keyframes`
  0% {
    opacity: 0;
  }  
  10%, 90% {
    opacity: 1;
  }  
  100% {
    opacity: 0;
  }
`;

export const backgroundChange = bgImages => keyframes`
  0%, 26.67% {
    background-image: url(${bgImages[0]});
  }
  33.33%, 60% {
    background-image: url(${bgImages[1]});
  }    
  66.67%, 93.33% {
    background-image: url(${bgImages[2]});
  }
  100% {
    background-image: url(${bgImages[0]});
  }    
`;
