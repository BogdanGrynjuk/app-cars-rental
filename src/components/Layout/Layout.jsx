import { Outlet } from 'react-router-dom';
import { Suspense, useEffect } from 'react';

import AppBar from 'components/AppBar';
import Loader from 'components/Loader';
import { Main } from './Layout.styled';

const Layout = () => {
  useEffect(() => {
    const header = document.getElementById('app-bar');
    const content = document.getElementById('content');
    const headerHeight = header.offsetHeight;

    content.style.paddingTop = `${headerHeight}px`;
  }, []); 
  
  return (
    <>
      <AppBar />
      <Main id="content">
        <Suspense fallback={<Loader/>}>
          <Outlet />
        </Suspense>
      </Main>
      <footer>this is footer</footer>
    </>
  );
};

export default Layout;