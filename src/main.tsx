import React from 'react';
import { RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import { ThemeProvider, GlobalProvider } from './context';
import { createRoutes } from './routes';

const router = createRoutes();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalProvider>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </GlobalProvider>
  </React.StrictMode>
);
