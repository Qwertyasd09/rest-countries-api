import { useEffect, useState } from 'react';
import './App.css';
import { Country } from './types/types';
import { CountryCard } from './components/CountryCard';
import { OuterWrapper } from './components/OuterWrapper';
import { Navbar } from './components/Navbar';
import { Search } from './components/Search';
import { fecthDataCountries } from './utils/utils';

function HomePage() {
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
}

export default HomePage;
