import React from 'react';
import ReactDOM from 'react-dom/client';
import HomePage from './HomePage.tsx';
import './index.css';
import { ThemeProvider } from './hooks/contextTheme.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { CountryPage } from './components/CountryPage.tsx';
import { MissingInfoCountry } from './components/MissingInfoCountry.tsx';
import { GlobalProvider } from './hooks/useContextState.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/:countriesId',
    element: <CountryPage />,
    errorElement: <MissingInfoCountry />
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalProvider>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </GlobalProvider>
  </React.StrictMode>
);
