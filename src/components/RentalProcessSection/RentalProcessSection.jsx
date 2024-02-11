import React from 'react';
import { ActiveBreakpoint, Breakpoint, Section, SectionContent, SectionTitle, Slide, SlideProgressBar } from './RentalProcessSection.styled'
import GeneralContainer from 'components/GeneralContainer';

const RentalProcessSection = () => {
  const breakpoints = Array.from({ length: 4 }, (_, index) => <Breakpoint key={index} />);

  return (
    <Section>
      <GeneralContainer>
        <SectionTitle>Instructions for renting a car</SectionTitle>
        <SectionContent>
          
          
          <Slide>
            <SlideProgressBar>
              {breakpoints}
              <ActiveBreakpoint />
            </SlideProgressBar>

            <div>

              <div>
                <h3>Booking</h3>
                <p>At CarGo you have various options for renting a car. Online you can you reach our competent service center. Of course you can also contact our stations directly.</p>
                <h4>step#1</h4>
              
              </div>

              <div>
                <h3>Pickup</h3>
                <p>If you have booked a car, you will arrive at the rental station on the agreed date with the necessary documents (ID card, driving licence, credit card). At the station the vehicle handover is already recorded and you can start!</p>
                <h4>step#2</h4>
              
              </div>

              <div>
                <h3>During the ride</h3>
                <p>Of course we wish you a safe ride. But if there are any problems during the trip, we are there for you. In this case, please contact the appropriate rental station or our service hotline: +38 073 000 00 00</p>
                <h4>step#3</h4>
              
              </div>
              
              <div>
                <h3>Return</h3>
                <p>After you have returned the vehicle, a new handover report will be created so that there are no discrepancies in the case of damage. If you wish to return the vehicle outside opening hours, simply contact our local employees. We'll find a solution!</p>
                <h4>step#4</h4>
              
              </div>
            </div>

          </Slide>

        </SectionContent>

      </GeneralContainer>
      
    </Section>
  );
};



export default RentalProcessSection;
