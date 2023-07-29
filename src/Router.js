import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Box } from '@mui/material';
// import Chat from './pages/chat/Chat';
// import { drawerWidth } from './constants/commons';
import Sidebar from './component/sidebar';
import Chat from './page/chat';
import { useState } from 'react';

// const urlStr = window.location.href;
// const url = new URL(urlStr);
// const urlParams = url.searchParams;

// const classRoomI = urlParams.get('classRoomId');
// const roomToke = urlParams.get('roomToken');
// const userI = urlParams.get('userId');
// const userNam = urlParams.get('userName');
// const chatRoomI = urlParams.get('chatRoomId');

function Router() {
  //   const [classRoomId, setClassRoomId] = useState(classRoomI);
  //   const [roomToken, setRoomToken] = useState(roomToke);
  //   const [userId, setUserId] = useState(userI);
  //   const [userName, setUserName] = useState(userNam);
  //   const [chatRoomId, setChatRoomId] = useState(chatRoomI);
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
            <Route
              path="/chat/:classRoomId/:roomToken/:userId/:userName/:chatRoomId"
              element={
                <Chat
                //   classRoomId={classRoomId}
                //   roomToken={roomToken}
                //   userId={userId}
                //   userName={userName}
                //   chatRoomId={chatRoomId}
                />
              }
            />
          </>
        </Routes>
        {/* </Box> */}
      </Box>
    </BrowserRouter>
  );
}

export default Router;
