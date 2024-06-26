import { createContext, useContext, useState, useLayoutEffect } from 'react';
import { ThemeContextType, ThemeStateType, WrapperProps } from '../types';

const ThemeContext = createContext<ThemeContextType>({} as ThemeContextType);

const ThemeProvider = ({ children }: WrapperProps) => {
  const [theme, setTheme] = useState<ThemeStateType>('light');
  const toggleTheme = () =>
    setTheme((theme) => (theme === 'light' ? 'dark' : 'light'));
  useLayoutEffect(() => {
    if (theme === 'light') {
      document.documentElement.classList.remove('dark-mode');
      document.documentElement.classList.add('light-mode');
    } else {
      document.documentElement.classList.remove('light-mode');
      document.documentElement.classList.add('dark-mode');
    }
  }, [theme]);
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export { ThemeProvider, useTheme };
