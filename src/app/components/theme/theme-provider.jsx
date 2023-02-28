import React, {createContext, useState, useEffect, useMemo} from 'react';

export const ThemeContext = createContext('light');

export const themes = {
  dark: 'dark',
  light: 'light',
}

const getTheme = () => {
  const theme = `${window?.localStorage?.getItem('theme')}`
  const userTheme = window.matchMedia('(prefers-color-scheme: light)');

  if(Object.values(themes).includes(theme)) {
    return theme
  }

  if(userTheme.matches) {
    return themes.light
  }

  return themes.dark;
};

export const ThemeProvider = ({children}) => {
  const [theme, setTheme] = useState(getTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('theme', theme)
  }, [theme]);

  const value = useMemo(() => ({
    theme,
    setTheme
  }
  ), [theme, setTheme])

  return (
    <ThemeContext.Provider value={value} >
      {children};
    </ThemeContext.Provider>
  )
}

