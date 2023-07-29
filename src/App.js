import './App.css';

import { Box, ThemeProvider } from '@mui/material';
import { theme } from './theme/theme';
import Router from './Router';

function App() {
  // const urlStr = window.location.href;
  // const url = new URL(urlStr);
  // const urlParams = url.searchParams;

  // const classRoomId = urlParams.get('classRoomId');
  // const roomToken = urlParams.get('roomToken');
  // const userId = urlParams.get('userId');
  // const userName = urlParams.get('userName');
  // const chatRoomId = urlParams.get('chatRoomId');

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
