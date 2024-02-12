import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: none;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 8px;
  padding: 0 27px;
  width: 100%;  
  opacity: 0;
  animation: animate 0.5s linear forwards;

  @keyframes animate {
	  100% {
      opacity: 1;
      transform: translateY( 0vh );
    }
  }

  ${p =>
    p.isActive &&
    `display: flex;`
  };

  
   @media screen and (${p => p.theme.mq.tablet}) {
    width: 70%;
  }

  @media screen and (${p => p.theme.mq.desktop}) {
    width: 50%;
  } 
  
`;

export const Title = styled.h3`
  text-transform: uppercase;
  font-size: ${p => p.theme.fontSizes.s};
  font-weight: ${p => p.theme.fontWeights.bold};
  
  @media screen and (${p => p.theme.mq.tablet}) {
    font-size: ${p => p.theme.fontSizes.l};
  }

  @media screen and (${p => p.theme.mq.desktop}) {
    font-size: ${p => p.theme.fontSizes.xl}; 
  } 
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${p => p.theme.radii.normal};
  width: 100px;
  height: 100px;
  overflow: hidden;
  border: ${p => p.theme.borders.normal} ${p => p.theme.colors.blue};  
  
  & > img {
    object-fit: cover;    
  }; 
`;

export const Description = styled.p`
  text-align: center;
  font-size: ${p => p.theme.fontSizes.xs};
  
  @media screen and (${p => p.theme.mq.tablet}) {
    font-size: ${p => p.theme.fontSizes.s};
  }

  @media screen and (${p => p.theme.mq.desktop}) {
    font-size: ${p => p.theme.fontSizes.m}; 
  } 
`;

export const NumberStep = styled.span`
  font-size: ${p => p.theme.fontSizes.xs};
  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.colors.blue};
  
  @media screen and (${p => p.theme.mq.tablet}) {
    font-size: ${p => p.theme.fontSizes.s};
  }

  @media screen and (${p => p.theme.mq.desktop}) {
    font-size: ${p => p.theme.fontSizes.m}; 
  } 
`