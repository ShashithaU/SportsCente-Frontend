import { Container, CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import Header from "./Header";
import { useState } from "react";
import Catalog from "../features/catalog/Catalog";
import ShippingDetailsPage from "./models/ShippingDetailspage/ShippingDetails"
import Cart from "./models/Cart/Cart";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const paletteType = darkMode ? 'dark' : 'light';

  const theme = createTheme({
    palette:{
      mode:paletteType,
    }
  })
  function handleThemeChange(){
    setDarkMode(!darkMode);
  }
  return (
    <ThemeProvider theme={theme}>
    <CssBaseline/>
    <Header darkMode={darkMode} handleThemeChange={handleThemeChange}/>
    <Container sx={{ paddingTop: "64px" }}>
    <Catalog/>
    </Container>
    <ShippingDetailsPage />
    </ThemeProvider>
  )
}

export default App