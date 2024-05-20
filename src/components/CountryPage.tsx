import { Link, useLocation } from 'react-router-dom';
import { Country } from '../types/types';
import { Navbar } from './Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '../context/ContextTheme';
import { formatCountryData } from '../utils/utils';

export const CountryPage = () => {
  const { theme } = useTheme();
  const location = useLocation();
  const country = location.state.country as Country;
  const countriesCode = location.state.countriesCode;
  const countries = location.state.countries as Country[];
  const countryData = formatCountryData(country);
  return (
    <div className="min-h-screen bg-background font-FontProject text-color-project">
      <Navbar />
      <div className="ml-auto mr-auto flex w-[90%] flex-col px-10">
        <Link
          className="my-12 mr-auto flex w-fit items-center gap-2 rounded-md bg-elements px-12 py-2 text-base font-light shadow-2xl"
          to={'/'}
        >
          <FontAwesomeIcon
            color={theme === 'light' ? 'dark' : 'white'}
            icon={faArrowLeft}
          />
          Back
        </Link>
        <div className="flex gap-20 pb-20 xl:flex-col xl:items-center xl:justify-center xl:gap-0 [&_p]:text-base [&_p]:font-light [&_p]:leading-9 [&_span]:font-semibold">
          <img
            className="h-full w-[650px] xl:w-full"
            src={countryData.img.src}
            alt={countryData.img.alt}
          ></img>
          <div className="ml-auto flex w-2/4 flex-col gap-4 xl:mr-auto xl:w-full">
            <h2 className="mb-4 mt-8 text-4xl font-extrabold xl:mt-14">
              {country.name.common}
            </h2>
            <div className="flex gap-20 lg:flex-col lg:gap-4">
              <div>
                <p>
                  <span>Native Name: </span>
                  {countryData.nativeName}
                </p>
                <p>
                  <span>Population: </span>
                  {countryData.population}
                </p>
                <p>
                  <span>Region: </span>
                  {countryData.region}
                </p>
                <p>
                  <span>Sub Region: </span>
                  {countryData.subregion}
                </p>
                <p>
                  <span>Capital: </span>
                  {countryData.capital}
                </p>
              </div>
              <div>
                <p>
                  <span>Top Level Domain: </span>
                  {countryData.tld}
                </p>
                <p>
                  <span>Currencies: </span>
                  {countryData.currencies}
                </p>
                <p>
                  <span>Languages: </span>
                  {countryData.languages}
                </p>
              </div>
            </div>
            <div className="mt-10 flex items-start gap-4 xl:mt-4 xl:flex-col">
              <p className="whitespace-nowrap">
                <span>Border Countries: </span>
              </p>
              <ul className="flex flex-wrap gap-4">
                {country.borders.length != 0 ? (
                  country.borders.map((border) => (
                    <Link
                      key={crypto.randomUUID()}
                      to={`/${countriesCode[border]}`}
                      state={{
                        country: countries.find(
                          (countryObject) =>
                            countryObject.name.common === countriesCode[border]
                        ),
                        countriesCode: countriesCode,
                        countries: countries
                      }}
                    >
                      <li className="rounded-md bg-elements px-8 py-1 text-sm shadow-xl">
                        {countriesCode[border]}
                      </li>
                    </Link>
                  ))
                ) : (
                  <li className="rounded-md bg-elements px-8 py-1 text-sm shadow-xl">
                    None
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
