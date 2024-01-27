import { useEffect, useRef } from 'react';
import { handleIntersection } from 'helpers/handleIntersection';

import GeneralContainer from 'components/GeneralContainer';
import banner from 'images/kia.png';
import { Section, SectionTitle, SectionContent, ThumbImg, BenefitsList, BenefitsItem, Marker } from './BenefitsSection.styled';

const BenefitsSection = () => {
 const elementsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection);
    const currentElements = elementsRef.current;

    currentElements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      currentElements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <Section>
      <GeneralContainer>
        <SectionTitle>Why clients choose us?</SectionTitle>
        <SectionContent> 
 
          <ThumbImg ref={(el) => el && elementsRef.current.push(el)} >
            <img src={banner} alt="blue auto" />
          </ThumbImg>      
      
          <BenefitsList ref={(el) => el && elementsRef.current.push(el)}>
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