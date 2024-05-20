import { createBrowserRouter } from 'react-router-dom';
import { HomePage, CountryPage } from '../pages';
import { MissingInfoCountry } from '../components';

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
