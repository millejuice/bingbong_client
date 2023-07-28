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
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          bgcolor: "#FFFFFF",
          width: "326.2px",
          height: "100vh",
          alignItems: "center",
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
        내 채팅
      </Box>
        <TabContext value={value}>
          <TabList
            onChange={handleChange}
            aria-label="chat tabs"
            TabIndicatorProps={{ style: { backgroundColor: "#7027CD" } }}
            sx={{ marginTop: "20px", width: "170px" }}
          >
            <Tab
              label="진행중"
              value="1"
              TabStyleProps={{
                value: "1",
                textColor: "#FFFFFF",
                backgroundColor: "#7027CD",
              }}
            />
            <Tab
              label="요청"
              value="2"
              TabStyleProps={{
                value: "2",
                textColor: "#FFFFFF",
                backgroundColor: "#7027CD",
              }}
            />
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
