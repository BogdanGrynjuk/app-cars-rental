import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectActiveCard } from 'redux/selectors';

import { Section, SectionContent, SectionTitle } from './FavoriteSection.styled';

import GeneralContainer from 'components/GeneralContainer';
import CarsList from 'components/CarsList/CarsList';
import CardCar from 'components/CardCar';
 
const FavoriteSection = ({ cars }) => {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const activeCardCar = useSelector(selectActiveCard);
  const carId = activeCardCar.id;

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); 
  
  return (
    <Section>
      <GeneralContainer>
        
          <SectionTitle>Favorite Cars</SectionTitle>
          <SectionContent>
            <CarsList cars={cars} />
            {Object.keys(activeCardCar).length === 0 || viewportWidth <  768
              ? null
              : <CardCar carId={carId} isFavorite={true} />              
            }
          </SectionContent>
       
      </GeneralContainer>
    </Section>
  );
};
 
export default FavoriteSection;

