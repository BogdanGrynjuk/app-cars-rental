import React, { useEffect } from 'react'
import { ContactInfo, ContactMethod, ContactMethodText, Content, IconCall, IconFb, IconIg, IconMail, IconYt, Link, MethodLabel, MethodValue, SocialLink, SocialMedia, ThumbIcon, Wrapper, WrapperSocialLinks } from './AppFooter.styled';
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

    const minContentHeight = window.innerHeight + footerHeight;

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
          
          
            <ContactInfo>
              <ContactMethod href="tel:+380730000000" title="Our Phone Number">
                <ThumbIcon className='thumb-icon'>
                  <IconCall />
                </ThumbIcon>               
                <ContactMethodText>
                  <MethodLabel>Call us:</MethodLabel>
                  <MethodValue>+380730000000</MethodValue>
                </ContactMethodText>
              </ContactMethod>
                
              <ContactMethod href="mailto:cargo@example.com" title="Our Email">
                <ThumbIcon className='thumb-icon'>
                  <IconMail />
                </ThumbIcon>
                <ContactMethodText>
                  <MethodLabel>Mail us:</MethodLabel>
                <MethodValue>cargo@example.com</MethodValue>
                </ContactMethodText>
              </ContactMethod>
            </ContactInfo>

            <SocialMedia>
              <MethodLabel>Follow us:</MethodLabel>
              <WrapperSocialLinks>
                <SocialLink href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><IconFb /></SocialLink>
                <SocialLink href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><IconIg /></SocialLink>
                <SocialLink href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer"><IconYt /></SocialLink>
              </WrapperSocialLinks>
            </SocialMedia>          
          
        </Content>
        
      </GeneralContainer>
    </Wrapper>
  );
};

export default AppFooter;
