import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useTheme, useGlobalContext } from '../context';

export const Input = () => {
  const { theme } = useTheme();
  const { queryData } = useGlobalContext();
  const { setQuery, query } = queryData;
  return (
    <div className="flex items-center gap-4 rounded-md bg-elements p-5 text-sm shadow-lg">
      <FontAwesomeIcon
        icon={faMagnifyingGlass}
        color={theme === 'dark' ? 'white' : 'dark'}
      />
      <input
        value={query == null ? '' : query}
        onChange={(event) => setQuery(event.target.value)}
        className="w-[350px] bg-elements text-color-project"
        placeholder="Search for a country..."
      />
    </div>
  );
};
