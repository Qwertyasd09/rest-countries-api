import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon as faMoonLight } from '@fortawesome/free-regular-svg-icons';
import { faMoon as faMoonDark } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '../context';

export const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="flex justify-between bg-elements px-20 py-10 text-color-project shadow-md md:px-7">
      <h1 className="text-2xl font-extrabold xsm:text-xl">
        Where in the world?
      </h1>
      <div
        onClick={toggleTheme}
        className="flex items-center gap-3 text-lg font-semibold xsm:text-base"
      >
        <FontAwesomeIcon icon={theme === 'light' ? faMoonLight : faMoonDark} />
        Dark Mode
      </div>
    </nav>
  );
};
