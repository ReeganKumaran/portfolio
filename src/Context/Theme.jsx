import React, { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext(null);

const themes = {
  dark: {
    text: "#e1e1e1",
    bgColorSecondary: "#111111ff",
    bgColorPrimary: "#000000ff",
    bgTech: "#303030ff"
  },
};

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(themes.dark);
  useEffect(()=>{
    console.log(theme)
  },[theme])
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);

export default ThemeProvider;
