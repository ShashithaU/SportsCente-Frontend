import { Container, CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./Header";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const paletteType = darkMode ? 'dark' : 'light';
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    const basket = getBasketFromLocalStorage();
    dispatch(fetchCurrentUser());
    if(basket){
      agent.Basket.get()
      .then(basket=>dispatch(setBasket(basket)))
      .catch(error=>console.log(error))
      .finally(()=>setLoading(false))
    }else{
      setLoading(false);
    }
  })

  const router = createBrowserRouter([

    {
      path: "/",
      element: <Home />,
      errorElement: <NotFoundPage />
    },
    {
      path: "/userDetails",
      element: <ShippingDetails />,
      errorElement: <NotFoundPage />
    },
    {
      path: '/cart',
      element: <CartPage />,
      errorElement: <NotFoundPage />
    },
    {
      path: '/paymaent/:paymentId',
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
  if(loading)return <Spinner message="Getting Basket..."/>
  return (
    <ThemeProvider theme={theme}>
      <ToastContainer position="bottom-right" hideProgressBar theme="colored"/>
    <CssBaseline/>
    <Header darkMode={darkMode} handleThemeChange={handleThemeChange}/>
    <Container sx={{ paddingTop: "64px" }}>

    </Container>
    </ThemeProvider>
  )
}

export default App
