import { useGlobalContext } from '../context';

export const Filter = () => {
  const { regionData } = useGlobalContext();
  const { setRegion, region } = regionData;
  return (
    <select
      defaultValue={region != null ? region : 'DEFAULT'}
      onChange={(event) => setRegion(event.target.value)}
      className="rounded-md border-r-8 border-r-transparent bg-elements pl-4 pr-16 text-sm font-semibold text-color-project shadow-md md:w-3/5 md:py-4 md:pr-12"
      name="select"
    >
      <option value="DEFAULT" disabled style={{ display: 'none' }}>
        Filter by region
      </option>
      <option value="All">All</option>
      <option value="Africa">Africa</option>
      <option value="Americas">Americas</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </select>
  );
};
