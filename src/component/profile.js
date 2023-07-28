import React from 'react';
import Box from '@mui/material/Box';
import parent from '../image/moon.png'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const Profile = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center", // Center items horizontally
        alignItems: "center",
        width: "500px",
        height: "100vh",
         bgcolor: "#FFFFFF",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "32px",
          color: "black",
          fontSize: 26.67,
          fontFamily: "Inter",
          fontWeight: "600",
          lineHeight: 40,
          wordWrap: "break-word",
          paddingTop: "32px",
        }}
      >
        프로필
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyItems: "center",
          alignItems: "center",
          width: "435px",
          height: "848px",
          paddingTop : '22px',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection : 'row',
            width : '435px',
            height: '80px',
            // bgcolor: 'black',
            justifyContent: 'flex-start', // Center items horizontally
            alignItems: 'center', // Center items vertically
            paddingLeft : '26px',
            fontSize: 30,
            fontFamily: 'Pretendard',
            fontWeight: '600',
            wordWrap: 'break-word',
          }}
        >
          <img
            src={parent} // Replace with the actual image source
            alt="Image"
            width="65"
            height="65"
            style={{ marginRight: '16px' }} 
          />
          문현숙
          <AddCircleOutlineIcon sx={{
            width : '50px',
            height : '50px',
            paddingLeft : '200px',
          }}/>
        </Box>
        </Box>
      
    </Box>
  );
};

export default Profile;
