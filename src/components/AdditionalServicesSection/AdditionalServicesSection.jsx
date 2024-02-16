import React, { useCallback, useEffect, useRef } from 'react';

import GeneralContainer from 'components/GeneralContainer';
import { services } from 'constants/dataServices';

import { BtnOrderService, Section, SectionContent, SectionTitle, ServiceDescription, ServiceDetails, ServiceIcon, ServiceName, ServicesItem, ServicesList } from './AdditionalServicesSection.styled';

const AdditionalServicesSection = () => {
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
      <GeneralContainer >
        <SectionTitle ref={el => el && elementsRef.current.push(el)}>Additional Services</SectionTitle>
        <SectionContent>
          <ServicesList>
            {services.map((service, index) => {
              return (
                <ServicesItem key={index}>
                  <BtnOrderService className='service-btn-order'>
                    <a href='tel:+380730000000'>Order</a>
                  </BtnOrderService>
                  <ServiceIcon className='service-icon'>
                    <img src={service.icon } alt={service.name} />
                  </ServiceIcon>
                  <ServiceDescription>
                    <ServiceName className='service-name'>{service.name}</ServiceName>
                    <ServiceDetails className='service-details'>{service.details}</ServiceDetails>
                  </ServiceDescription>
                </ServicesItem>
              )
            })}           
          </ServicesList>
        </SectionContent>
        </GeneralContainer>
    </Section>
  )
}

export default AdditionalServicesSection;