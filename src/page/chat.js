import React from 'react';
import { useTheme, Container, Grid } from "@mui/material";
import Sidebar from '../component/sidebar.js';
import { useParams } from "react-router-dom";
import ChatList from '../component/chatList.js';
import Box from '@mui/material/Box';
import ChatRoom from '../component/chatRoom.js';
import WaldenPage from './waldenPage.js';
import Profile from '../component/profile.js';


const Chat = () => {
    const theme = useTheme();
    const { id } = useParams();

    return (
      <Box
        sx={{
          display: "flex",
        }}
      >
        <Sidebar />
        <ChatList />
        <ChatRoom parentId={1}/>
        {/* <WaldenPage sx={{ width: "100%" }} /> */}
        <Profile />
      </Box>
    );
}

export default Chat;
