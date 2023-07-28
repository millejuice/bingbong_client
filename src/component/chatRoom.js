import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const MyBox = () => {
  return (
    <Box
      sx={{
        bgcolor: '#FFFFFF',
        width: '597px',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column-reverse', // Reverse the flex direction to stick TextField to the bottom
        alignItems: 'center',
      }}
    >
      <TextField
        label="메세지를 입력하세요"
        variant="outlined"
        sx={{ marginBottom: '20px', width: '300px' }}
      />
    </Box>
  );
};

export default MyBox;
