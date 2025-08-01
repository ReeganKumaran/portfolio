import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext(null);

const themes = {
  dark: {
    text: "#e1e1e1",
    bgColor: "#161616ff",
    bgTech: "#303030ff"
  },
};

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(themes.dark);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);

export default ThemeProvider;
