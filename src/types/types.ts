import { ReactNode } from 'react';

// Country Interface

export interface Country {
  name: Name;
  tld: string;
  currencies: Currencies;
  capital: string;
  region: string;
  subregion: string;
  languages: Languages;
  borders: string[];
  population: number;
  cca3: string;
  flags: Flags;
}

export interface Name {
  common: string;
  official: string;
  nativeName: { [key: string]: NativeNameValues };
}

export interface NativeNameValues {
  official: string;
  common: string;
}

export interface Languages {
  [key: string]: string;
}

export interface Currencies {
  [key: string]: CurrenciesValues;
}

export interface CurrenciesValues {
  name: string;
  symbol: string;
}

export interface Flags {
  png: string;
  svg: string;
  alt?: string;
}

// Wrapper Interface

export interface WrapperProps {
  children: ReactNode;
}

// Context Interface

// Global

export interface GlobalContextType {
  queryData: QueryData;
  regionData: RegionData;
}

export interface QueryData {
  query: string | null;
  setQuery: React.Dispatch<React.SetStateAction<string | null>>;
}

export interface RegionData {
  region: string | null;
  setRegion: React.Dispatch<React.SetStateAction<string | null>>;
}

// Theme

export type ThemeStateType = 'light' | 'dark';

export interface ThemeContextType {
  theme: ThemeStateType;
  toggleTheme: () => void;
}

// Utils interfaces

export interface FilterRegionFunc {
  filteredCountries: Country[] | null;
  region: string;
}

export interface FilterQueryFunc {
  filteredCountries: Country[] | null | undefined;
  query: string;
}
