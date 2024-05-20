import { createContext, useContext, useState } from 'react';
import { WrapperProps } from '../types/types';

interface GlobalContext {
  queryData: QueryData;
  regionData: RegionData;
}

interface QueryData {
  query: string | null;
  setQuery: React.Dispatch<React.SetStateAction<string | null>>;
}

interface RegionData {
  region: string | null;
  setRegion: React.Dispatch<React.SetStateAction<string | null>>;
}

const GlobalContext = createContext<GlobalContext>({} as GlobalContext);

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
