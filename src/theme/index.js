import React, { createContext, useContext, useState } from "react";

const LIGHT = {
  mode: "light",
  primary_background: "#ddd6fe",
  primary_text: "#2e1065",
  // ... (rest of the properties)
};

const DARK = {
  mode: "dark",
  primary_background: "#110F18",
  primary_text: "#ddd6fe",
  // ... (rest of the properties)
};

const ThemeContext = createContext({
  theme: DARK,
  toggleTheme: () => {},
});

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(DARK);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === LIGHT ? DARK : LIGHT));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => useContext(ThemeContext);

export { LIGHT, DARK, ThemeProvider, useTheme };
