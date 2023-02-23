import { ThemeProvider } from "styled-components";
import { AboutMe } from "./components/AboutMe";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";


export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Header />
      <AboutMe />

    </ThemeProvider>
  )
}

