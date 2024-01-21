import { useSelector } from 'react-redux';
import { selectActiveCard } from 'redux/selectors';

import { Section, SectionContent, SectionTitle } from './FavoriteSection.styled';

import GeneralContainer from 'components/GeneralContainer';
import CarsList from 'components/CarsList/CarsList';
import CardCar from 'components/CardCar';
 
const FavoriteSection = ({ cars }) => {
  const activeCardCar = useSelector(selectActiveCard);
  const carId = activeCardCar.id;
  
  return (
    <Section>
      <GeneralContainer>
        
          <SectionTitle>Favorite Cars</SectionTitle>
          <SectionContent>
            <CarsList cars={cars} />
            {Object.keys(activeCardCar).length === 0
              ? null
              : <CardCar carId={carId} isFavorite={true} />              
            }
          </SectionContent>
       
      </GeneralContainer>
    </Section>
  );
};
 
export default FavoriteSection;

