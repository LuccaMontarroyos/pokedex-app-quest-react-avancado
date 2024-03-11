import { createGlobalStyle } from "styled-components"
import { ThemeProvider } from "./contexts/ThemeContext/ThemeContext"
import { AppRoutes } from "./pages/routes"
function App() {

  return (
    <ThemeProvider>
      <GlobalStyle />
      <AppRoutes />
    </ThemeProvider>
  )
}

export default App

const GlobalStyle = createGlobalStyle`
  * {
    list-style-type: none;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Anta", sans-serif;
  }

  a {
    text-decoration: none;
  }

  a:hover {

  }
`