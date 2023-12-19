import { ThemeProvider, CssBaseline } from '@mui/material';
// import { theme } from '../utils/theme'; // Import your theme object

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;