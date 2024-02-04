import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { getCurrentBackgrounds } from "helpers/getCurrentBackgroundsForHeroSection";
import { advertisementPhrases } from "constants/advertisementPhrases";
import GeneralContainer from "components/GeneralContainer";
import Logotype from "components/Logo/Logo";
import { Section, Content, Slogan, AnimatedText, DecorLine, Btn, Positioner } from "./HeroSection.styled";

const HeroSection = () => {  
  const [currentAdvertisementPhraseIndex, setCurrentAdvertisementPhraseIndex] =useState(0);
  
  const navigate = useNavigate();
  const handleClick = () => navigate('/catalog');

  const currentAdvertisementPhrase = advertisementPhrases[currentAdvertisementPhraseIndex]

  useEffect(() => {
    const textInterval = setInterval(() => {
      setCurrentAdvertisementPhraseIndex(prevIndex => (prevIndex + 1) % advertisementPhrases.length);
    }, 5000);

    return () => {
      clearInterval(textInterval);
    };
  }, []);  

  return (
    <Section bgImages={getCurrentBackgrounds()}>
      <GeneralContainer>
        <Content>
          <Slogan><Logotype isLight={true} />. Where comfort meets service</Slogan>
          <Positioner>
            <DecorLine />            
            <AnimatedText>{currentAdvertisementPhrase}</AnimatedText>
            <Btn type="button" onClick={handleClick}>Choose auto</Btn>
          </Positioner>
        </Content>
      </GeneralContainer>
    </Section>
  );
};

export default HeroSection;