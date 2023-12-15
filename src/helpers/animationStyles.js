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
