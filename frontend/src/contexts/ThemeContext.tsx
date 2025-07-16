import { createContext, useContext, useState, type ReactNode } from "react";
import light from "../styles/themes/light";
import dark from "../styles/themes/dark";

type ThemeContextData = {
  theme: typeof light;
  toggleTheme: () => void;
}

const ThemeAppContext = createContext({} as ThemeContextData);

export const useTheme = () => useContext(ThemeAppContext);

export const ThemeProviderApp = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState(light);

  const toggleTheme = () => {
    setTheme((theme) => (theme.title === "light" ? dark : light));
  };

  return (
    <ThemeAppContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeAppContext.Provider>
  );
};