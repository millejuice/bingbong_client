import React from 'react';
import Box from '@mui/material/Box';
import parent from '../image/moon.png'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import sherif from '../image/sherif.png';

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
          paddingTop: "22px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            width: "435px",
            height: "80px",
            // bgcolor: 'black',
            justifyContent: "flex-start", // Center items horizontally
            alignItems: "center", // Center items vertically
            paddingLeft: "26px",
            fontSize: 30,
            fontFamily: "Pretendard",
            fontWeight: "600",
            wordWrap: "break-word",
          }}
        >
          <img
            src={parent} // Replace with the actual image source
            alt="Image"
            width="65"
            height="65"
            style={{ marginRight: "16px" }}
          />
          문현숙
          <AddCircleOutlineIcon
            sx={{
              width: "50px",
              height: "50px",
              paddingLeft: "200px",
            }}
          />
        </Box>
        <img
          src={sherif}
          width="205px"
          height="234px"
          style={{ marginTop: "50px" }}
        />
        <Box
          sx={{
            fontSize: 22.4,
            fontFamily: "Pretendard",
            fontWeight: "600",
            wordWrap: "break-word",
            paddingTop: "73px",
          }}
        >
          선의의 파수꾼
        </Box>
        <Box
          sx={{
            width: "188px",
            height: "50px",
            color: "black",
            fontSize: 14,
            fontFamily: "Apple SD Gothic Neo",
            fontWeight: "400",
            lineHeight: "24.50px",
            wordWrap: "break-word",
            paddingTop: "35px",
          }}
        >
          선의의 파수꾼는 건강한 언어를
          <br />
          통해 상대를 존중하며 대화합니다.
        </Box>
      </Box>
    </Box>
  );
};

export default Profile;
