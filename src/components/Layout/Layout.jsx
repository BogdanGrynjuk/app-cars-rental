import { Outlet } from 'react-router-dom';
import { Suspense, useEffect, useState } from 'react';

import { useDispatch, useSelector } from "react-redux";
import { getAllCars } from "redux/operations";
import { selectError, selectIsLoading } from 'redux/selectors';

import AppBar from 'components/AppBar';
import Loader from 'components/Loader';
import ErrorDisplay from 'components/ErrorDisplay';

import { ButtonToTop, IconArrowUp, Main } from './Layout.styled';
import AppFooter from 'components/AppFooter';
import { scrollToTop } from 'helpers/scrollToTop';

const Layout = () => {
  const dispath = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const [showBtnToTop, setShowBtnToTop] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowBtnToTop(true);
    } else {
      setShowBtnToTop(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    const header = document.getElementById('app-bar');
    const content = document.getElementById('app-content');
    const headerHeight = header.offsetHeight;

    content.style.paddingTop = `${headerHeight}px`;
  }, []); 
  
  useEffect(() => { dispath(getAllCars()) }, [dispath]);
  
  return (
    <>
      {isLoading && <Loader />}
      <AppBar />
      <Main id="app-content">
        <Suspense fallback={null}>
          
          {error
            ? < ErrorDisplay messageError={error} imageError="https://cdn.rawgit.com/ahmedhosna95/upload/1731955f/sad404.svg" />
            : <Outlet />
          }
        </Suspense>
        <ButtonToTop showBtnToTop={showBtnToTop} type="button" onClick={scrollToTop}><IconArrowUp/></ButtonToTop>
      </Main>
      <AppFooter/>
    </>
  );
};

export default Layout;