import styled from "@emotion/styled";

export const Section = styled.section`
  padding: 16px 0;
  display: flex;
  justify-content: start;
  align-items: center;
  background: linear-gradient( 
    to bottom,  
    ${p=>p.theme.colors.lighteBlue}, 
    ${p=>p.theme.colors.blue});
  color: ${p => p.theme.colors.black};
  font-family: ${p => p.theme.fontFamily.manrope};  
`;

export const SectionTitle = styled.h2`
  margin-bottom: 16px;
  text-align: center;
  font-size: ${p => p.theme.fontSizes.l};
  font-weight: ${p => p.theme.fontWeights.bold};  
  
  @media screen and (${p => p.theme.mq.tablet}) {
    font-size: ${p => p.theme.fontSizes.xl};    
  }

  @media screen and (${p => p.theme.mq.desktop}) {
    font-size: ${p => p.theme.fontSizes.xxl};    
  }   
`;

export const SectionContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;   
  
  @media screen and (${p => p.theme.mq.tablet}) {
    flex-direction: row;
  }
`;

export const ServicesList = styled.ul`
  padding: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 72px;

  @media screen and (${p => p.theme.mq.tablet}) {
    gap: 24px;
  }
`;

export const ServicesItem = styled.li`
  padding: 12px;
  position: relative;
  width: 100%;
  aspect-ratio: 1;
  border-radius: 50%;
  background-color: ${p => p.theme.colors.white};
  box-shadow: 0 0 10px ${p => p.theme.colors.white}, 
              0 0 15px ${p => p.theme.colors.white};
  transition: 0.5s;

  @media screen and (${p => p.theme.mq.tablet}) {
    width: calc((100% - (24px *  2)) / 3);
  }

  @media screen and (${p => p.theme.mq.desktop}) {
    width: calc((100% - (24px *  4)) / 5); 
  } 

  &:hover {
    border-radius: ${p => p.theme.radii.large};    

    & > .service-icon, .service-btn-order {
      border-radius: ${p => p.theme.radii.large};      
      transform: translate( -50%, -150% );
      width: calc(100% - 96px);
      height: calc(100% - 96px);
      background-color: ${p => p.theme.colors.white};      
    }
    
    & > .service-btn-order {
      transform: translate(-50%, 50%);
    }

    & .service-name, .service-details {
      opacity: 1;
      transform: translateY(0);
    }   
  };
`; 

export const BtnOrderService = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  margin: 0 auto;
  border-radius: 50%;
  width: calc(100% - 48px);
  height: calc(100% - 48px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 0px 5px,
              rgba(0, 0, 0, 0.5) 0px 0px 10px;
  background-color: ${p => p.theme.colors.white};
  transform: translate( -50% , -50% );
  z-index: 1;
  transition: 0.5s;

  & > a {
    width: 100%;  
    padding: 12px;  
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
  };
`;

export const ServiceIcon = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  margin: 0 auto;
  border-radius: 50%;
  width: calc(100% - 48px);
  height: calc(100% - 48px);
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 0px 5px,
              rgba(0, 0, 0, 0.5) 0px 0px 10px;
  background-color: ${p => p.theme.colors.blue};
  transform: translate( -50% , -50% );
  transition: 0.5s;
  z-index: 2;

  & > img {
    object-fit: cover;    
  };    
` ;

export const ServiceDescription = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 8px;
  overflow: hidden;  
`;

export const ServiceName = styled.h3`
  font-size: ${p => p.theme.fontSizes.s};
  font-weight: ${p => p.theme.fontWeights.bold};
  text-align: center;
  letter-spacing: 1px;
  color: ${p => p.theme.colors.blue};
  opacity: 0;
  transform: translateY( -150% );
  transition: 0.5s; 
`;

export const ServiceDetails = styled.p`
  font-size: ${p => p.theme.fontSizes.xs};
  font-weight: ${p => p.theme.fontWeights.normal};
  text-align: center;
  letter-spacing: 1px;
  opacity: 0;
  transform: translateY( 100% );  
  transition: 0.5s; 
`;
