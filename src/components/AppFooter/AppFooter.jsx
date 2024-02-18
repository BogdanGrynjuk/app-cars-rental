import React, { useEffect } from 'react'
import { ContactInfo, ContactMethod, ContactMethodText, ContactSection, Content, IconCall, IconMail, Link, ThumbIcon, Wrapper } from './AppFooter.styled';
import GeneralContainer from 'components/GeneralContainer';
import Logo from 'components/Logo/Logo';

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
      window.removeEventListener('scroll', () => { });
    };
  }, []);

  return (
    <Wrapper id="app-footer">
      <GeneralContainer>
        <Content>
          <Link to="/"><Logo isLight /></Link>
          
        
          <ContactSection>
            <ContactInfo>
              <ContactMethod href="tel:+380730000000" title="Our Phone Number">
                <ThumbIcon className='thumb-icon'>
                  <IconCall />
                </ThumbIcon>
                  
                
                <ContactMethodText>
                  <span>Call us:</span>
                  <span>+380730000000</span>
                </ContactMethodText>
              </ContactMethod>
                
              <ContactMethod href="mailto:cargo@example.com" title="Our Email">
                <ThumbIcon className='thumb-icon'>
                  <IconMail size={30}/>
                </ThumbIcon>
                <ContactMethodText>
                  <span>Mail us:</span>
                <span>cargo@example.com</span>
                </ContactMethodText>
              </ContactMethod>
            </ContactInfo>

            <div class="social-media">
              <span>Follow us:</span>
              <div class="social-links">
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">Facebook</a>
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">Instagram</a>
                <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">Youtube</a>
              </div>
            </div>          
          </ContactSection>
        </Content>
        
      </GeneralContainer>
    </Wrapper>
  );
};

export default AppFooter;
