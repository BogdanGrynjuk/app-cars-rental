// import { IoMdCheckmarkCircleOutline as Marker } from "react-icons/io";

import GeneralContainer from 'components/GeneralContainer';
import banner from 'images/kia.png';
import { Section, SectionTitle, SectionContent, ThumbImg, BenefitsList, BenefitsItem, Marker } from './BenefitsSection.styled';

const BenefitsSection = () => {
  return (
    <Section>
      <GeneralContainer>
        <SectionTitle>Why clients choose us?</SectionTitle>
        <SectionContent>
          <ThumbImg>
            <img src={banner} alt="blue auto" />
          </ThumbImg>
      
      
          <BenefitsList>
            <BenefitsItem><Marker />24/7 support</BenefitsItem>
            <BenefitsItem><Marker />Full package of documents and insurance</BenefitsItem>
            <BenefitsItem><Marker />Cars are clean and fully refueled</BenefitsItem>
            <BenefitsItem><Marker />Unlimited vehicle mileage allowed</BenefitsItem>
            <BenefitsItem><Marker />Registrar and navigator</BenefitsItem>
          </BenefitsList>
        </SectionContent>

      </GeneralContainer>
      
        
      
    </Section>
  );
};

export default BenefitsSection;