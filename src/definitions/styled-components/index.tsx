export * from './common';
export * from './dark';
export * from './light';

import React from 'react';
import { ThemeProvider } from 'styled-components';

import { dark } from './dark';
import { light } from './light';

type ThemeContextType = {
  theme: string;
  toggle: () => void;
};

const ThemeContext = React.createContext<ThemeContextType>({
  theme: 'light',
  toggle: () => [],
});

const useTheme = () => {
  const { theme, toggle } = React.useContext(ThemeContext);
  return { theme: theme === 'light' ? light : dark, toggle, themeName: theme };
};

const StyledThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = React.useState('light');

  const toggle = React.useCallback(() => {
    setTheme((theme) => (theme === 'light' ? 'dark' : 'light'));
  }, []);

  const values = React.useMemo(
    () => ({
      theme,
      toggle,
    }),
    [toggle, theme]
  );

  return (
    <ThemeContext.Provider value={values}>
      <ThemeProvider theme={theme === 'light' ? light : dark}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export { ThemeContext, useTheme, StyledThemeProvider };
