import React, { useCallback, useEffect, useRef, useState } from 'react';

import GeneralContainer from 'components/GeneralContainer';
import { rentalSteps } from 'constants/dataRentalSteps';
import RentalStep from 'components/RentalStep';
import { ActiveBreakpoint, Breakpoint, BtnStepChange, ButtonsWrapper, IconArrowDown, IconArrowUp, Section, SectionContent, SectionTitle, Slide, SlideContent, SlideProgressBar } from './RentalProcessSection.styled'

const RentalProcessSection = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [autoplay, setAutoplay] = useState(false);

  const elementsRef = useRef([]);

  const breakpoints = Array.from({ length: 4 }, (_, index) => (
    <Breakpoint key={index} onClick={() => handleBreakpointClick(index)} />
  ));
  const rentalStepsList = rentalSteps;
  
  const handleBreakpointClick = (index) => {
    const rentalInstruction = document.getElementById(`step-${index + 1}`);
    handleChangeActiveBreakpoint(rentalInstruction);
    setActiveStep(index);
  };

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
  }, [activeStep, rentalStepsList]);

  const handlePause = () => {
    setAutoplay(prevAutoplay => !prevAutoplay);
  };

  const handleResume = () => {
    setAutoplay(prevAutoplay => !prevAutoplay);
  };

  const handleIntersection = useCallback((entries) => {
    entries.forEach((entry) => {
      const isIntersecting = entry.isIntersecting;
      if (isIntersecting) {
        entry.target.classList.add('show');
        setAutoplay(true);
      } else {
        entry.target.classList.remove('show');
        setAutoplay(false);
        setActiveStep(0);
        handleChangeActiveBreakpoint(document.getElementById(`step-1`));
      }
    });
  }, []);

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
        <SectionTitle ref={(el) => el && elementsRef.current.push(el)}>Instructions for renting car</SectionTitle>
        <SectionContent ref={(el) => el && elementsRef.current.push(el)}>
          
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
