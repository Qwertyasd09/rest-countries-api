import React from 'react';
import { RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import { ThemeProvider } from './context/ContextTheme.tsx';
import { GlobalProvider } from './context/ContextGlobalState.tsx';
import { createRoutes } from './routes/routes.tsx';

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
