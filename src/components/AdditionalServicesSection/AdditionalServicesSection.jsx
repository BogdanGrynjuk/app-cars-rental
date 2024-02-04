import React from 'react';

import GeneralContainer from 'components/GeneralContainer';
import { services } from 'constants/dataServices';

import { BtnOrderService, Section, SectionContent, SectionTitle, ServiceDescription, ServiceDetails, ServiceIcon, ServiceName, ServicesItem, ServicesList } from './AdditionalServicesSection.styled';

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