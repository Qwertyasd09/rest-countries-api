import { createContext, useContext, useState } from 'react';
import { WrapperProps, GlobalContextType } from '../types';

const GlobalContext = createContext<GlobalContextType>({} as GlobalContextType);

const GlobalProvider = ({ children }: WrapperProps) => {
  const [query, setQuery] = useState<string | null>(null);
  const [region, setRegion] = useState<string | null>(null);
  return (
    <GlobalContext.Provider
      value={{
        queryData: { query: query, setQuery: setQuery },
        regionData: { region: region, setRegion: setRegion }
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (context === undefined) {
    throw new Error('useGlobalContext must be used within a GlobalProvider');
  }
  return context;
};

export { GlobalProvider, useGlobalContext };
