import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import walden from '../image/walden.png'
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import SettingsIcon from '@mui/icons-material/Settings';

const Sidebar = () => {
  return (
    <Box sx={{ width: 82, backgroundColor: '#f0f0f0', height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', padding: '20px' }}>
      <img src={walden} alt="Logo" style={{ width: '52px', height: '52px', marginBottom: '20px' }} />
      <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
      <PeopleOutlineIcon />
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
      <ChatBubbleOutlineIcon />
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
      <SettingsIcon />
      </Box>
    </Box>
  );
};

export default Sidebar;
