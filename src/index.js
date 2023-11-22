import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@emotion/react';
import './index.css';

import { theme } from 'constants/theme';
import { App } from 'components/App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter basename="/app-cars-rental">
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
