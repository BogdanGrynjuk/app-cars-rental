import React, { useEffect } from 'react'
import { Wrapper } from './AppFooter.styled';
import GeneralContainer from 'components/GeneralContainer';
import Logotype from 'components/Logo/Logo';

const AppFooter = () => {

  const scrollFooter = (scrollY, heightFooter) => {
    const footer = document.getElementById('app-footer');
    if (scrollY >= heightFooter) {
      footer.style.bottom = '0px';
    } else {
      footer.style.bottom = `-${heightFooter}px`;
    }
  };

  useEffect(() => {
    const footer = document.getElementById('app-footer');
    const content = document.getElementById('app-content');
    const footerHeight = footer.offsetHeight;

    const minContentHeight = window.innerHeight + footerHeight + 1;

    if (minContentHeight > content.offsetHeight) {
      content.style.minHeight = `${minContentHeight}px`;
    }

    content.style.marginBottom = `${footerHeight}px`;

    scrollFooter(window.scrollY, footerHeight);

    window.addEventListener('scroll', () => {
      const scroll = window.scrollY;
      scrollFooter(scroll, footerHeight);
    });

    return () => {
      window.removeEventListener('scroll', () => {});
    };
  }, []);

  return (
    <Wrapper id="app-footer">
      <GeneralContainer>
        <Logotype isLight/>
      </GeneralContainer>      
    </Wrapper>
  )
}

export default AppFooter;
