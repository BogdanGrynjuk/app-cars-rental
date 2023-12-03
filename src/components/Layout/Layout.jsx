import { Outlet } from 'react-router-dom';
import { Suspense, useEffect } from 'react';

import AppBar from 'components/AppBar';
import { Main } from './Layout.styled';

const Layout = () => {
  useEffect(() => {
    const header = document.getElementById('app-bar');
    const content = document.getElementById('content');
    const headerHeight = header.offsetHeight;

    content.style.paddingTop = headerHeight + 'px';
  }, []); 
  
  return (
    <>
      <AppBar />
      <Main id="content">
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </Main>
      <footer>this is foter</footer>
    </>
  );
};

export default Layout;