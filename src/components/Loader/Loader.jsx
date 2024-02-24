import { useEffect } from 'react';
import { Content, Wrapper, TextContainer, Car, Dots } from './Loader.styled';

const Loader = () => {

  useEffect(() => {
    document.body.style.overflowY = 'hidden';
    return () => {
      document.body.style.overflowY = 'auto';
    }
  });

  return (    
    <Wrapper>
      <Content>
        <Car>
          <div className="strike"></div>
          <div className="strike strike2"></div>
          <div className="strike strike3"></div>
          <div className="strike strike4"></div>
          <div className="strike strike5"></div>
          <div className="car-detail spoiler"></div>
          <div className="car-detail back"></div>
          <div className="car-detail center"></div>
          <div className="car-detail center1"></div>
          <div className="car-detail front"></div>
          <div className="car-detail wheel"></div>
          <div className="car-detail wheel wheel2"></div>
        </Car>

        <TextContainer>
          <span>Loading</span>
          <Dots>...</Dots>
        </TextContainer>
      </Content>
    </Wrapper>
  )
};

export default Loader;
