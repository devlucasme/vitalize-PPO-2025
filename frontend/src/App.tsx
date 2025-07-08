import { GlobalStyle } from "./styles/GlobalStyle";
import { Header } from "./components/Header/Header";
import { ThemeProvider } from "styled-components";
import light from "./styles/themes/light";
import dark from "./styles/themes/dark";
import { useState } from "react";
import { NutritionIcons } from "./components/NutritionIcons/NutritionIcons";

function App() {
  
  const [theme, setTheme] = useState(light);

  const toggleTheme = () => {
     setTheme(theme.title == "light" ? dark : light)
  }

  return (
    <ThemeProvider theme={theme}>
      <div>
        <GlobalStyle />
        <Header toggleTheme={toggleTheme}/>
        <NutritionIcons />
      </div>
    </ThemeProvider>
  )
}

export default App