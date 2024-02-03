import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import GeneralContainer from "components/GeneralContainer";
import Logotype from "components/Logo/Logo";
import { Section, Content, Slogan, AnimateText, DecorLine, Btn, Positioner } from "./HeroSection.styled";

import bgHeroMobile1 from "images/bg-hero-mobile-1.jpg";
import bgHeroMobile2 from "images/bg-hero-mobile-2.jpg";
import bgHeroMobile3 from "images/bg-hero-mobile-3.jpg";

import bgHeroTablet1 from "images/bg-hero-tablet-1.jpg";
import bgHeroTablet2 from "images/bg-hero-tablet-2.jpg";
import bgHeroTablet3 from "images/bg-hero-tablet-3.jpg";

import bgHeroDesktop1 from "images/bg-hero-desktop-1.jpg";
import bgHeroDesktop2 from "images/bg-hero-desktop-2.jpg";
import bgHeroDesktop3 from "images/bg-hero-desktop-3.jpg";

const mobileBackgrounds = [bgHeroMobile1, bgHeroMobile2, bgHeroMobile3 ];
const tabletBackgrounds = [bgHeroTablet1, bgHeroTablet2, bgHeroTablet3]; 
const desktopBackgrounds = [bgHeroDesktop1, bgHeroDesktop2, bgHeroDesktop3];

const arrayForAnimateText = [
  "Experience the freedom of the open road",
  "Create unforgettable memories during your journey",
  "Start your adventure today and feel confident behind the wheel",
];

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

const HeroSection = ({bgImage}) => {
  const [currentBackgroundIndex, setCurrentBackgroundIndex] = useState(0);
  const [currentAnimateTextIndex, setCurrentAnimateTextIndex] =useState(0);
  const currentBackgrounds = getCurrentBackgrounds();

  const navigate = useNavigate();
  const handleClick = () => navigate('/catalog');

  useEffect(() => {    
  const backgroundInterval = setInterval(() => {
    setCurrentBackgroundIndex(prevIndex => (prevIndex + 1) % currentBackgrounds.length);
  }, 5000);

  const textInterval = setInterval(() => {
    setCurrentAnimateTextIndex(prevIndex => (prevIndex + 1) % arrayForAnimateText.length);
  }, 5000);

  return () => {
    clearInterval(backgroundInterval);
    clearInterval(textInterval);
  };
}, [currentBackgrounds.length]);  

  return (
    <Section bgImage={bgImage || currentBackgrounds[currentBackgroundIndex]}>
      <GeneralContainer>
        <Content>
          <Slogan><Logotype isLight={true} />. Where comfort meets service</Slogan>
          <Positioner>
            <DecorLine/>
            <AnimateText>{arrayForAnimateText[currentAnimateTextIndex]}</AnimateText>
            <Btn type="button" onClick={handleClick}>Choose auto</Btn>
          </Positioner>
        </Content>
      </GeneralContainer>
    </Section>
  );
};

HeroSection.propTypes = {
  bgImage: PropTypes.string,
}


export default HeroSection;