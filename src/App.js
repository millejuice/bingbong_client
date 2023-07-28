import './App.css';
import background from './image/background.png';
import Chat from './page/chat';
import Login from './page/login';
import { Box } from '@mui/material';
// import AlertDialog from './component/alert';

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
