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
  overflow: hidden;
  
  @media screen and (${p => p.theme.mq.tablet}) {
    flex-direction: row;
  }
`;

export const ServicesList = styled.ul`
  margin: 24px;
  padding: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 24px;
`;

export const ServicesItem = styled.li`
  padding: 12px;
  position: relative;
  width: 100%;
  aspect-ratio: 1;
  border-radius: 50%;
 
  /* overflow: hidden; 
  overflow-x: hidden; */
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


  &:hover{
    border-radius: 20px;
  }

  &:hover > span{
      border-radius: 20px;      
      transform: translate( -50%, -125% );    
    }

  & > span {
    
    position: absolute;
    top: 50%;
    left: 50%;
    margin: 0 auto;
    border-radius: 50%;
    width: calc(100% - 12px);
    height: calc(100% - 12px);
    overflow: hidden;
    box-shadow: rgba(0, 0, 0, 0.5) 0px 0px 5px,
                rgba(0, 0, 0, 0.5) 0px 0px 10px;
    background-color: ${p => p.theme.colors.blue};
    transform: translate( -50% , -50% );
    transition: 0.5s;

    @media screen and (${p => p.theme.mq.tablet}) {    
      width: calc(100% - 24px);
      height: calc(100% - 24px);
    }

    @media screen and (${p => p.theme.mq.desktop}) {
      width: calc(100% - 48px);
      height: calc(100% - 48px);
    }

    &:hover{
      border-radius: 20px;
      transform: translate( -50%, -125% )
    }


    & > img {
      object-fit: cover;
      
    }
    
  }

  & > div {
    
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    column-gap: 8px;
    overflow: hidden;

    & > h3 {
      color: red;
      font-size: 14px;
      font-weight: 700;
      text-align: center;
      letter-spacing: 1px;
      transition: 0.5s;
    }

    & > p {
      display: block;
      font-size: 12px;
      font-weight: 700;
      text-align: center;
      letter-spacing: 1px;
      transition: 0.5s

      
       
    }

  }

  
`