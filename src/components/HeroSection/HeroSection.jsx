import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { getCurrentBackgrounds } from "helpers/getCurrentBackgroundsForHeroSection";
import { advertisementPhrases } from "constants/advertisementPhrases";
import GeneralContainer from "components/GeneralContainer";
import Logotype from "components/Logo/Logo";
import { Section, Content, Slogan, AnimatedText, DecorLine, Btn, Positioner } from "./HeroSection.styled";

const HeroSection = () => {  
  const [currentAdvertisementPhraseIndex, setCurrentAdvertisementPhraseIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [currentBackgrounds, setCurrentBackgrounds] = useState(getCurrentBackgrounds(window.innerWidth));  
  
  const navigate = useNavigate();
  const handleClick = () => navigate('/catalog');

  const currentAdvertisementPhrase = advertisementPhrases[currentAdvertisementPhraseIndex];

  useEffect(() => {
    const handleResize = () => {      
      setWindowWidth(window.innerWidth);
    };
      
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
      
  useEffect(() => {
    setCurrentBackgrounds(getCurrentBackgrounds(windowWidth));
  }, [windowWidth]);

  useEffect(() => {
    const textInterval = setInterval(() => {
      setCurrentAdvertisementPhraseIndex(prevIndex => (prevIndex + 1) % advertisementPhrases.length);
    }, 5000);

    return () => {
      clearInterval(textInterval);
    };
  }, []);  

  return (
    <Section bgImages={currentBackgrounds}>
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