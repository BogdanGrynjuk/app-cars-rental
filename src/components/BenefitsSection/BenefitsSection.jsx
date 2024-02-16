import { useCallback, useEffect, useRef } from 'react';

import GeneralContainer from 'components/GeneralContainer';
import banner from 'images/kia.png';
import { Section, SectionTitle, SectionContent, ThumbImg, BenefitsList, BenefitsItem, Marker } from './BenefitsSection.styled';

const BenefitsSection = () => {
  const elementsRef = useRef([]);
  
  const handleIntersection = useCallback(entries => {
    entries.forEach(entry => {
      const isIntersecting = entry.isIntersecting;

      if (isIntersecting) {
        entry.target.classList.add('show');
      } else {
        entry.target.classList.remove('show');
      }
    });
  }, []);

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
  }, [handleIntersection]);

  return (
    <Section>
      <GeneralContainer>
        <SectionTitle ref={(el) => el && elementsRef.current.push(el)}>Why clients choose us?</SectionTitle>
        <SectionContent> 
 
          <ThumbImg  ref={(el) => el && elementsRef.current.push(el)}>
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