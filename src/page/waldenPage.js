import React from 'react';
import Box from '@mui/material/Box';
import walden from '../image/walden.png'

const WaldenPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        width: "500px",
        flexDirection: "column",
        height: "100vh",
        bgcolor: "#FFFFFF",
      }}
    >
      <Box
        sx={{
          display: "flex",
          height: "35.7px",
          alignItems: "center",
          justifyContent: "center",
          color: "black",
          fontSize: 18.67,
          fontFamily: "Inter",
          fontWeight: "600",
          lineHeight: 28,
          wordWrap: "break-word",
        }}
      >
        월든
      </Box>
      <Box sx={{ marginTop: "50px" }} />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "#949395",
          fontSize: 14,
          fontFamily: "Pretendard",
          fontWeight: "500",
          wordWrap: "break-word",
        }}
      >
        AI 보안관 월든 24시간 대기 중입니다
      </Box>
      {/* <Box
      sx={{
        display : 'flex',
        flexDirection : 'column',
        justifyContent : 'center',
        alignItems : 'center',
        width: '210px',
        height: '210px',
        position: 'relative',
        overflow: 'hidden', // To hide any overflow from the image
      }}
    >
      <img
        src={walden}
        alt="Image"
        style={{
          width: '100%', // Image width set to 100% of the Box
          height: '100%', // Image height set to 100% of the Box
          objectFit: 'cover', // To fill the entire Box without stretching
        }}
      />
    </Box> */}
    </Box>
  );
}

export default WaldenPage;
