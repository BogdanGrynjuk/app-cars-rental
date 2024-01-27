import { Outlet } from 'react-router-dom';
import { Suspense, useEffect } from 'react';

import { useDispatch, useSelector } from "react-redux";
import { getAllCars } from "redux/operations";
import { selectError, selectIsLoading } from 'redux/selectors';

import AppBar from 'components/AppBar';
import Loader from 'components/Loader';
import ErrorDisplay from 'components/ErrorDisplay';

import { Footer, Main } from './Layout.styled';

const Layout = () => {
  const dispath = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    const header = document.getElementById('app-bar');
    const content = document.getElementById('content');
    const headerHeight = header.offsetHeight;

    content.style.paddingTop = `${headerHeight}px`;
  }, []); 
  
  useEffect(() => { dispath(getAllCars()) }, [dispath]);
  
  return (
    <>
      <AppBar />
      <Main id="content">
        <Suspense fallback={null}>
          {isLoading && <Loader />}
          {error
            ? < ErrorDisplay messageError={error} imageError="https://cdn.rawgit.com/ahmedhosna95/upload/1731955f/sad404.svg" />
            : <Outlet />
          }
        </Suspense>
      </Main>
      <Footer>this is footer</Footer>
    </>
  );
};

export default Layout;