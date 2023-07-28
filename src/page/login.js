import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Login = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        width: "100vw",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "675.82px",
          height: "465.7px",
          background: "rgba(0, 0, 0, 0.30)",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            textAlign: "center",
            color: "white",
            fontSize: 73.73,
            fontFamily: "Prompt",
            fontWeight: "900",
            wordWrap: "break-word",
          }}
        >
          Worden
        </Box>
        <Box>
          <Typography
            sx={{
              fontSize: "22.12px",
              fontWeight: 400,
              mb: 1,
              color: "#FFFFFF",
              display: "inline",
            }}
          >
            안전한 채팅,
          </Typography>
          <Typography
            sx={{
              fontSize: "22.12px",
              fontWeight: 700,
              mb: 1,
              color: "#FFFFFF",
              display: "inline",
            }}
          >
            AI 언어보안관
          </Typography>
          <Typography
            sx={{
              fontSize: "22.12px",
              fontWeight: 400,
              color: "#FFFFFF",
              display: "inline",
            }}
          >
            과 함께하세요!
          </Typography>
        </Box>
        <Button variant="contained" color="primary" sx={{ backgroundColor: '#FFD700' }} onClick={() => console.log('Kakao login')}>
          카카오 로그인
        </Button>
      </Box>
    </Box>
  );
};

export default Login;
