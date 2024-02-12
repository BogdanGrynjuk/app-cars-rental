import React, { useCallback, useEffect, useState } from 'react';
import { ActiveBreakpoint, Breakpoint, BtnStepChange, ButtonsWrapper, IconArrowDown, IconArrowUp, Section, SectionContent, SectionTitle, Slide, SlideContent, SlideProgressBar } from './RentalProcessSection.styled'
import GeneralContainer from 'components/GeneralContainer';
import { rentalSteps } from 'constants/dataRentalSteps';
import RentalStep from 'components/RentalStep';

const RentalProcessSection = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const breakpoints = Array.from({ length: 4 }, (_, index) => <Breakpoint key={index} />);
  const rentalStepsList = rentalSteps;
  

  const handleChangeActiveBreakpoint = (rentalStep) => {
    const activeBreakpoint = document.querySelector('.active-breakpoint');
  
    const stepPositions = {
      'step-1': '-12px',
      'step-2': 'calc((100% / 3) - 12px)',
      'step-3': 'calc((100% / 3) * 2 - 12px)',
      'step-4': 'calc((100% / 3) * 3 - 12px)',
    };

    const position = stepPositions[rentalStep.getAttribute('id')];

    if (position) {
      activeBreakpoint.style.top = position;
    };
  };

  const handlePrevStep = () => {
    const step = activeStep - 1 < 0 ? rentalStepsList.length - 1 : activeStep - 1;
    const rentalInstruction = document.getElementById(`step-${step + 1}`);
    setActiveStep(step);
    handleChangeActiveBreakpoint(rentalInstruction);
  };

  const handleNextStep = useCallback(() => {
    const step = activeStep + 1 < rentalStepsList.length ? activeStep + 1 : 0;
    const rentalInstruction = document.getElementById(`step-${step + 1}`)
    setActiveStep(step);
    handleChangeActiveBreakpoint(rentalInstruction);
  }, [activeStep, rentalStepsList.length]);

  const handlePause = () => {
    setAutoplay(false);
  };

  const handleResume = () => {
    setAutoplay(true);
  };

  useEffect(() => {
    const timerId = setInterval(() => {
      if (autoplay) {
        handleNextStep();
      }
    }, 5000);

    return () => {
      clearInterval(timerId);
    };
  }, [autoplay, handleNextStep]);

  return (
    <Section>
      <GeneralContainer>
        <SectionTitle>Instructions for renting a car</SectionTitle>
        <SectionContent>
          
          <Slide onMouseEnter={handlePause} onMouseLeave={handleResume}>          

            <ButtonsWrapper>
              <BtnStepChange type="button" onClick={handlePrevStep}><IconArrowUp /></BtnStepChange>
              <BtnStepChange type="button" onClick={handleNextStep}><IconArrowDown /></BtnStepChange>
            </ButtonsWrapper>

            <SlideContent>
              {rentalStepsList.map(({ icon, title, description }, index) => (
                  <RentalStep
                    key={index}
                    isActive={index === activeStep}                  
                    id={`step-${index + 1}`}
                    icon={icon}
                    title={title}
                    description={description}
                    step={`Step ${index + 1}`}
                  />
                )
              )}
            </SlideContent>

            <SlideProgressBar>
              {breakpoints}
              <ActiveBreakpoint className='active-breakpoint'>{activeStep + 1}</ActiveBreakpoint>
            </SlideProgressBar>

          </Slide>
        </SectionContent>
      </GeneralContainer>      
    </Section>
  );
};

export default RentalProcessSection;
