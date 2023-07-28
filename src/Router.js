import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Box } from '@mui/material';
// import Chat from './pages/chat/Chat';
// import { drawerWidth } from './constants/commons';
import Sidebar from './component/sidebar';
import Chat from './page/chat';

function Router() {
  return (
    <BrowserRouter>
      {/* <Sidebar /> */}
      <Box display="flex">
        {/* <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 0,
            pt: 4,
            pb: 0,
            width: `calc(100% - ${drawerWidth}px)`,
          }}
        > */}

        <Routes>
          <>
            {/* <Route path="/" element={<Navigate to="/home" />} /> */}
            <Route path="/chat" element={<Chat />} />
          </>
        </Routes>
        {/* </Box> */}
      </Box>
    </BrowserRouter>
  );
}

export default Router;
