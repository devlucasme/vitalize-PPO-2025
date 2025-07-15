import { GlobalStyle } from "./styles/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { ThemeProviderApp, useTheme } from "./contexts/ThemeContext";
import { AppRoutes } from "./routes/AppRoutes";

function ThemeApp() {
  const { theme } = useTheme();
  
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppRoutes />
    </ThemeProvider>
  )

}

function App() {
  return (
    <ThemeProviderApp>
        <ThemeApp />
    </ThemeProviderApp>
  )
}

export default App