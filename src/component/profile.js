import React from 'react';
import Box from '@mui/material/Box';

const Profile = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "500px",
        height: "100vh",
        bgcolor: "#FFFFFF",
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '32px',
          color: 'black',
          fontSize: 26.67,
          fontFamily: 'Inter',
          fontWeight: '600',
          lineHeight: 40,
          wordWrap: 'break-word',
          paddingTop : '32px'
        }}
      >
        프로필
      </Box>

      <Box sx={{
        display : 'flex',
        flexDirection : 'column',
      }}>

      </Box>
    </Box>
  );
};

export default Profile;
