import { useEffect, useState } from 'react';

import { Header, Container, BtnMenuNavigation, IconMenu, Link } from './AppBar.styled';

import Logo from 'components/Logo';
import Navigation from 'components/Navigation';
import AppBarModal from 'components/Modals/AppBarModal';


export const AppBar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
    
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);  

  return (
    <>
      <Header id="app-bar">
        <Container>
          <Link to="/"><Logo /></Link>
                 
          {
            (viewportWidth < 768)
              ? (
                <BtnMenuNavigation type="button" onClick={openModal}>
                  <IconMenu size="18px" />
                </BtnMenuNavigation>)
              : (
                <Navigation />
              )
          }
          
        </Container>
      </Header>
      {isModalOpen && <AppBarModal onClose={closeModal} />}
    </>
  );
};

export default AppBar;