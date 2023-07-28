import React from 'react';
import {useTheme, Container, Grid, Fab} from '@mui/material';
import Sidebar from '../component/sidebar.js';
import { useParams } from 'react-router-dom';
import ChatList from '../component/chatList.js';
import Box from '@mui/material/Box';
import ChatRoom from '../component/chatRoom.js';
import WaldenPage from './waldenPage.js';
import Profile from '../component/profile.js';
import AddIcon from "@mui/icons-material/Add";

const Chat = () => {
  const theme = useTheme();
  const { id } = useParams();

  return (
      <div style={{backgroundColor:"#F6F6FE"}}>
        <Box
            sx={{
              display: 'flex',
            }}

        >
          <Sidebar />
          <ChatList />
          <ChatRoom />
          {/* <WaldenPage sx={{ width: "100%" }} /> */}
          <Profile />
          {/* <AlertDialog parentName="" /> */}
        </Box>
      </div>

  );
};

export default Chat;
