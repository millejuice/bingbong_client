import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import kakaoLogo from '../image/kakao.png'

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
            AI 언어보안관 월든
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
        <Button
          variant="contained"
          color="primary"
          sx={{
            backgroundColor: "#FFD700",
            color: "black",
            marginTop: "57px",
            width: "352px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
          startIcon={
            <img
              src={kakaoLogo}
              alt="Kakao Logo"
              style={{ width: "24px", height: "24px", marginRight: "10px" }}
            />
          }
          onClick={() => console.log("Kakao login")}
        >
          <span style={{ flexGrow: 1, textAlign: "center" }}>
            카카오 로그인
          </span>
        </Button>
      </Box>
    </Box>
  );
};

export default Login;
