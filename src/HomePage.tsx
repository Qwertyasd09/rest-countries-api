import { useEffect, useState } from 'react';
import './App.css';
import { Country } from './types/types';
import { CountryCard } from './components/CountryCard';
import { OuterWrapper } from './components/OuterWrapper';
import { Navbar } from './components/Navbar';
import { Search } from './components/Search';

function HomePage() {
  const [countries, setCountries] = useState<Country[]>([] as Country[]);
  const fecthDataCountries = async () => {
    fetch(
      'https://restcountries.com/v3.1/all?fields=name,population,region,subregion,capital,tld,currencies,languages,borders,cca3,flags'
    )
      .then((response) => response.json())
      .then((data: Country[]) => {
        setCountries(
          data.sort((a, b) => a.name.common.localeCompare(b.name.common))
        );
      })
      .catch((err) => setCountries(err));
  };

  useEffect(() => {
    fecthDataCountries();
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
