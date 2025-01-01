import { Container, CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import Header from "./Header";
import { useState } from "react";
import Catalog from "../features/catalog/Catalog";
import CartPage from "./models/CartPage/CartPage";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const paletteType = darkMode ? 'dark' : 'light';

  const theme = createTheme({
    palette:{
      mode:paletteType,
    }
  })
  return (
    <ThemeProvider theme={theme}>
    <CssBaseline/>
    <CartPage />
    </ThemeProvider>
  )
}

export default App