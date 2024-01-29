import React from 'react';

import GeneralContainer from 'components/GeneralContainer';
import { services } from 'constants/dataSerices';

import { Section, SectionContent, SectionTitle, ServicesItem, ServicesList } from './AdditionalServicesSection.styled';





const AdditionalServicesSection = () => {
  return (
    <Section>
      <GeneralContainer >
        <SectionTitle>Additional Services</SectionTitle>
        <SectionContent>
          <ServicesList>
            {services.map((service, index) => {
              return (
                <ServicesItem key={index}>
                  <span>
                    <img src={service.icon } alt={service.name} />
                  </span>
                  <div>
                    <h3>{service.name}</h3>
                  <p>{service.details}</p>
                  </div>
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