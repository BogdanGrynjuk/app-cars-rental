import React from 'react'
import { Section, SectionContent, SectionTitle } from './FavoriteSection.styled'
import GeneralContainer from 'components/GeneralContainer'
import CarsList from 'components/CarsList/CarsList';


 
const FavoriteSection = ({ cars }) => {  

  return (
    <Section>
      <GeneralContainer>
        <SectionTitle>Favorite Cars</SectionTitle>
        <SectionContent>
          <CarsList cars={cars} />
        </SectionContent>
         
      </GeneralContainer>
    </Section>
  );
};
 
export default FavoriteSection;