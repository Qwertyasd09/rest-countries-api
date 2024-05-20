import { useGlobalContext } from '../context';
import { Country } from '../types';
import {
  filterByQuery,
  filterByRegion,
  getCountryCodes,
  numberWithCommas
} from '../utils';
import { Link } from 'react-router-dom';

interface CountryCardProps {
  countries: Country[] | null;
}

export const CountryCard = ({ countries }: CountryCardProps) => {
  const { regionData, queryData } = useGlobalContext();
  const { region } = regionData;
  const { query } = queryData;
  let filteredCountries: Country[] | null | undefined = countries;
  filteredCountries =
    region !== 'All' && region !== null
      ? filterByRegion({ filteredCountries, region })
      : filteredCountries;
  filteredCountries =
    query != null
      ? filterByQuery({ filteredCountries, query })
      : filteredCountries;
  const countriesCode = getCountryCodes(countries);
  return (
    <ul className="mx-4 grid grid-cols-autoColumn justify-center gap-x-12 gap-y-16 px-8">
      {filteredCountries?.map((country) => (
        <Link
          key={crypto.randomUUID()}
          to={`/${country.name.common}`}
          state={{
            country: country,
            countriesCode: countriesCode,
            countries: countries
          }}
        >
          <li
            key={crypto.randomUUID()}
            className="ml-auto mr-auto w-80 rounded-lg bg-elements pb-2 text-color-project shadow-md duration-300 ease-in hover:scale-110 md:w-full"
          >
            <img
              className="h-40 w-full rounded-tl-lg rounded-tr-lg lg:h-52"
              src={country.flags.png}
              alt={country.flags.alt}
            ></img>
            <div className="mb-5 flex flex-col gap-1 px-5 py-4 [&>p]:text-sm [&>p]:font-light [&_span]:font-semibold">
              <h1 className="mb-2 text-lg font-bold">{country.name.common}</h1>
              <p>
                <span>Population:</span> {numberWithCommas(country.population)}
              </p>
              <p>
                <span>Region:</span> {country.region}
              </p>
              <p>
                <span>Capital:</span> {country.capital}
              </p>
            </div>
          </li>
        </Link>
      ))}
    </ul>
  );
};
