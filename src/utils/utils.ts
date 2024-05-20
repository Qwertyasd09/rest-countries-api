import { Country, FilterQueryFunc, FilterRegionFunc } from '../types';

export function numberWithCommas(x: number) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export const fecthDataCountries = async (
  setCountries: React.Dispatch<React.SetStateAction<Country[]>>
) => {
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

export const filterByRegion = ({
  filteredCountries,
  region
}: FilterRegionFunc) => {
  return filteredCountries?.filter((country) => country.region == region);
};

export const filterByQuery = ({
  filteredCountries,
  query
}: FilterQueryFunc) => {
  return filteredCountries?.filter((country) =>
    country.name.common.toLowerCase().includes(query.toLowerCase()!)
  );
};

export const getCountryCodes = (countries: Country[] | null) => {
  return Object.fromEntries(
    countries!.map((country) => [country.cca3, country.name.common])
  );
};

export const formatCountryData = (country: Country) => {
  return {
    img: {
      src: country.flags.png,
      alt: country.flags.alt
    },
    nativeName: Object.values(country.name.nativeName)[0].official,
    population: numberWithCommas(country.population),
    region: country.region,
    subregion: country.subregion,
    capital: country.capital,
    tld: country.tld,
    currencies: Object.values(country.currencies)[0].name,
    languages: Object.values(country.languages).sort().join(', ')
  };
};
