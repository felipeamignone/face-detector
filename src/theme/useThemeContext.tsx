import React, { createContext, useContext, ReactNode } from 'react';
import { Theme } from './types';
import theme from './theme';

const ThemeContext = createContext<Theme>(theme);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
};

export const useTheme = (): Theme => useContext(ThemeContext);