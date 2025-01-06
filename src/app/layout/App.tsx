import { Container, CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./Header";
import { useState } from "react";
import ShippingDetails from "./models/ShippingDetailspage/ShippingDetails";
import CartPage from "./models/CartPage/CartPage";
import PaymentDetails from "./models/PaymentDetails/PaymentDetails";
import NotFoundPage from "./models/notFoundPage";
function App() {
  const [darkMode, setDarkMode] = useState(false);
  const paletteType = darkMode ? 'dark' : 'light';

  const router = createBrowserRouter([
    {
      path: "/",
      element: <ShippingDetails />,
      errorElement: <NotFoundPage />
    },
    {
      path: '/cart',
      element: <CartPage />,
      errorElement: <NotFoundPage />
    },
    {
      path: '/paymaent',
      element: <PaymentDetails />,
      errorElement: <NotFoundPage />
    }

  ]);

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
      
      <RouterProvider router={router} />
    
    </Container>
    </ThemeProvider>
  )
}

export default App