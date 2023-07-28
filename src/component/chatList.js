import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Tab from '@mui/material/Tab';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import TabContext from '@mui/lab/TabContext';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const customTheme = createTheme({
  palette: {
    primary: {
      main: '#7027CD', // Set the primary color to #7027CD
    },
  },
});

const ChatList = () => {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={customTheme}>
      <Box sx={{ display: 'flex', flexDirection: 'column', bgcolor: '#FFFFFF', width: '326.2px', height: '100vh', alignItems: 'center' }}>
        <Typography variant="h2" sx={{ color: 'black', fontFamily: 'Pretendard', fontWeight: '600', lineHeight: 1.5, wordWrap: 'break-word', marginTop: '20px' }}>
          내 채팅
        </Typography>
        <TabContext value={value}>
          <TabList
            onChange={handleChange}
            aria-label="chat tabs"
            TabIndicatorProps={{ style: { backgroundColor: '#7027CD' } }}
            sx={{ marginTop: '20px', width: '170px' }}
          >
            <Tab label="진행중" value="1" TabStyleProps={{ value: '1', textColor: '#FFFFFF', backgroundColor: '#7027CD' }} />
            <Tab label="요청" value="2" TabStyleProps={{ value: '2', textColor: '#FFFFFF', backgroundColor: '#7027CD' }} />
          </TabList>
          <TabPanel value="1">진행중인 채팅</TabPanel>
          <TabPanel value="2">상담 요청</TabPanel>
        </TabContext>
        {/* Other content of the ChatList component */}
      </Box>
    </ThemeProvider>
  );
};

export default ChatList;
