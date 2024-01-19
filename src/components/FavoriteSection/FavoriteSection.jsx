import React from 'react'
import { Section, SectionContent, SectionTitle, Wrapper } from './FavoriteSection.styled'
import GeneralContainer from 'components/GeneralContainer'
import CarsList from 'components/CarsList/CarsList';
import CardCar from 'components/CardCar';
//////////////////////////
import { useSelector } from 'react-redux';
import { selectActiveCard } from 'redux/selectors';


 
const FavoriteSection = ({ cars }) => {
  const activeCardCar = useSelector(selectActiveCard)
  const carId = activeCardCar.id
  
  return (
    <Section>
      <GeneralContainer>
        <Wrapper>
          <SectionTitle>Favorite Cars</SectionTitle>
          <SectionContent>
            <CarsList cars={cars} />
            {Object.keys(activeCardCar).length === 0
              ? <div>is empty</div>
              : <div >
                <CardCar carId={carId} isFavorite={true} />
              </div>
            }
          </SectionContent>
        </Wrapper>
      </GeneralContainer>
    </Section>
  );
};
 
export default FavoriteSection;