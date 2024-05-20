import { useEffect, useState } from 'react';
import '../App.css';
import { Country } from '../types';
import { CountryCard, OuterWrapper, Navbar, Search } from '../components';
import { fecthDataCountries } from '../utils';

export const HomePage = () => {
  const [countries, setCountries] = useState<Country[]>([] as Country[]);

  useEffect(() => {
    fecthDataCountries(setCountries);
  }, []);

  return (
    <OuterWrapper>
      <Navbar />
      <Search />
      <CountryCard countries={countries} />
    </OuterWrapper>
  );
};
