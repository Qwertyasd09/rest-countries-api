import { ReactNode } from 'react';

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

export interface WrapperProps {
  children: ReactNode;
}
