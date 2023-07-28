import './App.css';

import { Box, ThemeProvider } from '@mui/material';
import { theme } from './theme/theme';
import Router from './Router';
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box>
        {/* <Login /> */}
        {/* <Chat /> */}
        <Router />
      </Box>
    </ThemeProvider>
  );
}

export default App;
