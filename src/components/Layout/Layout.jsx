import { Outlet } from 'react-router-dom';
import { Suspense, useEffect } from 'react';

import { useDispatch, useSelector } from "react-redux";
import { getAllCars } from "redux/operations";
import { selectError, selectIsLoading } from 'redux/selectors';

import AppBar from 'components/AppBar';
import Loader from 'components/Loader';
import ErrorDisplay from 'components/ErrorDisplay';

import { Main } from './Layout.styled';
import AppFooter from 'components/AppFooter';

const Layout = () => {
  const dispath = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  
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
      </Main>
      <AppFooter/>
    </>
  );
};

export default Layout;