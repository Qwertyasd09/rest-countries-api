import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../HomePage';
import { CountryPage } from '../components/CountryPage';
import { MissingInfoCountry } from '../components/MissingInfoCountry';

export const createRoutes = () =>
  createBrowserRouter([
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
