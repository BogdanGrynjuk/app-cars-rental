import GeneralContainer from "components/GeneralContainer";
import { useEffect, useState } from "react";
import Logotype from "components/Logo/Logo";
import { Section, Content, TextMain, TextSecondary, DecorLine, Btn } from "./HeroSection.styled";
import { useNavigate } from "react-router-dom";

import bgHeroMobile1 from "images/bg-hero-mobile-1.jpg";
import bgHeroMobile2 from "images/bg-hero-mobile-2.jpg";
import bgHeroMobile3 from "images/bg-hero-mobile-3.jpg";

import bgHeroTablet1 from "images/bg-hero-tablet-1.jpg";
import bgHeroTablet2 from "images/bg-hero-tablet-2.jpg";
import bgHeroTablet3 from "images/bg-hero-tablet-3.jpg";

const mobileBackgrounds = [bgHeroMobile1, bgHeroMobile2, bgHeroMobile3];
const tabletBackgrounds = [bgHeroTablet1, bgHeroTablet2, bgHeroTablet3]; 
const desktopBackgrounds = [];

const getCurrentBackgrounds = () => {
    const width = window.innerWidth;
    if (width < 768) {
      return mobileBackgrounds;
    } else if (width >= 768 && width < 1280) {
      return tabletBackgrounds;
    } else {
      return desktopBackgrounds;
    }
  };

const HeroSection = () => {
  const [currentBackgroundIndex, setCurrentBackgroundIndex] = useState(0);
  const currentBackgrounds = getCurrentBackgrounds();

  const navigate = useNavigate();
  const handleClick = () => navigate('/catalog');

  useEffect(() => {    
    const interval = setInterval(() => {
      setCurrentBackgroundIndex(prevIndex => (prevIndex + 1) % currentBackgrounds.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentBackgrounds.length]);  

  return (
    <Section bgImage={currentBackgrounds[currentBackgroundIndex]}>
      <GeneralContainer>
        <Content>
          <TextMain><Logotype /> - is for those who value service and comfort</TextMain>
          <DecorLine/>
          <TextSecondary>Car rental in Ukraine</TextSecondary>
          <Btn type="button" onClick={handleClick}>Choose auto</Btn>
        </Content>
      </GeneralContainer>
    </Section>
  );
};

export default HeroSection;

// todo: додати фонові зображення для десктоп пристроїв, поправити стилі