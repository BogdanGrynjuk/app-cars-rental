import bgHeroMobile1 from 'images/bg-hero-mobile-1.jpg';
import bgHeroMobile2 from 'images/bg-hero-mobile-2.jpg';
import bgHeroMobile3 from 'images/bg-hero-mobile-3.jpg';

import bgHeroTablet1 from 'images/bg-hero-tablet-1.jpg';
import bgHeroTablet2 from 'images/bg-hero-tablet-2.jpg';
import bgHeroTablet3 from 'images/bg-hero-tablet-3.jpg';

import bgHeroDesktop1 from 'images/bg-hero-desktop-1.jpg';
import bgHeroDesktop2 from 'images/bg-hero-desktop-2.jpg';
import bgHeroDesktop3 from 'images/bg-hero-desktop-3.jpg';

const mobileBackgrounds = [bgHeroMobile1, bgHeroMobile2, bgHeroMobile3];
const tabletBackgrounds = [bgHeroTablet1, bgHeroTablet2, bgHeroTablet3];
const desktopBackgrounds = [bgHeroDesktop1, bgHeroDesktop2, bgHeroDesktop3];

export const getCurrentBackgrounds = width => {
  if (width < 768) {
    return mobileBackgrounds.map(image => `${image}?v=${new Date().getTime()}`);
  } else if (width >= 768 && width < 1280) {
    return tabletBackgrounds.map(image => `${image}?v=${new Date().getTime()}`);
  } else {
    return desktopBackgrounds.map(
      image => `${image}?v=${new Date().getTime()}`
    );
  }
};
