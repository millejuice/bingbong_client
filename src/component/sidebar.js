import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import walden from '../image/walden.png'
import homeLogo from '../image/homeLogo.png';
import firstIcon from '../image/1icon.png';
import secondIcon from '../image/2icon.png';
import thirdIcon from '../image/3icon.png';

const Sidebar = () => {
  return (
    <Box
      sx={{
        width: 82,
        backgroundColor: "#F6F6FE",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        padding: "20px",
      }}
    >
      <img
        src={homeLogo}
        alt="Logo"
        style={{ width: "52px", height: "52px", marginBottom: "20px" }}
      />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          paddingTop: "51px",
          width: "30px",
          height: "30px",
        }}
      >
        <img src={firstIcon} style={{ width: "100%", height: "auto" }} />
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          paddingTop: "28px",
          width: "30px",
          height: "30px",
        }}
      >
        <img src={secondIcon} style={{ width: "100%", height: "auto" }} />
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          paddingTop: "30px",
          width: "30px",
          height: "30px",
        }}
      >
        <img src={thirdIcon} style={{ width: "100%", height: "auto" }} />
      </Box>
    </Box>
  );
};

export default Sidebar;
