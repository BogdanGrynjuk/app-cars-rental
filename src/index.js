import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@emotion/react';
import { BrowserRouter } from 'react-router-dom';
import './index.css';

import { theme } from 'constants/theme';
import { App } from 'components/App';
import { store, persistor } from 'redux/store';
import { PersistGate } from 'redux-persist/lib/integration/react';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter basename="/app-cars-rental">
          <PersistGate loading={null} persistor={persistor}>
            <App />
          </PersistGate>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
