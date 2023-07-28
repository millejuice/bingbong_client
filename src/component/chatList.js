import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import tab from '../image/tabBar.png'
import first from '../image/1st.png';
import second from '../image/2nd.png';
import third from '../image/3rd.png';
import fourth from '../image/4th.png';
import fifth from '../image/5th.png';
import sixth from '../image/6th.png';
import copy from '../image/copy.png';


const ChatList = () => {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          bgcolor: '#FFFFFF',
          width: '326.2px',
          height: '100vh',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            width: '326.2px',
            height: '82px',
            color: 'black',
            fontSize: 26.67,
            fontFamily: 'Inter',
            fontWeight: '600',
            lineHeight: 40,
            wordWrap: 'break-word',
            paddingLeft : '22.4px',
          }}
        >
          내 채팅
        </Box>
        <Box sx={{
          display : 'flex',
          justifyContent : 'center',
          alignItems : 'center',
          width : '326px',
          height : '67px',
        }}>
        <img src={tab} />
        </Box>
        <Box sx={{
          width : '295px',
          height : '67px',
        }}>
          <img src={first} />
        </Box>
        <Box sx={{
          width : '295px',
          height : '67px',
          paddingTop : '11px',
        }}>
          <img src={second} />
        </Box>
        <Box sx={{
          width : '295px',
          height : '67px',
          paddingTop : '11px',
        }}>
          <img src={third} />
        </Box>
        <Box sx={{
          width : '295px',
          height : '67px',
          paddingTop : '11px',
        }}>
          <img src={fourth} />
        </Box>
        <Box sx={{
          width : '295px',
          height : '67px',
          paddingTop : '11px',
        }}>
          <img src={fifth} />
        </Box>
        <Box sx={{
          width : '295px',
          height : '67px',
          paddingTop : '11px',
        }}>
          <img src={sixth} />
        </Box>
        <Box sx={{
          display : 'flex',
          flexDirection : 'row',
          alignItems : 'center',
          justifyContent : 'center',
          width : '296px',
          height : '47px',
          position: 'absolute', 
          bottom: '23px',
          bgcolor : 'rgba(97, 94, 240, 0.06)',
          color: 'black',
          borderRadius : '11.2px',
          fontSize: '16.80px',
          fontFamily: 'Pretendard',
          fontWeight: '600',
          wordWrap: 'break-word',
        }}>
          내 학급 코드 복사
          <img src={copy} />
        </Box>
      </Box>
    
  );
};

export default ChatList;
